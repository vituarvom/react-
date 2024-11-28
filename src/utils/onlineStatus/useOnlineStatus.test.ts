import { act, renderHook } from '@testing-library/react-hooks';
import useOnlineStatus from './useonlineStatus';

describe('useOnlineStatus', () => {
  let  originalNavigator:any;

  beforeAll(() => {
    // Store the original navigator
    originalNavigator = navigator;

    // Mock the navigator.onLine property
    Object.defineProperty(navigator, 'onLine', {
      value: true,
      configurable: true,
    });
  });

  beforeEach(() => {
    // Reset the online status before each test
    jest.clearAllMocks();
  });

  afterAll(() => {
    // Restore the original navigator object after all tests
    Object.defineProperty(navigator, 'onLine', {
      value:  originalNavigator.onLine,
      configurable: true,
    });
  });

  test('should return initial online status as true', () => {
    const { result } = renderHook(() => useOnlineStatus());
    expect(result.current.isOnline).toBe(true);
    expect(result.current.error).toBe(null);
  });

  test('should handle online status changes', () => {
    const { result } = renderHook(() => useOnlineStatus());

    // Simulate going offline
    act(() => {
      window.dispatchEvent(new Event('offline'));
    });
    expect(result.current.isOnline).toBe(false);

    act(() => {
      window.dispatchEvent(new Event('online'));
    });
    expect(result.current.isOnline).toBe(true);
  });

  test('should set error if navigator is unavailable', () => {
    // Use jest.spyOn to mock the property
    const spy = jest.spyOn(navigator, 'onLine', 'get');
    spy.mockReturnValue(false); 

    const { result } = renderHook(() => useOnlineStatus());
    expect(result.current.error).toBe('Unable to determine online status');

    
    spy.mockRestore();
  });
});
