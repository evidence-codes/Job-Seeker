import { useState } from "react";
import classificationsData from "../data/classifications.json";
import Button from "./Button";

export default function Onboarding() {
  const monthOptions = [
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    startedMonth: "",
    startedYear: "",
    endedMonth: "",
    endedYear: "",
    stillInRole: false,
    profileVisibility: "standard",
  });

  const handleClick = async () => {
    try {
      const response = await fetch(
        "https://job-seeker-9cy3.onrender.com/api/jobs/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }
      // Handle success
      console.log("Form data submitted successfully");
    } catch (err) {
      // Handle error
      console.error("Error submitting form data:", err);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const [preferredClassification, setPreferredClassification] = useState("");
  const [subClassification, setSubClassification] = useState("");

  const handleClassificationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedClassification = event.target.value;
    setPreferredClassification(selectedClassification);
    setSubClassification("");
  };

  const handleSubClassificationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSubClassification = event.target.value;
    setSubClassification(selectedSubClassification);
  };

  const selectedClassificationData = classificationsData.find(
    (c) => c.id === preferredClassification
  );
  const subClassifications = selectedClassificationData
    ? selectedClassificationData.subClassifications
    : [];

  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <form className="w-full py-8">
        <div className="px-8 py-8">
          <h1 className="text-2xl font-semibold">Almost done</h1>
          <p className="text-lg">
            Be found by employers. Start a Job Seeker Profile
          </p>
        </div>
        <div className="px-8">
          <p className="text-gray-700 font-semibold text-base">First name</p>
          <input
            className="w-full placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
            placeholder=""
            type="text"
            name=""
            id=""
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
        </div>
        <div className="px-8">
          <p className="text-gray-700 font-semibold text-base">Last name</p>
          <input
            className="w-full placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
            placeholder=""
            type="text"
            name=""
            id=""
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
        </div>

        <div className="p-8">
          <hr />
        </div>
        <div className="px-8">
          <h2 className="text-gray-700 text-xl font-semibold">
            Recent Experiences
          </h2>
        </div>
        {/* <div className="px-8 flex py-4">
          <input type="checkbox" name="" id="" onChange={(e) => handleInputChange("lastName", e.target.checked)}/>
          <p className="text-gray-700 text-base font-semibold pl-2">
            I have experience
          </p>
        </div> */}
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
                {monthOptions.map((option) => (
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
                {monthOptions.map((option) => (
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
          {/* <div className="px-4 flex py-4">
            <input type="checkbox" name="" id="" />
            <p className="text-gray-700 text-base font-semibold pl-2">
              Still in role
            </p>
          </div> */}
        </div>
        <div className="p-8">
          <hr />
        </div>
        <div className="px-4 text-gray-700">
          <div className="px-4">
            <p className="text-gray-700 font-semibold text-base">
              Preferred classification
            </p>
            <select
              className="border px-4 border-gray-500 outline-none py-3 w-full rounded-lg bg-white"
              value={preferredClassification}
              onChange={handleClassificationChange}
            >
              <option value="" disabled>
                Select classification
              </option>
              {classificationsData.map((classification) => (
                <option key={classification.id} value={classification.id}>
                  {classification.name}
                </option>
              ))}
            </select>
          </div>
          <div className="px-4 py-4">
            <p className="text-gray-700 font-semibold text-base">
              Sub-classification
            </p>
            <select
              className="border px-4 border-gray-500 outline-none py-3 w-full rounded-lg bg-white"
              value={subClassification}
              onChange={handleSubClassificationChange}
              disabled={!preferredClassification}
            >
              <option value="" disabled>
                Select sub-classification
              </option>
              {subClassifications.map((subClassification, index) => (
                <option key={index} value={subClassification}>
                  {subClassification}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="p-8">
          <hr />
        </div>
        <div className="px-8">
          <div className="bg-gray-500">
            <div className="px-8 pt-4">
              <h3 className="text-white font-semibold text-xl">
                Be found by employers
              </h3>
            </div>

            <div>
              <div className="px-8 py-4">
                <p className="text-white">
                  Your profile visibility setting controls if you can be
                  approached by employers and recruiters with job opportunities.
                </p>
                <div className="flex space-x-4 text-gray-700">
                  <select
                    className="border px-4 border-gray-500 outline-none py-3 w-full rounded-lg bg-white"
                    name="profile-visibility"
                    id=""
                  >
                    <option className="py-4" value="month">
                      Standard
                    </option>
                    <option className="py-4" value="month">
                      Limited
                    </option>
                    <option className="py-4" value="month">
                      Hidden
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-8 text-white pb-4">
              <p>
                For all settings, your Profile including any verified
                credentials will be sent to the employer with your applications.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 py-4">
          <Button
            style="w-full text-white bg-black hover:opacity-90 p-4 font-semibold rounded-lg outline-none"
            type="button"
            onClick={handleClick}
            text="Save and Continue"
          />
          {showPopup && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="bg-white p-6 rounded shadow-lg">
                <p>Slow down! We're still working on the site.</p>
                <Button
                  style="text-white bg-gray-700 hover:opacity-90 px-4 font-semibold rounded-lg outline-none"
                  type="button"
                  onClick={handleClose}
                  text="Close"
                />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export function EmployerAuth() {
  return (
    <>
      <div>
        <form className="w-full py-8">
          <div className="px-8 py-8">
            <h1 className="text-5xl font-semibold">Your Employer Account</h1>
            <div className="py-8 px-4">
              <h3 className="text-2xl">Your details</h3>
              <div>
                <div className="py-4">
                  <p className="text-gray-700 font-semibold text-base">Email</p>
                  <input
                    className="w-full placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
                    placeholder=""
                    type="email"
                    name=""
                    id=""
                  />
                </div>
                <div className="py-2">
                  <p className="text-gray-700 font-semibold text-base">
                    Full name
                  </p>
                  <input
                    className="w-full placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
                    placeholder=""
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
            <div className="py-8 px-4">
              <h3 className="text-2xl">Business Details</h3>
              <div>
                <div className="py-4">
                  <p className="text-gray-700 font-semibold text-base">
                    Business name
                  </p>
                  <input
                    className="w-full placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
                    placeholder=""
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="py-2">
                  <p className="text-gray-700 font-semibold text-base">
                    Phone number
                  </p>
                  <input
                    className="w-full placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
                    placeholder=""
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="py-2">
                  <p className="text-gray-700 font-semibold text-base">
                    Country
                  </p>
                  <div className="flex space-x-4 text-gray-700">
                    <select
                      className="border px-4 border-gray-500 outline-none py-3 w-2/3 rounded-lg bg-white"
                      name="month"
                      id=""
                    >
                      <option className="py-4" value="month">
                        Month
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8 py-4">
              <Button
                style="w-full text-white bg-black hover:opacity-90 p-4 font-semibold rounded-lg outline-none"
                type="button"
                onClick={() => console.log()}
                text="Save and Continue"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

function generateYear() {
  const currentYear = new Date().getFullYear();
  const result = [];
  for (let year = currentYear; year >= 1900; year--) {
    result.push({ key: year, value: year });
  }
  return result;
}
