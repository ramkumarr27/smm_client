import {
  Box,
  CssBaseline,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "../App.css";



const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: {
      color: blue[900],
    },
    form: {
      width: "30%",
    },
    forgotpassword: {
      margin: "10px 0",
      textAlign: "right",
    },
  })
);

const Login = ({setIsLoggedIn,setUser}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    axios
      .post("https://smm-server2.onrender.com/api/auth/login", data)
      .then((response) => {
        window.alert(response.data.message);
        const token = response.data.token;
        localStorage.setItem("loginToken",JSON.stringify(token));
        const decodedToken = jwt_decode(token);
        setIsLoggedIn(true);
        setUser(decodedToken);
        navigate('/');
      })
      .catch((error) => {
        if (error.response.data.success === "false") {
          window.alert(error.response.data.message);
        }
        
      });
      setEmail("");
      setPassword("");
  };
  return (
    <div className="login">
      <CssBaseline />
      <div className={classes.root} >
        <Typography
          variant="h2"
          marginTop={5}
          guttersBottom
          component="h2"
          className={classes.heading}
        >
          Login here
        </Typography>

        <Box
          marginTop={8}
          marginBottom={8}
          component="form"
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <FormControl required fullWidth sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput
              id="email"
              type="email"
              label="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl
            required
            fullWidth
            marginTop={2}
            marginBottom={4}
            sx={{ m: 1 }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      setShowPassword((prevshowPassword) => !prevshowPassword)
                    }
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button fullWidth sx={{ m: 1 }} type="submit" variant="contained">
            Login
          </Button>
          <div>
            <Link to="/forgotpassword" className={classes.forgotpassword}>
              Forgot Password ?
            </Link>
            <Typography variant="subtitle2">
              Are you not a member?{" "}
              <Link to="/register" className={classes.forgotpassword}>
                sign up
              </Link>
            </Typography>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Login;
