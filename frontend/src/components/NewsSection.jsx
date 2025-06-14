import React from "react";
import "./NewsSection.css"; // Make sure to create and import this CSS

const newsItems = [
  {
    date: "March 08, 2018",
    title: "About Amazing Technology",
    description: "Maecenas risus neque, placerat volutpat tempor ut, vehicula et felis.",
    author: "Jeremie Carlson",
    role: "CEO / Founder",
    image: "src/assets/news-image1.jpg",
    authorImage: "images/author-image.jpg",
    link: "news-detail.html",
  },
  {
    date: "February 20, 2018",
    title: "Introducing a new healing process",
    description: "Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.",
    author: "Jason Stewart",
    role: "General Director",
    image: "src/assets/news-image2.jpg",
    authorImage: "images/author-image.jpg",
    link: "news-detail.html",
  },
  {
    date: "January 27, 2018",
    title: "Review Annual Medical Research",
    description: "Vivamus non nulla semper diam cursus maximus. Pellentesque dignissim.",
    author: "Andrio Abero",
    role: "Online Advertising",
    image: "src/assets/news-image3.jpg",
    authorImage: "images/author-image.jpg",
    link: "news-detail.html",
  },
];

const NewsSection = () => {
  return (
    <section id="news">
      <div className="container">
        <h2 className="section-title">Latest News</h2>
        <div className="news-row">
          {newsItems.map((item, index) => (
            <div className="news-card" key={index}>
              <a href={item.link}>
                <img src={item.image} alt={item.title} className="news-image" />
              </a>
              <div className="news-info">
                <span>{item.date}</span>
                <h3><a href={item.link}>{item.title}</a></h3>
                <p>{item.description}</p>
                <div className="author">
                  <img src={item.authorImage} alt={item.author} className="author-img" />
                  <div className="author-details">
                    <h5>{item.author}</h5>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;


                   
