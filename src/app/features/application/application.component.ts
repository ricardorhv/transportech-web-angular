import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-application',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './application.component.html',
})
export class ApplicationComponent {}
