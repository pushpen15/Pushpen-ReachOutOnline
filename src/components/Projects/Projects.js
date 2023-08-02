import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Car from "../../Assets/Projects/CarPricePrediction.png";
import emotion from "../../Assets/Projects/emotion.png";
import ImReplicant from "../../Assets/Projects/ImReplicant.png";
import TaazaKhabar from "../../Assets/Projects/TaazaKhabar.png";
import suicide from "../../Assets/Projects/suicide.png";
import imageArt from "../../Assets/Projects/imageArt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TaazaKhabar}
              isBlog={false}
              title="TaazaKhabar"
              description="TaazaKhabar is a react based  web application and TaazaKhabar
              is a news app which can be used to grab quick daily news bites.
              If you are interested in news, weather, politics and sports news,
              TaazaKhabar is for you!"
              ghLink="https://github.com/pushpen15/TaazaKhabar.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImReplicant}
              isBlog={false}
              title="I'm_Replicant"
              description="It's a face and voice detection project and 
              which deals with a voice command, when user gives a specific
              voice command to the laptop it opens up camera and find face of
              human being if it found it show there gender and identify the age
              of a object. This project are based on python technology."
              ghLink="https://github.com/pushpen15/Human_Gender_Detection.git"
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Car}
              isBlog={false}
              title="Used Car Price Prediction"
              description="It's a data science algorithm and  which is
              predict the price of used car according the data of car by using
              dummy data set(Render dummy data from Kaggle).This project are based on python technology
              and linear regression.
              "
              ghLink="https://github.com/pushpen15/Used_Car_Price_Prediction.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageArt}
              isBlog={false}
              title="image_Art"
              description="It's a desktop application and type of image ImReplicant through this
              application user can edit there image.Editing mean user can
              change image exposure and modify image size.It can also
              change jpeg into histogram image."
              ghLink="https://github.com/pushpen15/Image_Art.git"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="SanJeevani Hospital App"
              description="It's a desktop application and used for handling hospital record
              and  different different user like Admin, Doctors,recetionist and
              petient handling there work through this application.This project
              are based on java and MySQL  technology. "
              ghLink="https://github.com/pushpen15/Sanjeevani_Hospital_App.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Swing Address Book"
              description="It's a desktop application and it like telephone directory in which
              all address are stored and user can find any data after login .This
              project are based on java and MySQL technology."
              ghLink="https://github.com/pushpen15/Swing_Address_Book.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
