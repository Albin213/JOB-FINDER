"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const selectedJob = jobs.find((job) => job.id === parseInt(id));
    setJob(selectedJob);
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="min-h-screen max-w-4xl mx-auto  bg-white">
      <div className="bg-white p-6 w-full max-w-lg pt-10">
        <h2 className="text-3xl font-semibold ">{job.title}</h2>
        <p className="text-gray-600 pt-3">{job.company}</p>
        <p className="text-gray-500 pb-2">{job.location}</p>
        <span className="text-green-600 bg-green-100 p-1 px-2 text-center rounded-md text-sm font-semibold ">{job.jobType}</span>
      </div>
      <h1 className="text-2xl text-black font-semibold ps-6 pt-8">Job Description</h1>
      <p className="px-6 text-gray-600">Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøv</p>
      <button className="bg-blue-500 text-white rounded-md p-2 ms-6 hover:scale-105 mt-10">Apply Now</button>

    </div>
  );
};

export default JobDetailPage;
