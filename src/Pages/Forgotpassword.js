import {
    Box,
    CssBaseline,
    FormControl,
    InputLabel,
    OutlinedInput,
    Typography,
    Button,
  } from "@mui/material";
  import React, { useState } from "react";
  import { makeStyles, createStyles } from "@mui/styles";
  import { blue } from "@mui/material/colors";
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
    
    })
  );
  
  const ForgotPassword = () => {
    const classes = useStyles();
  
    const [email, setEmail] = useState("");
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(!email){
        window.alert("Email not present");
        return;
      }

      axios.post("https://smm-server2.onrender.com/api/auth/forgotpassword",{email}).then((response)=>{
        window.alert(response.data.message);
        console.log(response.data);
      }).catch((error)=>{
        console.log(error.reponse);
        window.alert(error.response.message);
      })
      setEmail("");
    }


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
            Forgot Password
          </Typography>
  
          <Box
            marginTop={8}
            marginBottom={8}
            component="form"
            className={classes.form}
            autoComplete="off"
            onSubmit = {handleSubmit}
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
  
            <Button fullWidth sx={{ m: 1 }} type="submit" variant="contained">
            Forgot Password
            </Button>
          </Box>
        </div>
      </div>
    );
  };
  
  export default ForgotPassword;
  