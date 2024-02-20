// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const JobSearch = () => {
  // const [jobs, setJobs] = useState([]);
  // const [filteredJobs, setFilteredJobs] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const url = "URL_TO_YOUR_JOB_API";
  //       const response = await fetch(url);
  //       const jobsData = await response.json();
  //       setJobs(jobsData);
  //       setFilteredJobs(jobsData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const params = new URLSearchParams();
  //   if (searchQuery) {
  //     params.append("q", searchQuery);
  //   }
  //   navigate({ search: params.toString() });
  // }, [searchQuery, navigate]);

  // const handleSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const query = e.target.value.toLowerCase();
  //   setSearchQuery(query);
  //   const filteredJobs = jobs.filter(
  //     (job) =>
  //       job.title.toLowerCase().includes(query) ||
  //       job.company.toLowerCase().includes(query) ||
  //       job.techStack.toLowerCase().includes(query)
  //   );
  //   setFilteredJobs(filteredJobs);
  // };

  return (
    <>
      {/* <div>
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
          {filteredJobs.map((job) => (
            <div key={job.id} className="mb-4">
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-sm">{job.company}</p>
              <p className="text-sm">{job.techStack}</p>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default JobSearch;
