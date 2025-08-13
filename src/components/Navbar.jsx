import create from 'prompt-sync'
import React, { useContext } from 'react'
import { CreateTheme } from "../context/ThemeProvider"
import { AuthContext } from '../context/Authprovider'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { theme, toggleTheme } = useContext(CreateTheme)
    const { loggedUser, logout } = useContext(AuthContext)
    return (
        <div>
            <nav className={`navbar navbar-expand-lg  display-flex justify-content-between ${theme == 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
                <div><Link className='navbar-brand' to="/dashboard">Navbar</Link></div>
                <div>
                    {loggedUser && <><i style={{ color: theme === 'dark' ? '#f8f9fa' : '#212529' }}>{loggedUser.name}</i><button className='mx-3' onClick={() => logout()}>Logout</button></>}

                    <button onClick={() => toggleTheme()}>
                        {theme == 'light' ? <i class="fa-solid fa-toggle-off"></i> : <i class="fa-solid fa-toggle-on"></i>}
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar