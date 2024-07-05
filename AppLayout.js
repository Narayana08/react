import React from 'react'
import ReactDOM from 'react-dom/client'
const data = require('./src/components/data')


function AppLayout() {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

function Body() {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {data.restaurants.length > 0 ?
                    data.restaurants.map(data => {
                        return < RestaurantCard key={data.info.id} restuarantData={data} />
                    }) : `No restaruants are currently avaiable`}
            </div>
        </div>
    )
}

function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="data:image/png;base64,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" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

function RestaurantCard(props) {

    const { name, costForTwo, cuisines, avgRating, sla: { deliveryTime }, cloudinaryImageId: imageId } = props.restuarantData.info

    return (
        <div className='restaurant-card'>
            <img
                className="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + imageId} alt='restaruant-logo'
            />
            <div className='res-content'>
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating}</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)