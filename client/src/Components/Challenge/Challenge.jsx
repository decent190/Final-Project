import React, { useState } from 'react';

const htmlChallenges = [
  { question: "------ Defines a division or section.", answer: "div" },
  { question: "------ Inserts a horizontal line.", answer: "hr" },
  { question: "------ Headings, from largest to smallest.", answer: "h1 to h6" },
  { question: "------ Paragraph of text.", answer: "p" },
  { question: "------ Hyperlink to another page.", answer: "a" },
  { question: "------ Embeds an image.", answer: "img" },
  { question: "------ Unordered/ordered lists and list items.", answer: "ul, ol, li" },
  { question: "------ Creates a table.", answer: "table" },
  { question: "------ Line break.", answer: "br" },
  { question: "------ Inline container for text.", answer: "span" },
];

const cssChallenges = [
  { question: "------ Text color.", answer: "color" },
  { question: "------ Background color.", answer: "background-color" },
  { question: "------ Size of text.", answer: "font-size" },
  { question: "------ Space outside an element.", answer: "margin" },
  { question: "------ Space inside an element.", answer: "padding" },
  { question: "------ Border around elements.", answer: "border" },
  { question: "------ Width of an element.", answer: "width" },
  { question: "------ Height of an element.", answer: "height" },
  { question: "------ Layout type (block, inline, flex, grid).", answer: "display" },
  { question: "------ Horizontal alignment of text.", answer: "text-align" },
];

const jsChallenges = [
  { question: "------ Store data using let, const, or var.", answer: "Variables" },
  { question: "------ Reusable blocks of code.", answer: "Functions" },
  { question: "------ Respond to user actions (click, input).", answer: "Events" },
  { question: "------ if, else, switch for logic.", answer: "Conditionals" },
  { question: "------ Repeat actions (for, while).", answer: "Loops" },
  { question: "------ Lists of values.", answer: "Arrays" },
  { question: "------ Collections of key-value pairs.", answer: "Objects" },
  { question: "------ Change page content dynamically.", answer: "DOM Manipulation" },
  { question: "------ Log output with console.log().", answer: "Console" },
  { question: "------ Explain code with // or /* */.", answer: "Comments" },
];

const Challenge = () => {
  const [htmlInputs, setHtmlInputs] = useState(Array(htmlChallenges.length).fill(""));
  const [cssInputs, setCssInputs] = useState(Array(cssChallenges.length).fill(""));
  const [jsInputs, setJsInputs] = useState(Array(jsChallenges.length).fill(""));
  const [showResults, setShowResults] = useState(false);

  const handleInput = (setter, idx, value) => {
    setter(inputs => {
      const updated = [...inputs];
      updated[idx] = value;
      return updated;
    });
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const getResult = (input, answer) => {
    if (!showResults) return null;
    // For correct answers, show green ✔
    if (input.trim().toLowerCase() === answer.trim().toLowerCase()) {
      return <span style={{ color: 'green', marginLeft: '8px' }}>✔</span>;
    }
    // For wrong answers, show red ✖
    if (input.trim() !== "") {
      return <span style={{ color: 'red', marginLeft: '8px' }}>✖</span>;
    }
    return null;
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Web Development Challenge</h2>
      <div className="row g-4">
        {/* HTML Challenge */}
        <div className="col-12 col-lg-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="card-title text-primary">HTML Challenge</h3>
              <ol>
                {htmlChallenges.map((item, idx) => (
                  <li key={idx} className="mb-3">
                    <span style={{ fontWeight: 'bold', color: '#333' }}>{item.question}</span>
                    <input
                      type="text"
                      className="form-control d-inline-block ms-2"
                      style={{ width: '120px', display: 'inline-block' }}
                      value={htmlInputs[idx]}
                      onChange={e => handleInput(setHtmlInputs, idx, e.target.value)}
                      disabled={showResults}
                    />
                    {getResult(htmlInputs[idx], item.answer)}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        {/* CSS Challenge */}
        <div className="col-12 col-lg-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="card-title text-success">CSS Challenge</h3>
              <ol>
                {cssChallenges.map((item, idx) => (
                  <li key={idx} className="mb-3">
                    <span style={{ fontWeight: 'bold', color: '#333' }}>{item.question}</span>
                    <input
                      type="text"
                      className="form-control d-inline-block ms-2"
                      style={{ width: '120px', display: 'inline-block' }}
                      value={cssInputs[idx]}
                      onChange={e => handleInput(setCssInputs, idx, e.target.value)}
                      disabled={showResults}
                    />
                    {getResult(cssInputs[idx], item.answer)}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        {/* JS Challenge */}
        <div className="col-12 col-lg-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="card-title text-warning">JavaScript Challenge</h3>
              <ol>
                {jsChallenges.map((item, idx) => (
                  <li key={idx} className="mb-3">
                    <span style={{ fontWeight: 'bold', color: '#333' }}>{item.question}</span>
                    <input
                      type="text"
                      className="form-control d-inline-block ms-2"
                      style={{ width: '120px', display: 'inline-block' }}
                      value={jsInputs[idx]}
                      onChange={e => handleInput(setJsInputs, idx, e.target.value)}
                      disabled={showResults}
                    />
                    {getResult(jsInputs[idx], item.answer)}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-success btn-lg" onClick={checkAnswers} disabled={showResults}>Check Answers</button>
        {showResults && (
          <div className="mt-3 alert alert-info">Green ✔ means correct, Red ✖ means wrong. Refresh to try again!</div>
        )}
      </div>
    </div>
  );
};

export default Challenge;
