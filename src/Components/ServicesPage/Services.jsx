import useScrollToTop from "../../Hooks/useScrollToTop";
import { TiSocialAtCircular } from "react-icons/ti";
import { RiFilePaper2Line } from "react-icons/ri";
import { VscPieChart } from "react-icons/vsc";
import { FiEye } from "react-icons/fi";
import "./Services.css";
import CarouselVid from "./CarouselVid";
import { motion } from "framer-motion";

export default function Services() {
  useScrollToTop();
  return (
    <motion.div className="services">
      <h2>Services</h2>
      <CarouselVid />
      <div className="content">
        <div>
          <span>
            <TiSocialAtCircular />
          </span>
          <h3>Social Media Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus, sit odio laudantium nemo doloremque facilis eaque
            consequatur quia in suscipit modi aliquam expedita sequi adipisci
            voluptatum nisi dolores, quasi error.
          </p>
        </div>

        <div>
          <span>
            <RiFilePaper2Line />
          </span>
          <h3>Print Text Advertising</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus, sit odio laudantium nemo doloremque facilis eaque
            consequatur quia in suscipit modi aliquam expedita sequi adipisci
            voluptatum nisi dolores, quasi error.
          </p>
        </div>

        <div>
          <span>
            <VscPieChart />
          </span>
          <h3>Long and Short Term Strategy Consulting</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus, sit odio laudantium nemo doloremque facilis eaque
            consequatur quia in suscipit modi aliquam expedita sequi adipisci
            voluptatum nisi dolores, quasi error.
          </p>
        </div>

        <div>
          <span>
            <FiEye />
          </span>
          <h3>Organically Grow Your Audience</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus, sit odio laudantium nemo doloremque facilis eaque
            consequatur quia in suscipit modi aliquam expedita sequi adipisci
            voluptatum nisi dolores, quasi error.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
