import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import api from '../../utils/api';

@Component({
  selector: 'app-request-delete-account-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './request-delete-account-form.component.html',
  styleUrl: './request-delete-account-form.component.scss',
})
export class RequestDeleteAccountFormComponent {
  status: Status = null
  private formBuilder = inject(FormBuilder)
  form = this.formBuilder.group({
    email: [
      '',
      Validators.required
    ],
    reason: [
      '',
      Validators.required
    ],
    isConfirmed: [
      false,
      Validators.required
    ],
  })

  send = async () => {
    if (this.status === 'loading') return
    this.status = 'loading'
    try {
      const data = new FormData()
      data.append('email', this.form.value.email ?? '')
      data.append('reason', this.form.value.reason ?? '')
      await api.post('/request-delete-account', data)
      this.status = 'success'
      this.form.reset()
    } catch (e) {
      this.status = 'error'
    }
  }
}

export type Status = 'success' | 'error' | 'loading' | null
