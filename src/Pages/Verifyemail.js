import { CssBaseline, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
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
    form: {
      width: "30%",
    },
  })
);

const VerifyEmail = () => {
  const classes = useStyles();

  const token = useLocation()
    .search //?token=gdsdjkshdh
    .slice(0, useLocation().search.length)
    .split("=")
    .pop();

  const [verified, setVerified] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (token) {
      axios
        .get(`https://smm-server2.onrender.com/api/email/verify?token=${token}`)
        .then((res) => {
          console.log(res);
          setVerified(true);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, []);

  if (!token) {
    return <p>Token is not present</p>;
  }

  return (
    <div className="login">
      <CssBaseline />
      <div className={classes.root}>
        <Typography variant="h2" marginTop={5} guttersBottom component="h2">
          {verified && !error
            ? "You are Verified !"
            : error
            ? error
            : "Verifying please wait...!"}
        </Typography>
      </div>
    </div>
  );
};

export default VerifyEmail;
