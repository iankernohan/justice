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
          <section>
            <span>
              <TiSocialAtCircular />
            </span>
            <h3>Social Media Marketing</h3>
          </section>
          <p>
            Melting Ice Marketing harnesses the power of social media to elevate
            your brand. Our comprehensive social media marketing strategies
            engage your audience, boost your online presence, and drive growth.
            From content creation to targeted campaigns, we ensure your brand
            stands out and connects with the right people. Let us help you turn
            social media into a powerful tool for your business success.
          </p>
        </div>

        <div>
          <section>
            <span>
              <RiFilePaper2Line />
            </span>
            <h3>Print Text Advertising</h3>
          </section>
          <p>
            We excel in creating impactful print ad campaigns that capture
            attention and drive results. From eye-catching designs to compelling
            copy, our physical advertisements are crafted to resonate with your
            target audience. Let us help you amplify your brand&apos;s presence
            with powerful and effective print advertising.
          </p>
        </div>

        <div>
          <section>
            <span>
              <VscPieChart />
            </span>
            <h3>Long and Short Term Strategy Consulting</h3>
          </section>
          <p>
            We provide expert strategy consulting to drive your success. Whether
            you need a long-term vision or short-term solutions, our tailored
            strategies ensure sustainable growth and immediate results. Partner
            with us to navigate challenges, seize opportunities, and achieve
            your business goals effectively.
          </p>
        </div>

        <div>
          <section>
            <span>
              <FiEye />
            </span>
            <h3>Organically Grow Your Audience</h3>
          </section>
          <p>
            Melting Ice Marketing will connect you with genuine followers
            through organic growth strategies. Our approach focuses on
            high-quality content, community engagement, and data-driven insights
            to build a loyal and engaged audience. Say goodbye to fake followers
            and hello to meaningful interactions and sustainable growth. Let us
            help you naturally cultivate a strong online presence.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
