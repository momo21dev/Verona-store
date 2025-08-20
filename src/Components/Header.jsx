import { Link } from "react-router";

export default function Header({ showHome = false, showProducts = false, showContact = false }) {
    return (
        <div className="w-full py-4 px-6 border-b border-gray-200">
            <div className="container mx-auto flex flex-wrap items-center justify-between">

                <div className="flex-shrink-0">
                    <Link to={'/'}>
                        <img
                            src="/images/logoVerona.jpg"
                            alt="Verona"
                            className="h-22 md:h-26"
                        />
                    </Link>

                </div>


                <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-center md:justify-center space-x-4 md:space-x-6">
                    {showHome && <button className="hover:text-pink-500"><Link to={'/'}>HOME</Link></button>}
                    {showProducts && <Link to={'/products'} className="hover:text-pink-500">PRODUCTS</Link>}
                    {showContact && <button className="hover:text-pink-500"><Link to={'/contact'}>CONTACT</Link> </button>}

                </div>


                <div className="flex items-center space-x-3 md:space-x-4 mt-4 md:mt-0">

                    <button className="hover:text-pink-500"><Link to={'/products'}>Search</Link></button>
                    <Link to={'/cart'}>
                    <img
                        src="/images/cart.png"
                        alt="cart"
                        className="w-8 md:w-10"
                    />
                    </Link>
                </div>
            </div>
        </div>
    )
}

