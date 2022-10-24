import './projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee ,faReact} from '@fortawesome/fontawesome-free-solid'

function Projects() {
    return (<>
     
     <Container>
      <Row>
        <Col className="justify-content-center">
          <br />
            <h1 className="fs-1  Tech-Stacks">Tech Stacks</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <label className="text-rotate-90">frontend Technologies</label>
        </Col>
        <Col xs={6} md={4}>
             <div>
              <FontAwesomeIcon icon={faReact} />
             </div>

        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
    </>
     
    );
  }
  
  export default Projects;