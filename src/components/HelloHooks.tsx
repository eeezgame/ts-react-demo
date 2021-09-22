import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

interface Greeting {
    name: string
}

export const HelloHooks=(props:Greeting)=> {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
        Click me,{props.name}!
      </Button>
    </div>
  );
}

HelloHooks.defaultProps = {
    name: "React"
}
