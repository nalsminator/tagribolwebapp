import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo Agricola Ltda.';

  public constructor(private titleService: Title ) { }

  public setTitle() {
    this.titleService.setTitle('Todo Agricola Ltda.');
  }

  ngOnInit(): void {
    this.setTitle();
  }
}
