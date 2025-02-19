// components/JobForm.js
"use client"
import { useState } from 'react'

const JobForm = ({ addJob, setShowAddJobForm }) => {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [jobType, setJobType] = useState('Full-Time')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newJob = {
      id: Date.now(),
      title,
      company,
      location,
      jobType,
    }

    addJob(newJob)
    setShowAddJobForm(false)  
  }

  return (
    
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow-md">
      <div>
        <label className="block font-medium">Job Title</label>

        
        <input
          type="text"
          className="p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>


        <label className="block font-medium">Company Name</label>
        <input
          type="text"
          className="p-2 border rounded"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block font-medium">Location</label>
        <input
          type="text"
          className="p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-medium">Job Type</label>
        <select
          className="p-2 border rounded"
          value={jobType}

          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>


  )
}

export default JobForm
