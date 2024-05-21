'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <div style={{ marginTop: '15vh', display: 'flex', justifyContent: 'top', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1 style={{fontSize: '4.5vw'}}>Welcome to Syllabase</h1>

      <p style={{fontSize: '2vw', marginTop: '5vh', marginBottom: '20vh'}}>It's about time we know what we're signing up for</p>

      <div style={{ display: 'flex', alignItems: 'center'}}>
        <button style={{cursor: 'pointer', borderRadius: '15px', marginRight: '5vw', padding: '8px 16px', fontSize: '2vw', width: '20vw' }}>
          ADD SYLLABUS
        </button>
        <form style={{alignItems: 'center'}} onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter Class Code"
            style={{ borderRadius: '15px', padding: '8px', fontSize: '2vw', textAlign: 'center', width: '20vw'}}
          />
        </form>

      </div>
      
    </div>
  );
}
