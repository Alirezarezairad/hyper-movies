// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  input: {
    marginBottom: "20px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      alert('Sie sind eingeloggt!');
      navigate('/'); 
    } else {
      alert('Bitte füllen Sie alle Felder aus');
    }
  };

  return (
    <div style={styles.container}>
      <h1 className="text-center text-4xl text-yellow-200">Login</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}
