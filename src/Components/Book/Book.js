import React, { useEffect, useState } from "react";
import useAuth from "../../context/useAuth";
import { useForm } from "react-hook-form";
import "./Book.css";
import { useHistory, useParams } from "react-router-dom";
const BookAppointment = () => {
  const {id}=useParams()
  const { user } = useAuth();
  const [trips,setData]=useState([])
  const history=useHistory()
  //Collect booking data from api 
  useEffect(()=>{
      fetch(`https://macabre-cheateau-65418.herokuapp.com/trips/${id}`)
      .then(res=>res.json())
      .then(data=>setData(data))
  },[])
 console.log(trips)
  const { register, handleSubmit,reset } = useForm();
  //store booking 
  const onSubmit = (data) => {
    data.trips=trips
    data.status="Pendding"
    console.log(data)
    fetch("https://macabre-cheateau-65418.herokuapp.com/booking", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Order Done");
            history.push("/mybooking")
            reset()
          }
        });
  };
  return (
    <div className="apo-container">
      <div className="form-handle">
        <h1>Booking </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true, maxLength: 20 })}
           value={user?.email} />
          <input {...register("Name", { required: true, maxLength: 20 })} value={user?.displayName}/>
          <input type="text" {...register("phone", { maxLength:20 })} placeholder="Phone"/>
          <input type="text" {...register("address", { maxLength:20 })} placeholder="Address"/>
          <input type="date" {...register("date", { maxLength:20 })} />
          <input type="submit" value="Booking Now" />
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
