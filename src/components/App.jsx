import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setTitle(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {title}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          value={name}
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
