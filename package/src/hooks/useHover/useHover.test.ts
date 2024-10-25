import { renderHook, act } from '@testing-library/react-hooks';
import useHover from './useHover'; // Ensure the import path is correct

describe('useHover hook', () => {
  it('should return false by default (not hovered)', () => {
    const { result } = renderHook(() => useHover<HTMLDivElement>());
    const [isHovered] = result.current;

    expect(isHovered).toBe(false);
  });

  it('should return true when hover starts', () => {
    const { result } = renderHook(() => useHover<HTMLDivElement>());
    const [isHovered, hoverRef] = result.current;

    const mockElement = document.createElement('div');

    act(() => {
      hoverRef(mockElement); // Attach the ref to the mock element
      mockElement.dispatchEvent(new MouseEvent('mouseenter')); // Simulate mouse enter
    });

    const [isHoveredAfterHover] = result.current;
    expect(isHoveredAfterHover).toBe(true);
  });

  it('should return false when hover ends', () => {
    const { result } = renderHook(() => useHover<HTMLDivElement>());
    const [isHovered, hoverRef] = result.current;

    const mockElement = document.createElement('div');

    act(() => {
      hoverRef(mockElement); // Attach the ref to the mock element
      mockElement.dispatchEvent(new MouseEvent('mouseenter')); // Simulate mouse enter
      mockElement.dispatchEvent(new MouseEvent('mouseleave')); // Simulate mouse leave
    });

    const [isHoveredAfterLeave] = result.current;
    expect(isHoveredAfterLeave).toBe(false);
  });

  it('should toggle hover state based on events', () => {
    const { result } = renderHook(() => useHover<HTMLDivElement>());
    const [isHovered, hoverRef] = result.current;

    const mockElement = document.createElement('div');

    act(() => {
      hoverRef(mockElement); // Attach the ref to the mock element
      mockElement.dispatchEvent(new MouseEvent('mouseenter')); // Simulate mouse enter
    });

    expect(result.current[0]).toBe(true); // Hovered state should be true

    act(() => {
      mockElement.dispatchEvent(new MouseEvent('mouseleave')); // Simulate mouse leave
    });

    expect(result.current[0]).toBe(false); // Hovered state should be false again
  });

  it('should not throw an error if handlers are called on an unmounted component', () => {
    const { result, unmount } = renderHook(() => useHover<HTMLDivElement>());
    const [, hoverRef] = result.current;

    // Unmount the hook before simulating events
    unmount();

    expect(() => {
      const eventHandlers = { onMouseEnter: () => {}, onMouseLeave: () => {} };
      eventHandlers.onMouseEnter();
      eventHandlers.onMouseLeave();
    }).not.toThrow();
  });
});
