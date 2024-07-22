import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import * as CONSTANTS from '../utils/constants'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

export default function Header() {

    const [login, setLogin] = useState(1)
    const data = useContext(UserContext)

    /* subscribing to the cart slice from the store using use selector hook */
    const cart = useSelector(store => store.cart.items)

    const handleLogin = () => {
        setLogin(!login)
    }

    return (
        <div className="flex justify-between  bg-orange-300 shadow-lg m-5">
            <div className="logo-container">
                <img className='w-56' src={CONSTANTS.LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-3" >
                    <li className='px-5'><Link to='/'>Home</Link></li>
                    <li className='px-5'><Link to='/about'>About Us</Link></li>
                    <li className='px-5'><Link to="/contact">Contact Us</Link></li>
                    <li className='px-5'><Link to="/grocery">Grocery</Link></li>
                    <li className='px-5'><Link to="/cart">Cart-{cart.length} items</Link></li>
                    <li className='px-5 font-bold'>{data.loggedInUser}</li>
                    <button className="login" onClick={handleLogin}>{login ? "Login" : "Logout"}</button>
                </ul>
            </div>
        </div>
    )
}