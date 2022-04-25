import "./styles.css";
import React from "react";

function Contacts() {
  const [name, changeName] = React.useState("");
  const [email, changeEmail] = React.useState("");
  const [text, changeText] = React.useState("");

  const tapContacts = () => {
    console.log({ name, email, text });
  };

  return (
    <div className="App">
      <h6>Contact Form</h6>
      <div>
        <p>Your Name</p>
        <input
          value={name}
          onChange={(e) => changeName(e.target.value)}
          required
        />
      </div>
      <div>
        <p>Your E-mail</p>
        <input
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          required
        />
      </div>
       <div>
        <p>Tell us more</p>
          <textarea
            className="textarea"
            onChange={(e) => changeText(e.target.value)}
          />
      </div> 
      <button className="button" onClick={tapContacts}>
        Send a Message
      </button>
    </div>
  );
}

export default Contacts; 