import React from 'react'
import './RestaurantCard.css'

const RestaurantCards = ({ resData }) => {
  
  return (
    <div className='res-card'>
      <div key={resData.info.id}>
        <img 
          src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + resData.info.cloudinaryImageId} 
          alt='restaurant food' 
          className='cardfood'
        />
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(', ')}</h4>
        <h4>{resData.info.avgRating}</h4>
        <h4>{resData.info.costForTwo} -/-</h4>
        <h4>{resData.info.sla?.deliveryTime} mins</h4>
      </div>
    </div>
  )
}

export default RestaurantCards
