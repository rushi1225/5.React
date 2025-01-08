import React, { useEffect, useState } from 'react'

const Products = () => {


    const [products, setProducts] = useState([])


    async function getProducts() {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.Products);
        } catch (error) {
            console.log("error")
        }
    }


    useEffect(() => {
        getProducts()
    }, [])







    return (
        <>
            <h1>Products</h1>

            <div className='container'>
                <div className='product_card' key={products.id}></div>
                {/* <img src="{products.thumbnail}" alt="" /> */}
            </div>
        </>
    )
}

export default Products
