import React, { useContext } from 'react';

const SomeContext = React.createContext('dark');

function UseContext() {
  const theme = useContext(SomeContext);

  return (
    <div>
        <h2>use Context Hook</h2>
    <button style={{ background: theme === 'dark' ? 'black' : 'white', 
    color: theme === 'dark' ? 'white' : 'black' }}>
      Toggle Theme
    </button>
    </div>
  );
}
export default UseContext;