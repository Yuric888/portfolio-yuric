import { HiX } from "react-icons/hi";
import "./ModalEMail.scss";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

interface TypeModal {
  open: Boolean;
  close: React.Dispatch<React.SetStateAction<Boolean>>;
}
const ModalEMail = (props: TypeModal) => {
  const { open, close } = props;
  const navLinkVariants = {
    hidden: {
      opacity: 0,
      y: -150,
    },
    view: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };
  useEffect(() => {
    if (open === true) {
      var interval = setInterval(() => {
        close(false);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [close, open]);
  return (
    <>
      {open ? (
        <motion.div
          variants={navLinkVariants}
          initial="hidden"
          animate={open ? "view" : "hidden"}
          className="modal_email"
        >
          <HiX
            onClick={() => {
              close(false);
            }}
          />
          <p>
            Thanks for sending me your comments! <span>Have a good day!</span>
          </p>
          <Button
            onClick={() => {
              close(false);
            }}
            variant="success"
          >
            Ok
          </Button>
        </motion.div>
      ) : undefined}
    </>
  );
};

export default ModalEMail;
