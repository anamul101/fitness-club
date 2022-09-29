import React from 'react';

const Faq = () => {
    return (
        <div className='text-center p-10 my-5'>
            <h1 className='text-4xl font-medium mb-5'>FAQ</h1>
            <hr />
            <div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                1.How does react works with virtual dom?
                </div>
            <div className="collapse-content"> 
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            </div>
            </div>
            </div>

            <div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
               2.What are the differences between props and state ?
                </div>
            <div className="collapse-content"> 
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            </div>
            </div>

            <div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                3. What is useEffect used for in React?
                </div>
            <div className="collapse-content"> 
                <p>What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed we'll refer to it as our “effect”, and call it later after performing the DOM updates.e</p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Faq;