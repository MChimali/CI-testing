import { renderHook } from '@testing-library/react-hooks';
import { unmountComponentAtNode } from 'react-dom';
import { usePolling } from './unmount';

describe('usePolling specs', () => {
  it('should call usePolling', async () => {
    const functionSpy = jest.spyOn(window, 'clearInterval')
    const { result, waitForNextUpdate, unmount } = renderHook(() => usePolling());
    console.log(`current: ${result.current.count}`);

    expect(result.current.count).toEqual(0)
    await waitForNextUpdate();
    console.log(`current: ${result.current.count}`);
    expect(result.current.count).toEqual(1);
    unmount();
    expect(functionSpy).toHaveBeenCalled()
  });
});
