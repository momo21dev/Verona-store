export default function Cart({ cart, setCart }) {
    // function to remove product from cart
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };
console.log(cart)
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-pink-500 mb-6">Your Cart</h1>
            {cart.length === 0 ? (
                <p className="text-gray-500">Cart is empty</p>
            ) : (
                <div className="grid gap-4">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center bg-white shadow rounded-xl p-4"
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-16 h-16 object-cover rounded-lg border"
                            />

                            {/* Product Info */}
                            <div className="flex-1 px-4">
                                <h2 className="font-medium text-gray-800">{item.title}</h2>
                                <p className="text-sm text-gray-500">{item.price}</p>
                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-sm bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
