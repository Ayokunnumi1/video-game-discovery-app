import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(person.name);
  };
  return (
    <form className="p-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label flex flex-col">
          Name
        </label>
        <input
          id="name"
          type="text"
          onChange={(e) => {
              setPerson({ ...person, name: e.target.value });
              console.log(e.target.value);
          }}
          value={person.name}
          className="form-control border-2 p-2 rounded-md"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label flex flex-col">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control border-2 p-2 rounded-md"
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="p-3 bg-black text-cyan-50"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
