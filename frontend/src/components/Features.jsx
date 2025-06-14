import React from "react";
import "./Features.css";

const Features = () => {
  const boxes = [
    {
      img: "images/lab.jpg",
      title: "Grab Your Lab Report",
      text: "Lab report can be get through online.",
      link: "/reports",
    },
    {
      img: "images/medicine.jpg",
      title: "Buy Medicine Online",
      text: "Medicine are available online.",
      link: "/medicine",
    },
    {
      img: "images/appointment-image.jpg", // Replace with your image
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


