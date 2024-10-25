import React, { useEffect, useRef, useCallback, useMemo } from 'react';

const baseStyles = {
  width: '200px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid blue',
  borderRadius: '10px',
  transition: 'background-color 0.3s',
};

const UseHover: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Use useMemo to create a memoized style object based on the hover state
  const styles = useMemo(() => ({
    ...baseStyles,
    backgroundColor: isHovered ? 'lightblue' : 'lightgray',
  }), [isHovered]);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      try {
        node.addEventListener('mouseenter', handleMouseEnter);
        node.addEventListener('mouseleave', handleMouseLeave);
      } catch (error) {
        console.error('Error adding event listeners:', error);
      }

      return () => {
        try {
          node.removeEventListener('mouseenter', handleMouseEnter);
          node.removeEventListener('mouseleave', handleMouseLeave);
        } catch (error) {
          console.error('Error removing event listeners:', error);
        }
      };
    }
  }, [handleMouseEnter, handleMouseLeave]);

  return (
    <div ref={ref} style={styles}>
      <h2>{isHovered ? 'Hovered!' : 'Hover over me!'}</h2>
    </div>
  );
};

export default UseHover;
