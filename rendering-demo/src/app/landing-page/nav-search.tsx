'use client';

import { useState } from 'react';

const NavSearch = () => {
  console.log('NavSearch rendered');

  const [search, setSearch] = useState('');

  return (
    <div>NavSearch</div>
  );
};

export default NavSearch;