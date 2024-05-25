

/*file that describes each products name, description, price...*/

export default function ProductDetails({ product }){
    if (!product) {
        return null;
    }

    return(
        <div className = "border p-4 rounded shadow-1g bg-white">
            <h2 className="text-2xl font-bold mb-2 text-black">{product.name}</h2>
            <p className="text-lg mb-4 text-black">{product.description}</p>
            <p className="text-xl font-semibold text-black">{product.price}</p>
        </div>
    );
}