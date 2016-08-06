import * as Rx from 'rxjs';

const store = new Rx.BehaviorSubject<number>(0);

const source = Rx.Observable.timer(1000, 1000);

const socket = Rx.Observable.webSocket("ws://echo.websocket.org/");

source.subscribe(socket);

socket.subscribe(store);

export default store.share();
