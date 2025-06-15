import React from 'react';
import { render } from '@testing-library/react';
import ReadingProgressBar from '../components/ReadingProgressBar';

describe('ReadingProgressBar', () => {
  it('renders without crashing', () => {
    const ref = { current: document.createElement('div') };
    render(<ReadingProgressBar targetRef={ref} />);
  });
});
