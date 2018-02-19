import { Component } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message 
                *ngFor="let message of messages" 
                [messageSingle]="message" 
            ></app-message>
        </div>
    `
})

export class MessageListComponent implements OnInit{
    messages: Message[] = [];

    constructor(private messageService: MessageService){
    }

    ngOnInit(): void {
        this.messageService.getMessage()
            .subscribe(
                (messagesReceived: Message[]) => {
                    this.messages = messagesReceived;
                }
            );
    }
}