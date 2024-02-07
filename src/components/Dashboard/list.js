import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const List = () => {
    return (
        <>
           <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow flex justify-between ">
            <div>
                <p className='font-bold text-xl'>Your URL</p>
                <span>url</span>
            </div>
            <div>
               <p className='font-bold text-xl'>no of visites in your URL</p>
                <div className='flex justify-center'>count</div>
            </div>
            <div className='flex justify-between '>
                <div className='mr-8'><button><CiEdit className='text-3xl' /></button></div>
                <div><button><MdDelete  className='text-3xl'/></button></div>
            </div>
            
          </div>   
       </>
    );
};

export default List;