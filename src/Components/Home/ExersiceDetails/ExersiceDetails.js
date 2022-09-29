import { current } from 'daisyui/src/colors';
import React, { useState } from 'react';


const ExersiceDetails = ({timeCount}) => {
    const [value, setValue]=useState([0])
    // console.log(value)
    // console.log(timeCount);
    let totalTime = 0;
    for(const count of timeCount){
        totalTime=totalTime+count.times
    }

    const handelaBreak=(event)=>{
        setValue(event);
             localStorage.setItem('add break', JSON.stringify([event]));
        
    }

    return (
        <div className='sticky top-0'>
            <h1 className='text-4xl'>this is a details</h1>
            <div>
                <h1 className='text-4xl my-5'>Add A Break</h1>
                <div className='flex flex-row bg-gray-300  rounded-md'>
                    <button onClick={()=>handelaBreak(30)} className='m-2 bg-white p-2 rounded-full'>30s</button>
                    <button onClick={()=>handelaBreak(35)} className='m-2 bg-white p-2 rounded-full'>35s</button>
                    <button onClick={()=>handelaBreak(20)} className='m-2 bg-white p-2 rounded-full'>20s</button>
                    <button onClick={()=>handelaBreak(40)} className='m-2 bg-white p-2 rounded-full'>40s</button>
                </div>
            </div>
            {/* button calculate */}
            <div>
                <h1 className='text-4xl my-5'>Exercise Details</h1>

                <div className='flex flex-row bg-gray-200 rounded-md mb-4'>
                    <h1 className='text-2xl m-4'>Exercise time: {totalTime}s</h1>
                    
                </div>
                <div className='flex flex-row bg-gray-200 rounded-md'>
                    <h1 className='text-2xl m-4'>Break time : {value}s</h1>
                </div>
            </div>
        </div>
    );
};

export default ExersiceDetails;