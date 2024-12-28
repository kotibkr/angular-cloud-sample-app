import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface FormField {
  name: string;
  label: string;
  type: string;
  value?: any;
  validators?: any[];
}

@Component({
  selector: 'dynamic-form-dialog',
  standalone: false,
  templateUrl: './dynamic-form-dialog.component.html',
  styleUrls: ['./dynamic-form-dialog.component.scss']
})
export class DynamicFormDialogComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DynamicFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { fields: FormField[] }
  ) {
    // this.form = this.fb.group({});
    // this.buildForm();
    console.log("side nav contetnt");
  }

  // Dynamically create form controls based on the input configuration
  buildForm() {
    this.data.fields.forEach(field => {
      const control = this.fb.control(field.value || '', field.validators || []);
      this.form.addControl(field.name, control);
    });
  }

  // Submit the form and close the dialog
  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  // Close the dialog without submitting
  onCancel() {
    this.dialogRef.close();
  }
}
