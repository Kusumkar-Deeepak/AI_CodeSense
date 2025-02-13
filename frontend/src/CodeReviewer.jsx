import './CodeReviewer.css';
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import axios from 'axios';

function CodeReviewer() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
    } catch (error) {
      setReview("Error fetching review. Please try again.", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Welcome Heading */}
      <div className="welcome-heading">Welcome to AI CodeSense 🤖</div>

      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={12}
              className="editor"
            />
          </div>
          <button className="review-button" onClick={reviewCode}>
            {loading ? "Reviewing..." : "Review Code"}
          </button>
        </div>

        <div className="right">
          {loading ? (
            <p className="loading-text">Analyzing your code... ⏳</p>
          ) : (
            <Markdown className="markdown-output">{review}</Markdown>
          )}
        </div>
      </main>
    </>
  );
}

export default CodeReviewer;
