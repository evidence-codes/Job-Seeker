import Onboarding, { EmployerAuth } from "../components/Onboarding";

export default function Onboard() {
  return (
    <div className="flex justify-center items-center">
      <Onboarding />
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
