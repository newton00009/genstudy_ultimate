import React, { Component } from "react";
import Swiper from "react-id-swiper";

class TestimonialSlider extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      effect: "fade",
      autoplay: {
        delay: 2000
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      renderPagenation: () => <div className="swiper-pagination" />
    };
    let data = [
      {
        testimonialImage: "4.png",
        testimonialName: "Prasham Bhagwat",
        testimonialText:
          "One of the best places to Learn Web Development. The links and the quizes the provide are very effective for making concepts clear."
      },
      {
        testimonialImage: "2.png",
        testimonialName: "Nilesh Verma",
        testimonialText:
          "Genstudy is a great example to show why E-learing is the upcoming mode of education now a days."
      },
      {
        testimonialImage: "0.png",
        testimonialName: "Ayush Kumar",
        testimonialText:
          "The courses cover in depth portion of the topics that are taught in them. The tagline really come to reality."
      },
      {
        testimonialImage: "3.png",
        testimonialName: "Krishnash Singh",
        testimonialText:
          "Best E-learning platform for Beginners."
      },
      {
        testimonialImage: "1.png",
        testimonialName: "Jagrit Sarma",
        testimonialText:
          "UI of the site is great. Content of the courses and the resources provided was really very helpful,"
      }
    ];

    let DataList = data.map((val, i) => {
      return (
        <div className="swiper-slide testimonial-slider__single-slide" key={i}>
          <div className="author">
            <div className="author__image">
              <img
                src={`assets/img/testimonial/${val.testimonialImage}`}
                alt=""
              />
            </div>
            <div className="author__details">
              <h4 className="name">{val.testimonialName}</h4>
              <div className="designation">{val.testimonialDesignation}</div>
            </div>
          </div>
          <div className="content">{val.testimonialText}</div>
        </div>
      );
    });

    return (
      <div>
        {/*====================  testimonial slider area ====================*/}
        <div className="testimonial-slider-area testimonial-slider-area-bg section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="testimonial-slider">
                  <div className="testimonial-slider__container-area">
                    <Swiper {...params}>{DataList}</Swiper>
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of testimonial slider area  ====================*/}
      </div>
    );
  }
}

export default TestimonialSlider;