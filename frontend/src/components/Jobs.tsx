import { useState } from "react";
import Button from "./Button";

import TextEditor from "./TextEditor";

export default function Jobs() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    location: "",
    workType: "",
    payType: "",
    currency: "",
    payFrom: "",
    payTo: "",
    jobDescription: "",
    jobSummary: "",
  });

  const [jobSummary, setJobSummary] = useState("");

  const handleJobSummaryChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setJobSummary(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProcedureContentChange = (content: string) => {
    setFormData((prevData) => ({
      ...prevData,
      jobDescription: content,
    }));
  };

  const handleClick = () => {
    fetch("https://job-seeker-9cy3.onrender.com/api/jobs/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to post job ad");
        }
        console.log("Job ad posted successfully");
        // Reset form data after successful submission
        setFormData({
          jobTitle: "",
          location: "",
          workType: "",
          payType: "",
          currency: "",
          payFrom: "",
          payTo: "",
          jobDescription: "",
          jobSummary: "",
        });
        console.log(setFormData);
      })
      .catch((error) => {
        console.error("Error posting job ad:", error);
      });
  };
  return (
    <>
      <div>
        <form className="w-full py-8">
          <div className="px-8 py-8">
            <h1 className="text-3xl font-semibold">Classify your role</h1>
            <div className="py-8 px-4">
              <h3 className="text-2xl font-semibold">Role Information</h3>
              <div className="py-4">
                <p className="font-semibold text-xl">Job title</p>
                <p className="py-1">
                  Enter a simple job title (e.g. Sales Assistant)
                </p>
                <input
                  className="w-full placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
                  placeholder=""
                  type="text"
                  name="jobTitle"
                  id=""
                  onChange={handleInputChange}
                />
              </div>
              <div className="py-4">
                <p className="font-semibold text-xl">Location</p>
                <p className="py-1">
                  Enter a suburb, city or region (e.g. Unknown Location)
                </p>
                <input
                  className="w-full placeholder-shown:border-gray-500 ... p-3 rounded-lg text-gray-700 font-medium placeholder:italic border outline-none"
                  placeholder=""
                  type="text"
                  name="location"
                  id=""
                />
              </div>
              <div>
                <p className="font-semibold py-2 text-xl">Work Type</p>
                <div className="flex flex-col">
                  <label className="">
                    <input
                      type="radio"
                      name="workType"
                      value="Full-time"
                      onChange={handleRadioChange}
                      checked={formData.workType === "Full-time"}
                    />
                    &nbsp; Full-time
                  </label>
                  <label className="">
                    <input
                      type="radio"
                      name="workType"
                      value="Part-time"
                      onChange={handleRadioChange}
                      checked={formData.workType === "Part-time"}
                    />
                    &nbsp; Part-time
                  </label>
                  <label className="">
                    <input
                      type="radio"
                      name="workType"
                      value="Contract"
                      onChange={handleRadioChange}
                      checked={formData.workType === "Contract"}
                    />
                    &nbsp; Contract
                  </label>
                  <label className="">
                    <input
                      type="radio"
                      name="workType"
                      value="Casual"
                      onChange={handleRadioChange}
                      checked={formData.workType === "Casual"}
                    />
                    &nbsp; Casual
                  </label>
                </div>
              </div>
            </div>
            <div className="py-8 px-4">
              <h3 className="text-2xl font-semibold">Pay Details</h3>
              <div className="py-4">
                <p className="font-semibold py-2 text-xl">Pay Type</p>
                <div className="flex flex-col">
                  <label>
                    <input
                      type="radio"
                      name="payType"
                      value="Hourly rate"
                      onChange={handleRadioChange}
                      checked={formData.payType === "Hourly rate"}
                    />
                    &nbsp; Hourly rate
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="payType"
                      value="Monthly salary"
                      onChange={handleRadioChange}
                      checked={formData.payType === "Monthly salary"}
                    />
                    &nbsp; Monthly salary
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="payType"
                      value="Annual salary"
                      onChange={handleRadioChange}
                      checked={formData.payType === "Annual salary"}
                    />
                    &nbsp; Annual salary
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="payType"
                      value="Annual plus commission"
                      onChange={handleRadioChange}
                      checked={formData.payType === "Annual plus commission"}
                    />
                    &nbsp; Annual plus commission
                  </label>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Pay Range</h3>
                <p>
                  Enter a range to offer candidates. If pay is an exact amount,
                  enter the same in both fields.
                </p>
                <div className="w-full flex space-x-4 py-2">
                  <div>
                    <p className="font-semibold">Currency</p>
                    <select
                      className="border px-4 border-gray-500 outline-none py-3 w-full rounded-lg bg-white"
                      name="currency"
                      id=""
                      onChange={handleSelectChange}
                    >
                      <option className="py-4" value="usd">
                        USD
                      </option>
                      <option className="py-4" value="eur">
                        EUR
                      </option>
                    </select>
                  </div>
                  <div>
                    <p className="font-semibold">From</p>
                    <select
                      className="border px-4 border-gray-500 outline-none py-3 w-full rounded-lg bg-white"
                      name="payFrom"
                      id=""
                      onChange={handleSelectChange}
                    >
                      <option className="py-4" value="money">
                        500
                      </option>
                      <option className="py-4" value="money">
                        1000
                      </option>
                    </select>
                  </div>
                  <div>
                    <p className="font-semibold">To</p>
                    <select
                      className="border px-4 border-gray-500 outline-none py-3 w-full rounded-lg bg-white"
                      name="payTo"
                      id=""
                      onChange={handleSelectChange}
                    >
                      <option className="py-4" value="money">
                        10000
                      </option>
                      <option className="py-4" value="mon">
                        20000
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 py-8">
            <h1 className="text-3xl font-semibold">Write about your job</h1>
            <div className="py-4 px-4">
              <p className="font-semibold text-xl">Job description</p>
              <p className="py-1">Enter your job details.</p>
              <TextEditor onChange={handleProcedureContentChange} />
            </div>
            <div className="sm:pt-14 pt-36 px-4">
              <h3 className="text-2xl font-semibold">
                Candidate search results
              </h3>
              <div className="py-4">
                <h3 className="py-1 font-semibold text-xl">Job Summary</h3>
                <p className="pb-2">
                  Write a compelling statement about your role to entice more
                  candidates.
                </p>
                <textarea
                  className="w-full outline-none border border-black rounded-lg p-2"
                  name="jobSummary"
                  id=""
                  cols={30}
                  rows={10}
                  value={jobSummary}
                  onChange={handleJobSummaryChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="px-8 py-4">
            <Button
              style="w-full text-white bg-black hover:opacity-90 p-4 font-semibold rounded-lg outline-none"
              type="button"
              onClick={handleClick}
              text="Post my Job Ad"
            />
          </div>
        </form>
      </div>
    </>
  );
}
