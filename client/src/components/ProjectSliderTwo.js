import React, { Component } from "react";
import Swiper from "react-id-swiper";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";




class ServiceGridSlider extends Component {
  

  
  
  render() {






    const params = {
      slidesPerView: 3,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      spaceBetween: 30,
      autoplay: {
        delay: 1000
      },
      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 3
        },

        991: {
          slidesPerView: 2
        },

        767: {
          slidesPerView: 1
        },

        575: {
          slidesPerView: 1
        }
      }
    };
    let data = [
      {
        img: "service1.jpg",
        serviceTitle: "The Complete React Native Course",
        serviceExcerpt:
          "If you're tired of spinning your wheels learning Swift or Android, this is the course for you.This course will get you up and running with React Native quickly, and teach you the core knowledge you need to deeply understand and build React components for mobile devices.",
        serviceUrl: "login/student"
      },
      {

        /* Node js */
        img: "service2.png",
        serviceTitle: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
        serviceExcerpt:
          "Node.js is probably THE most popular and modern server-side programming language!Node.js developers are in high demand and the language is used for everything from traditional web apps with server-side rendered views over various API's real-time web services.",
          serviceUrl: "login/student"
      },
      {
        /* MERN */
        img: "service3.jpeg",
        serviceTitle: "MERN Stack Bootcamp - Zero to Hero in One Course",
        serviceExcerpt:
          "MERN stack stands for MongoDB Express React and Node.As a MERN stack developer, you will learn everything about backend frontend designing developing planning choosing the right infrastructure deploying and maintaining the project.",
          serviceUrl: "login/student"
      },
      {
        /* MEAN */
        img: "service4.jpg",
        serviceTitle: "Complete MEAN Stack Developer Guide: MongoDB; Express;Angular;Node",
        serviceExcerpt:
          "This program will advance your career as a MEAN stack developer.You’ll learn top skills such as MongoDB, Express.js, Angular, and Node.js (“MEAN”), plus GIT, HTML&CSS, and JavaScript to build and deploy interactive applications.",
          serviceUrl: "login/student"
      }
    ];

    let DataList = data.map((val, i) => {
      return (
        <div className="swiper-slide" key={i}>
          <div className="service-grid-item service-grid-item--style2">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                  <img
                    src={`assets/img/service/${val.img}`}
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                  {val.serviceTitle}
                </a>
              </h3>
              <p className="subtitle">{val.serviceExcerpt}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {/*====================  project grid slider area ====================*/}
        <div className="service-slider-title-area grey-bg section-space--inner--top--120 section-space--inner--bottom--285">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title mb-0">
                    Latest Tutorials <span className="title-icon" />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-grid-slider-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-slider">
                  <div className="service-slider__container service-slider__container--style2">
                    <Swiper {...params}>{DataList}</Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of project grid slider area  ====================*/}
      </div>
    );
  }
}

export default ServiceGridSlider;

