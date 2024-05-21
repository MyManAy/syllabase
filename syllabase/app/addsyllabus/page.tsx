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
        <h1 style={{fontSize: '4.5vw'}}>Add Syllabus</h1>

        <p style={{fontSize: '1vw', marginTop: '5vh'}}>Help other students get important info before they sign up for a class! Our website heavily relies on student input to get the latest data.</p>
        <p style={{fontSize: '1vw', marginTop: '5vh', marginBottom: '15vh'}}>Open to Professors and Students.</p>

        <button style={{backgroundColor: '#2289e6', color: 'white', cursor: 'pointer', borderRadius: '15px', padding: '8px 16px', fontSize: '1vw', width: '15vw', height: '7.5vh'}}
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScsgDyD8AvbeKbkcbmWP0WFGIJF580QSsgO18gn6P7mq3SfWA/viewform', '_blank')}
                >
            CLICK HERE
          </button>

      </div>

    </main>
  );
}
