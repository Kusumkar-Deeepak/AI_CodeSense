import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Project Title */}
      <header>
        <h1 className="landing-title">AI CodeSense 🤖</h1>
      </header>

      {/* Intro Section */}
      <section className="intro">
        <p className="landing-subtitle">
          AI-Powered Code Reviewer & Bug Detector
        </p>
        <Link to="/review">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>🚀 Features</h2>
        <ul>
          <li>🔍 AI-Based Code Analysis</li>
          <li>🛠️ Automatic Bug Detection</li>
          <li>📌 Code Quality Suggestions</li>
          <li>⚡ Instant Feedback</li>
          <li>📖 Supports Multiple Programming Languages</li>
        </ul>
      </section>

      {/* Pros & Cons Section */}
      <section className="pros-cons">
        <div className="pros">
          <h2>✅ Pros</h2>
          <ul>
            <li>Fast & Efficient Code Reviews</li>
            <li>Reduces Manual Effort</li>
            <li>Identifies Security Vulnerabilities</li>
            <li>Improves Code Readability</li>
          </ul>
        </div>
        <div className="cons">
          <h2>❌ Cons</h2>
          <ul>
            <li>May not catch all logic errors</li>
            <li>Requires internet for AI processing</li>
            <li>Performance varies with large codebases</li>
          </ul>
        </div>
      </section>

      {/* Developer Info */}
      <section className="developer">
        <h2>👨‍💻 Developer Info</h2>
        <p>
          Built by <strong>Kusumkar Deepak Prakash</strong>, a passionate
          Web-developer focused on AI & MERN Stack applications in software
          development.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
