import { useState } from 'react';
 
function Counter() {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <h3 className="h1-sm">Count: {count}</h3>
      <button className="btn" onClick={() => setCount(count + 1)}>Click Me To Count</button>
    </div>
  );
}

export default Counter;