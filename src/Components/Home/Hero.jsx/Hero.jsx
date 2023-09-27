// import HeroBG from './HeroImg/HeroBG.png'

const Hero = () => {
    return (
        <div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.postimg.cc/0QwcnNp5/HeroBG.png)'}}>
            <div className="hero-overlay bg-[#FFFFFFF2] bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                <h1 className="mb-5 text-2xl text-black font-bold">I Grow By Helping People In Need</h1>
                <p className="mb-5 bg-transparent"><span ><input type="text" placeholder="Search here...." className="rounded-l-lg p-2 bg-gray-300" /></span><span ><button className="btn-secondary rounded-r-lg p-2">Search</button></span></p>
                </div>
            </div>
        </div>
    );
};

export default Hero;