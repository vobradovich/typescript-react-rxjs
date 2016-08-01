/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Rx from 'rxjs';

var source = Rx.Observable.timer(1000, 1000);

var socket = Rx.Observable.webSocket("ws://echo.websocket.org/");

source.subscribe(socket);

socket.subscribe(o => {
    ReactDOM.render(<div>{JSON.stringify(o) }</div>, document.getElementById('root'));
});
