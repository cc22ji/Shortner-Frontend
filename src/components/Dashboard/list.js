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

    return (
        <>
           <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow flex justify-between ">
            <div>
                <p className='font-bold text-xl'>Your URL</p>
                <span>{data.redirectURL} : {data.shortId}</span>
            </div>
            <div>
               <p className='font-bold text-xl'>no of visites in your URL</p>
                <div className='flex justify-center'>{data.totalClicks}</div>
            </div>
            <div className='flex justify-between '>
                <div className='mr-8'><button><CiEdit className='text-3xl' /></button></div>
                <div><button onClick={(e)=>{deleteItem(data.shortId,e)}}><MdDelete  className='text-3xl'/></button></div>
            </div>
            
          </div>   
       </>
    );
};

export default List;