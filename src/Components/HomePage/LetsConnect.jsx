import { useNavigate } from "react-router-dom";

export default function LetsConnect() {
  const navigate = useNavigate();

  return (
    <div className="lets-connect">
      <div>
        <h2>Let&apos;s Connect and Grow!</h2>
        <p>
          Welcome to MelitingIceMarketing! We specialize in helping small
          businesses organically grow using social media, print text and
          consulting. Our team is dedicated to understainding your unique needs
          and crafting tailored soultions to elevate your brand. Click here to
          get in touch and take the first step towards sustainable growth.
        </p>
        <button onClick={() => navigate("/contact")}>Get Started</button>
      </div>
      <div>
        <img src="social-media.avif" alt="Social media" />
      </div>
    </div>
  );
}
