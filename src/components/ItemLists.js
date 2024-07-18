import React from 'react'
import * as Constants from '../utils/constants'

const ItemLists = (props) => {

    const { itemCards } = props
    
    return (
        <div>
            {
                itemCards.map((item) =>
                    <div key={item.card.info.id} className='flex h-64 mr-16'>
                        <div className='p-2  border-gray-200 border-b-2 text-left flex-col space-y-4' >
                            <div className='flex '>
                                <div className='m-4'>
                                    <div>
                                        <span className='text-bold py-3'>{item.card.info.name}</span>
                                        <div className='text-bold justify-start'>₹{item.card.info.price ? item.card.info.price / 100 : (item.card.info.defaultPrice) ? item.card.info.defaultPrice : 0}</div>
                                    </div>
                                </div>
                            </div>
                            <p className='w-10/12  m-2 text-sm'>{item.card.info.description}</p>
                        </div>
                        <div>
                            <div className='absolute'>
                                <button className='font-bold text-green-500 mx-[75px] mt-[150px] bg-white border-b-5 shadow-lg  py-2 px-4 rounded-md'>ADD</button>
                            </div>
                            <img className="mt-8 max-w-80" src={Constants.CDN_URL + item.card.info?.imageId} alt={item.card.info.name} />
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default ItemLists