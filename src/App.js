
import './App.css';
import React,{useEffect, useState } from 'react';
import CardExersice from './Components/Home/CardExersice/CardExersice';
import ExersiceDetails from './Components/Home/ExersiceDetails/ExersiceDetails';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Navbar/NavBar';
import Faq from './Components/Faq/Faq';


function App() {
  const [card, setCard] = useState([]);
  const [timeCount, setTimeCount]=useState([])
  useEffect(()=>{
      fetch('fackdata.json')
      .then(res=>res.json())
      .then(data=>setCard(data))
  },[])

  const HandelBtn = (singleCart)=>{
    const newTime= [...timeCount, singleCart];
    setTimeCount(newTime);
   
}
  return (
    <div>
        <NavBar></NavBar>
        <div className="flex lg:flex-row md:flex-col sm:flex-col">
                <div className='w-4/5 m-8'>
                    <CardExersice card={card} HandelBtn={HandelBtn}></CardExersice>
                </div>
                <div className='bg-yellow-300  p-4'>
                    <ExersiceDetails timeCount={timeCount}></ExersiceDetails>
                </div>
        </div>
        <Faq></Faq>
        <Footer></Footer>
    </div>
  );
}

export default App;
