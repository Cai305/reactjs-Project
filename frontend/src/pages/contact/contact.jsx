import "./contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import { MDBInput,MDBInputGroup, MDBBtn,MDBTextArea } from 'mdb-react-ui-kit';

function Contact() {
  return (
    <div id="contact">
      <Container>

     
        <Col>
          <Row className="justify-content-center">
            <h1 className="justify-content-center">Get in Touch</h1>
          </Row>

          <Row className="justify-content-center">
            <Col>
              {" "}
              <MDBInput label='Email' id='form1' type='text' />
              <FaEnvelope color="primary" />{" "}
            </Col>
          
          </Row>

          <Row> 
            

          <MDBInputGroup>
              <MDBTextArea label='Message' id='textAreaExample' rows={12} col={12} width={6}/>
          </MDBInputGroup>

          </Row>

          <Row>
            <MDBBtn className='me-1' color='success'>Button</MDBBtn>
          </Row>

       
        </Col>
      </Container>
    </div>
  );
}

export default Contact;
