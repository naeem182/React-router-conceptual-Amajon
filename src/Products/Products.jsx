import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


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
        <div>
            <div>products router</div>
        </div>
    )
}

export default Products
