import React from 'react';
import { useEffect, useState } from "react";
import EventsP from '../Home/EventsP';


const Trips = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://macabre-cheateau-65418.herokuapp.com/trips')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className="doctors text-primary">
        <h1>OUR INTERNAL TRIPS</h1>
        <div className="doctor-container">
       {data?.map((d) => (
            <EventsP key={d._id} doctor={d}></EventsP>
          ))}
        </div>
      </div>
    );
};

export default Trips;