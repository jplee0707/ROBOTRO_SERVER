# ROBOTRO Website Rebuild

Modern product-focused rebuild of `www.robotro.com` centered on JS-R7 servo motors, motor drivers, firmware, software tools, and custom robotics hardware support.

## Stack

- Frontend: Next.js App Router
- Backend: Django + Django REST Framework
- Database: PostgreSQL
- Admin: Django Admin
- Deployment: Docker Compose

## Local Development Setup

Recommended local workflow:

- Run PostgreSQL, Django, and the Next.js frontend with Docker Compose.
- Let the frontend image install npm dependencies and run `npm run dev` inside Docker.
- Keep frontend dependencies in Docker volumes instead of `frontend/node_modules`. The frontend container runs `npm ci` before starting dev mode and bind-mounts only source/config files.
- Use local host ports `3100`, `8100`, and `5434` to avoid colliding with another main server.
- Use `COMPOSE_PROJECT_NAME=robotro_je` so this developer stack stays separate from admin `robotro_server` and the other developer `robotro_jp`.

1. Copy environment variables:

```bash
cp .env.example .env
```

2. Start the full stack:

```bash
docker compose up -d --build
```

3. Run backend migrations:

```bash
docker compose exec backend python manage.py migrate
```

4. Seed initial ROBOTRO content:

```bash
docker compose exec backend python manage.py seed_initial_data
```

5. Create a Django admin user:

```bash
docker compose exec backend python manage.py createsuperuser
```

Run frontend npm commands inside the container when needed:

```bash
docker compose exec frontend npm run lint
```

Rebuild the frontend image after dependency changes:

```bash
docker compose build frontend
```

## Service URLs

- Frontend: http://localhost:3100
- Backend API: http://localhost:8100/api
- Django Admin: http://localhost:8100/admin
- Health check: http://localhost:8100/api/health/

## Backend Migration Commands

```bash
docker compose exec backend python manage.py migrate
docker compose exec backend python manage.py createsuperuser
```

## Backend API

- `GET /api/products/`
- `GET /api/products/:slug/`
- `GET /api/resources/`
- `GET /api/resources/:slug/`
- `GET /api/applications/`
- `GET /api/applications/:slug/`
- `POST /api/inquiries/`
- `GET /api/health/`

Products, resources, inquiries, and application examples are managed through Django Admin.

## Frontend Environment Setup

The frontend reads:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8100/api
API_INTERNAL_BASE_URL=http://backend:8000/api
```

`NEXT_PUBLIC_API_BASE_URL` is the browser-facing URL. `API_INTERNAL_BASE_URL` is used by server-rendered frontend code inside Docker.

If the API is unavailable during preview, the frontend uses launch-safe fallback content for product and resource pages.

## Deployment Notes

- Set secure production values in `.env`.
- Use a strong `DJANGO_SECRET_KEY`.
- Update `DJANGO_ALLOWED_HOSTS` and `DJANGO_CORS_ALLOWED_ORIGINS` for the production domains.
- Run `migrate` and `seed_initial_data` after the first deployment.
- Add an Nginx reverse proxy later if TLS termination and domain routing are handled inside this Compose project.
