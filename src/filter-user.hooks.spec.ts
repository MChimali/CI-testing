import { renderHook, act } from '@testing-library/react-hooks';
import * as api from './api';
import { useFilterUsers } from './filter-user.hook';

describe('useFilterUsers', ()=>{
  it('should return mock array value intact', async ()=>{
    const apiStub = jest.spyOn(api, 'getUsersByFilter').mockResolvedValue([])
    const {result} = renderHook(()=>useFilterUsers(''))

  })
})
