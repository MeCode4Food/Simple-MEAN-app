import { Component } from "@angular/core";
import { Message } from "./message.model";
import { Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
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
    @Input('InputMessage') message: Message;
    @Output() editClicked = new EventEmitter<string>();

    onEdit() {
        this.editClicked.emit('value');
    }
}