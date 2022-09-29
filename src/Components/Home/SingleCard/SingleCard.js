import React from 'react';

const SingleCard = (props) => {
    const {singleCart,HandelBtn} = props;
    const {name,age,picture,about,times,} = singleCart;
    
    return (
        <div>
            <div className=''>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={picture} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body  ">
                        <h2 className="card-title text-2xl font-medium">{name}</h2>
                        <p className='text-slate-500'>{about?about.slice(0,60):"np data found"}...</p>
                        <p className='font-semibold'>For Age: <span className='font-semibold'> {age}</span></p>
                        <p className='font-semibold'>Time required: <span className='font-semibold'>{times}s</span></p>
                        <div className="card-actions">
                            <button onClick={()=>HandelBtn(singleCart)} className="btn btn-block btn-primary">Add To List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;