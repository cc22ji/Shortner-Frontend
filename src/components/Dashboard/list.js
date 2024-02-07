import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { json } from 'react-router-dom';

const deleteDataURL = "http://localhost:4000/api/v1/url/delete"

const List = ({data,fetchData}) => {
 
    async  function deleteItem(id,e){
        console.log("nfjsdfnv",id,data)
        e.preventDefault()
        try {
            // setData((prev)=>{
            //     let temp = JSON.parse(JSON.stringify(data))
            //     temp.filter((curr)=>{data.s})
            // })
          const response =  await axios.delete(`${deleteDataURL}/${id}`, {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          })
          console.log(response)
          fetchData()
        } catch (error) {
          console.error('Error deleting Id:', error);
        }
        
      } 


      function truncate(str, maxLength) {
        return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
      }

    return (
      

      <>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md mb-6 md:flex justify-between">
        <div className="mb-4 md:px-2 md:w-2/6">
          <p className='font-bold text-xl mb-2'>Short URL Id</p>
          <span className='text-md font-semibold'>
             {data.shortId}
             {/* {truncate(data.redirectURL, 25)} */}
             </span>
        </div>
        <div className="mb-4  md:px-2  md:w-2/6">
          <p className='font-bold text-xl mb-2'>Long URL</p>
          <div className=' overflow-hidden'>
            <span title={data.redirectURL}>{truncate(data.redirectURL, 40)}</span>
          </div>
        </div>
        <div className="mb-4 md:px-2  md:w-1/6">
          <p className='font-bold text-xl mb-2'>Number of visits </p>
          <div className='md:flex justify-center'>{data.totalClicks}</div>
        </div>
        <div className='flex justify-center md:px-2  md:w-1/6'>
          {/* <div className='mr-8'><button><CiEdit className='text-3xl' /></button></div> */}
          <div><button onClick={(e)=>{deleteItem(data.shortId,e)}}><MdDelete  className='text-3xl mt-3'/></button></div>
        </div>
      </div>   
    </>
    
    
    

    );
};

export default List;