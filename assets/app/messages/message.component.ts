import { Component } from "@angular/core";
import { Message } from "./message.model";
import { Input } from "@angular/core";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .hovered {
            font-weight: normal;
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


    constructor(private messsageService: MessageService){}

    onEdit() {
        this.messsageService.editMessage(this.messageSingle);
    }

    onDelete(){
        this.messsageService.deleteMessage(this.messageSingle);
    }

    onHover() {
        this.isHovered = true;
    }

    getFontStyle() {
        return this.isHovered ? "normal" : "bold";
    }
}