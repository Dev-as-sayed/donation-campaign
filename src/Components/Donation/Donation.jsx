import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { storedDonationFnc } from "../../Utility/LocalStoreg";
import SingleDonation from "./SingleDonation/SingleDonation";

const Donation = () => {

    const [depositStore, setDepositStore] = useState([]);
    const [displayDeposit, setDisplayDeposit] = useState([]);

    const donations = useLoaderData();
    // console.log(donations);
    useEffect( () => {
        const storedDonatedIds = storedDonationFnc();
        if(donations.length > 0 ){
            const doneteds = donations.filter( donnnnation => storedDonatedIds.includes(donnnnation.id))
            
            // console.log(doneteds);
            setDepositStore(doneteds);
            setDisplayDeposit(doneteds)
        }
    }, []);

    // console.log(depositStore);
    return (
        <div className="bg-white">
            <div className="grid grid-cols-2 gap-2 mx-10 my-16">
                {
                    depositStore.map( depo => <SingleDonation
                        key={depo.is}
                        depo={depo}
                    ></SingleDonation>)
                }
            </div>
        </div>
    );
};

export default Donation;