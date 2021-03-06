import React from 'react';
import { getUsersByFilter } from './api';

export const useFilterUsers = (initialFilter: string) => {
  const [users, setUsers] = React.useState([]);
  const [filter, setFilter] = React.useState(initialFilter);

  React.useEffect(() => {
    getUsersByFilter(filter).then(newUsers => {
    setUsers(newUsers);
    });
  }, [filter]);

  return {
    users,
    setFilter,
    filter
  };
};
