import React, { useEffect, useState } from 'react';
import './Style/Events.css'
import EventsP from './EventsP';
const Events = () => {
    const [data,Setdata]=useState([])
    useEffect(()=>{
        fetch("https://macabre-cheateau-65418.herokuapp.com/getExternal")
        .then(res=>res.json())
        .then(data=>Setdata(data))
    })
    return (
        <div className="doctors text-primary">
            <h1>OUR EXTERNAL TRIPS</h1>
            <div className="doctor-container">
            {
                data?.map(doctor=><EventsP key={doctor.name} doctor={doctor}></EventsP>)
            }
            </div>
        </div>
    );
};

export default Events;