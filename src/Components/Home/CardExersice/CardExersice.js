
import SingleCard from '../SingleCard/SingleCard';

const CardExersice = ({HandelBtn,card}) => {
    // const [card, setCard] = useState([])
    // useEffect(()=>{
    //     fetch('fackdata.json')
    //     .then(res=>res.json())
    //     .then(data=>setCard(data))
    // },[])
   
    return (
        <div>
             <h1 className='text-4xl'>this is a card</h1>
           
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-8'>
                {
                     card.map(singleCart=> <SingleCard singleCart={singleCart} HandelBtn={HandelBtn}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default CardExersice;