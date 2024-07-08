import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as CONSTANTS from '../utils/constants'

export default function Header() {

    const [login, setLogin] = useState(1)

    const handleLogin = () => {
        setLogin(!login)
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img src={CONSTANTS.LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={handleLogin}>{login ? "Login" : "Logout"}</button>
                </ul>
            </div>
        </div>
    )
}