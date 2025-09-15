import "./App.css";
import Landing from "./pages/Landing.jsx";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import useCurrentUser from "../hooks/useCurrentUser.jsx";
import { useSelector } from "react-redux";



function App() {
  useCurrentUser()
  const {userData} = useSelector(state=>state.user)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
