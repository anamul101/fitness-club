
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

import Swal from 'sweetalert2'

const ExersiceDetails = ({timeCount}) => {
    const [value, setValue]=useState([0]);
    let totalTime = 0;
    for(const count of timeCount){
        totalTime=totalTime+count.times
    }

    const handelaBreak=(event)=>{
        setValue(event);
        const getTime = localStorage.getItem('add break');
        const convert = JSON.parse(getTime);
        if(convert){
            
            localStorage.setItem('add break', JSON.stringify([...convert,event]));
        }else{
            localStorage.setItem('add break', JSON.stringify([...event]));
        } 
    }
    // compleate btn

    const compleatedBtn=()=>{
       
        Swal.fire(
            'Good job!',
            'Activity Completed!',
            'success'
          )
    }

    return (
        <div className='sticky top-0'>
            <div className='flex items-center my-5'>
                <img className='rounded-full w-20 h-20' src={('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzVjUTf3-1di948k-lMHR0gcm4RiWJoARyw&usqp=CAU')} alt="Mohammad Anamul" />
                <div className='ml-3'>
                    <h1 className='text-2xl font-semibold'>MD: ANAMUL</h1>
                   
                    <p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='flex flex-row justify-between bg-gray-300'>
                <div className='m-2 bg-white p-2 rounded-md text-center'>
                    <div className='flex'>
                        <h1 className="text-3xl font-semibold">58</h1>
                        <span className=''>kg</span>
                    </div>
                    <p className='font-medium text-1xl'>Weight</p>
                </div>
                <div className='m-2 bg-white p-2 rounded-md text-center'>
                    <div className='flex'>
                        <h1 className="text-3xl font-semibold">5.6</h1>
                    </div>
                    <p className='font-medium text-1xl'>Height</p>
                </div>
                <div className='m-2 bg-white p-2 rounded-md text-center'>
                    <div className='flex'>
                        <h1 className="text-3xl font-semibold">23</h1>
                        <span className=''>Year</span>
                    </div>
                    <p className='font-medium text-1xl'>Age</p>
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-semibold my-5'>Add A Break</h1>
                <div className='flex flex-row bg-gray-300  rounded-md justify-between'>
                    <button onClick={()=>handelaBreak(30)} className='m-2 bg-white p-2 rounded-full'>30s</button>
                    <button onClick={()=>handelaBreak(35)} className='m-2 bg-white p-2 rounded-full'>35s</button>
                    <button onClick={()=>handelaBreak(20)} className='m-2 bg-white p-2 rounded-full'>20s</button>
                    <button onClick={()=>handelaBreak(40)} className='m-2 bg-white p-2 rounded-full'>40s</button>
                    <button onClick={()=>handelaBreak(25)} className='m-2 bg-white p-2 rounded-full'>25s</button>
                </div>
            </div>
            {/* button calculate */}
            <div>
                <h1 className='text-3xl font-semibold my-5'>Exercise Details</h1>

                <div className='flex flex-row bg-gray-200 rounded-md mb-4'>
                    <h1 className='text-2xl m-4'>Exercise time: {totalTime}s</h1>
                    
                </div>
                <div className='flex flex-row bg-gray-200 rounded-md'>
                    <h1 className='text-2xl m-4'>Break time : {value}s</h1>
                </div>
            </div>
            <div className='mt-5'>
                <button onClick={()=>compleatedBtn()} className="btn btn-block btn-secondary text-white">Activity Completed</button>
            </div>
        </div>
    );
};

export default ExersiceDetails;