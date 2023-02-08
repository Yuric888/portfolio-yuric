import "./Contact.scss";
import { contacts, socialsIcon } from "../../../Data/Data";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section id="contact" className="container">
      <div className="title">
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </div>
      <div className="contactForm">
        <div className="contactForm_left">
          <h3>Just Say Hi!</h3>
          <p className="contactForm_left-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            minima similique expedita laudantium atque deserunt obcaecati maxime
            qui? Quo nemo beatae consequuntur, excepturi magni labore hic
            consequatur odit natus accusantium.
          </p>
          {contacts.length > 0 &&
            contacts.map((contact) => {
              return (
                <div className="address" key={contact.id}>
                  <div className="icon">{contact.icon}</div>
                  <p>{contact.infoText}</p>
                </div>
              );
            })}
          <div className="social_icons">
            {socialsIcon.length > 0 &&
              socialsIcon.map((social, idx) => {
                return (
                  <a href={social.url} key={idx}>
                    {social.icon}
                  </a>
                );
              })}
          </div>
        </div>
        <div className="contactForm_right">
          <h3>Get In Touch</h3>
          <div className="row">
            <input type="text" placeholder="Please Your Name" />
          </div>
          <div className="row">
            <input type="text" placeholder="Please Your Email" />
          </div>
          <div className="row">
            <textarea placeholder="Please Your Message"></textarea>
          </div>
          <motion.div
            className="button"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Button variant="info">Send</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
