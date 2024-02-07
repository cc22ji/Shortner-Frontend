
import Signup from "./components/signup/Signup"
import Login from "./components/login/login"
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import FrontPage from "./components/FrontPage/FrontPage";
import Quote from "./components/Quote/Quote";
import {BrowserRouter , Router ,Routes ,Route} from "react-router-dom"
import { useState } from "react";


function App() {
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
       
        
        <Routes>
         <Route path="/"  element={<FrontPage/>} />
         <Route path="/home"  element={<Home login={login}/>} />
         <Route path="/login"  element={<Login setLogin={setLogin}/>} />
         <Route path="/signup"  element={<Signup/>} />
         <Route path="/dashboard"  element={<Dashboard login={login}/>} />
         <Route path="/quote"  element={Quote} />
         
         </Routes>
         
       

    </BrowserRouter>
  );
}

export default App;
