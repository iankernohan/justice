import useScrollToTop from "../../Hooks/useScrollToTop";
import "./Team.css";

export default function Team() {
  useScrollToTop();
  return (
    <div className="meet-the-team">
      <h2>Meet the Team</h2>
      <section>
        <div>
          <img src="./headshots/justice.jpg" alt="" />
          <h5>Justice Johnson</h5>
          <h6>Owner</h6>
          <p>
            Justice has always wanted to help businesses, even in middle school
            he would go to small mom and pop shops and ask if he could design
            them websites. More recently over the pandemic he started helping
            businesses market themselves by painting murals and throwing other
            marketing ideas around with owners. Soon enough, more people would
            request social media advice and for content to promote themselves.
            Melting Ice Marketing is now here to focus on that need and help as
            many businesses grow and connect. Justice likes to think on a large
            scale and push brands forward, but is also looking to work side by
            side with the customer to make new strides towards goals!
          </p>
        </div>

        <div>
          <img src="./headshots/ian.jpg" alt="" />
          <h5>John Buiteweg</h5>
          <h6>Business Analyst &bull; Consultant</h6>
          <p>
            John comes from the engineering world making his way into sales and
            business development. Being born in Detroit and growing up most of
            his life within the Detroit area, he&apos;s come to love and have an
            appreciation for the local businesses that represent the culture of
            this beautiful state. With experience in consulting and research and
            development he&apos;s look forward to helping you project your
            vision and business!
          </p>
        </div>

        <div>
          <img src="./headshots/hacker.jpg" alt="" />
          <h5>Ian Kernohan</h5>
          <h6>Developer</h6>
          <p>
            Ian is a self-taught web developer who loves building easy-to-use
            and effective websites. Focused on delivering high-quality results,
            Ian works hard to create web solutions that meet our clients&apos;
            needs. Always eager to learn and improve, Ian is excited to take on
            new projects. If you need a website designed and bulit, we&apos;d be
            delighted to help you make it happen!
          </p>
        </div>
      </section>
    </div>
  );
}
