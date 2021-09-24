import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        {/*====================  footer area ====================*/}
        <div className="footer-area dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-content-wrapper section-space--inner--100">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-20">
                      {/* footer intro wrapper */}
                      <div className="footer-intro-wrapper">
                        <div className="footer-logo">
                          <a href={`${process.env.PUBLIC_URL}/home-two`}>
                            <div className="logoHead">
                              <img
                                src="/assets/img/logo/logonew.png"
                                alt=""
                                className="sticky-logo img-fluid"
                              />
                              <h3>GenStudy</h3>
                            </div>
                          </a>
                        </div>
                        <div className="footer-desc">
                          Online platform for making E-learning more confortable and interactive.
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 offset-xl-1 col-lg-4 col-md-8">
                      {/* footer widget */}
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">USEFUL LINKS</h4>
                        <ul className="footer-widget__navigation">
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Home</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>
                              Company News
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Projects</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Careers</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget mb-0">
                        <h4 className="footer-widget__title">CONTACT US</h4>
                        <div className="footer-widget__content">
                          <p className="address">
                            123 Any Street,
                            Bakersfield, CA 93399
                          </p>
                          <ul className="contact-details">
                            <li>
                              <span>Phone no.:</span>99 55 99 55 59
                            </li>
                            <li>
                              <span>Fax no.:</span>55 44 33 69
                            </li>
                            <li>
                              <span>E-mail:</span>genstudy@email.com
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright-wrapper">
            <div className="footer-copyright text-center">
              Copyright © 2021 | Re/Syst | All right reserved
            </div>
          </div>
        </div>
        {/*====================  End of footer area  ====================*/}
        {/*====================  scroll top ====================*/}
        <button className="scroll-top" id="scroll-top">
          <i className="ion-android-arrow-up" />
        </button>
        {/*====================  End of scroll top  ====================*/}
      </div>
    );
  }
}

export default Footer;
