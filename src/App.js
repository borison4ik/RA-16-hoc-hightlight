import React, { useState } from 'react';

import { List } from './components/List';

import { DATA } from './data';

export default function App() {
  const [list] = useState(DATA);

  return <List list={list} />;
}
