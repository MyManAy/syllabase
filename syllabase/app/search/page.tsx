'use client';

import { useSearchParams } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{query}</h1>
      <p style={styles.introText}>Intro To Java</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>John Doe</button>
        <button style={styles.button}>Jane Smith</button>
        <button style={styles.button}>Alice Johnson</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100vh',
    padding: '20px',
    boxSizing: 'border-box' as 'border-box',
  },
  header: {
    fontSize: '55px',
    marginBottom: '30px',
  },
  introText: {
    fontSize: '30px',
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    gap: '20px',
    width: '100%',
  },
  button: {
    padding: '10px 20px',
    fontSize: '50px',
    cursor: 'pointer',
    width: 'calc(100% - 40px)',
    margin: '0 20px',
  },
};
