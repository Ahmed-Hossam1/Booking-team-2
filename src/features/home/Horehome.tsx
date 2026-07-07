import { MapPin, Calendar, Sparkles } from "lucide-react";
import img1 from '../../assets/h1.jpg'
import img2 from '../../assets/h2.jpg'
import img3 from '../../assets/nav.jpg'
import './Horehome.css'

export default function Horehome() {
   return (
  <section className="hero-section">

    <div className="circle-one"></div>
    <div className="circle-two"></div>

    <div className="hero-content">

      <div className="hero-left">

        <div className="location-icon">
          <MapPin className="map-icon" fill="currentColor" />
        </div>

        <p className="location-text">
          Doctors near you
        </p>

      </div>

      <div className="hero-center">

        <div className="upgrade-badge">
          <Sparkles size={14} />
          <span>Upgrade your account</span>
        </div>

        <h1>
          Find and book top doctors near you
        </h1>

        <p>
          Easily find top-rated specialists near you and book appointments in
          just a few clicks. Whether you need an in-person visit consultation,
          we're here to connect you with the right care—fast, simple, and
          secure.
        </p>

        <div className="patients">

          <div className="avatars">
            <img src={img3} alt="" />
            <img src={img2} alt="" />
            <img src={img1} alt="" />
          </div>

          <span>10k+ happy patients</span>

        </div>

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            <Calendar size={20} />
            Book Appointment
          </button>

        </div>

      </div>

    </div>
    
    <div className="book-tag">
      <svg className="arrow-icon" width="28" height="28" viewBox="0 0 24 24" fill="#3b82f6">
        <path d="M12 2L2 22h20L12 2z"/>
      </svg>
      <span>Book Now</span>
    </div>

  </section>
);
}