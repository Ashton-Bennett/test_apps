"use client";
import { Inter } from "@next/font/google";
import { createContext, useState } from "react";
import styles from "./page.module.css";
import Header from "../../components/Header";
import Component from "../../components/Component";

export const inter = Inter({ subsets: ["latin"] });
export const UserContext = createContext(null);
export default function Home() {
  const [user, setUser] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setUser(event.target.value);
    console.log("USER LOGGED IN", user);
  };

  console.log("USER LOG OUTSIDE E HANDLES:", user);

  const handleLogout = () => {
    setUser("");
    console.log("USER LOGGED OUT", user);
  };
  return (
    <UserContext.Provider value={user}>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <Header />
          </p>
        </div>
        <div className={styles.center}>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              type="text"
              value={user}
              placeholder="type any name here"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              style={{ margin: ".5em" }}
            >
              Login
            </button>
          </form>
          <button onClick={handleLogout}>Logout</button>
        </div>

        <div className={styles.grid}>
          <Component />
        </div>
      </main>
    </UserContext.Provider>
  );
}
