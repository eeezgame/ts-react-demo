import * as React from "react";
import Button from '@material-ui/core/Button';

export interface Greeting {
    name: string
}

export interface HelloState {
    count: number
}


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class HelloClass extends React.Component<Greeting, HelloState> {
    
    state: HelloState = {
        count: 0
    }

    static defaultProps = {
        name:'React'
    }
    render() {
        return (
            <div>
              <p>You clicked {this.state.count} times</p>
              <Button variant="contained" color="primary" onClick={() => this.setState({count:this.state.count + 1})}>
                Click me,{this.props.name}!
              </Button>
            </div>
          );
    }
}