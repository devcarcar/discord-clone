'use client';
import { redirect, useRouter } from 'next/navigation';

export default function DefaultStart() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          const condition = true;
          if (condition) {
            return router.push('/auth');
          } else {
            return router.push('/home');
          }
        }}
      >
        Enter chat
      </button>
    </div>
  );
}

/*
import { useState, useEffect } from 'react';

export default function Home() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: '', description: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch('/api/items');
    const data = await res.json();
    setItems(data.data);
  };

  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      fetchItems();
      setForm({ name: '', description: '' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Item name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="description"
          placeholder="Item description"
          value={form.description}
          onChange={handleChange}
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item:any) => (
          <li key={item._id}>
            {item.name} - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
*/
