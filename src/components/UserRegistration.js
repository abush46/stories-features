import React, { useState } from "react";
import { auth, db } from "../utils/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
const UserRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [healthConcerns, setHealthConcerns] = useState("");

  const handleRegister = async (e) => {
    //e.preventDefault();
    const data = {
      name: name,
      email: email,
      age: age,
      gender: gender,
      password: password,
      healthConcerns: healthConcerns,
    };
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user.uid;
      await setDoc(doc(db, "users", user), data);
      alert("Registered");

      // Redirect user to the user profile page or login page
    } catch (error) {
      alert("Error registering user:", name, error);
      console.error("Error registering user:", error);
      console.error(data);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: "25rem", background: "#eee" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Register</h5>
          <form>
            <div className="md-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="md-3">
              <label className="form-label">E-mail</label>
              <input
                className="form-control"
                value={email}
                onChange={(value) => {
                  setEmail(value.target.value);
                }}
              />
            </div>
            <div className="md-3">
              <label className="form-label">Age</label>
              <input
                className="form-control"
                value={age}
                onChange={(value) => {
                  setAge(value.target.value);
                }}
              />
            </div>
            <div className="md-3">
              <label className="form-label">Gemder</label>
              <input
                className="form-control"
                value={gender}
                onChange={(value) => {
                  setGender(value.target.value);
                }}
              />
            </div>
            <div className="md-3">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                value={password}
                onChange={(value) => {
                  setPassword(value.target.value);
                }}
              />
            </div>
            <div className="md-3">
              <label className="form-label">Health Concerns</label>
              <input
                className="form-control"
                value={healthConcerns}
                onChange={(value) => {
                  setHealthConcerns(value.target.value);
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
