import "./projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaReact,FaAngular , FaNodeJs ,FaJs } from "react-icons/fa";



function Projects() {
  return (
    <div id="project">
      <Container>
        <Row>
          <Col className="justify-content-center">
            <br />
            <h1 className="fs-1  Tech-Stacks">Tech Stacks</h1>
          </Col>
        </Row>

        <Row>
            <Col className="justify-content-center">
                <br />
                <h1 className="fs-5  Tech-Stacks">Mobile Developmenent Technologies</h1>
            </Col>
      
        </Row>

        <Row>
            <Col className="justify-content-center">
                <br />
                <h1 className="fs-5  Tech-Stacks">Frontend Technologies</h1>
            </Col>
      
        </Row>
        <Row>
            <Col className="justify-content-center">
                <br />
                <h1 className="fs-5  Tech-Stacks">Backend Technologies</h1>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
