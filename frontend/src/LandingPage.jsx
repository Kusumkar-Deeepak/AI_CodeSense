import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header>
        <h1 className="landing-title">AI CodeSense 🤖</h1>
        <p className="landing-subtitle">
          AI-Powered Code Reviewer & Bug Detector
        </p>
        <Link to="/review">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </header>

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

      <section className="developer">
        <h2>👨‍💻 Developer Info</h2>
        <p>
          Built by <strong>Nikita Dilip Kundle</strong>, a passionate developer
          focused on AI & Machine Learning applications in software development.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
