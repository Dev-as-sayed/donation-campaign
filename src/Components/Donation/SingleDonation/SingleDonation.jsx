import { Link } from "react-router-dom";


const SingleDonation = ({depo}) => {
    const {id, image, type, titleColor, title, typeColor, typeBg, cardBackground, amount} = depo;
    return (
        <div className="flex max-h-64 w-[35rem] rounded" style={{backgroundColor:cardBackground}}>
            <div className="max-h-fit">
                <img src={image} alt={title} className=" rounded "/>
            </div>
            <div className="card-body flex-grow">
                <p className="px-2 py-1 max-w-fit rounded" style={{color:typeColor, backgroundColor:typeBg}}>{type}</p>
                <h2 className= "card-title text-black" >{title}</h2>
                <p style={{color:titleColor}}>${amount}</p>               
                <Link to={`/deatles/${id}`}><button className="p-2 text-white rounded" style={{backgroundColor:titleColor}}>View Details</button></Link>
            </div>
        </div>
    );
};

export default SingleDonation;