import React,{useEffect} from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/Forgotpassword";
import ResetPassword from "./Pages/Resetpassword";
import VerifyEmail from "./Pages/Verifyemail";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Banner from "./Components/Banner";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState();
  const navigate = useNavigate();

  const logoutUser = ()=>{
    setUser(null);
    setIsLoggedIn(false);
    navigate('/login')
    localStorage.removeItem('loginToken');
  }

  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('loginToken'));
    if(token){
      const decodedToken =  jwt_decode(token)
      if(decodedToken.exp * 1000 < Date.now()){
        setIsLoggedIn(false);
        setUser(null);
        navigate('/login')
      }else{
        setIsLoggedIn(true);
        setUser(decodedToken);
      }
      
    }
  },[])

  return (
    <div>
      <div className="App">
      
      <Routes>
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} user={user} logoutUser = {logoutUser}/>}
        />
        <Route path="/login" element={<Login setIsLoggedIn ={setIsLoggedIn} setUser = {setUser}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
      </Routes>
    </div>
   {isLoggedIn ? "" :<Banner /> } 

    </div>
    
  );
};

export default App;
