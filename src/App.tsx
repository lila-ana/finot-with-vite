import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/beforeLogin/home";
import DashBoard from "./pages/afterLogin/dashboard";
import About from "./pages/beforeLogin/about";
import Members from "./pages/afterLogin/members";
import Events from "./pages/afterLogin/events";
import Class from "./pages/afterLogin/class";
import Elders from "./pages/afterLogin/elders";
import Settings from "./pages/afterLogin/settings";
import Login from "./pages/beforeLogin/auth";
import Attendance from "./pages/afterLogin/attendance";
import PageNotFound from "./components/pageNotFound";
import MembersProfile from "./pages/afterLogin/members/_components/memberProfile";

function App() {
  const token = localStorage.getItem("access_token");

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        {token ? (
          <>
            <Route path="/dashboard/landing" element={<DashBoard />} />
            <Route path="/dashboard/about" element={<About />} />
            <Route path="/dashboard/members" element={<Members />} />
            <Route path="/dashboard/attendance" element={<Attendance />} />
            <Route path="/dashboard/members/:id" element={<MembersProfile />} />
            <Route path="/dashboard/events" element={<Events />} />
            <Route path="/dashboard/classes" element={<Class />} />
            <Route path="/dashboard/elders" element={<Elders />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            {/* Catch-all for authenticated users */}
            <Route path="*" element={<PageNotFound />} />
          </>
        ) : (
          <>
            {/* Redirect unknown routes to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
