import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../../Utility/LocalStoreg";
import { Helmet } from "react-helmet-async";

const CardDetails = () => {

    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const detail = details.find( detail => detail.id === idInt)
    const { image, amount, title, titleColor, description} = detail;

    const notify = () => {
        saveDonation(idInt);
        toast("Your donation made a difference! Thank you!")
    };

    // console.log(id, detail);
    return (
        <div className="min-h-screen ">
            <Helmet> 
                <title>Donation Campain | Details</title>
            </Helmet>
            <div className="">
                <img src={image} alt={title} className="min-w-[60%] mx-auto" />
                <div className="max-w-[60%] h-16 bg-slate-500 mx-auto ">
                    <button onClick={notify} className="p-2 text-white rounded mt-3 ml-3" style={{backgroundColor: titleColor}}>Donate ${amount}</button>
                    <ToastContainer />
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