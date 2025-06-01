import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    salary: '',
  });

  // Fetch job by ID
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/jobs/${id}`);
        const data = await res.json();
        setJobData(data);
        setFormData({
          title: data.title || '',
          description: data.description || '',
          location: data.location || '',
          salary: data.salary || '',
        });
        setLoading(false);
      } catch (err) {
        console.error('Failed to load job', err);
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // <-- Updated PUT request URL to include /update/ prefix
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/jobs/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Job
        </button>
      </form>
    </div>
  );
};

export default EditJob;
