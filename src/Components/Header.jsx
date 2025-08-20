import { useState } from "react";
import { Link } from "react-router"; // خلي بالك من router

export default function Header({ showHome = false, showProducts = false, showContact = false }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full py-4 px-6 border-b border-gray-200 shadow-sm">
            <div className="container mx-auto flex items-center justify-between">
                
                
                <div className="flex-shrink-0">
                    <Link to={'/'}>
                        <img
                            src="/images/logoVerona.jpg"
                            alt="Verona"
                            className="h-16 md:h-20"
                        />
                    </Link>
                </div>

               
                <button
                    className="md:hidden flex flex-col space-y-1 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="w-6 h-0.5 bg-gray-700"></span>
                    <span className="w-6 h-0.5 bg-gray-700"></span>
                    <span className="w-6 h-0.5 bg-gray-700"></span>
                </button>

                {/* Links */}
                <nav
                    className={`${
                        isOpen ? "block" : "hidden"
                    } absolute top-16 left-0 w-full bg-white border-t md:border-0 md:bg-transparent md:static md:flex md:items-center md:space-x-6`}
                >
                    <div className="flex flex-col md:flex-row text-center md:space-x-6 py-4 md:py-0">
                        {showHome && (
                            <Link
                                to={"/"}
                                className="py-2 md:py-0 hover:text-pink-500"
                                onClick={() => setIsOpen(false)}
                            >
                                HOME
                            </Link>
                        )}
                        {showProducts && (
                            <Link
                                to={"/products"}
                                className="py-2 md:py-0 hover:text-pink-500"
                                onClick={() => setIsOpen(false)}
                            >
                                PRODUCTS
                            </Link>
                        )}
                        {showContact && (
                            <Link
                                to={"/contact"}
                                className="py-2 md:py-0 hover:text-pink-500"
                                onClick={() => setIsOpen(false)}
                            >
                                CONTACT
                            </Link>
                        )}
                    </div>
                </nav>

                
                <div className="hidden md:flex items-center space-x-4">
                    <Link to={"/products"} className="hover:text-pink-500">Search</Link>
                    <Link to={"/cart"}>
                        <img
                            src="/images/cart.png"
                            alt="cart"
                            className="w-8 md:w-10"
                        />
                    </Link>
                </div>
            </div>

            
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-3 pb-4">
                    <Link to={"/products"} className="hover:text-pink-500" onClick={() => setIsOpen(false)}>Search</Link>
                    <Link to={"/cart"} onClick={() => setIsOpen(false)}>
                        <img
                            src="/images/cart.png"
                            alt="cart"
                            className="w-8"
                        />
                    </Link>
                </div>
            )}
        </header>
    );
}
