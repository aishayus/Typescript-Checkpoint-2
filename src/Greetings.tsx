import React from 'react';

// Define an interface for the props
interface GreetingProps {
  name: string;
}

// Use the interface to type the props in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
