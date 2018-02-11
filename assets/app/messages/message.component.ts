import { Component } from "@angular/core";
import { Message } from "./message.model";
import { Input, Output, EventEmitter } from "@angular/core";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .hovered {
            font-style: normal;
        }

        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width 80%;
        }

        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
            margin-left: auto;
            margin-right: 0px;
            float: right;
            clear: right;
        }
    `]
})

export class MessageComponent{
    isHovered: boolean = false;

    @Input() 
    messageSingle: Message;
    color: string = 'red';

    @Output() 
    editClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor(private messsageService: MessageService){}

    onEdit() {
        this.editClicked.emit('edit called');
    }

    onDelete(){
        this.messsageService.deleteMessage(this.messageSingle);
    }

    onHover() {
        this.isHovered = true;
    }
}