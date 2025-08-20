import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/Firebase";
import { useEffect, useState } from "react";
import Header from "./Header";

export default function SingleProduct() {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const docRef = doc(db, "Products", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProduct({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        }

        fetchProduct();
    }, [id]);

    if (!product) return <p className="text-center text-gray-500 mt-20">Loading...</p>;

    return (
        <>
        <Header showContact={true} showHome={true} />
        <div className="container mx-auto p-8 flex flex-col md:flex-row gap-12 items-center">
            {/* صورة المنتج */}
            <div className="flex-1 flex justify-center">
                <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-80 h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" 
                />
            </div>

            {/* تفاصيل المنتج */}
            <div className="flex-1">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{product.title}</h1>
                <p className="text-2xl font-semibold text-pink-600 mb-6">EGP{product.price}</p>
                <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
                
                <button className="bg-pink-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-pink-700 transition-colors">
                    Add to Cart 🛒
                </button>
            </div>
        </div>
        </>
    );
}
