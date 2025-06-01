import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    salary: '',
    requirements: '',
    jobType: '',
    experience: '',
    position: '',
    companyId: '',
  });

  const fetchJob = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/jobs/${id}`);
      const data = await res.json();
      if (data.success) {
        const job = data.job;
        setFormData({
          title: job.title || '',
          description: job.description || '',
          location: job.location || '',
          salary: job.salary || '',
          requirements: job.requirements ? job.requirements.join(',') : '',
          jobType: job.jobType || '',
          experience: job.experienceLevel || '',
          position: job.position || '',
          companyId: job.company?._id || '', // assuming company is populated
        });
      } else {
        alert('Failed to fetch job details');
      }
      setLoading(false);
    } catch (err) {
      console.error('Failed to load job', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJob();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/jobs/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include',
      });
      if (res.ok) {
        alert('Job updated successfully!');
        navigate('/admin/jobs');
      } else {
        alert('Failed to update job');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Edit Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Job Description"
          className="w-full border p-2 rounded"
          rows={4}
          required
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          placeholder="Salary"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          placeholder="Requirements (comma separated)"
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
          {/* Add more options as needed */}
        </select>

        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Experience Level</option>
          <option value="Entry">Entry</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
          {/* Add more options if you want */}
        </select>

        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Position"
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="companyId"
          value={formData.companyId}
          onChange={handleChange}
          placeholder="Company ID"
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update Job
        </button>
      </form>
    </div>
  );
};

export default EditJob;
