
"use client";

import { useState } from 'react';
import ProductDetails from './ProductDetails';
import Cart from './Cart'; 


/* includes basic product listings, subject to change */

export default function ProductList(){
    const products = [
        { id: 1, name: 'Protein Powder', price: '$29.99', description: 'High quality whey protein powder'},
        { id: 2, name: 'Creatine Powder', price: '$19.99', description: 'Pure creatine monohydrte for muscle growth'},
        { id: 3, name: 'BCAAS', price: '$24.99', description: 'Essential amino acids for recovery.'},
        { id: 4, name: 'Pre-Workout Gummies', price: '$29.99', description: 'Our iconic pre workout snack with a proprietary blend of nutrients, caffiene, and power!'}
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    return (
        <div className = "p-4">
            <h2 className = "text-2xl font-bold mb-4">Products</h2>
            <ul>
                {products.map(product => (
                    <li key = {product.id} className = "mb-2">
                        <span 
                            className="font-semibold cursor-pointer"
                            onClick={() => setSelectedProduct(product)}
                            >
                                {product.name}
                            </span>
                            :   {product.price}
                            <button
                                className="ml-4 text-blue-500"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                    </li>
                ))}
            </ul>
            {selectedProduct && (
                <div className = "mt-4">
                    <ProductDetails product={selectedProduct} />
                    <button
                        className = "mt-4 text-blue-500"
                        onClick={() => setSelectedProduct(null)}
                    >
                        Back to Products
                    </button>
                </div>
            )}
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
    );
}

