"use client";
import React, { useState } from "react";
import styles from "./loginForm.module.css";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validUsername = "admin";
    const validPassword = "qazwsx@123";

    if (!username || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields",
      });
      return;
    }

    if (username === validUsername && password === validPassword) {
      setIsLoading(true);
      router.push("/dashboard");
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Invalid username or password",
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading ? <Skeleton width={80} height={24} /> : "Login"}
        </button>
        <div className={styles.hint}>
          <span>Hint:</span>
          <ul>
            <li>Username: admin</li>
            <li>Password: qazwsx@123</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
