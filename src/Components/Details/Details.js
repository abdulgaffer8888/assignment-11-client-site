import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './doct.css'
const Details = () => {
  const { id } = useParams();
  const [data,setData]=useState([])
  useEffect(()=>{
      fetch(`https://macabre-cheateau-65418.herokuapp.com/trips/${id}`)
      .then(res=>res.json())
      .then(data=>setData(data))
  },[])

  

  const {_id,img,name,Duration,about,price,discription}=data || {
      name: "",
      img: "",
      star: "",
      Duration: "",
      about: "",
      price: "",
      discription: "",
    };
  return (
    <div className="d-containier">
      <div className="mx-5 d-left">
        <div>
          <img src={img} alt="img" width="280" />
          <h4 >{name}</h4>
            <p >{Duration}</p>
        </div>
        <Link className="button" to={`/book/${_id}`}>Booking Now</Link>
      </div>
      <div className="d-right ">
        <p>{about}</p>
        <hr />
        <p>{discription}</p>
        <hr />
        <div className="Rowdata">
        <h6>Price</h6>
        <h6>{price}$</h6>
        </div>
        <hr />
        <div className="Rowdata">
        <h6>discount</h6>
        <h6>20%</h6>
        </div>
        <hr />
        <div className="Rowdata">
        <h6>Duration</h6>
        <h6>{Duration}</h6>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Details;
