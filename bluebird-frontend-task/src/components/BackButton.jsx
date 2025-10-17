import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-3"
    >
      <ArrowLeft size={18} className="mr-1" />
      Back
    </button>
  );
}
