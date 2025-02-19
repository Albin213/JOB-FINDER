"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const NewJobPage = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      title,
      company,
      location,
      jobType,
    };

    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    localStorage.setItem("jobs", JSON.stringify([...jobs, newJob]));

    router.push("/jobs");
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white min-h-screen flex flex-col items-center pt-20 px-2 sm:px-20">
        <div className="w-full ps-2">
        <h2 className="text-2xl font-semibold mb-4">Add New Job</h2>
        </div>

        <div className="bg-[#5755552a] p-6 rounded-lg   w-full max-w-lg border-gray-100 border-[2px]">

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Job Title"
             className="w-full p-2 border rounded outline-none placeholder:text-sm"
             value={title} onChange={(e) => setTitle(e.target.value)} required 
             />
          <input type="text" placeholder="Company Name" 
            className="w-full p-2 border rounded outline-none placeholder:text-sm" 
            value={company} onChange={(e) => setCompany(e.target.value)} required
             />
          <input type="text" placeholder="Location" 
            className="w-full p-2 border rounded outline-none placeholder:text-sm" 
                value={location} onChange={(e) => setLocation(e.target.value)} required 
                />
          <select className="w-full p-2 border rounded text-sm outline-none"
             value={jobType} onChange={(e) => setJobType(e.target.value)}
             >
     
            <option value="" disabled selected>
                Job Type</option>
            <option value="Full-Time">Full-Time</option>

            <option value="Part-Time">Part-Time</option>
          </select>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Submit
            </button>
        </form>
      </div>
        </div>
 
    </div>
  );
};

export default NewJobPage;
