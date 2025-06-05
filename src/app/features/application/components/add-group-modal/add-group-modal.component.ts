import { Component, output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeftRight, lucideX } from '@ng-icons/lucide';

@Component({
  selector: 'app-add-group-modal',
  imports: [NgIcon],
  templateUrl: './add-group-modal.component.html',
  providers: [provideIcons({ lucideX, lucideArrowLeftRight })],
})
export class AddGroupModalComponent {
  closeModal = output();

  fecharModal() {
    this.closeModal.emit();
  }
}
