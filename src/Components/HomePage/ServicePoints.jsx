import { TiSocialAtCircular } from "react-icons/ti";
import { RiFilePaper2Line } from "react-icons/ri";
import { VscPieChart } from "react-icons/vsc";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ServicePoints() {
  const navigate = useNavigate();

  function toServicePage() {
    navigate("/services");
  }

  return (
    <div className="service-points">
      <div className="shadow"></div>

      <div onClick={toServicePage}>
        <TiSocialAtCircular />
        <div>Social Media Marketing</div>
      </div>

      <div onClick={toServicePage}>
        <span>
          <RiFilePaper2Line />
        </span>
        <div>Print Text Advertising</div>
      </div>

      <div onClick={toServicePage}>
        <span>
          <VscPieChart />
        </span>
        <div>Long and Short Term Strategy Consulting</div>
      </div>

      <div onClick={toServicePage}>
        <span>
          <FiEye />
        </span>
        <div>Organically Grow Your Audience</div>
      </div>
    </div>
  );
}
