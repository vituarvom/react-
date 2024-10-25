
import { useRef, useState, useCallback } from 'react';


const useHover = <T extends HTMLElement>() => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<T | null>(null);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);

    const hoverRef = useCallback((node: T | null) => {
        if (ref.current) {
            // Remove event listeners from the previous node
            ref.current.removeEventListener('mouseenter', handleMouseEnter);
            ref.current.removeEventListener('mouseleave', handleMouseLeave);
        }

        ref.current = node;

        if (node) {
            // Add event listeners to the new node
            node.addEventListener('mouseenter', handleMouseEnter);
            node.addEventListener('mouseleave', handleMouseLeave);
        }
    }, [handleMouseEnter, handleMouseLeave]);

    return [isHovered, hoverRef] as const;
};

export default useHover; // Ensure it's the default export
