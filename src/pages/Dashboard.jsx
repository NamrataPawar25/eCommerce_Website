import React, { useState } from 'react'
import Card from '../components/Card'


const Dashboard = ({ products }) => {
    const [productstate, setProductstate] = useState(products)

    return (
        <>
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
        </>
    )
}

export default Dashboard