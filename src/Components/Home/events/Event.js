import React from "react";
import "./event.css";
import { RatingView } from 'react-simple-star-rating'
const Event = () => {
  return (
    <div className="containers">
      <div className="event-container">
        <img src="https://i.ibb.co/xX9rPCk/1.jpg " alt="" />
        <h3>Cox-bazer and sandmathi</h3>

        <div className="element">
          <p>Duration time :5days</p>
          <p>
          <RatingView ratingValue={2} />
          </p>
        </div>
          <p>(Until March 2022)</p>
      </div>



      <div className="event-container">
        <img src="https://i.ibb.co/xX9rPCk/1.jpg " alt="" />
        <h3>Cox-bazer and sandmathi</h3>

        <div className="element">
          <p>Duration time :5days</p>
          <p>
          <RatingView ratingValue={2} />
          </p>
        </div>
          <p>(Until March 2022)</p>
      </div>





      <div className="event-container">
        <img src="https://i.ibb.co/xX9rPCk/1.jpg " alt="" />
        <h3>Cox-bazer and sandmathi</h3>

        <div className="element">
          <p>Duration time :5days</p>
          <p>
          <RatingView ratingValue={2} />
          </p>
        </div>
          <p>(Until March 2022)</p>
      </div>
      
    </div>
  );
};

export default Event;
