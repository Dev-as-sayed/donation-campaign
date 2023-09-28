import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { storedDonationFnc } from "../../Utility/LocalStoreg";
import SingleDonation from "./SingleDonation/SingleDonation";

const Donation = () => {

    const [depositStore, setDepositStore] = useState([]);
    const donations = useLoaderData();
    useEffect( () => {
        const storedDonatedIds = storedDonationFnc();
        if(donations.length > 0 ){
            const doneteds = donations.filter( donnnnation => storedDonatedIds.includes(donnnnation.id))
            
            setDepositStore(doneteds);
        }
    }, []);
    return (
        <div className="bg-white">
            <div className="grid grid-cols-2 gap-2 mx-10 my-16">
                {
                    depositStore.map( depo=> <SingleDonation
                        key={depo.id}
                        depo={depo}
                    ></SingleDonation>)
                }
            </div>
        </div>
    );
};

export default Donation;