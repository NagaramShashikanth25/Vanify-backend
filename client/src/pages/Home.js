import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const services = [
  {
    icon: "/images/cleaning.png",
    title: "Cleaning",
    desc: "House cleaning and organizing"
  },
  {
    icon: "/images/plumbing.png",
    title: "Plumbing",
    desc: "Faucet, pipe, and toilet repairs"
  },
  {
    icon: "/images/electrical.png",
    title: "Electrical",
    desc: "Light fixtures, wiring and more"
  },
  {
    icon: "/images/moving.png",
    title: "Moving",
    desc: "Furniture moving and hauling"
  }
];

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Quickly get the temporary help you need</h1>
        <p>Find trusted workers for a variety of home services</p>
        <Link to="/select-service">
          <button>Book Now</button>
        </Link>
      </div>

      <h2>Popular Services</h2>
      <div className="services">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <img src={service.icon} alt={service.title} />
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}