import * as CONSTANTS from '../utils/constants'

export default function RestaurantCard(props) {

    const { name, costForTwo, cuisines, avgRating, sla: { deliveryTime }, cloudinaryImageId: imageId } = props.restuarantData

    return (
        <div className='restaurant-card'>
            <img
                className="res-logo"
                src={CONSTANTS.CDN_URL + imageId} alt='restaruant-logo'
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