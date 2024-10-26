import { renderHook, act } from '@testing-library/react-hooks';
import { useNetwork } from './useNetwork';

const mockNavigatorOnline = (online: boolean) => {
  Object.defineProperty(window.navigator, 'onLine', {
    configurable: true,
    value: online,
  });
};

describe('useNetwork', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return isOnline as true when the user is online', () => {
    mockNavigatorOnline(true);

    const { result } = renderHook(() => useNetwork());

    expect(result.current.isOnline).toBe(true);
  });

  it('should return isOnline as false when the user is offline', () => {
    mockNavigatorOnline(false);

    const { result } = renderHook(() => useNetwork());

    expect(result.current.isOnline).toBe(false);
  });

  it('should update isOnline when the online/offline status changes', () => {
    mockNavigatorOnline(true);

    const { result } = renderHook(() => useNetwork());

    expect(result.current.isOnline).toBe(true);

    act(() => {
      mockNavigatorOnline(false);
      window.dispatchEvent(new Event('offline'));
    });

    expect(result.current.isOnline).toBe(false);

    act(() => {
      mockNavigatorOnline(true);
      window.dispatchEvent(new Event('online'));
    });

    expect(result.current.isOnline).toBe(true);
  });

  it('should return default values for network properties', () => {
    mockNavigatorOnline(true);

    const { result } = renderHook(() => useNetwork());

    expect(result.current.networkName).toBe('N/A');  
    expect(result.current.networkSpeed).toBeNull();
    expect(result.current.connectionType).toBe('Unknown');
  });
});
