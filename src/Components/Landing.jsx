import { FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router";
import Header from "./Header";


export default function Landing() {
    return (
        <>
            <Header showHome={true} showProducts={true} showContact={true} /> 
            
            <div className="flex flex-col md:flex-row justify-center items-center mt-12 md:space-x-20 px-6">
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h1 className="text-3xl md:text-5xl font-bold leading-snug">
                        <span className="text-black">Elevate Your</span> <br />
                        <span className="text-black">Look With,</span> <br />
                        <span className="text-pink-500">VERONA.</span>
                    </h1>
                    <button
                        className="mt-6 bg-pink-500 text-white px-4 py-2 text-lg font-semibold 
                        hover:bg-pink-700 hover:scale-105 hover:shadow-lg 
                        transition-all duration-300 ease-in-out"
                    >
                        <Link to={'/products'}>Shop Now</Link>
                    </button>
                </div>
                <img
                    src="/images/top-view-gold-chains-still-life.jpg"
                    alt="gold chains"
                    className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
                />
            </div>

            
            <div className="flex justify-center mt-20 flex-col items-center text-center px-6">
                <h1 className="font-serif text-2xl md:text-3xl mb-4 text-pink-500">OUR MISSION</h1>
                <p className="max-w-3xl text-lg md:text-xl font-semibold leading-relaxed text-gray-700">
                    To inspire every girl to express her unique beauty <br className="hidden md:block" />
                    and confidence through elegant, high-quality accessories <br className="hidden md:block" />
                    that blend timeless style with modern trends.
                </p>
            </div>

           
            <div className="flex flex-col md:flex-row justify-center items-center mt-20 space-y-6 md:space-y-0 md:space-x-10 px-6">
                <img
                    src="/images/display-shiny-elegant-gold-chain.jpg"
                    alt="gold chains"
                    className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
                />
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
                        <span className="text-gray-900">Shipping All Over</span> <br />
                        <span className="text-red-800">Egypt.</span>
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
                        Fast, reliable delivery straight to your door — no matter where you are in Egypt.
                    </p>
                </div>
            </div>

          
            <footer className="bg-gray-900 text-white mt-20 py-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-4 md:space-y-0">
                    {/* Store Name */}
                    <h2 className="text-2xl font-bold tracking-wide hover:text-pink-500">
                        VERONA
                    </h2>

                  
                    <div className="flex space-x-6">
                        <a
                            href="https://www.instagram.com/verona_accessoriess?igsh=MXRndGR0YzF2M2IzaQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition-colors duration-300"
                        >
                            <FaInstagram size={28} />
                        </a>
                        <a
                            href="https://www.tiktok.com/@verona_accessoriess?_t=ZS-8ymHRR5J01o&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition-colors duration-300"
                        >
                            <FaTiktok size={28} />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
