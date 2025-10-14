## Deployment (Vercel + Render/Railway)

Frontend (Vercel):
- In Vercel project settings, set Environment Variable `REACT_APP_API_BASE` to your backend URL (e.g. `https://your-backend.onrender.com`).
- Build Command: `yarn build`
- Output Directory: `frontend/build`
- Install Command: `yarn` (root) or `cd frontend && yarn`

Backend (Render/Railway/Heroku):
- Python 3.10+; set `PORT` env var (provided by host), optional `DEBUG=false`.
- Start command (Render/Railway): `gunicorn app:app --bind 0.0.0.0:$PORT`
- Working directory: `backend`

## Docker (local or server)

Build & run with docker-compose:

```bash
docker compose up --build
```

Frontend at `http://localhost:3000`, Backend at `http://localhost:5000`.
# Here are your Instructions
