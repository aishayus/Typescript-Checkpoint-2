import React from 'react';
import Greeting from './Greetings';
import Counter from './Counter';

// The App component does not need explicit type annotations
const App: React.FC = () => {
  return (
    <div>
      <Greeting name="Alice" />
      <Counter />
    </div>
  );
};

export default App
