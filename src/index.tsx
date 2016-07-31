/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Rx from 'rx';

var source = Rx.Observable.timer(1000, 1000);

source.subscribe(o => {
    ReactDOM.render(<div>{o}</div>, document.getElementById('root'));
});
