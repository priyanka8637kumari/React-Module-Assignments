import React, { useState } from "react";
import "./MyStateComponent.css";

const MyStateComponent = () => {
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  return (
    <div className="formContainer">
      <h1>My State Component</h1>
      <form onSubmit={handleSubmit} >
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyStateComponent;
