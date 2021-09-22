import React, { Component } from 'react';

import { HelloClass } from './HelloClass';

interface Loading {
    loading: boolean
}

function _HelloHOC<P>(WrappedComponent: React.ComponentType<P>) {
    return class extends Component<P & Loading> {
        render() {
            const { loading, ...props } = this.props;
            return loading ? <div>Loading...</div> : <WrappedComponent { ...props as P } />;
        }
    }
}

export const HelloHOC = _HelloHOC(HelloClass);
