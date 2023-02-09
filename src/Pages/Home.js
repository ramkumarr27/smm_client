import { CssBaseline, Button } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards.js";

const Home = ({ isLoggedIn, user, logoutUser }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };
  return (
    <>
      {" "}
     
      <CssBaseline />
      <Navbar isLoggedIn={isLoggedIn} user={user} logoutUser={logoutUser} />
      {isLoggedIn ? (
        <Cards />
      ) : (
        <div className="dashboard">
          <br></br>
          <div>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Welcome to your SMM tool !!
            </h1>{" "}
          </div>
          <div className="d_part_2">
            <h1>
              You can manage all your social media applications here in a single
              page...{" "}
            </h1>
          </div>

          <div className="button_login">
            <Button
              sx={{ m: 1 }}
              type="onClick"
              variant="contained"
              onClick={handleNavigate}
              style={{
                fontWeight: "10px",
                color: "blue",
                backgroundColor: "white",
              }}
            >
              Login
            </Button>{" "}
            <span>
              {" "}
              <h1> to experience more</h1>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
