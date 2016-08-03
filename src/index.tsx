/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Rx from 'rxjs';
import { App } from './components/app.tsx';

var source = Rx.Observable.timer(1000, 1000);

var socket = Rx.Observable.webSocket("ws://echo.websocket.org/");

source.subscribe(socket);

socket.subscribe(o => {
    ReactDOM.render(<App>{JSON.stringify(o) }</App>, document.getElementById('root'));
}, e => { console.log(e) }, () => console.log("Complete"));
