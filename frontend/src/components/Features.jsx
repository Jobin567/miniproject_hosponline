import React from "react";
import "./Features.css";
import { assets } from "../assets/assets";

const Features = () => {
  const boxes = [
    {
      img: assets.lab,
      title: "Grab Your Lab Report",
      text: "Lab report can be get through online.",
      link: "/reports",
    },
    {
      img: assets.medicine,
      title: "Buy Medicine Online",
      text: "Medicine are available online.",
      link: "/medicine",
    },
    {
      img: assets.appointment, // Replace with your image
      title: "Book Appointment",
      text: "Easily schedule appointments online.",
      link: "/booking",
    },
  ];

  return (
    <section className="news-section">
        <h1 style={{ 
  fontWeight: 'bold', 
  color: 'orange', 
  fontSize: '2.5rem', 
  marginBottom: '30px', 
  textAlign: 'center' 
}}>
  Our Services
</h1>


      <div className="news-container">
        
        {boxes.map((box, index) => (
          <div className="news-card" key={index}>
            <a href={box.link}>
              <img src={box.img} alt={box.title} className="news-image" />
            </a>
            <div className="news-info">
              <h3><a href={box.link}>{box.title}</a></h3>
              <p>{box.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;




