import React from "react";
import "./TeamSection.css"; // Add custom styles

const doctors = [
  {
    name: "Nate Baston",
    specialization: "General Principal",
    phone: "010-020-0120",
    email: "general@company.com",
    image: "images/team-image1.jpg",
    social: ["linkedin-square", "envelope-o"],
  },
  {
    name: "Jason Stewart",
    specialization: "Pregnancy",
    phone: "010-070-0170",
    email: "pregnancy@company.com",
    image: "images/team-image2.jpg",
    social: ["facebook-square", "envelope-o", "flickr"],
  },
  {
    name: "Miasha Nakahara",
    specialization: "Cardiology",
    phone: "010-040-0140",
    email: "cardio@company.com",
    image: "images/team-image3.jpg",
    social: ["twitter", "envelope-o"],
  },
];

const TeamSection = () => {
  return (
    <section id="team">
      <div className="container">
        <h2 className="section-title">Our Doctors</h2>
        <div className="team-row">
          {doctors.map((doctor, index) => (
            <div className="team-card" key={index}>
              <img src={doctor.image} alt={doctor.name} className="team-img" />
              <div className="team-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.specialization}</p>
                <p><i className="fa fa-phone"></i> {doctor.phone}</p>
                <p>
                  <i className="fa fa-envelope-o"></i>{" "}
                  <a href={`mailto:${doctor.email}`}>{doctor.email}</a>
                </p>
                <div className="social-icons">
                  {doctor.social.map((icon, idx) => (
                    <a key={idx} href="#" className={`fa fa-${icon}`}></a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

