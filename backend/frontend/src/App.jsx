import { useEffect } from "react";
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from "react-redux";
import axios from "./axios"; // Adjust the import path as necessary
import { setUser, setLoading } from "./redux/authSlice";
import { USER_API_END_POINT } from "./utils/constant";

// Components
import EditJob from './components/admin/EditJob';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from './components/admin/PostJob';
import Applicants from './components/admin/Applicants';
import ProtectedRoute from './components/admin/ProtectedRoute';

const appRouter = createHashRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/jobs', element: <Jobs /> },
  { path: '/description/:id', element: <JobDescription /> },
  { path: '/browse', element: <Browse /> },
  { path: '/profile', element: <Profile /> },
  // Admin routes
  { path: "/admin/companies", element: <ProtectedRoute><Companies /></ProtectedRoute> },
  { path: "/admin/companies/create", element: <ProtectedRoute><CompanyCreate /></ProtectedRoute> },
  { path: "/admin/companies/:id", element: <ProtectedRoute><CompanySetup /></ProtectedRoute> },
  { path: "/admin/jobs", element: <ProtectedRoute><AdminJobs /></ProtectedRoute> },
  { path: "/admin/jobs/create", element: <ProtectedRoute><PostJob /></ProtectedRoute> },
  { path: "/admin/jobs/:id/edit", element: <ProtectedRoute><EditJob /></ProtectedRoute> },
  { path: "/admin/jobs/:id/applicants", element: <ProtectedRoute><Applicants /></ProtectedRoute> },
]);

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading); // ⬅️ Track loading state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/me`, {
          withCredentials: true,
        });
        dispatch(setUser(res.data.user));
      } catch (err) {
        dispatch(setUser(null));
      } finally {
        dispatch(setLoading(false)); // ⬅️ End loading state here
      }
    };

    fetchUser();
  }, []);

  // ⏳ Show a loading screen while checking user session
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Checking session...
      </div>
    );
  }

  return <RouterProvider router={appRouter} />;
}

export default App;