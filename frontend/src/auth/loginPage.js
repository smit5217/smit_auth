import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:5000/api/auth";

export default function Login({setIsAuthenticated}) {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${baseUrl}/login`, { email, password });
    if (response.status === 200) {
      setIsAuthenticated(true);
      navigate("/home");  
    }
  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  }
};

 return (
   <div className="container mt-5">
     <h2>Login</h2>
     {error && <Alert variant="danger">{error}</Alert>}
     <form onSubmit={handleLogin}>
       <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
       <input type="password" className="form-control mt-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
       <button type="submit" className="btn btn-primary mt-3">Login</button>
     </form>
     <p className="mt-3">Don't have an account? <button className="btn btn-link" onClick={() => navigate("/register")}>Register</button></p>
   </div>
 );
}