import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router ,Route } from 'react-router'

import { Hello } from "./components/Hello";
import { HelloClass } from "./components/HelloClass";
import { HelloHooks } from "./components/HelloHooks";
import { HelloHOC } from "./components/HelloHOC";

import UserQueryList from './pages/UserQueryList/index'

const getQueryObject = (url:string)=> {
    url = url === null ? window.location.href : url
    const search = url.substring(url.lastIndexOf('?') + 1)
    const obj:any = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg,(rs,$1,$2)=>{
        const name = decodeURIComponent($1)
        let val = decodeURIComponent($2)
        val = String(val)
        obj[name] = val
        return rs
    })
    return obj
}

class App extends React.Component {
    state = {
        route:window.location.hash.substr(1)
    }

    componentDidMount(){
        window.addEventListener('hashchange',()=>{
            this.setState({
                route:window.location.hash.substr(1)
            })
        })
    }

    render(){
        let Child:any
        let Props = getQueryObject(window.location.href)
        let Route:string  = this.state.route


        if(Route.startsWith('/Hello')){
            Child = Hello
        } else if(Route.startsWith('/HelloClass')){
            Child = HelloClass
        } else if(Route.startsWith('/HelloHooks')){
            Child = HelloHooks
        } else if(Route.startsWith('/HelloHOC')){
            Child = HelloHOC
        } else if(Route.startsWith('/UserQueryList')){
            Child = UserQueryList
        } else {
            Child = Hello
        }



        return (
            <>
                <h1>App</h1>
                <ul>
                    <li>
                        <a href="#/Hello">Hello</a> <a href="#/Hello?name=Runki">Hello React</a>
                    </li>
                    <li>
                        <a href="#/HelloClass">HelloClass</a> <a href="#/HelloClass?name=Runki">HelloClass React</a>
                    </li>
                    <li>
                        <a href="#/HelloHooks">HelloHooks</a> <a href="#/HelloHooks?name=Runki">HelloHooks React</a>
                    </li>
                    <li>
                        <a href="#/HelloHOC">HelloHOC</a> <a href="#/HelloHOC?name=Runki">HelloHOC React</a>
                    </li>
                    <li>
                        <a href="#/UserQueryList">UserQueryList</a> <a href="#/UserQueryList?userName=Eclair">Search Eclair</a>
                    </li>
                </ul>
                <Child {...Props}></Child>
            </>
        )
    }
} 

ReactDOM.render(
    <>
        <App></App>
        {/* <Hello name="HelloFunctional" />
        <HelloClass name="HelloClass" />
        <HelloHooks name="HelloHooks"></HelloHooks>
        <HelloHOC name="HelloHOC" loading={false}></HelloHOC>
        <UserQueryList></UserQueryList> */}
    </>,
    document.getElementById("example")
);