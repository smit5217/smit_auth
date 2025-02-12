import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:5000/api/auth";

export default function Register() {
 const [formData, setFormData] = useState({ first_name: "", last_name: "", email: "", password: "", role: "customer" });
 const [error, setError] = useState("");
 
 const navigate = useNavigate();

 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleRegister = async (e) => {
   e.preventDefault();
   try {
     await axios.post(`${baseUrl}/register`, formData);
     navigate("/");
   } catch (err) {
     setError(err.response?.data?.message || "Registration failed");
   }
 };

 return (
   <div className="container mt-5">
     <h2>Register</h2>
     {error && <Alert variant="danger">{error}</Alert>}
     <form onSubmit={handleRegister}>
       <input type="text" 
        className="form-control" 
        name="firstname" 
        placeholder="First Name" onChange={handleChange} required />
       <input type="text" className="form-control mt-2" name="lastname" placeholder="Last Name" onChange={handleChange} required />
       <input type="email" className="form-control mt-2" name="email" placeholder="Email" onChange={handleChange} required />
       <input type="password" className="form-control mt-2" name="password" placeholder="Password" onChange={handleChange} required />
       <select className="form-control mt-2" name="role" onChange={handleChange}>
         <option value="customer">Customer</option>
         <option value="admin">Admin</option>
       </select>
       <button type="submit" className="btn btn-primary mt-3">Register</button>
     </form>
     <p className="mt-3">Already have an account? <button className="btn btn-link" onClick={() => navigate("/")}>Login</button></p>
   </div>
 );
}
