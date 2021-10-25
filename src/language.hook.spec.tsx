import { renderHook, act } from '@testing-library/react-hooks';
import { useLanguage } from './language.hook';
import {LanguageProvider} from './language.context'

describe('useLanguage spec', () => {
  it('', () => {
    const { result } = renderHook(()=>useLanguage(), {wrapper:LanguageProvider});

    act(()=>result.current.setLanguage('justo'));

    expect(result.current.message).toEqual('The current language is: justo')

  });
});
