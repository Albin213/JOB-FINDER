
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import JobSearchFilter from "../../components/JobSearchFilter";

const JobListingPage = () => {
    
    // these are the default jobs to add in localStorage if no jobs are available



  const defaultJobs = [
    { id: 1, title: "Software Engineer", company: "Tech Corp", location: "San Francisco", jobType: "Full-Time" },
    { id: 2, title: "Product Manager", company: "Innovate LLC", location: "Remote", jobType: "Part-Time" },
    { id: 3, title: "Data Analyst", company: "DataCorp", location: "New York", jobType: "Full-Time" },
    { id: 4, title: "Frontend Developer", company: "Web Solutions", location: "Los Angeles", jobType: "Full-Time" },
    { id: 5, title: "Marketing Manager", company: "Market Leaders", location: "Chicago", jobType: "Part-Time" },
  ];

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs"));

    if (!storedJobs || storedJobs.length === 0) {
      localStorage.setItem("jobs", JSON.stringify(defaultJobs));
      setJobs(defaultJobs);
      setFilteredJobs(defaultJobs);
    } else {
      setJobs(storedJobs);
      setFilteredJobs(storedJobs);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-end">
          <Link href="/jobs/new">
            <button className="bg-green-500 text-white p-2 rounded mb-4">Add Job</button>
          </Link>
        </div>
        <h1 className="text-3xl font-semibold mb-6">Job Listings</h1>

        <JobSearchFilter jobs={jobs} setFilteredJobs={setFilteredJobs} />

     



        {filteredJobs.length === 0 ? (
          <p className="text-gray-500 text-center mt-6">No jobs available</p>
        ) : (
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Link key={job.id} href={`/jobs/${job.id}`}>
                <div className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-300 cursor-pointer my-2 border-gray-100 border-[2px] capitalize">
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                  <p className="text-gray-600 text-sm">{job.company}</p>
                  <p className="text-gray-500 pb-2 text-sm">{job.location}</p>
                  <span className="text-green-600 bg-green-100 p-1 px-2 text-center rounded-md text-sm font-semibold">{job.jobType}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListingPage;
