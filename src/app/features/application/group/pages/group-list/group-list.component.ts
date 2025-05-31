import { Component, inject, OnInit, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideArrowLeftRight } from '@ng-icons/lucide';
import { Group } from '../../../../../model/group.mode';
import { GroupCardComponent } from '../../../components/group-card/group-card.component';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group-list',
  imports: [GroupCardComponent],
  templateUrl: './group-list.component.html',
  viewProviders: [provideIcons({ lucideArrowLeftRight })],
})
export class GroupListComponent implements OnInit {
  private readonly groupService = inject(GroupService);

  grupos = signal<Group[]>([]);

  public carregarGrupos() {
    this.groupService.buscarGrupos().subscribe((listaGrupos) => {
      this.grupos.set(listaGrupos);
    });
  }

  ngOnInit(): void {
    this.carregarGrupos();
  }
}
