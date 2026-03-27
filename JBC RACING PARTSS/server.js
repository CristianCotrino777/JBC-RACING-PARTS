// =============================================
// SERVIDOR CB RACING PARTS
// Backend con Express + SQLite (better-sqlite3)
// =============================================

const express  = require('express');
const Database = require('better-sqlite3');
const cors     = require('cors');
const path     = require('path');

const app = express();
const db  = new Database('mensajes.db');

// ---- Crear tabla si no existe ----
db.exec(`
    CREATE TABLE IF NOT EXISTS mensajes (
        id       INTEGER PRIMARY KEY AUTOINCREMENT,
        fecha    TEXT NOT NULL,
        nombre   TEXT NOT NULL,
        email    TEXT NOT NULL,
        telefono TEXT,
        tema     TEXT,
        mensaje  TEXT
    )
`);

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// ---- Ruta raíz → abre la página web directamente ----
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'JBC RACING PARTS.html'));
});

// ---- POST /api/mensajes → guardar un mensaje ----
app.post('/api/mensajes', (req, res) => {
    const { fecha, nombre, email, telefono, tema, mensaje } = req.body;
    db.prepare(`
        INSERT INTO mensajes (fecha, nombre, email, telefono, tema, mensaje)
        VALUES (?, ?, ?, ?, ?, ?)
    `).run(fecha, nombre, email, telefono || '—', tema || '—', mensaje || '—');
    res.json({ ok: true });
});

// ---- GET /api/mensajes → traer todos los mensajes ----
app.get('/api/mensajes', (req, res) => {
    const mensajes = db.prepare('SELECT * FROM mensajes ORDER BY id DESC').all();
    res.json(mensajes);
});

// ---- DELETE /api/mensajes → borrar todos los mensajes ----
app.delete('/api/mensajes', (req, res) => {
    db.exec('DELETE FROM mensajes');
    res.json({ ok: true });
});

// ---- Iniciar servidor ----
app.listen(5000, () => {
    console.log('✅ Servidor corriendo en http://localhost:5000');
    console.log('📁 Base de datos: mensajes.db');
});
