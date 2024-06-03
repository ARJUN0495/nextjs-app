import React from "react";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <form action="/dashboard" className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        <div className={styles.hint}>
          <span>Hint:</span>
          <ul>
            <li>Username: admin</li>
            <li>Password: admin</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
