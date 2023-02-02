import "./App.css";
import { useField } from "./hooks/useField";
import { useState } from "react";

function App() {
  //Once the form is submitted the data from the form will be added to members array.
  const [members, setMembers] = useState([]);
  const username = useField();
  const password = useField("password");
  const email = useField("email");
  const url = useField("url");
  const birthdate = useField("date");

  const clearForm = (event) => {
    event.preventDefault();
    username.onresethandler();
    password.onresethandler();
    email.onresethandler();
    url.onresethandler();
    birthdate.onresethandler();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const memberObject = {
      username: username.value,
      password: password.value,
      email: email.value,
      url: url.value,
      birthdate: birthdate.value,
    };
    await setMembers([...members, memberObject]);
    console.log("state of members", members);
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
      </div>
    </div>
  );
}

export default App;
