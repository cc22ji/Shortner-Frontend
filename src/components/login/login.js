import React,{useState} from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios";

const LoginURL = "http://localhost:4000/api/v1/user/login"

function Login(){

  

  const navigate = useNavigate()

 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [show, setShow] = useState(false)

 

  function handleEmailSubmit(e){
      setEmail(e.target.value)
  }

  function handlePasswordSubmit(e){
      setPassword(e.target.value)
  }

 

  async function handleFormSubmit(e){
      e.preventDefault();

      const LoginData = {
          email:email,
          password:password,
      }
      console.log("form adat",LoginData)
      try {
        console.log("jkfb22")
          const response = await axios.post(LoginURL,LoginData, {
            withCredentials: true,
          
            headers: {
              'Content-Type': 'application/json',
            },
           
          });
          console.log("jkfb")
          console.log(response)
  //         const result = await response.json();
  //         console.log(result)
  //         if(result?.status === "success"){
  //             console.log("success",result)
  //             setSuccess(result.message || "singup Succcessfully")
  //             setError(null)
  //             setShow(true)
  //             navigate("/home");
  //             setEmail("")
  //             setPassword("")
  //         }else {
  //             console.log("failed",result)
  //             // alert(error)
              
  //             setError(result.message || "Login Failed")
              
  //             setSuccess(null)
              
  //         }
        } catch (error) {
          console.log(error)
          setError(error || "Unable to Login")
        }
      }
       

    
    return(
       <>
        <div className="bg-gray-400">
        <div class="flex flex-col items-center justify-center h-screen dark">
  <div class="w-full max-w-md bg-slate-800 rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-200 mb-4">Login</h2>
    <form class="flex flex-col" onSubmit={handleFormSubmit}
    // action="http://localhost:4000/api/v1/user/login" method='post'
    >
      <input placeholder="Email address" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" value={email} onChange={handleEmailSubmit} name="email" required/>
      
      <input placeholder="Password" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" value={password} onChange={handlePasswordSubmit} name="password" required/>
      {/* {
        (show===true)?
        (<p className="mb-2 text-green-600 text-center italic">{success}</p>)
        :(<p className="mb-2 text-red-600 text-center italic">{error}</p>)
      } */}
      <div class="flex items-center justify-between flex-wrap">
        
        <a class="text-sm text-blue-500 hover:underline mb-0.5" href="#">Forgot password?</a>
        <p class="text-white mt-"> Don't have an account? <a class="text-sm text-blue-500 -200 hover:underline mt-4" href="/signup">Signup</a></p>
      </div>
      <button class="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-md mt-4  hover:to-blue-600 transition ease-in-out duration-150" type="submit" 
      onClick={handleFormSubmit}
      >Login</button>
    </form>
  </div>
</div>
</div>
       </>



    )
}

export default Login