import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
        this.socket = new WebSocket('ws://192.168.1.148:3000');
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

export default App;

/*import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from "./components/Message";

// const socket = new WebSocket("ws://192.168.1.148:3000/");
// //const socket = new WebSocket("ws://localhost:3000/");
// socket.onopen = function (event) {
//     //socket.send("testMessage from me)");
//     console.dir(event);
//     alert('Connection is open!');
// };
//
// socket.onclose = function (event) {
//     alert('Connection closed!');
//     console.dir(event);
// };
//
// socket.onmessage = (event) => {
//   console.dir(event);
//   console.dir(event.data);
// };

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            messages: [],
            messagesValue: '',
        };
        this.socket = new WebSocket("ws://192.168.1.148:3000/");
    }
    componentDidMount() {
        this.socket.onmessage = (event) => {
            this.setState({messages: this.state.messages.push(event.data)})
        };
    }

    // socksInit(){
    //     this.socket.onopen = function (event) {
    //         //socket.send("testMessage from me)");
    //         console.dir(event);
    //         alert('Connection is open!');
    //     };
    //
    //     this.socket.onclose = function (event) {
    //         alert('Connection closed!');
    //         console.dir(event);
    //     };
    //
    // }
    sendMessage = () => {
        this.socket.send(this.state.messagesValue);
    };
    handleChange = (e) => {
        this.setState({messagesValue: e.target.value});
    };
    render() {
        const {messages} = this.state;
        return (
            <div className="App">
                <input type="textarea" value={this.state.messagesValue} onChange={this.handleChange} placeholder="Введите сообщение"/>
                <button onClick={this.sendMessage}>Send it</button>
                <button onClick={this.socket.close.bind(this.socket, 1000)}>Close Connection</button>
                <ul>
                    {messages.map((m,i)=>(<li key={i}>{m}</li>))}
                </ul>
            </div>
        );
    }
}

export default App;
*/