import { Component } from '@angular/core';
import { Settings } from './settings';
import { SettingsService } from './settings.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatCardModule, NgForOf]
})
export class SettingsComponent {
  settings: Settings;
  hide = true;
  dynamicForm!: FormGroup;
  formFields: any = [];
  fieldsData: any = [];

  constructor(private settingsService: SettingsService, private fb: FormBuilder) {
    this.settings = this.settingsService.getSettings();
  }

  ngOnInit(): void {
    this.dynamicForm = this.fb.group({
      formFields: this.fb.array([]),
    });

    // Simulating dynamic fields data (this could come from an API)
    this.fieldsData = [
      { name: 'firstName', label: 'First Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: false },
      { name: 'age', label: 'Age', type: 'number', required: false },
    ];

    // Dynamically add form controls based on data
    this.setDynamicFormFields(this.fieldsData);
  }

  // Add form controls dynamically
  setDynamicFormFields(fieldsData: Array<any>) {
    fieldsData.forEach(field => {
      const control = this.fb.control('', field.required ? Validators.required : []);
      this.formFields.push(control);
      // this.dynamicForm.get("formFields").setValue(control);
      console.log("formFields", this.formFields.controls);
    });
  }

  // Submit the form data
  onSubmit() {
    console.log(this.dynamicForm.value);
  }

  updateSettings() {
    this.settingsService.updateSettings(this.settings);
    alert('Settings updated successfully!');
  }
}
