import React from 'react';


const ExersiceDetails = ({timeCount}) => {

    console.log(timeCount);
    let totalTime = 0;
    for(const count of timeCount){
        totalTime=totalTime+count.times
    }


    return (
        <div className=''>
            <h1 className='text-4xl'>this is a details</h1>
            <div>
                <h1 className='text-4xl my-5'>Add A Break</h1>
                <div className='flex flex-row bg-gray-300  rounded-md'>
                    <p className='m-2 bg-white p-2 rounded-full'>30s</p>
                    <p className='m-2 bg-white p-2 rounded-full'>35s</p>
                    <p className='m-2 bg-white p-2 rounded-full'>20s</p>
                    <p className='m-2 bg-white p-2 rounded-full'>40s</p>
                </div>
            </div>
            {/* button calculate */}
            <div>
                <h1 className='text-4xl my-5'>Exercise Details</h1>

                <div className='flex flex-row bg-gray-200 rounded-md mb-4'>
                    <h1 className='text-2xl m-4'>Exercise time: {totalTime}s</h1>
                    
                </div>
                <div className='flex flex-row bg-gray-200 rounded-md'>
                    <h1 className='text-2xl m-4'>Break time</h1>
                </div>
            </div>
        </div>
    );
};

export default ExersiceDetails;