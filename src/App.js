
import Signup from "./components/signup/Signup"
import Login from "./components/login/login"
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import FrontPage from "./components/FrontPage/FrontPage";
import Quote from "./components/Quote/Quote";
import {BrowserRouter , Router ,Routes ,Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
       
        
        <Routes>
         <Route path="/"  Component={FrontPage} />
         <Route path="/home"  Component={Home} />
         <Route path="/login"  Component={Login} />
         <Route path="/signup"  Component={Signup} />
         <Route path="/dashboard"  Component={Dashboard} />
         <Route path="/quote"  Component={Quote} />
         </Routes>
         
       

    </BrowserRouter>
  );
}

export default App;
