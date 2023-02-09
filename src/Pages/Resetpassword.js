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
import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { blue } from "@mui/material/colors";
import { useLocation } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
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
  })
);

const ResetPassword = () => {
  const classes = useStyles();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isTokenVerified, setIsTokenVerified] = useState(false);
  const [error, setError] = useState("");



  const handleSubmit = (e)=>{
    e.preventDefault();
    const {email } = jwt_decode(token);
    axios.post("https://smm-server2.onrender.com/api/auth/resetpassword",{email,newPassword : password,  confirmNewPassword : confirmPassword})
    .then(res =>{
      window.alert(res.data.message);
      console.log(res.data);
    }).catch(err =>{
      console.log(err.response);
      window.alert(err.response.data.message);
    })
    setPassword("");
    setConfirmPassword("");
  }
  
  //fetching token from query
  const token = useLocation().search //?token=gdsdjkshdh
  .slice(0, useLocation().search.length) 
  .split("=")
  .pop();

  useEffect(()=>{
    if(token){
      axios.get(`https://smm-server2.onrender.com/api/auth/verifyToken?token=${token}`).then((res)=>{
        console.log(res);
        setIsTokenVerified(true);
      }).catch(err =>{
        console.log(err.response);
        window.alert(err.response.data.message);
        setError(err.reponse.data.msg);
      })
  
    }
  },[])
 
  if(error){
    return(
      <p>{error}</p>
    )
  }
  if (!token && !error) {
    return <p>Token is not present</p>;
  }

  return (
    <div className="login">
      <CssBaseline />
      <div className={classes.root}>
        { isTokenVerified ?
          <>
          <Typography
          variant="h2"
          marginTop={5}
          guttersBottom
          component="h2"
          className={classes.heading}
        >
          Reset your password here
        </Typography>
        <Box
          marginTop={8}
          marginBottom={8}
          component="form"
          className={classes.form}
          autoComplete="off"
          onSubmit = {handleSubmit}
        >
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
              New Password
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
              label="New Password"
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
            Reset Password
          </Button>
        </Box>
          </>
        :
        <Typography
          variant="h2"
          marginTop={5}
          guttersBottom
          component="h2"
          className={classes.heading}
        >
          Verifying Token please wait...!
        </Typography> }
        
      </div>
    </div>
  );
};

export default ResetPassword;
