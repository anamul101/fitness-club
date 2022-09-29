import React from 'react';

const SingleCard = (props) => {
    const {singleCart,HandelBtn} = props;
    const {name,age,picture,about,times,id} = singleCart;
    
    return (
        <div>
            <div className=''>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={picture} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body  ">
                        <h2 className="card-title">{name}</h2>
                        <p>{about?about.slice(0,50):"np data found"}</p>
                        <p>For Age: {age}</p>
                        <p>Time required: {times}s</p>
                        <div className="card-actions">
                            <button onClick={()=>HandelBtn(singleCart)} className="btn btn-primary">Add To List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;