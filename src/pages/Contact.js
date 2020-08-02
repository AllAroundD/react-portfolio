import React from "react"
import "./style.css"
import Hero from "../components/Hero"
import Row from "../components/Row"
import Col from "../components/Col"
import Container from "../components/Container";

function Contact(props) {

  return (
    <div>
      <Container style={{ marginTop: 30 }}>
      </Container>
      <Hero backgroundImage="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
      <Container style={{ marginTop: 30, backgroundColor: 'white' }}>
      <h2 className="mb-5 text-center">Contact Me</h2>
        <Row><Col size="md-12"><p className="lead text-center">You can reach me at <a href="mailto:dougmoore@use.startmail.com">dougmoore@use.startmail.com</a></p></Col></Row>
        <Row><Col size="md-12"><p className="lead text-center">Find me on <a href="https://www.linkedin.com/in/doug-moore-dev/" target='_blank' rel='noopener noreferrer'>LinkedIn</a></p></Col></Row>
        <Row><Col size="md-12"><p className="lead text-center">See my work on <a href="https://github.com/AllAroundD" target='_blank' rel='noopener noreferrer'>GitHub</a></p></Col></Row>
        <Row><Col size="md-12"><p className="lead text-center">Download my {' '} <a href="../assets/DougMoore_Resume.pdf" download>Resume</a></p></Col></Row>
      </Container>

    </div>
  )
}

export default Contact
