import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null || user.role !== "recruiter") {
      navigate("/");
    }
  }, [user, navigate]);

  // Show a simple responsive loading message while redirecting or checking auth
  if (!user || user.role !== "recruiter") {
    return (
      <div className="flex items-center justify-center h-screen px-4 text-center">
        <p className="text-lg sm:text-xl font-semibold text-gray-700">
          Redirecting, please wait...
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
