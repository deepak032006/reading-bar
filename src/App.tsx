import React, { useRef } from 'react';
import ReadingProgressBar from './components/ReadingProgressBar.tsx';
import './App.css';

const App: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ReadingProgressBar targetRef={contentRef} color="#10b981" />
      <div ref={contentRef} className="content">
        <h1>Reading Progress Bar Demo</h1>
        {[...Array(50)].map((_, i) => (
          <p key={i}>
            This is paragraph #{i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        ))}
      </div>
    </>
  );
};

export default App;
