# Nuv-jg

Proyecto ejemplo: Frontend React + Backend Node.js + SQLite.

Estructura creada:

- [backend/index.js](backend/index.js)
- [backend/db.js](backend/db.js)
- [backend/package.json](backend/package.json)
- [frontend/index.html](frontend/index.html)
- [frontend/src/App.jsx](frontend/src/App.jsx)
- [frontend/package.json](frontend/package.json)

Instrucciones rápidas:

1) Abrir una terminal y ejecutar (desde la raíz `Nuv-jg`):

```bash
cd backend
npm install
npm run dev
```

El servidor backend quedará en `http://localhost:4000` y crea la base `data.db` automáticamente.

2) En otra terminal levantar el frontend:

```bash
cd frontend
npm install
npm run dev
```

Vite mostrará la URL (por defecto `http://localhost:5173`). El frontend hace peticiones a `/api/items`.

Notas:
- El backend expone `GET /api/items` y `POST /api/items`.
- Usamos SQLite para que no necesites configurar un servidor externo. Si prefieres Postgres o MySQL, lo adapto.

- Añadido registro de usuarios:
	- `GET /api/users` — lista usuarios.
	- `POST /api/users` — crea un usuario. JSON esperado: `{ "name": "...", "email": "...", "phone": "..." }`.

Página de práctica posible sitio web

Página de práctica posible sitio web
