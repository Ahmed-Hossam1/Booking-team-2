import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaYoutube, FaLinkedin, FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import img from '../../assets/f1.png' 
import imgg from '../../assets/Logo.png' 

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      {/* CTA Section */}
      <div className="footerCta">
        <div className="ctaContent">
          <div className="ctaText">
            <h2>Your Health, One Tap Away</h2>
            <p>
              Book appointments, chat with doctors, and manage your health 
              anytime—right from your phone. Download the app now and stay 
              connected wherever you are.
            </p>
            <div className="ctaButtons">
              <a href="#" className="storeBtn">
                <FaApple size={28} />
                <div>
                  <span>Download on the</span>
                  <p>Apple Store</p>
                </div>
              </a>
              <a href="#" className="storeBtn">
                <IoLogoGooglePlaystore size={24} />
                <div>
                  <span>GET IT ON</span>
                  <p>Google Play</p>
                </div>
              </a>
            </div>
          </div>
          <div className="ctaImage">
            <img src={img} alt="App phones" />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footerMain">
        <div className="footerContainer">
          
          {/* Column 1 */}
          <div className="footerCol footerAbout">
            <div className="footerLogo">
              <img src={imgg} alt="Cure Logo" className="logoImg"/>
              <span className="logoText">Cure</span>
            </div>
            <p className="footerDesc">
              Cure helps you find trusted doctors, book appointments, and manage 
              your health—quickly and easily.
            </p>
            <div className="socialIcons">
              <a href="#" className="socialBox"><FaFacebook size={18} /></a>
              <a href="#" className="socialBox"><MessageCircle size={18} /></a>
              <a href="#" className="socialBox"><FaYoutube size={18} /></a>
              <a href="#" className="socialBox"><FaLinkedin size={18} /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footerCol">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Doctors</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footerCol">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footerCol">
            <h4>Contact Info</h4>
            <ul className="contactList">
              <li>
                <Phone size={16} />
                <div><span>Phone</span><p>080 707 555-321</p></div>
              </li>
              <li>
                <Mail size={16} />
                <div><span>Email</span><p>demo@example.com</p></div>
              </li>
              <li>
                <MapPin size={16} />
                <div><span>Address</span><p>526 Melrose Street,<br />Water Mill, 11976 New York</p></div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footerBottom">
          <p>@2024 Techvio - All Right Reserved</p>
          <div className="footerLinks">
            <a href="#">Terms & Condition</a> | <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;