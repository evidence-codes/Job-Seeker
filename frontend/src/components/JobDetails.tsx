// JobDetails.tsx

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Job {
  id: number;
  jobTitle: string;
  jobSummary: string;
  location: string;
  workType: string;
  payType: string;
  currency: string;
  payFrom: string;
  payTo: string;
  jobDescription: string;
}

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:5000/api/jobs/get/${id}`;
        const response = await fetch(url);
        const jobData = await response.json();
        setJob(jobData.job);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        {/* <h1>{job.jobTitle}</h1>
        <p>{job.jobSummary}</p>
        <p>{job.location}</p>
        <p>{job.workType}</p>
        <p>{job.payType}</p>
        <p>{job.currency}</p>
        <p>{job.payFrom}</p>
        <p>{job.payTo}</p>
        <p>{job.jobDescription}</p> */}
      </div>
    </>
  );
};

export default JobDetails;
