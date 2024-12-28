import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {

  constructor() { }


  // Return the form configuration
  getFormConfig() {
    return [
      {
        type: 'text',
        name: 'title',
        label: 'Title',
      },
      {
        type: 'textarea',
        name: 'description',
        label: 'Description',
      }, { field: 'document', label: 'Upload Document', type: 'file', required: false },
    ];
  }
}
