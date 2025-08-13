import React, { useState } from 'react'
import Card from '../components/Card'
import { CreateTheme } from "../context/ThemeProvider";
import { useContext } from 'react';


const Dashboard = ({ products }) => {
    const [productstate, setProductstate] = useState(products)
      const { theme } = useContext(CreateTheme)

    return (
        <div className={`${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
        <div className="container d-flex flex-wrap">
            {productstate.map((product, index) => (
                    <div className='badge bg-secondary mx-3 my-3 p-3' key={index}>
                    {product.category}
                    </div>
                ))}
        </div>
        <div className='container'>
            <div className="row">
                {productstate.map((product, index) => (
                    <div className='col-12 col-md-6 col-lg-3' key={index}>
                        <Card product={product} />
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Dashboard