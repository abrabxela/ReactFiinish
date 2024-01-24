import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { setToken, setUser } from "../../store/AuthSlice";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.accessToken);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setToken(user.accessToken));
        dispatch(setUser(user));
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode || errorMessage);
      });
  };

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

  return (
    <Paper sx={{ padding: "50px" }}>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handleFormSubmit}
      >
        <h1 style={{ textAlign: "center" }}>Registration</h1>
        <TextField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Please input email"
        />
        <TextField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Password > 6 sign"
          helperText={password.length < 6 ? "Password too short" : ""}
        />
        <Button type="submit">Signed up</Button>
        <Typography>If you have login credential go to </Typography>
        <Link
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          to="/auth/login"
        >
          Login form
        </Link>
      </form>
    </Paper>
  );
};
export default Register;
