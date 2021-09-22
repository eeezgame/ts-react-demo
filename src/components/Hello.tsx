import * as React from "react";
import Button from '@material-ui/core/Button';
export interface Greeting {
    name: string
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export const Hello = (props:Greeting) =>  {
    let count = 0;
    return (
        <div>
          <Button variant="contained" color="primary">
            Hello {props.name}!
          </Button>
        </div>
      );
};
