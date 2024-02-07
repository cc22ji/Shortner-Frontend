import React,{useEffect, useState} from 'react';
import { MdOutlineContentCopy } from "react-icons/md";
import Navbar from '../Navbar/navbar';
import axios from "axios";
import useAuthentication from "../useAuth/useAuth"

import Warning from '../warning/warning';


const backendURL = "http://localhost:4000/api/v1/url"

const Home = ({login}) => {

    const [copied, setCopied] = useState(false);
    const [text, setText] = useState("");
    const [input, setInput] = useState("");
    const [responseData, setResponseData] = useState("");

    //
  
    const  {isLoggedIn , userdata} = useAuthentication();
    console.log("home22",isLoggedIn ,userdata)
  
    if (!isLoggedIn) {
      return (<Warning/>)
    }
    //

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);

        // Reset copied state after 2 seconds
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    function handleInput(e){
        setInput(e.target.value)
    }

   
        async function handleData(e){
            e.preventDefault();
          const url = {
              url:input,
          }    
            try {
                console.log("axios post 22")
                const response = await axios.post(backendURL, url, {
                  withCredentials: true,
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
          if(response.status==200 || response.statusText==="OK"){
            const shortid = response.data.id
            setResponseData(shortid)
            const short_url = `http//localhost/${shortid}`
            setText(short_url)
          }else{
    
          }
              } catch (error) {
                console.error('Error saving bookmark:', error);
              }
        }

       

  

    



    return (
        <>
        <Navbar login = {login}/>
         <div className='flex flex-wrap justify-center items-center h-auto mt-32 lg:mt-16 xl:mt-32 z-0'>
            <div className=' w-1/12'></div>
            <div className='bg-blu-400 w-10/12'>





            <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow  ">
    
        <h3 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">Shorten a long link</h3>

        <div class="mb-5">
    <label for="text" class="block mb-2 text-2xl font-medium text-gray-900 mt-8">Paste a long URL</label>
    <input type="text" id='text' class=" border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-50 focus:border-blue-50 block w-full p-2.5 h-12" placeholder="Example:Something.com/endpoint"  value={input} onChange={handleInput} name="input" required/>
  </div>


  {
    (responseData) ? (
      <div className='flex '>
   <div className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-50 focus:border-blue-50 block w-5/6 p-2.5 h-12'>
    {responseData}
   </div>
   <div className=' border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-50 focus:border-blue-50  w-1/12 p-2.5 h-12 ml-4 flex '>
      <button onClick={copyToClipboard} className="text-blue-500 focus:outline-none">
   <MdOutlineContentCopy className='text-2xl ' />
            </button>
            {copied && <span className="ml-2 text-green-500">Copied!</span>}

   </div>
   </div>
    ) : (null)
  }


<div className='flex items-center mt-8 '>
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 h-12 w-5/6 md:w-1/3 focus:outline-none " onClick={handleData}>Generate your link</button>
</div>

    
   
</div>





            </div>
            <div className=' w-1/12'></div>
         </div>
        </>
            
        
    );
};

export default Home;