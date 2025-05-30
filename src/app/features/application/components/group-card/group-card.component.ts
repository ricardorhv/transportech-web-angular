import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeftRight } from '@ng-icons/lucide';

@Component({
  selector: 'app-group-card',
  imports: [NgIcon],
  templateUrl: './group-card.component.html',
  viewProviders: [provideIcons({ lucideArrowLeftRight })],
})
export class GroupCardComponent {}
