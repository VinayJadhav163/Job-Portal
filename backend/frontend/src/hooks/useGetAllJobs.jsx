import { useEffect } from "react";
import axios from "../axios"; // ✅ Your configured axios instance
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAllJobs = async () => {
    try {
      // ✅ Do not check localStorage for token!
      const res = await axios.get("/jobs/get"); // Axios already has baseURL + withCredentials

      if (res.data.success) {
        dispatch(setAllJobs(res.data.jobs));
      } else {
        toast.error("Failed to fetch jobs.");
      }
    } catch (error) {
      console.error("fetchAllJobs error:", error);
      if (error.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
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
