import { Component, inject, OnInit, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { Group } from '../../../../../model/group.mode';
import { AddGroupModalComponent } from '../../../components/add-group-modal/add-group-modal.component';
import { GroupCardComponent } from '../../../components/group-card/group-card.component';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group-list',
  imports: [GroupCardComponent, NgIcon, AddGroupModalComponent],
  templateUrl: './group-list.component.html',
  viewProviders: [provideIcons({ lucidePlus })],
})
export class GroupListComponent implements OnInit {
  openModal = signal(true);

  private readonly groupService = inject(GroupService);

  grupos = signal<Group[]>([]);

  carregarGrupos() {
    this.groupService.buscarGrupos().subscribe((listaGrupos) => {
      this.grupos.set(listaGrupos);
    });
  }

  mudarEstadoDoModal(state: boolean) {
    this.openModal.set(state);
  }

  ngOnInit(): void {
    this.carregarGrupos();
  }
}
