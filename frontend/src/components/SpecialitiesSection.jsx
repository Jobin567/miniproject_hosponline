import React from "react";
import { Link } from "react-router-dom";
import "./SpecialitiesSection.css";

const specialities = [
  {
    title: "Oncology",
    description:
      "An oncologist is a doctor who treats cancer and provides medical care.",
    image: "/images/oncology.jpg",
  },
  {
    title: "Cardiology",
    description:
      "A cardiologist is a specialist medical doctor who treats heart conditions.",
    image: "/images/cardiology.png",
  },
  {
    title: "Dermatology",
    description:
      "A dermatologist is a doctor who manages skin, hair, and cosmetic issues.",
    image: "/images/dermatology.png",
  },
  {
    title: "Neurology",
    description:
      "A neurologist is a physician who diagnoses and treats nervous system disorders.",
    image: "/images/neurology.png",
  },
  {
    title: "Nephrology",
    description:
      "A nephrologist specializes in the care and treatment of kidney diseases.",
    image: "/images/nephrology.png",
  },
  {
    title: "Obstetrics & Gynecology",
    description:
      "Doctors in this field care for women during pregnancy and reproductive health.",
    image: "/images/gynecology.png",
  },
];

const SpecialitiesSection = () => {
  return (
    <section className="specialities-section py-5">
      <div className="container text-center">
        <h1 className="text-success fw-bold mb-2">Book Appointments</h1>
        <h2 className="fw-semibold mb-4">Our Specialities</h2>
         <div className="mt-4 text-end">
  <Link
    to="/doctor"
    className="btn btn-success px-4 py-2 fw-semibold shadow-sm rounded-pill"
    style={{
      fontSize: "0.95rem",
      letterSpacing: "0.5px",
      backgroundColor: "	#FFCC00",
      borderColor: "#157347",
      transition: "all 0.3s ease-in-out",
    }}
  >
    View Doctors
  </Link>
</div>
<br></br>

        <div className="row justify-content-center">
          {specialities.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-4 d-flex mb-4" key={index}>
              <div
                className="card w-100 shadow-sm"
                style={{ backgroundColor: "#fffdd0" }}
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text" style={{ fontSize: "0.95rem" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Only one View Doctors button below all cards */}
        
      </div>
    </section>
  );
};

export default SpecialitiesSection;

