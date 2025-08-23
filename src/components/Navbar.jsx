import React, { useContext } from 'react'
import { CreateTheme } from "../context/ThemeProvider"
import { AuthContext } from '../context/Authprovider'
import { CartContext } from '../context/CartContext'   // ✅ import cart context
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { theme, toggleTheme } = useContext(CreateTheme)
    const { loggedUser, logout } = useContext(AuthContext)
    const { cart } = useContext(CartContext)   // ✅ get cart items

    return (
        <div>
            <nav className={`navbar navbar-expand-lg d-flex justify-content-between ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
                {/* Brand */}
                <div>
                    <Link className='navbar-brand' to="/dashboard">Navbar</Link>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                {/* Right Side */}
                <div className="d-flex align-items-center">

                    {/* Cart Icon with Count */}
                    <Link to="/cart" className="nav-link position-relative mx-3">
                        🛒
                        {cart.length > 0 && (
                            <span
                                className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-primary">
                                {cart.length}
                            </span>
                        )}
                    </Link>

                    {/* Logged User */}
                    {loggedUser && (
                        <>
                            <i style={{ color: theme === 'dark' ? '#f8f9fa' : '#212529' }}>
                                {loggedUser.name}
                            </i>
                            <button className='btn btn-sm btn-outline-danger mx-3' onClick={() => logout()}>
                                Logout
                            </button>
                        </>
                    )}

                    {/* Theme Toggle */}
                    <button className="btn btn-sm btn-outline-secondary" onClick={toggleTheme}>
                        {theme === 'light'
                            ? <i className="fa-solid fa-toggle-off"></i>
                            : <i className="fa-solid fa-toggle-on"></i>}
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
