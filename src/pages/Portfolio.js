import React from 'react'
import "./style.css"

//Get the button
var mybutton = document.getElementById("topBtnPortfolio");

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function gotoTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function Portfolio() {
  return (
    <div>
      {/* <h1>Portfolio Page</h1> */}
      <div className="content-section" id="portfolio">
        <div className="container">
          <div className="content-section-heading text-center">
            <h3 className="mb-0">Portfolio</h3>
            <h2 className="mb-5">Featured Projects</h2>
          </div>
          <div className="row ">
            {/* Group 2 project */}
            <div className="col-lg-6 mb-3">
              <div className="card" style={{ width: '100%' }} >
                <img src="../assets/img/GroupProject2.gif" className="card-img-top" alt="Card Generator" />
                <div className="card-body">
                  <h5 className="card-title">Card Generator</h5>
                  <p className="card-text">My second group project using Javascript, mysql, ORM, and an image
                                uploader</p>
                  <div className="portfolio-btn">
                    <a href="https://cryptic-journey-45384.herokuapp.com/" className="btn btn-primary btn-xl"
                      target="_blank" rel="noopener noreferrer">App</a>
                    <a href="https://github.com/EddiEsteban/card-generator"
                      className="btn btn-primary btn-xl ml-3" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Group 1 project */}
            <div className="col-lg-6 mb-3">
              <div className="card" style={{ width: '100%' }}>
                <img src="../assets/img/GroupProject1.jpg" className="card-img-top" alt="Mood Food and Chill" />
                <div className="card-body">
                  <h5 className="card-title">Mood-Food-and-Chill</h5>
                  <p className="card-text">My first group project using 2 apis</p>
                  <div className="portfolio-btn">
                    <a href="https://eddiesteban.github.io/Mood-Food-and-Chill/"
                      className="btn btn-primary btn-xl" target="_blank" rel="noopener noreferrer">App</a>
                    <a href="https://github.com/EddiEsteban/Mood-Food-and-Chill"
                      className="btn btn-primary btn-xl ml-3" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Burger Logger */}
            <div className="col-lg-6 mb-3">
              <div className="card" style={{ width: '100%' }}>
                <img src="../assets/img/burger-demo.jpg" className="card-img-top" alt="Burger Logger" />
                <div className="card-body">
                  <h5 className="card-title">Burger Logger</h5>
                  <p className="card-text">This is a simple burger logger with MySQL, Node, Express, Handlebars
                                and a homemade ORM</p>
                  <a href="https://cryptic-oasis-49000.herokuapp.com/" className="btn btn-primary btn-xl portfolio-btn" target="_blank" rel="noopener noreferrer">App</a>
                  <a href="https://github.com/AllAroundD/burger"
                    className="btn btn-primary portfolio-btn btn-xl ml-3" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            {/* Employee Tracker */}
            <div className="col-lg-6 mb-3">
              <div className="card" style={{ width: '100%' }}>
                <img src="../assets/img/EmployeeTracker-demo.jpg" className="card-img-top" alt="Employee Tracker" />
                <div className="card-body">
                  <h5 className="card-title">Employee Tracker</h5>
                  <p className="card-text">This is an application for managing a company's employees using node,
                                inquirer, and MySQL</p>
                  <a href="https://github.com/AllAroundD/employee-tracker"
                    className="btn btn-primary portfolio-btn btn-xl ml-3" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            {/* Note Taker */}
            <div className="col-lg-6 mb-3">
              <div className="card" style={{ width: '100%' }}>
                <img src="../assets/img/NoteTaker-demo.jpg" className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Note Taker</h5>
                  <p className="card-text">Application that can be used to write, save, and delete notes. This
                  application will use an express backend and save and retrieve note data from a JSON
                                file.</p>
                  <a href="https://enigmatic-tor-32580.herokuapp.com/"
                    className="btn btn-primary btn-xl portfolio-btn" target="_blank" rel="noopener noreferrer">App</a>
                  <a href="https://github.com/AllAroundD/note-taker"
                    className="btn btn-primary portfolio-btn btn-xl ml-3" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            {/* Team Generator */}
            <div className="col-lg-6 mb-3">
              <div className="card" style={{ width: '100%' }}>
                <img src="../assets/img/teamgenerator-demo.jpg" className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Team Generator</h5>
                  <p className="card-text">A node.js command line application (CLI) to generate an HTML webpage
                  with team information based on the user's responses to questions about the manager and
                                the team members.</p>
                  <a href="https://github.com/AllAroundD/team-generator"
                    className="btn btn-primary portfolio-btn btn-xl ml-3" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            {/* HitHub Readme Generator */}
            <div className="col-lg-6 mb-3">
              <div className="card" style={{ width: '100%' }}>
                <img src="../assets/img/readmegenerator-demo.jpg" className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">GitHub Readme Generator</h5>
                  <p className="card-text">A node.js command line tool (CLI) to generate a Github readme file for
                                a project based on user's responses to questions about the project.</p>
                  <a href="https://github.com/AllAroundD/team-generator"
                    className="btn btn-primary portfolio-btn btn-xl ml-3" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            {/* Weather Dashboard */}
            <div className="col-lg-6 mb-3">
              <div className="card" style={{ width: '100%' }}>
                <img src="../assets/img/weatherdashboard.jpg" className="card-img-top" alt="Weather Dashboard" />
                <div className="card-body">
                  <h5 className="card-title">Weather Dashboard</h5>
                  <p className="card-text">A simple weather dashboard with 5-day forecast using api</p>
                  <a href="https://allaroundd.github.io/weatherdashboard/"
                    className="btn btn-primary btn-xl portfolio-btn" target="_blank" rel="noopener noreferrer">App</a>
                  <a href="https://github.com/AllAroundD/weatherdashboard"
                    className="btn btn-primary portfolio-btn btn-xl ml-3" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            {/* Work Day Scheduler */}
            <div className="col-lg-6 mb-3">
              <div className="card" style={{ width: '100%' }}>
                <img src="../assets/img/scheduler.jpg" className="card-img-top" alt="Work Day Scheduler" />
                <div className="card-body">
                  <h5 className="card-title">Scheduler</h5>
                  <p className="card-text">A work day scheduler that uses local storage</p>
                  <a href="https://allaroundd.github.io/scheduler/"
                    className="btn btn-primary portfolio-btn btn-xl" target="_blank" rel="noopener noreferrer">App</a>
                  <a href="https://github.com/AllAroundD/scheduler"
                    className="btn btn-primary portfolio-btn btn-xl ml-3" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            {/* JavaScript Code Quiz */}
            <div className="col-lg-6 mb-3">
              <div className="card" style={{ width: '100%' }}>
                <img src="../assets/img/codequiz.jpg" className="card-img-top" alt="Code Quiz" />
                <div className="card-body">
                  <h5 className="card-title">JavaScript Code Quiz</h5>
                  <p className="card-text">A timed quiz on JavaScript fundamentals that stores high scores</p>
                  <a href="https://allaroundd.github.io/codequiz/"
                    className="btn btn-primary portfolio-btn btn-xl" target="_blank" rel="noopener noreferrer">App</a>
                  <a href="https://github.com/AllAroundD/codequiz"
                    className="btn btn-primary portfolio-btn btn-xl ml-3" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={gotoTopFunction} id="topBtnPortfolio" title="Go to top">^</button>

    </div>
  );
}

export default Portfolio;
