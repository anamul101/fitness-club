
import SingleCard from '../SingleCard/SingleCard';

const CardExersice = ({HandelBtn,card}) => {
    // const [card, setCard] = useState([])
    // useEffect(()=>{
    //     fetch('fackdata.json')
    //     .then(res=>res.json())
    //     .then(data=>setCard(data))
    // },[])
   
    return (
        <div className='mt-8'>
             <h1 className='text-4xl font-medium text-center'>Select today’s exercise</h1>
           
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 md:gap-8 mx-8'>
                {
                     card.map(singleCart=> <SingleCard key={singleCart.id} singleCart={singleCart} HandelBtn={HandelBtn}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default CardExersice;