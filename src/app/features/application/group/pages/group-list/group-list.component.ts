import { Component, inject, OnInit, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
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
  openModal = signal(false);

  private readonly groupService = inject(GroupService);

  grupos = this.groupService.getGruposSignal();

  carregarGrupos() {
    this.groupService.buscarGrupos().subscribe();
  }

  mudarEstadoDoModal(state: boolean) {
    this.openModal.set(state);
  }

  ngOnInit(): void {
    this.carregarGrupos();
  }
}
