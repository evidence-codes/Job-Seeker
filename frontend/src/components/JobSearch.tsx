import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "./Button";

interface Job {
  _id: string;
  jobTitle: string;
  jobSummary: string;
  location: string;
  workType: string;
  // Add more properties if needed
}

const JobSearch = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://job-seeker-9cy3.onrender.com/api/jobs/get";
        const response = await fetch(url);
        const jobsData = await response.json();
        console.log(jobsData);
        setJobs(jobsData.jobs);
        setFilteredJobs(jobsData.jobs.reverse());
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) {
      params.append("q", searchQuery);
    }
    navigate({ search: params.toString() });
  }, [searchQuery, navigate]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredJobs = jobs.filter(
      (job) =>
        job.jobTitle.toLowerCase().includes(query) ||
        job.workType.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query)
    );
    setFilteredJobs(filteredJobs);
  };

  const handleClick = () => {
    navigate("/auth/");
  };

  const handleLogo = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center px-12 pt-4">
          <div>
            <p
              className="font-bold text-3xl sm:text-4xl cursor-pointer"
              onClick={handleLogo}
            >
              technicaljobboard
            </p>
          </div>
          <div className="flex justify-end">
            <Button
              style="sm:w-32 w-16 sm:text-base text-xs text-white bg-black hover:opacity-90 p-4 font-semibold rounded-lg outline-none"
              type="button"
              onClick={handleClick}
              text="Signup"
            />
          </div>
        </div>
        <div className="flex justify-center p-12">
          <input
            type="text"
            placeholder="Search by job title, tech stack, company..."
            className="p-4 w-full rounded-xl border-2 border-black ... outline-transparent"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="jobs-wrapper p-4 sm:px-16">
          {loading ? (
            <p>Loading...</p>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Link
                key={job._id}
                to={`/jobs/${job._id}`}
                className="text-black"
              >
                <div className="mb-4 p-4 border-4 rounded-xl cursor-pointer">
                  <h3 className="font-semibold">{job.jobTitle}</h3>
                  <p className="text-sm">{job.jobSummary}</p>
                  <p className="text-sm">{job.location}</p>
                  <p className="text-sm">{job.workType}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default JobSearch;
