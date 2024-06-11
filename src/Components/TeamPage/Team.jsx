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
          <h6>Founder &bull; Visionary</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            nostrum autem omnis vitae natus distinctio molestiae amet dolor
            doloribus alias ratione vero debitis expedita esse, culpa libero
            deleniti exercitationem placeat?
          </p>
        </div>

        <div>
          <img src="./headshots/ian.jpg" alt="" />
          <h5>I Forgot His Name</h5>
          <h6>Unknown</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            nostrum autem omnis vitae natus distinctio molestiae amet dolor
            doloribus alias ratione vero debitis expedita esse, culpa libero
            deleniti exercitationem placeat?
          </p>
        </div>

        <div>
          <img src="./headshots/hacker.jpg" alt="" />
          <h5>Ian Kernohan</h5>
          <h6>Developer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            nostrum autem omnis vitae natus distinctio molestiae amet dolor
            doloribus alias ratione vero debitis expedita esse, culpa libero
            deleniti exercitationem placeat?
          </p>
        </div>
      </section>
    </div>
  );
}
