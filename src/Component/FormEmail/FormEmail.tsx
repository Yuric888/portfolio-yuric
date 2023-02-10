import "./FormEmail.scss";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ModalEMail from "../ModalEMail/ModalEMail";
const FormEmail = () => {
  const formRef = useRef<any>(null);
  const [open, setOpen] = useState<Boolean>(false);
  const [valueEmail, setValueEmail] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jgn2icc",
        "template_ykegskg",
        formRef.current,
        "1kuvuNcHqQyWe95A5"
      )
      .then(
        (result) => {
          setOpen(true);
          setValueEmail({ name: "", email: "", message: "" });
        },
        (error) => {
          setOpen(true);
        }
      );
  };
  const changeValue = (e: any) => {
    const { name, value } = e.target;
    setValueEmail((values) => ({ ...values, [name]: value }));
  };
  return (
    <>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="row">
          <input
            value={valueEmail.name}
            type="text"
            name="name"
            required
            placeholder="Please Your Name"
            onChange={(e) => changeValue(e)}
          />
        </div>
        <div className="row">
          <input
            value={valueEmail.email}
            type="email"
            name="email"
            required
            placeholder="Please Your Email"
            onChange={(e) => changeValue(e)}
          />
        </div>
        <div className="row">
          <textarea
            value={valueEmail.message}
            name="message"
            required
            placeholder="Please Your Message"
            onChange={(e) => changeValue(e)}
          ></textarea>
        </div>
        <motion.div
          className="button"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <input type="submit" value="Send" />
        </motion.div>
      </form>
      <ModalEMail open={open} close={setOpen} />
    </>
  );
};

export default FormEmail;
