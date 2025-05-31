import { Component, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeftRight } from '@ng-icons/lucide';
import { Group } from '../../../../model/group.mode';

@Component({
  selector: 'app-group-card',
  imports: [NgIcon],
  templateUrl: './group-card.component.html',
  viewProviders: [provideIcons({ lucideArrowLeftRight })],
})
export class GroupCardComponent {
  grupo = input.required<Group>();
}
