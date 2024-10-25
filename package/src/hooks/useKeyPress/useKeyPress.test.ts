import { render } from '@testing-library/react';
import React from 'react';
import useKeyPress from './useKeyPress';

const TestComponent: React.FC<{ targetKey: string }> = ({ targetKey }) => {
  const keyPressed = useKeyPress(targetKey);

  return React.createElement('div', null, 
    React.createElement('p', null, keyPressed ? `${targetKey} key pressed!` : `${targetKey} key not pressed.`)
  );
};

describe('useKeyPress', () => {
  it('should detect key press', () => {
    const { getByText } = render(React.createElement(TestComponent, { targetKey: "Enter" }));

    expect(getByText(/Enter key not pressed./)).toBeInTheDocument();

    // Simulate key down and up events
    const enterKeyEventDown = new KeyboardEvent('keydown', { key: 'Enter' });
    window.dispatchEvent(enterKeyEventDown);
    
    expect(getByText(/Enter key pressed!/)).toBeInTheDocument();

    const enterKeyEventUp = new KeyboardEvent('keyup', { key: 'Enter' });
    window.dispatchEvent(enterKeyEventUp);

    expect(getByText(/Enter key not pressed./)).toBeInTheDocument();
  });
});
