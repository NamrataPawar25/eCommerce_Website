import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CreateTheme } from "../context/ThemeProvider";
import { CartContext } from '../context/CartContext';

const Card = ({ product }) => {
  const { theme } = useContext(CreateTheme);
  const { addToCart } = useContext(CartContext);
  

  return (
    <div>
      <div className={`card d-flex flex-column my-3 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-white text-dark'}`} style={{ width: '18rem' } }>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          {product.discount ? (
            <p>Price: ₹<del>{product.price}</del><span className='ps-2'>{product.discountedPrice}</span></p>
          ) : (
            <p>Price: ₹{product.price}</p>
          )}
          <Link to={`/dashboard/${product.id}`} className="btn btn-primary">View More</Link>
          <button className='btn btn-secondary ms-3' onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
