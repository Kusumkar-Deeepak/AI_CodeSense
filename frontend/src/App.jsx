import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import CodeReviewer from "./CodeReviewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/review" element={<CodeReviewer />} />
      </Routes>
    </Router>
  );
}

export default App;
