import React, { useState } from "react";
import { auth, db } from "../utils/firebase";

const UserRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [healthConcerns, setHealthConcerns] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      await db.collection("users").doc(user.uid).set({
        name,
        email,
        age,
        gender,
        healthConcerns,
      });
      // Redirect user to the user profile page or login page
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleRegister}>
        {/* Form fields for name, email, password, age, gender, and health concerns */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;
