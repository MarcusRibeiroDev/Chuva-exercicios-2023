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

  toggleTextAndButton(): void {
    this.showRestText = !this.showRestText;
    this.showButton = !this.showButton;
  }
}
