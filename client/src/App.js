import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {emitTest, emitMessage} from "./api/ws/api";
import socket from './api/ws'
class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            messages: [],
            messageValue: '',
        }
    }

    render() {
        return (
            <>
                <button onClick={()=>emitTest('test',{test: 'test'})}>Send Message</button>
            </>
        );
    }

}

/*
const socket = new WebSocket('ws://localhost:3000/');
socket.onopen = function(event){
    alert('Connection is open!');
    console.dir(event);
};
socket.onclose = (event) => {
    alert('Connection is closed!');
    console.dir(event);
};
socket.onmessage = (event) => {
    console.dir(event);
}



class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            messages: [],
            messagesValue: '',
        };
        this.socket = null;
    }
    addMessages = (messages) => {
        console.log(messages);
        this.setState({messages: [...this.state.messages, ...messages]});
    };
    componentDidMount() {
        //this.socket = new WebSocket('ws://192.168.1.148:3000');
        this.socket = new WebSocket('ws://localhost:3000');
        this.socket.onmessage = (e) => {
            this.addMessages(JSON.parse(e.data));
        };
    }
    sendMessage = () => {
        socket.send(this.state.messagesValue);
    };
    handleChange = (e) => {
        this.setState({messagesValue: e.target.value});
    };
    render() {
        return(
            <>
                <ul>{
                    this.state.messages.map((m,i)=>
                        (<li key={i}>{m}</li>))}
                </ul>
                <input type="textarea" value={this.state.messagesValue} onChange={this.handleChange} />
                <button onClick={this.sendMessage}>Send message</button>
            </>
        );
    }
}
*/
export default App;
