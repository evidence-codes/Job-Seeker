import Onboarding, { EmployerAuth } from "../components/Onboarding";
import { useNavigate } from "react-router-dom";

export default function Onboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="px-12 pt-4 cursor-pointer" onClick={handleClick}>
        <p className="font-bold text-3xl sm:text-4xl">technicaljobboard</p>
      </div>
      <div className="flex justify-center items-center">
        <Onboarding />
      </div>
    </div>
  );
}

export function EmployerOnboard() {
  return (
    <div className="flex justify-center items-center">
      <EmployerAuth />
    </div>
  );
}
