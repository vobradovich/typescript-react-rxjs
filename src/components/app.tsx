import * as React from "react";
import * as ReactDOM from "react-dom";
import connect from './connect';
import counter from '../stores/counter';

const App = (props) => (
    <div>{props.data}</div>
);

const store = counter.map(i => ({ data: i })); 
export default connect(store)(App);