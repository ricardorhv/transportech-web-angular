import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLogOut } from '@ng-icons/lucide';

@Component({
  selector: 'app-header',
  imports: [NgIcon],
  templateUrl: './header.component.html',
  viewProviders: [provideIcons({ lucideLogOut })],
})
export class HeaderComponent {}
