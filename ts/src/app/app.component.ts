import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  showRestText: boolean = false;
  showButton: boolean = true;
  btnCreateTopic: boolean = true;
  btnSubmitForm: boolean = false;
  btnResetState: boolean = false;
  containerComments: boolean = false;

  toggleTextAndButton(): void {
    this.showRestText = !this.showRestText;
    this.showButton = !this.showButton;
  }

  toggleState(): void{
    this.btnCreateTopic = !this.btnCreateTopic
    this.btnSubmitForm = !this.btnSubmitForm
  }

  submitComments(): void{
    this.btnSubmitForm = !this.btnSubmitForm
    this.btnResetState = !this.btnResetState
  }

  toggleStateReset(){
    this.btnResetState = !this.btnResetState
    this.btnCreateTopic = !this.btnCreateTopic
  }

  toggleContainerComments(){
    this.containerComments = !this.containerComments;
  }
}
