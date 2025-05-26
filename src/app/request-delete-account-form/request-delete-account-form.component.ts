import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-delete-account-form',
  imports: [FormsModule],
  templateUrl: './request-delete-account-form.component.html',
  styleUrl: './request-delete-account-form.component.scss'
})
export class RequestDeleteAccountFormComponent {
  email: string = ''
  reason: string = ''
  isConfirmed: boolean = false
}
