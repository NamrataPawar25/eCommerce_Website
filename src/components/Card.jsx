import React from 'react'

const Card = ({product}) => {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        {product.discount ?(<p>Price: ₹<del>{product.price}</del><span className='ps-2'>{product.discountedPrice}</span></p>):(<p>{product.price}</p>)}
                        <a href="#" className="btn btn-primary">View More</a>
                        <button className='btn btn-secondary ms-3'>Add to cart</button>
                    </div>
            </div>
        </div>
    )
}

export default Card