import ContactForm from "./ContactForm";
import "./Contact.css";
import useScrollToTop from "../../Hooks/useScrollToTop";

export default function Contact() {
  useScrollToTop();
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div>
        <ContactForm />
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-connecting-people-infographic_52683-76904.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
