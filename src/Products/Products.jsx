import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import ProductCard from "../ProductCart/ProductCard";


const Products = () => {

    // const [products, setproducts] = useState();
    // useEffect(() => {
    //     fetch('https://dummyjson.com/products')
    //         .then(res => res.json())
    //         .then(data => setproducts(data.products))

    // }, [])
    // console.log(products);

    const { products } = useLoaderData()
    console.log(products);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-3 ">
                {
                    products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    )
}

export default Products
