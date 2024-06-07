import { TiSocialAtCircular } from "react-icons/ti";
import { RiFilePaper2Line } from "react-icons/ri";
import { VscPieChart } from "react-icons/vsc";
import { FiEye } from "react-icons/fi";

export default function ServicePoints() {
  return (
    <div className="service-points">
      <div>
        <TiSocialAtCircular />
        <div>Social Media Marketing</div>
      </div>

      <div>
        <span>
          <RiFilePaper2Line />
        </span>
        <div>Print Text Advertising</div>
      </div>

      <div>
        <span>
          <VscPieChart />
        </span>
        <div>Long and Short Term Strategy Consulting</div>
      </div>

      <div>
        <span>
          <FiEye />
        </span>
        <div>Organically Grow Your Audience</div>
      </div>
    </div>
  );
}
