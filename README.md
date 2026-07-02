# ROBOTRO Website Rebuild

Modern product-focused rebuild of `www.robotro.com` centered on JS-R7 servo motors, motor drivers, firmware, software tools, and custom robotics hardware support.

## Stack

- Frontend: Next.js App Router
- Backend: Django + Django REST Framework
- Database: PostgreSQL
- Admin: Django Admin
- Deployment: Docker Compose

## Local Development Setup

1. Copy environment variables:

```bash
cp .env.example .env
```

2. Build and start services:

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

## Service URLs

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/api
- Django Admin: http://localhost:8000/admin
- Health check: http://localhost:8000/api/health/

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
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

If the API is unavailable during local preview, the frontend uses launch-safe fallback content for product and resource pages.

## Deployment Notes

- Set secure production values in `.env`.
- Use a strong `DJANGO_SECRET_KEY`.
- Update `DJANGO_ALLOWED_HOSTS` and `DJANGO_CORS_ALLOWED_ORIGINS` for the production domains.
- Run `migrate` and `seed_initial_data` after the first deployment.
- Add an Nginx reverse proxy later if TLS termination and domain routing are handled inside this Compose project.
