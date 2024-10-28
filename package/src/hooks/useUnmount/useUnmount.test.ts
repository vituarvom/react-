import { renderHook, act } from '@testing-library/react-hooks';
import { useUnmount } from './useUnmount'; // Adjust the import based on your project structure

describe('useUnmount', () => {
  it('should call the callback when the component unmounts', () => {
    const mockCallback = jest.fn();
    
    const { unmount } = renderHook(() => useUnmount(mockCallback));
    
    // Unmount the hook
    unmount();
    
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('should not throw an error when the callback executes successfully', () => {
    const mockCallback = jest.fn();

    const { unmount } = renderHook(() => useUnmount(mockCallback));
    
    expect(() => unmount()).not.toThrow();
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('should catch errors thrown by the callback', () => {
    const mockCallback = jest.fn(() => {
      throw new Error('Test error');
    });
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const { unmount } = renderHook(() => useUnmount(mockCallback));
    
    expect(() => unmount()).not.toThrow();
    
    // Check if console.error was called with the correct message
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error in unmount callback', expect.any(Error));
    
    consoleErrorSpy.mockRestore(); // Restore the original console.error
  });
});
