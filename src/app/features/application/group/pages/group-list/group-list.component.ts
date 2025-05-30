import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideArrowLeftRight } from '@ng-icons/lucide';
import { GroupCardComponent } from '../../../components/group-card/group-card.component';

@Component({
  selector: 'app-group-list',
  imports: [GroupCardComponent],
  templateUrl: './group-list.component.html',
  viewProviders: [provideIcons({ lucideArrowLeftRight })],
})
export class GroupListComponent {
  groups = Array.from({ length: 4 }).map((_, i) => {
    return {
      id: i,
    };
  });
}
