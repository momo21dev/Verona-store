import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Header from "./Header";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            
            <Header showHome={true} showProducts={true} showContact={false} />

           
            <main className="flex-grow flex flex-col justify-center items-center mt-16 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
                    <span className="text-black">Get in</span>{" "}
                    <span className="text-pink-500">Touch With Us</span>
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mb-10">
                    We’d love to hear from you! Reach out through WhatsApp, Instagram, or TikTok and let’s stay connected.  
                </p>

               
                <div className="flex space-x-10">
                    <a
                        href="https://wa.me/201283687355"  
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-500 transition-colors duration-300"
                    >
                        <FaWhatsapp size={40} />
                    </a>
                    <a
                        href="https://www.instagram.com/verona_accessoriess?igsh=MXRndGR0YzF2M2IzaQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors duration-300"
                    >
                        <FaInstagram size={40} />
                    </a>
                    <a
                        href="https://www.tiktok.com/@verona_accessoriess?_t=ZS-8ymHRR5J01o&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors duration-300"
                    >
                        <FaTiktok size={40} />
                    </a>
                </div>
            </main>

            
            <footer className="bg-gray-900 text-white py-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-4 md:space-y-0">
                    <h2 className="text-2xl font-bold tracking-wide hover:text-pink-500">
                        VERONA
                    </h2>
                    <p className="text-gray-400 text-sm">© 2025 VERONA. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
