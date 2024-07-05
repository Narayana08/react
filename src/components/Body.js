import { useState } from 'react'
import RestaurantCard from './RestaurantCard'

export default function Body(props) {
    const { data } = props
    const [restaurants, setRestaurants] = useState(data.restaurants)

    const topRatedRestaurants = () => {
        setRestaurants(restaurants.filter(restaurant => restaurant.info.avgRating > 4))
    }

    return (
        <div className="body">
            <div className="search">Search</div>
            <button onClick={() => topRatedRestaurants()}>Top Rated Restaruants</button>
            <div className="restaurant-container">
                {restaurants.length > 0 ?
                    restaurants.map(data => {
                        return <RestaurantCard key={data.info.id} restuarantData={data.info} />
                    }) : `No restaruants are currently avaiable`}
            </div>
        </div>
    )
}
