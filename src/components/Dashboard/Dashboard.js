import React from 'react';
import List from './list';

const Dashboard = () => {

//     let listData = "";
//     listData = (popularData.length>0)?
//     popularData.slice(0,19).map((popular,index) => (
//      <TvCard key={index} data={popular}/>
//    )):null


    return (
       
             <>
         <div className='flex flex-wrap justify-center mt-16 h-screen'>
            <div className=' w-1/12'></div>
            <div className='bg-blu-400 w-10/12'>





            <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow  ">
    
        <h3 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">Hi, chetan chouhan</h3>

        
<List/>

  




    
   
</div>





            </div>
            <div className=' w-1/12'></div>
         </div>
        </>
     
    );
};

export default Dashboard;