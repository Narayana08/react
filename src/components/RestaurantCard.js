import * as CONSTANTS from '../utils/constants'

const RestaurantCard = (props) => {

    const { name, costForTwo, cuisines, avgRating, sla: { deliveryTime }, cloudinaryImageId: imageId } = props.restuarantData

    return (
        <div className='m-4 p-4 w-[250]' style={{ background: "#f0f0f0" }}>
            <div>
                <img
                    className="rounded-lg min-w-full"
                    src={CONSTANTS.CDN_URL + imageId} alt='restaruant-logo'
                />
            </div>
            <div className='res-content'>
                <h3 className='font-bold py-4 text-xl'>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating}</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>Promoted</label>
                <RestaurantCard {...props} />
            </div>
            
        )
    }
}

export default RestaurantCard