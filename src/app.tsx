import * as React from 'react';
import { useFilterUsers } from './filter-user.hook';
import { usePolling } from './unmount';
import { Justo } from './test';
import { LanguageProvider } from './language.context';

export const App: React.FunctionComponent = () => {
  const { count } = usePolling();
  const { users, setFilter, filter } = useFilterUsers('');
  console.log(count);
  return (
    <>
      
        <Justo />

      <h1>{count}</h1>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {users.length > 0 &&
          users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
};
