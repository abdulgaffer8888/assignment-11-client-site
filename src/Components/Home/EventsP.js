import React from 'react';
import { Link } from 'react-router-dom';
import { RatingView } from 'react-simple-star-rating';
import './Style/doctor.css'
const EventsP =({doctor})=> {
    const {_id,img,name,star,Duration,about,price}=doctor
    return (
        <Link to={`/details/${_id}`}><div className="doctor">
        <img src={img} alt="" />
        <div>
        <h3 className="dark">{name}</h3>
         <small>Duration time :{Duration}</small>
         <p><RatingView ratingValue={star} /></p>
         <p>Price {price} $</p>
         <p></p>
         <p>(Until March 2022)</p>
         <p>{about}</p>
        </div>
    </div></Link>
    );
};

export default EventsP;