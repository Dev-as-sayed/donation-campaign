import { useEffect } from "react";
import { useState } from "react";
import DonaationCard from "./DonationCard/DonaationCard";

const DonationCards = () => {

    const [donationCards, setDonationCards] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then( res => res.json())
        .then(data => setDonationCards(data))
    }, []);


    return (
            <div className="p-20 grid grid-cols-4 gap-3">
                {
                    donationCards.map( cards => <DonaationCard
                    key={cards.id}
                    cards={cards}
                    ></DonaationCard>)
                }
            </div>
    );
};

export default DonationCards;