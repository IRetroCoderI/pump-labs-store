
"use client";

export default function Cart({cartItems, removeFromCart}){
    return(
        <div className="border p-4 rounded shadow-lg bg-white mt-4 text-black">
            <h2 className="text-2xl font-bold mb-2 text-black">Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className = "mb-2">
                            <span className="font-semibold">{item.name}</span>: {item.price}
                            <button
                                className="ml-4 text-red-500"
                                onClick={() => removeFromCart(index)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}