import { getCart } from "../lib/db/cart";
import { formatPrice } from "../lib/format";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";

export const metadata = {
    title: "Cart - Pump Labs",
};

export default async function CartPage() {
    const cart = await getCart();


    return(
        <div>
            <h1 className="mb-10 text-3xl font-bold">Shopping Cart!</h1>
            {cart?.items.map(cartItem => (
                <CartEntry 
                cartItem={cartItem} 
                key={cartItem.id} 
                setProductQuantity={setProductQuantity}
                />
            ))}
            {!cart?.items.length && <p>Cart is Empty.</p>}
            <div className="flex flex-col items-end sm:items-center">
                <p className="mb-3 font-bold">
                    Total: {formatPrice(cart?.subtotal || 0)}
                </p>
                <button className="btn btn-primary sm:w-[200px]">Checkout</button>
            </div>
        </div>
    );
}