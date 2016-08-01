"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const Rx = require('rxjs');
const webSocket_1 = require('rxjs/observable/dom/webSocket');
var source = Rx.Observable.timer(1000, 1000);
var socket = webSocket_1.webSocket("ws://echo.websocket.org/");
source.map(i => ({ data: i })).subscribe(socket);
socket.subscribe(o => {
    ReactDOM.render(React.createElement("div", null, JSON.stringify(o)), document.getElementById('root'));
});
//# sourceMappingURL=index.js.map