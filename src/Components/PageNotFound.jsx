import { FaSadTear } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="page-not-found">
      <FaSadTear />
      <span>Page Not Found</span>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
