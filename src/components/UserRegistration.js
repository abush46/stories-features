import React, { useState } from "react";
import { auth, db } from "../utils/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
const UserRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [healthConcerns, setHealthConcerns] = useState("");

  const handleRegister = async (e) => {
    //e.preventDefault();
    try {
      /* const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      ); */
      //const user = userCredential.user;
      await setDoc(doc(db, "users", "userId2"), {
        name: name,
        email: email,
        age: age,
        gender: gender,
        password: password,
        healthConcerns: healthConcerns,
      });
      alert("Registered");
      // Redirect user to the user profile page or login page
    } catch (error) {
      alert("Error registering user:", error);
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="row g-3" style={{ width: 400, marginLeft: 250 }}>
      <h2>User Registration</h2>
      {/* <form onSubmit={handleRegister}> */}
      <div className="col-md-6">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          onChange={(value) => {
            setName(value);
          }}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">E-mail</label>
        <input
          className="form-control"
          onChange={(value) => {
            setEmail(value);
          }}
        />
      </div>
      <div className="col-md-3">
        <label className="form-label">Age</label>
        <input
          className="form-control"
          onChange={(value) => {
            setAge(value);
          }}
        />
      </div>
      <div className="col-md-3">
        <label className="form-label">Gemder</label>
        <input
          className="form-control"
          onChange={(value) => {
            setGender(value);
          }}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Password</label>
        <input
          className="form-control"
          onChange={(value) => {
            setPassword(value);
          }}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Health Concerns</label>
        <input
          className="form-control"
          onChange={(value) => {
            setHealthConcerns(value);
          }}
        />
      </div>
      {/* Form fields for name, email, password, age, gender, and health concerns */}
      <button
        onClick={handleRegister}
        className="btn btn-primary"
        type="submit"
      >
        Register
      </button>
      {/* </form> */}
    </div>
  );
};

export default UserRegistration;
