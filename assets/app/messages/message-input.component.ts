import { Component } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { NgForm } from "@angular/forms/src/directives/ng_form";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent{
    constructor(private messageService: MessageService) {
        
    }

    onSubmit(form: NgForm) {
        const message: Message = new Message(form.value.content, 'CK');
        this.messageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        form.resetForm();
    }
}