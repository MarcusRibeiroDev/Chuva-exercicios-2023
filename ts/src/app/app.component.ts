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
  btnCreateTopic: boolean = false;
  btnSubmitForm: boolean = false;

  toggleTextAndButton(): void {
    this.showRestText = !this.showRestText;
    this.showButton = !this.showButton;
  }

  toggleState(): void{
    this.btnCreateTopic = !this.btnCreateTopic
    this.btnSubmitForm = !this.btnSubmitForm
  }
}
