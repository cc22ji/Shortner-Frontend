// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// // import Cookies from 'js-cookie'; // Assuming you're using js-cookie to manage cookies


// const redirectURl = "http://localhost:4000/api/v1/user/auth"


// const useAuthentication = () => {


//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();



// //   Function to get cookie value
// const getCookie = (name) => {
//     const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
//     return cookieValue ? cookieValue.pop() : null;
//   };

//   useEffect(() => {
//     // const token = Cookies.get('token'); // Retrieve token from cookies
//     const token = getCookie('token');
//     console.log("tokem",token)
//     setIsLoggedIn(!!token); // Update isLoggedIn based on token existence

//     // If not logged in, navigate to login page
//     if (!token) {
//       navigate('/login');
//     }
//   }, [navigate]);




//   return isLoggedIn;
// };

// export default useAuthentication;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const redirectURl = "http://localhost:4000/api/v1/user/auth";

const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userdata, setUserdata] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(redirectURl, { withCredentials: true });
      console.log("auth", response);

      // Assuming response.data.authorized indicates whether the user is authorized
      if (response?.data?.authorized === true) {
        setIsLoggedIn(true);
        setUserdata(response?.data?.info)
      } else {
        navigate('/login');
        setIsLoggedIn(false)
      }
    } catch (error) {
      console.error("Fetching data error.auth", error);
      // Handle network errors gracefully, e.g., display an error message to the user
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [navigate]);

  return { isLoggedIn, userdata }
};

export default useAuthentication;




// const fetchData = async () => {
//     try {
//       const response = await axios.get(redirectURl, {
//         withCredentials: true,
//       })
//       console.log("auth",response)
//       if (response.data.authorized === true ) {      
//         setIsLoggedIn(true)
//       }else{
//         navigate('/login');
//         setIsLoggedIn(false)
//       }
      
//     } catch (error) {
//       console.error("Fetching data error.auth", error);
//       // Log more details if available
      
//     }
//   };

//   useEffect(()=>{
//     fetchData()
//   },[navigate])