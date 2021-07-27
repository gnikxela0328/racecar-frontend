import { useEffect } from 'react';
import socketIOClient from 'socket.io-client';
//import ControlService from './service';
import './assets/client.css'

// Attach location or domain name here
const socket = socketIOClient("http://192.168.1.16:5000");

export default function Client() {

    useEffect(() => {

        socket.on("From API", res => {
            console.log(res);
        });

        return () => socket.disconnect();
    }, []);

    function handleForward(e) {
        e.preventDefault();
        socket.emit("move", '0001');
    }

    function handleBackward(e) {
        e.preventDefault();
        socket.emit("move", '0010');
    }

    function handleLeft(e) {
        e.preventDefault();
        socket.emit("move", '0011');
    }

    function handleRight(e) {
        e.preventDefault();
        socket.emit("move", '0100');
    }

    function handleStop(e){
        e.preventDefault();
        socket.emit("move", '0101');
    }

    return (
        <div className="controller">
            <button onMouseDown={e => handleForward(e)} onMouseUp={e => handleStop(e)}>Forward</button>
            <button onMouseDown={e => handleBackward(e)} onMouseUp={e => handleStop(e)}>Reverse</button>
            <button onMouseDown={e => handleLeft(e)} onMouseUp={e => handleStop(e)}>Left</button>
            <button onMouseDown={e => handleRight(e)} onMouseUp={e => handleStop(e)}>Right</button>
        </div>
    )
}