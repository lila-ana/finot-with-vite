import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/beforeLogin/home";
import DashBoard from "./pages/afterLogin/dashboard";
import About from "./pages/beforeLogin/about";
import Members from "./pages/afterLogin/members";
import Events from "./pages/afterLogin/events";
import Class from "./pages/afterLogin/class";
import Elders from "./pages/afterLogin/elders";
import Settings from "./pages/afterLogin/settings";
import Login from "./pages/beforeLogin/auth";
// import MembersProfile from "./pages/afterLogin/members/_components/memberProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/landing" element={<DashBoard />} />
        <Route path="/dashboard/about" element={<About />} />
        <Route path="/dashboard/members" element={<Members />} />
        {/* <Route path="/dashboard/members/:id" element={<MembersProfile />} /> */}
        <Route path="/dashboard/events" element={<Events />} />
        <Route path="/dashboard/classes" element={<Class />} />
        <Route path="/dashboard/elders" element={<Elders />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
