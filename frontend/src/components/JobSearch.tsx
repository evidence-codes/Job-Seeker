import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Job {
  id: number;
  jobTitle: string;
  jobSummary: string;
  location: string;
  workType: string;
  // Add more properties if needed
}

const JobSearch = () => {
  const [jobs, setJobs] = useState<Job[]>([]); // Specify the type as Job[]
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:5000/api/jobs/get";
        const response = await fetch(url);
        const jobsData = await response.json();
        console.log(jobsData);
        setJobs(jobsData.jobs);
        setFilteredJobs(jobsData.jobs);
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
    // Changed to HTMLInputElement
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

  return (
    <>
      <div>
        <div className="flex justify-center p-12">
          <input
            type="text"
            placeholder="Search by job title, tech stack, company..."
            className="p-4 w-full rounded-xl border-2 border-black ... outline-transparent"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="jobs-wrapper p-4">
          {loading ? (
            <p>Loading...</p>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="mb-4">
                <h3 className="font-semibold">{job.jobTitle}</h3>
                <p className="text-sm">{job.jobSummary}</p>
                <p className="text-sm">{job.location}</p>
                <p className="text-sm">{job.workType}</p>
              </div>
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
