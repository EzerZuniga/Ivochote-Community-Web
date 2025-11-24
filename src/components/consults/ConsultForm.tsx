import React, { useState } from 'react';

export default function ConsultForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now just log — integrate with API later
    // eslint-disable-next-line no-console
    console.log('consult submit', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className="consult-form max-w-md" onSubmit={handleSubmit}>
      <label className="block">
        <span className="text-sm">Nombre</span>
        <input value={name} onChange={e => setName(e.target.value)} className="w-full border rounded px-2 py-1" />
      </label>
      <label className="block mt-2">
        <span className="text-sm">Email</span>
        <input value={email} onChange={e => setEmail(e.target.value)} className="w-full border rounded px-2 py-1" />
      </label>
      <label className="block mt-2">
        <span className="text-sm">Mensaje</span>
        <textarea value={message} onChange={e => setMessage(e.target.value)} className="w-full border rounded px-2 py-1" />
      </label>
      <button type="submit" className="mt-3 bg-blue-600 text-white px-3 py-1 rounded">Enviar</button>
    </form>
  );
}
