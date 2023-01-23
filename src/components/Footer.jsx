import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngellist } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => (
  <>
    <section className="footer-box">
      <div className="footer-sub-box">
        <div className="talk-to-us">
          <h3 className="footer-h3">Ready to get started?</h3>
          <h3 className="footer-h3">Talk to us today</h3>
        </div>
        <div className="div-of-btn">
          <button type="submit" className="hero-btn">
            <NavLink to="/contact" className="btn-txt">
              Contact us
            </NavLink>
          </button>
        </div>
      </div>
    </section>
    <footer>
      <div className="main-footer-box">
        <div className="footer-about">
          <h3>Nabeel Studios</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt
            ipsam eveniet?
          </p>
        </div>

        <div className="footer-subscribe">
          <h3>Subscribe to get important updates.</h3>
          <form className="footer-form" action="#">
            <input type="email" placeholder="your e-mail" />
            <input className="footer-btn" type="submit" value="subscribe" />
          </form>
        </div>

        <div className="footer-social">
          <h3>follow us</h3>
          <div className="social-flex">
            <div className="footer-social-icon">
              <a href="https://www.linkedin.com/in/studiosnabeel/">
                <AiFillLinkedin className="icons" />
              </a>
            </div>
            <div className="footer-social-icon">
              <a href="https://github.com/studiosnabeel">
                <AiFillGithub className="icons" />
              </a>
            </div>
            <div className="footer-social-icon">
              <a href="https://angel.co/u/nabeel-akbar">
                <FaAngellist className="icons" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Call us</h3>
          {/* <a href="tel:12345678">+92 12345678</a> */}
          <h3>+92 12345678</h3>
        </div>
      </div>

      {/* bottom footer */}

      <div className="footer-bottom">
        <hr />
        <div className="div-bottom">
          <div className="bottom-box">
            <p>
              ©
              {new Date().getFullYear()}
              Nabeel Studios. All rights reserved.
            </p>
          </div>
          <div className="policy">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
