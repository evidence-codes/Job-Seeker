import { useState } from "react";
import Button from "./Button";

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
              text="Sign up"
            />
          </div>
        </form>
      </div>
    </>
  );
}

function Onboarding() {
  const options = [
    { value: "jan", month: "January" },
    { value: "feb", month: "February" },
    { value: "mar", month: "March" },
    { value: "apr", month: "April" },
    { value: "may", month: "May" },
    { value: "jun", month: "June" },
    { value: "jul", month: "July" },
    { value: "aug", month: "August" },
    { value: "sept", month: "September" },
    { value: "oct", month: "October" },
    { value: "nov", month: "November" },
    { value: "dec", month: "December" },
  ];

  const years = generateYear();

  return (
    <div>
      <form className="w-full sm:w-1/3">
        <div className="sm:flex p-4">
          <div className="px-4">
            <p className="text-gray-700 font-semibold text-base">First name</p>
            <input
              className="placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="px-4">
            <p className="text-gray-700 font-semibold text-base">Last name</p>
            <input
              className="placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="p-8">
          <hr />
        </div>
        <div className="px-8">
          <h2 className="text-gray-700 text-xl font-semibold">
            Recent Experiences
          </h2>
        </div>
        <div className="px-8 flex py-4">
          <input type="checkbox" name="" id="" />
          <p className="text-gray-700 text-base font-semibold pl-2">
            I have experience
          </p>
        </div>
        <div className="px-4">
          <div className="px-4">
            <p className="text-gray-700 font-semibold text-base">Job title</p>
            <input
              className="w-full placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="px-4 py-4">
            <p className="text-gray-700 font-semibold text-base">
              Company name
            </p>
            <input
              className="w-full placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
              placeholder=""
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="px-4">
            <p className="text-gray-700 font-semibold text-base">Started</p>
            <div className="flex space-x-4 text-gray-700">
              <select
                className="border px-4 border-gray-500 outline-none py-3 w-1/2 rounded-lg bg-white"
                name="month"
                id=""
              >
                <option className="py-4" value="month">
                  Month
                </option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.month}
                  </option>
                ))}
                ;
              </select>
              <select
                className="border px-4 border-gray-500 outline-none py-3 w-1/2 rounded-lg bg-white"
                name="year"
                id=""
              >
                <option value="year">Year</option>
                {years.map((year) => (
                  <option key={year.key} value={year.value}>
                    {year.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="px-4 py-4">
            <p className="text-gray-700 font-semibold text-base">Ended</p>
            <div className="flex space-x-4 text-gray-700">
              <select
                className="border px-4 border-gray-500 outline-none py-3 w-1/2 rounded-lg bg-white"
                name="month"
                id=""
              >
                <option className="py-4" value="month">
                  Month
                </option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.month}
                  </option>
                ))}
                ;
              </select>
              <select
                className="border px-4 border-gray-500 outline-none py-3 w-1/2 rounded-lg bg-white"
                name="year"
                id=""
              >
                <option value="year">Year</option>
                {years.map((year) => (
                  <option key={year.key} value={year.value}>
                    {year.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="px-4 flex py-4">
            <input type="checkbox" name="" id="" />
            <p className="text-gray-700 text-base font-semibold pl-2">
              Still in role
            </p>
          </div>
        </div>
        <div className="p-8">
          <hr />
        </div>
        <div className="px-4">
          <div className="px-4">
            <p className="text-gray-700 font-semibold text-base">
              Home location
            </p>
            <input
              className="w-full placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
              placeholder="Enter suburb or town"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="p-8">
          <hr />
        </div>
        <div className="px-4">
          <div className="px-4">
            <p className="text-gray-700 font-semibold text-base">
              Home location
            </p>
            <input
              className="w-full placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
              placeholder="Enter suburb or town"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
      </form>
    </div>
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

function generateYear() {
  const currentYear = new Date().getFullYear();
  const result = [];
  for (let year = currentYear; year >= 1900; year--) {
    result.push({ key: year, value: year });
  }
  return result;
}

export default Form;
export { Onboarding };
