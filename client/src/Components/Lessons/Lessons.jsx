import React from 'react';
import { useNavigate } from 'react-router-dom';

const htmlBasics = [
  { tag: '<div>', desc: 'Defines a division or section.' },
  { tag: '<hr>', desc: 'Inserts a horizontal line.' },
  { tag: '<h1> to <h6>', desc: 'Headings, from largest to smallest.' },
  { tag: '<p>', desc: 'Paragraph of text.' },
  { tag: '<a>', desc: 'Hyperlink to another page.' },
  { tag: '<img>', desc: 'Embeds an image.' },
  { tag: '<ul>, <ol>, <li>', desc: 'Unordered/ordered lists and list items.' },
  { tag: '<table>', desc: 'Creates a table.' },
  { tag: '<br>', desc: 'Line break.' },
  { tag: '<span>', desc: 'Inline container for text.' },
];

const cssBasics = [
  { prop: 'color', desc: 'Text color.' },
  { prop: 'background-color', desc: 'Background color.' },
  { prop: 'font-size', desc: 'Size of text.' },
  { prop: 'margin', desc: 'Space outside an element.' },
  { prop: 'padding', desc: 'Space inside an element.' },
  { prop: 'border', desc: 'Border around elements.' },
  { prop: 'width', desc: 'Width of an element.' },
  { prop: 'height', desc: 'Height of an element.' },
  { prop: 'display', desc: 'Layout type (block, inline, flex, grid).' },
  { prop: 'text-align', desc: 'Horizontal alignment of text.' },
];

const jsBasics = [
  { concept: 'Variables', desc: 'Store data using let, const, or var.' },
  { concept: 'Functions', desc: 'Reusable blocks of code.' },
  { concept: 'Events', desc: 'Respond to user actions (click, input).' },
  { concept: 'Conditionals', desc: 'if, else, switch for logic.' },
  { concept: 'Loops', desc: 'Repeat actions (for, while).' },
  { concept: 'Arrays', desc: 'Lists of values.' },
  { concept: 'Objects', desc: 'Collections of key-value pairs.' },
  { concept: 'DOM Manipulation', desc: 'Change page content dynamically.' },
  { concept: 'Console', desc: 'Log output with console.log().' },
  { concept: 'Comments', desc: 'Explain code with // or /* */.' },
];

const Lessons = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">10 Basic Concepts: HTML, CSS & JavaScript</h2>
      <div className="row g-4">
        {/* HTML Section */}
        <div className="col-12 col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">HTML Basics</h3>
              <ul>
                {htmlBasics.map((item, idx) => (
                  <li key={idx}><b>{item.tag}</b>: {item.desc}</li>
                ))}
              </ul>
              <h5 className="mt-3">Examples:</h5>
              <pre style={{ background: '#f8f9fa', padding: '10px', borderRadius: '8px' }}>
{`<h1>Welcome to HTML</h1>
<p>This is a paragraph.</p>
<a href="https://example.com">Visit Example</a>
<img src="image.jpg" alt="A sample image" />
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>
<br />
<hr />`}
              </pre>
            </div>
          </div>
        </div>
        {/* CSS Section */}
        <div className="col-12 col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">CSS Basics</h3>
              <ul>
                {cssBasics.map((item, idx) => (
                  <li key={idx}><b>{item.prop}</b>: {item.desc}</li>
                ))}
              </ul>
              <h5 className="mt-3">Examples:</h5>
              <pre style={{ background: '#f8f9fa', padding: '10px', borderRadius: '8px' }}>
{`h1 {
  color: blue;
  font-size: 2em;
}
p {
  background-color: #f0f0f0;
  padding: 10px;
}
img {
  width: 100px;
  border-radius: 8px;
}
.container {
  display: flex;
  gap: 20px;
}
.button {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
}`}
              </pre>
            </div>
          </div>
        </div>
        {/* JavaScript Section */}
        <div className="col-12 col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">JavaScript Basics</h3>
              <ul>
                {jsBasics.map((item, idx) => (
                  <li key={idx}><b>{item.concept}</b>: {item.desc}</li>
                ))}
              </ul>
              <h5 className="mt-3">Examples:</h5>
              <pre style={{ background: '#f8f9fa', padding: '10px', borderRadius: '8px' }}>
{`document.getElementById('myButton').onclick = function() {
  alert('Button clicked!');
};

let name = 'Alice';
console.log('Hello, ' + name);

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
// Change text on the page
function changeText() {
  document.getElementById('demo').innerText = 'Text changed!';
}
// Loop through numbers
for (let i = 1; i <= 5; i++) {
  console.log(i);
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 gap-5 d-flex justify-content-center">
        <button className="btn btn-success btn-lg" onClick={() => navigate('/quiz')}>Go to Quiz</button>
        <button className="btn btn-success btn-lg" onClick={() => navigate('/challenge')}>Go to Challenge</button>
      </div>
    </div>
  );
};

export default Lessons;