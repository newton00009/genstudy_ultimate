import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
class ServiceTabExample extends Component {
  render() {
    /* service tab menu */
    let serviceTabMenuData = [
      { iconName: "flaticon-002-welding", tabMenuName: "Web Development" },
      {
        iconName: "flaticon-004-walkie-talkie",
        tabMenuName: "Mobile Apps"
      },
      { iconName: "flaticon-015-cart", tabMenuName: "Programming Languages" },
      { iconName: "flaticon-010-tank-1", tabMenuName: "Database" }
    ];

    let serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => {
      return (
        <Tab key={i}>
          {" "}
          <span className="icon">
            <i className={val.iconName} />
          </span>{" "}
          <span className="text">{val.tabMenuName}</span>
        </Tab>
      );
    });

    /* service tab content */

    let serviceTabContentData = [
      {
        bgUrl: "service-tab1.png",
        contentTitle: "MERN Stack Bootcamp - Zero to Hero in One Course",
        contentDesc:
          "MERN stack stands for MongoDB Express React and Node.As a MERN stack developer, you will learn everything about backend frontend designing developing planning choosing the right infrastructure deploying and maintaining the project.",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl: "service-tab1.png",
        contentTitle: "The Complete React Native Course",
        contentDesc:
          "If you're tired of spinning your wheels learning Swift or Android, this is the course for you.This course will get you up and running with React Native quickly, and teach you the core knowledge you need to deeply understand and build React components for mobile devices.",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl: "service-tab1.png",
        contentTitle: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
        contentDesc:
          "Node.js is probably THE most popular and modern server-side programming language!Node.js developers are in high demand and the language is used for everything from traditional web apps with server-side rendered views over various API's real-time web services.",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl: "service-tab1.png",
        contentTitle: "MongoDB - The Complete Developer Guide",
        contentDesc:
          "MongoDB is one of the most important NoSQL databases you can work with these days.It's extremely popular and MongoDB developers are in high demand.In this course, you'll learn all about MongoDB from scratch. No prior MongoDB or database experience is required!",
        serviceLink: "service-details-left-sidebar"
      }
    ];

    let serviceTabContentDatalist = serviceTabContentData.map((val, i) => {
      return (
        <TabPanel key={i}>
          <div
            className="service-tab__single-content-wrapper"
            style={{
              backgroundImage: `url(assets/img/backgrounds/${val.bgUrl})`
            }}
          >
            <div className="service-tab__single-content">
              <h3 className="service-tab__title">{val.contentTitle}</h3>
              <p className="service-tab__text">{val.contentDesc}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.serviceLink}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </TabPanel>
      );
    });

    return (
      <div>
        {/*====================  service tab area ====================*/}
        <div className="service-tab-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                    Most Viewed Courses <span className="title-icon" />
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                {/* service tab wrapper */}

                <div className="service-tab-wrapper">
                  <Tabs>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <TabList>
                          <div className="service-tab__link-wrapper">
                            {serviceTabMenuDatalist}
                          </div>
                        </TabList>
                      </div>

                      <div className="col-md-8">
                        {serviceTabContentDatalist}
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of service tab area  ====================*/}
      </div>
    );
  }
}

export default ServiceTabExample;
