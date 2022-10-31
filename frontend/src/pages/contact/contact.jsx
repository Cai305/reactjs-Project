import "./contact.css";

function Contact() {
  return (
    <div id="contact">
      <div className="header">
        Contact <span className="pink">Us</span>
      </div>
      <div className="slogan">
        <h1>Don't be shy.</h1>
        <h1>
          Make the first <span className="pink">contact.</span>
        </h1>
      </div>
      <div className="contact">
        <input type="email" placeholder="Email..." />
        <textarea placeholder="Message..."></textarea>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Contact;
