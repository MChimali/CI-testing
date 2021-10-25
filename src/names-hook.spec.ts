import { renderHook, act } from '@testing-library/react-hooks';
import { useName } from './names-hook';

describe('useName hook test', () => {
  it('name should be set with initial state', () => {
    const { result } = renderHook(() => useName());

    expect(result.current.name).toEqual('John Doe');
  });

  it('setName should update Name', () => {
    const { result } = renderHook(() => useName());

    act(() => {
      result.current.setName((x) => x + 'o');
    });

    expect(result.current.name).toEqual('John Doeo');
    //arrange
    //act
    //assert
  });
});
