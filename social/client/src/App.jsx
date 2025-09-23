import "./App.css";
import Landing from "./pages/Landing.jsx";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import useCurrentUser from "../hooks/useCurrentUser.jsx";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Profile from "./pages/Profile.jsx";



function App() {
  useCurrentUser()
  const {userData ,profileData} = useSelector(state=>state.user)

  return (
    <>
      <Routes>
        <Route path="/" element={!userData?<Landing />:<Navigate to='/home'/>} />
        <Route path="/signin" element={!userData?<SignIn />:<Navigate to='/home'/>} />
        <Route path="/signup" element={!userData?<SignUp />:<Navigate to='/home'/>} />
        <Route path="/home" element={userData?<Home />:<Navigate to='/signin'/>} />
        <Route path="/profile/:userName" element={userData?<Profile />:<Navigate to='/signin'/>} />
      </Routes>
    </>
  );
}

export default App;
