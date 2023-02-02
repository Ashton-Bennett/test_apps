import "./App.css";
import useField from "./hooks/useField";
import { useState } from "react";

function App() {
  //Once the form is submitted the data from the form will be added to members array.
  const [members, setMembers] = useState([]);
  const [username, usernameResetHandler] = useField();
  const [password, passwordResetHandler] = useField("password");
  const [email, emailResetHandler] = useField("email");
  const [url, urlResetHandler] = useField("url");
  const [birthdate, birthDateHandler] = useField("date");

  const clearForm = (event) => {
    event.preventDefault();
    usernameResetHandler();
    passwordResetHandler();
    emailResetHandler();
    urlResetHandler();
    birthDateHandler();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const memberObject = {
      username: username.value,
      password: password.value,
      email: email.value,
      url: url.value,
      birthdate: birthdate.value,
    };
    setMembers([...members, memberObject]);

    clearForm(event);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Sign up</h1>
        <form className="form" onSubmit={handleSubmit}>
          {" "}
          <label>Your Name:</label>
          <input {...username} />
          <label>Password:</label>
          <input {...password} />
          <label>Email Address:</label>
          <input {...email} />
          <label>Website:</label>
          <input {...url} />
          <label>Birthdate:</label>
          <input {...birthdate} />
          <div className="inputLine">
            {" "}
            <button type="submit">Submit</button>
            <button onClick={clearForm}>Clear</button>
          </div>
        </form>
      </header>
      <span className="material-symbols-outlined" style={{ fontSize: "10rem" }}>
        arrow_right_alt
      </span>
      <div className="form">
        <h1>Field values in state:</h1>
        <div>
          state of username: <span>{username.value}</span>
        </div>
        <div>
          state of password: <span>{password.value}</span>
        </div>
        <div>
          state of user's email: <span>{email.value}</span>
        </div>
        <div>
          state of user's site: <span>{url.value}</span>
        </div>
        <div>
          state of user's b day: <span>{birthdate.value}</span>
        </div>
        <h1>Submissions:</h1>
        {members.map((member) => (
          <li key={member.username}>{Object.values(member)}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
