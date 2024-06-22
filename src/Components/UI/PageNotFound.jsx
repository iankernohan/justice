import { FaSadTear } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  const { unknown } = useParams();

  return (
    <div className="page-not-found">
      <FaSadTear />
      <span>Page Not Found</span>
      <small>&quot;/{unknown}&quot;</small>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
