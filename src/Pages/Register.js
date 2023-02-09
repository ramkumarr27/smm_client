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
    loginAgain: {
      margin: "40px 0",
      textAlign: "center",
    },
  })
);

const Register = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (confirmPassword === password) {
      const dta = { name, email, password };
     await axios
        .post("https://smm-server2.onrender.com/api/auth/register", dta)
        .then((response) => {
          window.alert(response.data.message);
        })
        .catch((error) => {
          console.log(error.response);
          if (error.response.data.success === false) {
            window.alert(error.response.data.message);
          }
        });
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    } else {
      window.alert("Passwords does not match !!");
    }
    
  };

  return (
    <div className="login">
      <CssBaseline />
      <div className={classes.root}>
        <Typography
          variant="h2"
          marginTop={5}
          guttersBottom
          component="h2"
          className={classes.heading}
        >
          Register here
        </Typography>

        <Box
          marginTop={8}
          component="form"
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          {/*-------------------------------- FOR NAME ---------------------------------*/}
          <FormControl required fullWidth sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput
              id="name"
              type="text"
              label="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          {/*-------------------------------- FOR EMAIL ---------------------------------*/}
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

          {/* -------------------------------- FOR PASSWORD ------------------------------ */}
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
              value={password}
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
              required
              label="Password"
            />
          </FormControl>

          {/* -------------------------------- FOR CONFIRM PASSWORD --------------------------- */}
          <FormControl
            required
            fullWidth
            marginTop={2}
            marginBottom={4}
            sx={{ m: 1 }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-confirm-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      setShowConfirmPassword(
                        (prevshowPassword) => !prevshowPassword
                      )
                    }
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              required
              label="Confirm Password"
            />
          </FormControl>

          <Button fullWidth sx={{ m: 1 }} type="submit" variant="contained">
            Register
          </Button>
          <div>
            <Typography variant="subtitle2">
              Are you already a member?{" "}
              <Link to="/login" className={classes.loginAgain}>
                Login
              </Link>
            </Typography>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Register;
