import DonationCards from "./DonationCards/DonationCards";
import Hero from "./Hero.jsx/Hero";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div>
                <DonationCards></DonationCards>
            </div>
        </div>
    );
};

export default Home;