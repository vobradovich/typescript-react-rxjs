/// <reference path="../typings/index.d.ts" />

import * as Rx from 'rx';

export class WebSocketService {
    private subject: Rx.Subject<MessageEvent>;

    public connect(url): Rx.Subject<MessageEvent> {
        if(!this.subject) {
            this.subject = this.create(url);
        }
        return this.subject;
    }

    private create(url): Rx.Subject<MessageEvent> {
        let ws = new WebSocket(url);

        let observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>) => {
            ws.onmessage = obs.onNext.bind(obs);
            ws.onerror = obs.onError.bind(obs);
            ws.onclose = obs.onCompleted.bind(obs);

            return ws.close.bind(ws);
        });

        let observer: Rx.IObserver<MessageEvent> = {
            onNext: (data: MessageEvent) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data.data));
                }
            },
            onError: (data: MessageEvent) => {
                console.error(data);
            },
            onCompleted: () => { },
        };

        return Rx.Subject.create(observer, observable);
    }
}