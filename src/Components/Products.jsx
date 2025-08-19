import { useEffect, useState } from "react";
import Header from "./Header";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('')


    useEffect(() => {
        async function fetchData() {
            const api = "https://api.escuelajs.co/api/v1/products";
            const data = await fetch(api);
            const json = await data.json();
            setProducts(json);
        }
        fetchData();
    }, []);

    const filterdList = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))


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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8">
                    {filterdList.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col items-center text-center"
                        >
                            <img
                                src={product.images[0]} // استخدم أول صورة عشان تبقى مضمونة
                                alt={product.title}
                                className="w-full h-full object-cover rounded-xl mb-4"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                {product.title}
                            </h2>
                            <p className="text-pink-500 font-bold text-xl mb-4">
                                ${product.price}
                            </p>
                            <div className="flex gap-3">
                                <button
                                    className="bg-pink-500 text-white px-4 py-2 rounded-xl font-medium 
                                hover:bg-pink-700 hover:scale-105 transition-transform duration-300"
                                >
                                    ADD TO CART
                                </button>
                                <button
                                    className="border border-pink-500 text-pink-500 px-4 py-2 rounded-xl font-medium 
                                hover:bg-pink-100 transition-colors duration-300"
                                >
                                    SHOW INFO
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
