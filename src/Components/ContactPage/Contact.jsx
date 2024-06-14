import ContactForm from "./ContactForm";
import "./Contact.css";
import useScrollToTop from "../../Hooks/useScrollToTop";
import SendConfirm from "./SendComfirm";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MessageError from "./MessageError";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [sendError, setSendError] = useState(false);

  function messageHasSent() {
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 2000);
  }

  useScrollToTop();
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div>
        <ContactForm
          messageHasSent={messageHasSent}
          setSendError={setSendError}
        />
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-connecting-people-infographic_52683-76904.jpg"
          alt=""
        />
      </div>
      <AnimatePresence>{messageSent && <SendConfirm />}</AnimatePresence>
      <AnimatePresence>
        {sendError && <MessageError setSendError={setSendError} />}
      </AnimatePresence>
    </div>
  );
}
