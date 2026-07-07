import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Homework.css";
import { Search, ArrowLeft, ArrowRight } from "lucide-react";

const searchOptions = [
  "Find a Doctor",
  "Book an Appointment",
  "View Services",
  "Check Availability",
  "Contact Support",
];

const Homework: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [animation, setAnimation] = useState("slide-up");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("slide-up");
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % searchOptions.length);
        setAnimation("slide-down");
      }, 450);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const renderStars = () => (
    <div className="star-bg">
      {Array.from({ length: 44 }).map((_, i) => (
        <span key={i} className={`star ${(i + 3) % 5 === 0? "fill" : ""}`}>
          {(i + 3) % 5 === 0? "★" : "☆"}
        </span>
      ))}
    </div>
  );

  const paymentCard = () => (
    <>
      <div className="payment-flow">
        <div className="payment-item">
          <span className="payment-icon apple"></span>
          <span>Quick checkout with your Apple device</span>
        </div>
        <div className="payment-item">
          <span className="payment-icon visa">VISA</span>
          <span>Secure and fast card payments</span>
        </div>
        <div className="payment-item">
          <span className="payment-icon paypal">P</span>
          <span>Easy and safe with your PayPal account</span>
        </div>
      </div>

      <h3 className="card-title">Book & Pay Online</h3>
      <p className="card-text">
        Confirm your appointment and pay securely using
        various payment options—credit card, mobile wallet,
        or Apple Pay.
      </p>
    </>
  );

  return (
    <section className="homework">
      <div className="mainContainer">
        <h2 className="homework-title">HOW IT WORKS</h2>

        {/* Desktop */}
        <div className="desktop-cards">
          {/* Card 1 */}
          <div className="home-card">
            {renderStars()}
            <div className="search-box">
              <Search className="search-icon" />
              <div className="search-placeholder">
                <span key={currentText} className={`placeholder-text ${animation}`}>
                  {searchOptions[currentText]}
                </span>
              </div>
            </div>
            <h3 className="card-title">Search For a Doctor</h3>
            <p className="card-text">
              Browse through our network of trusted specialists and
              find the right doctor for your needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="home-card">
            <div className="calendar">
              <div className="calendar-header">
                <ArrowLeft className="calendar-arrow" />
                <span className="calendar-month">July 2025</span>
                <ArrowRight className="calendar-arrow" />
              </div>
              <div className="calendar-grid">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <span key={d} className="week-day">{d}</span>
                ))}
                {[9, 10, 11, 12, 13, 14].map((d) => (
                  <span key={d} className="day">{d}</span>
                ))}
                <span className="calendar-day">15</span>
              </div>
            </div>
            <h3 className="card-title">Choose a Date & Time</h3>
            <p className="card-text">
              View real-time availability and pick a slot that works
              best for your schedule.
            </p>
          </div>

          {/* Card 3 */}
          <div className="home-card">{paymentCard()}</div>
        </div>

        {/* Mobile Slider */}
        <div className="mobile-slider">
          <Swiper modules={[Pagination]} spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }}>
            <SwiperSlide>
              <div className="home-card">
                {renderStars()}
                <div className="search-box">
                  <Search className="search-icon" />
                  <div className="search-placeholder">
                    <span key={currentText} className={`placeholder-text ${animation}`}>
                      {searchOptions[currentText]}
                    </span>
                  </div>
                </div>
                <h3 className="card-title">Search For a Doctor</h3>
                <p className="card-text">
                  Browse through our network of trusted specialists and
                  find the right doctor for your needs.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="home-card">
                {renderStars()}
                <div className="calendar">
                  <div className="calendar-header">
                    <ArrowLeft className="calendar-arrow" />
                    <span className="calendar-month">July 2025</span>
                    <ArrowRight className="calendar-arrow" />
                  </div>
                  <div className="calendar-grid">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                      <span key={d} className="week-day">{d}</span>
                    ))}
                    {[9, 10, 11, 12, 13, 14].map((d) => (
                      <span key={d} className="day">{d}</span>
                    ))}
                    <span className="calendar-day">15</span>
                  </div>
                </div>
                <h3 className="card-title">Choose a Date & Time</h3>
                <p className="card-text">
                  View real-time availability and pick a slot that works
                  best for your schedule.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="home-card">{paymentCard()}</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Homework;