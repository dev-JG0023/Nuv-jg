import React, { useEffect, useState } from 'react'

export default function App() {
  const [items, setItems] = useState([])
  const [text, setText] = useState('')
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    fetch('/api/items')
      .then((r) => r.json())
      .then(setItems)
      .catch(console.error)
    fetch('/api/users')
      .then((r) => r.json())
      .then(setUsers)
      .catch(console.error)
  }, [])

  function addItem(e) {
    e.preventDefault()
    if (!text.trim()) return
    fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })
      .then((r) => r.json())
      .then((newItem) => {
        setItems((s) => [newItem, ...s])
        setText('')
      })
      .catch(console.error)
  }

  function addUser(e) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone }),
    })
      .then((r) => r.json())
      .then((newUser) => {
        setUsers((s) => [newUser, ...s])
        setName('')
        setEmail('')
        setPhone('')
      })
      .catch(console.error)
  }

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Lista simple (React + SQLite)</h1>
      <section style={{ marginBottom: '2rem' }}>
        <h2>Registro de usuarios</h2>
        <form onSubmit={addUser} style={{ marginBottom: '1rem' }}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
            style={{ padding: '0.5rem', width: '30%', marginRight: '0.5rem' }}
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo"
            style={{ padding: '0.5rem', width: '30%', marginRight: '0.5rem' }}
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Teléfono"
            style={{ padding: '0.5rem', width: '20%', marginRight: '0.5rem' }}
          />
          <button style={{ padding: '0.5rem' }}>Registrar</button>
        </form>
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              <strong>{u.name}</strong> — {u.email} {u.phone ? `(${u.phone})` : ''}
            </li>
          ))}
        </ul>
      </section>
      <form onSubmit={addItem} style={{ marginBottom: '1rem' }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe un ítem..."
          style={{ padding: '0.5rem', width: '70%' }}
        />
        <button style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>Agregar</button>
      </form>
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            {it.text} <small style={{ color: '#666' }}>({it.created_at})</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
