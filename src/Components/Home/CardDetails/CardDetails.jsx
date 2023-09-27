import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {

    const details = useLoaderData();
    const {id} = useParams();
    const detail = details.find( detail => detail.id == id)

    const { image, amount, title, titleColor, description} = detail;

    console.log(id, detail);
    return (
        <div className="min-h-screen ">
            <div className="">
                <img src={image} alt={title} className="min-w-[60%] mx-auto" />
                <div className="max-w-[60%] h-16 bg-slate-500 mx-auto ">
                    <button className="p-2 text-white rounded mt-3 ml-3" style={{backgroundColor: titleColor}}>Donate ${amount}</button>
                </div>
                <div className="max-w-[60%] mx-auto p-4">
                    <h2 className="font-bold text-2xl text-black mb-4">{title}</h2>
                    <p>{description}</p>
                </div>
                
            </div>
        </div>
    );
};

export default CardDetails;