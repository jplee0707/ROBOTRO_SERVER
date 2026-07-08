# npm/nvm Cleanup And Docker Run Notes

!! this is in case of  user jieun.

## Goal

This project should run as one Docker Compose stack, without requiring local `nvm`, local frontend `node_modules`, or a locally running `npm` dev server.

The developer stack is isolated from the admin/main server by Compose project name and host ports.

## Docker Project Separation

- Admin/main server:
  - Compose project: `robotro_server`
  - Path: `/home/admin/ROBOTRO_SERVER`
  - Ports: frontend `3000`, backend `8000`, db `5432`
- This developer server:
  - Compose project: `robotro_je`
  - Path: `/home/jieun/ROBOTRO_SERVER`
  - Ports: frontend `3100`, backend `8100`, db `5434`
- Other developer server:
  - Compose project: `robotro_jp`
  - Ports observed: backend `8200`, db `5433`

Because these use different Compose project names, Docker creates separate containers, networks, and volumes.

## What Was Changed In This Repo

- `.env` was changed to use:

```env
COMPOSE_PROJECT_NAME=robotro_je
POSTGRES_PORT=5434
BACKEND_PORT=8100
FRONTEND_PORT=3100
NEXT_PUBLIC_API_BASE_URL=http://localhost:8100/api
API_INTERNAL_BASE_URL=http://backend:8000/api
```

- `.env.example` was updated with the same developer-safe defaults.
- `docker-compose.yml` maps host ports to the real internal container ports:
  - `5434 -> 5432`
  - `8100 -> 8000`
  - `3100 -> 3000`
- The frontend service now uses the Docker `dev` stage and runs npm inside the container.
- Frontend source/config files are bind-mounted, while `node_modules` and `.next` live in Docker volumes.
- `frontend/.dockerignore` was added so local build junk is not copied into the image.
- `frontend/lib/api.ts` now separates:
  - Browser-facing API URL: `NEXT_PUBLIC_API_BASE_URL`
  - Container-internal API URL: `API_INTERNAL_BASE_URL`
- Node version manager files were removed from the repo:
  - `.nvmrc`
  - `.node-version`
  - `frontend/.nvmrc`
  - `frontend/.node-version`

## What Was Removed From The User Home

These user-home Node/npm files were removed:

- `/home/jieun/.nvm`
- `/home/jieun/.npm`

These nvm loader lines were removed from `/home/jieun/.bashrc`:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Project-local frontend artifacts were also removed:

- `frontend/node_modules`
- `frontend/.next`
- `frontend/.env.local`

## What Was Not Removed

System packages still existed after user-home cleanup:

- `/usr/bin/node`
- `/usr/bin/npm`

They come from apt packages:

- `nodejs`
- `npm`

Removing those requires sudo:

```bash
sudo apt-get purge -y nodejs npm
sudo apt-get autoremove --purge -y
sudo rm -rf /usr/local/lib/node_modules
hash -r
```

That apt removal may remove many Debian Node-related packages. It does not affect this Dockerized project, because the frontend container provides its own Node/npm.

## Normal Commands

Start the developer stack:

```bash
cd /home/jieun/ROBOTRO_SERVER
docker compose up -d
```

Rebuild only when Dockerfile or dependency files changed:

```bash
docker compose up -d --build
```

Check services:

```bash
docker compose ps
curl -I http://localhost:3100
curl http://localhost:8100/api/health/
```

Run frontend npm commands inside Docker:

```bash
docker compose exec frontend npm run lint
```

## Cleanup Already Done

Final expected Compose projects:

- `robotro_server`
- `robotro_je`
- `robotro_jp`

