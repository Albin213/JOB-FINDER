"use client";

import { useState } from "react";

const JobSearchFilter = ({ jobs, setFilteredJobs }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const filterJobs = () => {
    let filtered = jobs;

    if (search) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (location) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    if (jobType) {
      filtered = filtered.filter((job) => job.jobType === jobType);
    }

    setFilteredJobs(filtered);
  };

  return (
    <div className="bg-white p-4 mb-4 rounded-md border-[2px] border-gray-200 flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          filterJobs();
        }}
        className="p-2 border rounded w-full md:w-1/3 outline-none"
      />

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border rounded w-full md:w-1/3 outline-none"
      >
        <option value="">All Locations</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Remote">Remote</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
      </select>

      <select
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        className="p-2 border rounded w-full md:w-1/3 outline-none"
      >
        <option value="">All Job Types</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
      </select>

      <button
        onClick={filterJobs}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default JobSearchFilter;
