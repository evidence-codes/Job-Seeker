import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface TabButtonsProps {
  activeTab: "login" | "signup";
  handleTabClick: (tab: "login" | "signup") => void;
}

function LoginForm() {
  return (
    <>
      <div>
        <form>
          <div className="px-4 pb-3">
            <p className="text-gray-700 font-medium text-sm">Email</p>
            <input
              className="placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
              placeholder="example@example.com"
              type="email"
              name=""
              id=""
            />
          </div>
          <div className="px-4 pb-3">
            <p className="text-gray-700 font-medium text-sm">Password</p>
            <input
              className="placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
              placeholder="Password"
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="px-4">
            <Button
              style="w-32 text-white bg-black hover:opacity-90 p-4 font-semibold rounded-lg outline-none"
              type="button"
              onClick={() => console.log()}
              text="Login"
            />
          </div>
        </form>
      </div>
    </>
  );
}

function SignupForm() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/auth/onboarding");
  };
  return (
    <>
      <div>
        <form>
          <div className="px-4 pb-3">
            <p className="text-gray-700 font-medium text-sm">Email</p>
            <input
              className="placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
              placeholder="example@example.com"
              type="email"
              name=""
              id=""
            />
          </div>
          <div className="px-4 pb-3">
            <p className="text-gray-700 font-medium text-sm">Password</p>
            <input
              className="placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
              placeholder="Password"
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="px-4">
            <Button
              style="w-32 text-white bg-black hover:opacity-90 p-4 font-semibold rounded-lg outline-none"
              type="button"
              onClick={handleSignup}
              text="Sign up"
            />
          </div>
        </form>
      </div>
    </>
  );
}

const TabButtons: React.FC<TabButtonsProps> = ({
  activeTab,
  handleTabClick,
}) => (
  <div className="flex px-8">
    <span
      className={`px-4 py-2 text-gray-700 font-medium text-base cursor-pointer ${
        activeTab === "login"
          ? "underline underline-offset-8 decoration-4 decoration-black"
          : ""
      }`}
      onClick={() => handleTabClick("login")}
    >
      Login
    </span>
    <span
      className={`px-4 py-2 text-gray-700 font-medium text-base cursor-pointer ${
        activeTab === "signup"
          ? "underline underline-offset-8 decoration-4 decoration-black"
          : ""
      }`}
      onClick={() => handleTabClick("signup")}
    >
      Sign Up
    </span>
  </div>
);

const Form = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  const handleTabClick = (tab: "login" | "signup") => {
    setActiveTab(tab);
  };

  return (
    <div>
      <TabButtons activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="p-8">
        {activeTab === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

export default Form;
