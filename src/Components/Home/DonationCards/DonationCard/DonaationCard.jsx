import { Link } from "react-router-dom";
import CardDetails from "../../CardDetails/CardDetails";

const DonaationCard = ({cards}) => {
    const {id, image, type, typeColor, typeBg, title, titleColor, cardBackground} = cards;
    
    return (
        <Link to={`/deatles/${id}`}>
            <div className="card card-compact max-w-fit shadow-xl" style={{backgroundColor:cardBackground}}>
                <figure><img src={image} alt={title} /></figure>
                <div className="card-body">
                    <p className="px-2 py-1 max-w-fit rounded" style={{color:typeColor, backgroundColor:typeBg}}>{type}</p>
                    <h2 className={`card-title `} style={{color:titleColor}}>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default DonaationCard;