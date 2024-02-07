import React, { useEffect,useState } from 'react';
import List from './list';
import Navbar from '../Navbar/navbar';
import axios from "axios"

const redirectURl = "http://localhost:4000/api/v1/url/all"

const Dashboard = ({login}) => {

    const[response ,setResponse] = useState([])

    const fetchData = async () => {
        try {
          const response = await axios.get(redirectURl, {
            withCredentials: true,
          })
          console.log("dashboard",response)
          if (response.status === "OK"||response.status === 200) {
            setResponse(response.data);
           
            
          }
          
        } catch (error) {
          console.error("Fetching data error.", error);
          // Log more details if available
          
        }
      };

      useEffect(()=>{fetchData()},[])

     

    let listData = "";
    listData = (response.length>0)?
    response.map((data,index) => (
     <List key={index} data={data} setData={setResponse} fetchData={fetchData}/>
   )):null


    return (
       
             <>
             <Navbar login={login}/>
         <div className='flex flex-wrap justify-center mt-16 h-auto '>
            <div className=' w-1/12'></div>
            <div className='bg-blu-400 w-10/12'>





            <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow  ">
    
        <h3 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">Hi, chetan chouhan</h3>

        
         {listData}

  




    
   
</div>





            </div>
            <div className=' w-1/12'></div>
         </div>
        </>
     
    );
};

export default Dashboard;