import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import "./style.css"

function About() {
  return (
    <div>
      <Hero backgroundImage="../assets/img/portfolio_background.jpg">
        <h1>About Me</h1>
        <h2>My Journey In Web Development</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <section className="content-section bg-light" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2 className="text-center mb-5">I could be the developer you're looking for</h2>
                <img className="float-sm-left mr-3 img-fluid about-pic"
                  src="../assets/img/DougMoore.jpeg" alt="Doug" />
                <p className="lead">
                  My name is <b>Doug Moore</b> and for the past 20 years I was an
                        application developer at a bank where I was doing more back-end developing and
                        supporting applications.
                        I graduated from Seneca College in 1999 with a Computer Programming and Analysis
                        diploma.
                    </p>
                <p className="lead">I enjoy coding and wanted to gain more experience on the web development
                        side and decided to join this Boot Camp to be a Full Stack Developer.</p>
                <p className="lead">Hobbies: I enjoy playing some competitive mobile games.</p>
              </div>
            </div>
            <div className="row about-btn text-center">
              <div className="col-sm-2 col-md-4 col-lg-4">
                <a className="btn btn-primary btn-about" href="./portfolio">Portfolio</a>
              </div>
              <div className="col-sm-2 col-md-4 col-lg-4">
                <a className="btn btn-primary btn-about" href="./contact">Contact</a>
              </div>
              <div className="col-sm-2 col-md-4 col-lg-4">
                <a className="btn btn-primary btn-about" href="../assets/DougMoore_Resume.pdf">Resume</a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default About;
