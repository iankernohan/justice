import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactForm() {
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    let okToSend = true;

    if (!name) {
      setNameErr(true);
      okToSend = false;
    }
    if (!email) {
      setEmailErr(true);
      okToSend = false;
    }
    if (!message) {
      setMessageErr(true);
      okToSend = false;
    }

    if (okToSend) {
      //sendEmail();
    }
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      // ADD NEW TEMPLATE BEFORE PROD
      .sendForm("service_l8xi024", "template_67zv3vy", form.current, {
        publicKey: "ckRiIYsl9EWD3S-FE",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.number.value = "";
    e.target.message.value = "";
  }

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <div>
        <label htmlFor="name">
          <span> Name* </span>
          {nameErr && <small>A Name Is Required</small>}
        </label>
        <input
          className={nameErr ? "error" : ""}
          type="text"
          id="name"
          placeholder="Name"
          autoFocus
          onChange={() => setNameErr(false)}
        />
      </div>

      <div>
        <label htmlFor="email">
          <span>Email*</span>
          {emailErr && <small>An Email Is Required</small>}
        </label>
        <input
          className={emailErr ? "error" : ""}
          type="email"
          id="email"
          placeholder="johndoe@email.com"
          onChange={() => setEmailErr(false)}
        />
      </div>

      <div>
        <label htmlFor="number">Contact Number (optional)</label>
        <input
          type="tel"
          id="number"
          placeholder="123-456-7890"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
      </div>

      <div>
        <label htmlFor="message">
          <span>Message*</span>
          {messageErr && <small>A Message Is Required</small>}
        </label>
        <textarea
          className={messageErr ? "error" : ""}
          name="message"
          id="message"
          placeholder="Enter Message Here"
          rows={6}
          onChange={() => setMessageErr(false)}
        />
      </div>
      <button>Send</button>
    </form>
  );
}