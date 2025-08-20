import { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/Firebase";

export default function Products({ cart, setCart }) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const querySnapshot = await getDocs(collection(db, "Products"));
                const productsArray = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(productsArray);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        }

        fetchProducts();
    }, []);

    const filteredList = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    
    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        setShowAlert(true);

        setTimeout(() => setShowAlert(false), 2000);
    };

    return (
        <>
            <Header showHome={true} showContact={true} />
            <div className="container mx-auto px-6 py-12">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="w-full md:w-1/2 mx-auto mb-8 block rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 px-4 py-2 outline-none shadow-sm"
                />

                <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-500 mb-12">
                    Our Products
                </h1>

               
                {showAlert && (
                    <div role="alert" className="alert alert-success mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 shrink-0 stroke-current" 
                            fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Product added to cart successfully!</span>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {filteredList.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col items-center text-center"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover rounded-xl mb-4"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                {product.title}
                            </h2>
                            <p className="text-pink-500 font-bold text-xl mb-4">
                                EGP{product.price}
                            </p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-pink-500 text-white px-4 py-2 rounded-xl font-medium 
                                        hover:bg-pink-700 hover:scale-105 transition-transform duration-300"
                                >
                                    ADD TO CART
                                </button>
                                <button
                                    className="border border-pink-500 text-pink-500 px-4 py-2 rounded-xl font-medium 
                                        hover:bg-pink-100 transition-colors duration-300"
                                >
                                    <Link to={`/product/${product.id}`}>SHOW INFO</Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
    