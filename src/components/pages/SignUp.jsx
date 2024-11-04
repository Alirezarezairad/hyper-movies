// SignUp.js
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

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    telefonNumber: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formularvalidierung
    if (!formData.name || !formData.telefonNumber || !formData.email || !formData.password) {
      alert('Bitte füllen Sie alle Felder aus.');
      return;
    }

    alert('Sie sind erfolgreich registriert!');
    navigate('/'); 
  };

  return (
    <div style={styles.container}>
      <h1 className="text-center text-4xl text-yellow-200">Sign Up</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          style={styles.input} 
          required 
        />

        <label>Telefon Number</label>
        <input 
          type="text" 
          name="telefonNumber" 
          value={formData.telefonNumber} 
          onChange={handleChange} 
          style={styles.input} 
          required 
        />

        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          style={styles.input} 
          required 
        />

        <label>Password</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          style={styles.input} 
          required 
        />

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}
