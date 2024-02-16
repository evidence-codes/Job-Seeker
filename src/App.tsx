import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Onboard, { EmployerOnboard } from "./pages/Onboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/auth/onboarding" element={<Onboard />} />
          <Route
            path="/auth/employer/onboarding"
            element={<EmployerOnboard />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
