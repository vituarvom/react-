import { renderHook, act } from '@testing-library/react-hooks';
import { useClipboard } from './useClipboard';

describe('useClipboard Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useClipboard('default text'));
    expect(result.current.isCopied).toBe(false);
    expect(result.current.copiedText).toBe('default text');
  });

  it('should copy text to the clipboard and set isCopied to true', async () => {
    const { result } = renderHook(() => useClipboard());
    
    // Mock navigator.clipboard.writeText
    const writeTextMock = jest.fn().mockResolvedValue(Promise.resolve());
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    await act(async () => {
      await result.current.copy('Hello, World!');
    });

    expect(writeTextMock).toHaveBeenCalledWith('Hello, World!');
    expect(result.current.isCopied).toBe(true);
    expect(result.current.copiedText).toBe('Hello, World!');
  });

  it('should copy initial text if no text is provided in copy', async () => {
    const { result } = renderHook(() => useClipboard('Initial Text'));

    // Mock navigator.clipboard.writeText
    const writeTextMock = jest.fn().mockResolvedValue(Promise.resolve());
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    await act(async () => {
      await result.current.copy('');
    });

    expect(writeTextMock).toHaveBeenCalledWith('Initial Text');
    expect(result.current.isCopied).toBe(true);
    expect(result.current.copiedText).toBe('Initial Text');
  });

  it('should throw an error if non-string value is passed to copy', async () => {
    const { result } = renderHook(() => useClipboard());
    
    await expect(async () => {
      await result.current.copy(123 as unknown as string);
    }).rejects.toThrow('copy function only accepts strings');
  });
});
