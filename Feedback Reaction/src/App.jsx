import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [feedback, setFeedback] = useState("");

  const categories = ["Service", "Product", "Support"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setFeedback("High Feedback");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory && feedback) {
      alert(`Category: ${selectedCategory}\nFeedback: ${feedback}`);
      setSelectedCategory(null);
      setFeedback("");
    } else {
      alert("Please select a category first!");
    }
  };

  return (
    <div className="app-container">
      <h1>Feedback Response Form</h1>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="feedback-box">
          <p>{feedback}</p>
        </div>
      )}

      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;
