import { Routes, Route, Link, useParams } from 'react-router-dom';

// Main About component with navigation
const About = () => {
  
  return (
    <div>
      <h1>this is about page</h1>
      <Link 
        to="/about/new-component" 
        className="cursor-pointer text-blue-500 hover:text-blue-700"
      >
        click me new component will come
      </Link>
    </div>
  );
};

// New component that appears when clicked
export const NewComponent = () => {
  return (
    <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded">
      <h2>New Component Loaded!</h2>
      <p>This component appeared and URL was updated.</p>
    </div>
  );
};


export default About;