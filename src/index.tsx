/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Rx from "rx";
import { WebSocketService } from "./websocket.service";

var source = Rx.Observable.timer(1000, 1000);

var service = new WebSocketService();
var socket = service.connect("ws://echo.websocket.org/");

source.map(i => ({ data: i })).subscribe(socket);

socket.subscribe(o => {
    ReactDOM.render(<div>{JSON.stringify(o.data) }</div>, document.getElementById('root'));
});
