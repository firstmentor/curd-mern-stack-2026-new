import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateStudent() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/studentCreate", {
        name,
        city,
      });

      alert("Student Create Success");

      // Clear input fields
      setName("");
      setCity("");
    } catch (error) {
      console.log(error);
      alert("Student Create Failed");
    }
  };

  return (
    <>
      <div>
        <Link to="/displayStudent">Display Student</Link>
        <br />
        <h2>Create Student</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter Name"
          />

          <br />
          <br />

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            placeholder="Enter City"
          />

          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CreateStudent;
