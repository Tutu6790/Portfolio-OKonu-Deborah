/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Getting Started With Project Management: A Beginners Guide.📝",
    description:
      "A beginner friendly article to guide you through the basic things you need to know about project management. Written by me",
    url: "https://medium.com/@debbsproject/getting-started-with-project-management-a-beginners-guide-7c9753601f7b",
  },
  {
    title: "Infromation Architecture Diagrams and Process Model for a Rider Application (School Project)",
    description:
      "After carrying out a few research, i drew the Process Models and Architectural diagrams for a Rider Application Called SabiRide",
    url: "https://drive.google.com/file/d/1CV1N8bkJ2u3Pby8cFUenUBgUjdDkG0N6/view?usp=sharing",
  },
  {
    title: "Software Requirement documentation for a Rider Application called Sabiride. (School Project)",
    description:
      "For a school project, I and my team wrote the software requirements documentation for a Rider application called SabiRide.",
    url: "https://docs.google.com/document/d/1zWuCKixFu3dmnUR3mcUctsPiGXh0upMB/edit?usp=drive_link&ouid=110716245145065083582&rtpof=true&sd=true",
  },
  {
    title: "Building A Responsive Coming Soon Page In Less Than 10 Minutes😱💖",
    description:
      "A step by step guide to build a responsive coming soon page. written by me.",
    url: "https://medium.com/@debbsproject/building-a-responsive-coming-soon-page-in-less-than-10-minutes-ce1c5705c90d",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
