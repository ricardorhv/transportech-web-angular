import { Component, inject, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeftRight, lucideX } from '@ng-icons/lucide';
import { CreateGroupDto } from '../../group/dto/create-group.dto';
import { GroupService } from '../../group/services/group.service';

@Component({
  selector: 'app-add-group-modal',
  imports: [NgIcon, ReactiveFormsModule],
  templateUrl: './add-group-modal.component.html',
  providers: [provideIcons({ lucideX, lucideArrowLeftRight })],
})
export class AddGroupModalComponent {
  private readonly groupService = inject(GroupService);

  closeModal = output();

  formGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    cidadeOrigem: new FormControl('', Validators.required),
    cidadeDestino: new FormControl('', Validators.required),
  });

  fecharModal() {
    this.closeModal.emit();
  }

  criarGrupo() {
    if (this.formGroup.valid) {
      const grupo = this.formGroup.value as CreateGroupDto;
      this.groupService.criarGrupo(grupo).subscribe(() => {
        this.fecharModal();
      });
    } else {
      alert('Dados inválidos!');
    }
  }
}
