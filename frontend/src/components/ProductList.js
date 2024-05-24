

export default function ProductList(){
    const products = [
        { id: 1, name: 'Protein Powder', price: '$29.99'},
        { id: 2, name: 'Creatine Powder', price: '$19.99'},
        { id: 3, name: 'BCAAS', price: '$24.99'},
        { id: 4, name: 'Pre-Workout Gummies', price: '$29.99'}
    ];

    return (
        <div className = "p-4">
            <h2 className = "text-2xl font-bold mb-4">Products</h2>
            <ul>
                {products.map(product => (
                    <li key = {product.id} className = "mb-2">
                        <span className="font-semibold">{product.name}</span>: {product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

