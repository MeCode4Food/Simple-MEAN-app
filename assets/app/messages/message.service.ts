import { Message } from "./message.model";
import { Http, Headers } from "@angular/http"
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class MessageService {
    private messages: Message[] = [];
    messageOnEdit = new EventEmitter<Message>();

    constructor(private http: Http) {}

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', body, {headers: headers})
            .map((response: any) => {
                const result = response.json();
                const message = new Message(result.obj.content, 'CK', result.obj._id, null);
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessage(){
        return this.http.get('http://localhost:3000/message')
            .map((response: any) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(message.content, 'Temp User', message._id, null));
                }
                // this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    editMessage(message:Message){
        this.messageOnEdit.emit(message);
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('http://localhost:3000/message/' + message.messageId, body, {headers: headers})
            .map((response: any) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    
    }

    deleteMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.delete('http://localhost:3000/message/' + message.messageId, {headers: headers})
            .map((response: any) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}