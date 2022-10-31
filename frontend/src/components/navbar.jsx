import { Container, Button, Link } from "react-floating-action-button";
import LinkButton from "./linkButton";

export default function Navbar() {
  //js code here

  return (
    <>
      <Container>
        <Link tooltip="Projects" href="#project" icon="fa fa-toolbox" />

        <Link tooltip="Resume" href="#resume" icon="fa fa-user-astronaut" />

        <Link tooltip="About" href="#about" icon="fa fa-envelope" />

        <Link href="#contact" tooltip="contact" icon="far fa-sticky-note" />

        <Link href="#home" tooltip="Home" icon="fas fa-home" />

        <Button
          className="fab-item btn btn-link btn-sm text-white"
          tooltip="Use me for Navigation!"
          icon="fas fa-plus"
          rotate={true}
        />
      </Container>
    </>
  );
}
