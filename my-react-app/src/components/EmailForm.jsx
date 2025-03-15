import React, { useState } from "react";
import axios from "axios";
import "./EmailForm.css"


const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:6060/submit", { email });
      
      if (response.data.alreadySubscribed) {
        setMessage("⚠️ You are already subscribed!");
      } else {
        setMessage(response.data.message);
      }
      
      setEmail(""); // Clear input after success
    } catch (error) {
      setMessage("❌ Error submitting email");
    }
  };



  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmailForm;