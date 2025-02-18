"use client;"
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const jobData = [
  { id: 1, title: "Software Engineer", company: "Tech Corp", location: "New York", type: "Full-Time", description: "Develop and maintain web applications." },
  { id: 2, title: "Product Manager", company: "Biz Inc", location: "San Francisco", type: "Part-Time", description: "Manage product lifecycle and roadmap." },
];

const HomePage = () => {
  const [jobs, setJobs] = useState(jobData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter ? job.type === filter : true)
  );

  return (
    <div className="p-4">
      <input type="text" placeholder="Search jobs..." value={search} onChange={e => setSearch(e.target.value)} className="border p-2 mr-2" />
      <select onChange={e => setFilter(e.target.value)} className="border p-2">
        <option value="">All Types</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
      </select>
      <div className="grid gap-4 mt-4">
        {filteredJobs.map(job => (
          <Card key={job.id} className="p-4">
            <CardContent>
              <h2 className="text-xl font-bold">{job.title}</h2>
              <p>{job.company} - {job.location}</p>
              <p className="text-gray-600">{job.type}</p>
              <Link to={`/job/${job.id}`} className="text-blue-500">View Details</Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <Link to="/add-job" className="mt-4 inline-block p-2 bg-blue-500 text-white rounded">Add Job</Link>
    </div>
  );
};

const JobDetails = () => {
  const { id } = useParams();
  const job = jobData.find(job => job.id === parseInt(id));
  if (!job) return <p>Job not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p>{job.company} - {job.location}</p>
      <p className="text-gray-600">{job.type}</p>
      <p className="mt-2">{job.description}</p>
      <Button className="mt-4 bg-green-500">Apply Now</Button>
    </div>
  );
};

const AddJob = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState({ title: "", company: "", location: "", type: "", description: "" });

  const handleSubmit = e => {
    e.preventDefault();
    jobData.push({ id: jobData.length + 1, ...job });
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Add a New Job</h1>
      <form onSubmit={handleSubmit} className="grid gap-2 mt-4">
        <input type="text" placeholder="Job Title" value={job.title} onChange={e => setJob({ ...job, title: e.target.value })} className="border p-2" required />
        <input type="text" placeholder="Company Name" value={job.company} onChange={e => setJob({ ...job, company: e.target.value })} className="border p-2" required />
        <input type="text" placeholder="Location" value={job.location} onChange={e => setJob({ ...job, location: e.target.value })} className="border p-2" required />
        <select value={job.type} onChange={e => setJob({ ...job, type: e.target.value })} className="border p-2" required>
          <option value="">Select Job Type</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
        </select>
        <textarea placeholder="Job Description" value={job.description} onChange={e => setJob({ ...job, description: e.target.value })} className="border p-2" required></textarea>
        <Button type="submit" className="bg-blue-500">Submit</Button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
    </Router>
  );
};

export default App;
