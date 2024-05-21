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
    <main style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
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

      <div style={{marginTop: '-30vh', gap: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', flexDirection: 'column', width: '30vw' }}>
        <h1 style={{fontSize: '5vh'}}>About Us</h1>
        <p style={{fontSize: '2vh'}}>This project is led by Computer Science students studying at the University of Minnesota - Twin Cities. We are in our Beta Phase right now, so we prioritized Computer Science courses (CSCI xxxx) at UMN just for Fall 2024. For the spring, we will generalize this to all courses at UMN and maybe even expand to other universities!</p>
        <p style={{fontSize: '2vh'}}>Please give us feedback / contact us at thiru063@umn.edu</p>
      </div>

    </main>
  );
}
