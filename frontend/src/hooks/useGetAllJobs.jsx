import { useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice"; // ✅ Adjust import path

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAllJobs = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("No token found. Please log in.");
        navigate("/login");
        return;
      }

      const res = await axios.get("https://job-portal-x8r2.onrender.com/api/v1/jobs/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true
      });

      if (res.data.success) {
        dispatch(setAllJobs(res.data.jobs)); // ✅ Important
      } else {
        toast.error("Failed to fetch jobs.");
      }
    } catch (error) {
      console.error("fetchAllJobs error:", error);
      if (error.response?.status === 401) {
        toast.error("Unauthorized. Please log in.");
        navigate("/login");
      } else {
        toast.error("Something went wrong. Try again later.");
      }
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);
};

export default useGetAllJobs;
