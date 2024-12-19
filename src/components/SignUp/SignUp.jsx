<<<<<<< HEAD
=======
// import React, { useState } from "react";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "./SignUp.scss";

// function App() {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [state, setState] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
  
//   const navigate = useNavigate(); // Initialize the navigate function

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }
    
//     setError("");
//     const formData = {
//       fullName,
//       email,
//       phoneNumber,
//       state,
//       password,
//       confirmPassword,
//     };

//     try {
//       const response = await axios.post('http://44.196.64.110:5001/api/auth/signUp', formData);
//       console.log(response.data);
//       navigate('/login'); // Navigate to the login page on successful signup
//     } catch (error) {
//       console.error("There was an error submitting the form!", error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Sign Up</h1>
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="fullName"><i className="fa-solid fa-person"></i> Full Name </label>
//           <input
//             type="text"
//             id="fullName"
//             placeholder="Enter your full name"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email"><i className="fa-solid fa-envelope"></i> Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phoneNumber"><i className="fa-solid fa-phone"></i> Phone Number</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             placeholder="Enter Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="state"><i className="fa-solid fa-location-dot"></i> State</label>
//           <input
//             type="text"
//             id="state"
//             placeholder="Enter your state"
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password"><i className="fa-solid fa-lock"></i> New Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter New Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="confirmPassword"><i className="fa-solid fa-lock"></i> Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             placeholder="Enter Confirm New Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         {error && <p className="error">{error}</p>}
//         <div className="form-group button-signup">
//           <button type="submit" className="submit-btn">Sign Up</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.scss";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 

  const navigate = useNavigate();

  const phoneRegex = /^[0-9]{10}$/;  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    
    if (!phoneRegex.test(phoneNumber)) {
      toast.error("Phone number should only contain numbers.");
      return; 
    }
  
    setError("");
    const formData = {
      fullName,
      email,
      phoneNumber,
      state,
      password,
      confirmPassword,
    };

    setLoading(true); 

    try {
      const response = await axios.post('http://44.196.64.110:5001/api/auth/signUp', formData);
      console.log(response.data);
  
      
      toast.success("User created successfully!");
  
      
      setTimeout(() => {
        navigate('/login');
      }, 2000); 
    } catch (error) {
      if (error.response) {
       
        const errorMessage = error.response.data.message || "An error occurred. Please try again later.";
      
        
        if (error.response.status === 400 && errorMessage === "Email is already registered") {
          toast.error("Email is already registered. Please use a different email.");
        } else {
          
          toast.error(errorMessage);
        }
      } else {
        
        toast.error("Network error or server not responding.");
      }
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
<<<<<<< HEAD
          <label htmlFor="fullName" style={{ fontWeight: 'bold' }} ><i className="fa-solid fa-person"></i> Full Name </label>
=======
          <label htmlFor="fullName"><i className="fa-solid fa-person"></i> Full Name </label>
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
<<<<<<< HEAD
          <label htmlFor="email" style={{ fontWeight: 'bold' }} ><i className="fa-solid fa-envelope"></i> Email</label>
=======
          <label htmlFor="email"><i className="fa-solid fa-envelope"></i> Email</label>
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
<<<<<<< HEAD
          <label htmlFor="phoneNumber" style={{ fontWeight: 'bold' }} ><i className="fa-solid fa-phone"></i> Phone Number</label>
=======
          <label htmlFor="phoneNumber"><i className="fa-solid fa-phone"></i> Phone Number</label>
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
<<<<<<< HEAD
          <label htmlFor="state" style={{ fontWeight: 'bold' }} ><i className="fa-solid fa-location-dot"></i> State</label>
=======
          <label htmlFor="state"><i className="fa-solid fa-location-dot"></i> State</label>
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
          <input
            type="text"
            id="state"
            placeholder="Enter your state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-group">
<<<<<<< HEAD
          <label htmlFor="password" style={{ fontWeight: 'bold' }} ><i className="fa-solid fa-lock"></i> New Password</label>
=======
          <label htmlFor="password"><i className="fa-solid fa-lock"></i> New Password</label>
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
          <input
            type="password"
            id="password"
            placeholder="Enter New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
<<<<<<< HEAD
        <div className="form-group"  >
          <label htmlFor="confirmPassword" style={{ fontWeight: 'bold' }}><i className="fa-solid fa-lock"></i> Confirm Password</label>
=======
        <div className="form-group">
          <label htmlFor="confirmPassword"><i className="fa-solid fa-lock"></i> Confirm Password</label>
>>>>>>> cf386759a9e616a155fd22f081a63a534e3141d8
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="form-group button-signup">
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
