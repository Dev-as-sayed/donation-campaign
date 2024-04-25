import { Helmet } from "react-helmet-async";
import DonationCards from "./DonationCards/DonationCards";
import Hero from "./Hero.jsx/Hero";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Donation Campain | Home</title>
            </Helmet>
            <Hero></Hero>
            <div>
                <DonationCards></DonationCards>
            </div>
        </div>
    );
};

export default Home;