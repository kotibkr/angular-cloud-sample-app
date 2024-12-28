import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormConfigService } from 'src/app/form-config.service';


/**
 * @title Dialog Animations
 */
@Component({
    selector: 'action-dialog',
    templateUrl: './action-dialog.html',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatDialogModule, ActionDialogComponent, MatInputModule, MatDividerModule, MatOptionModule],
})
export class ActionDialogComponent implements OnInit {
    data = inject(MAT_DIALOG_DATA);
    dynamicForm!: FormGroup;  // Reactive form
    formConfig: any[] = [];  // Stores the form configuration
    formGroup: { [key: string]: FormControl } = {};
    // formConfig = [
    //     { name: 'username', label: 'Username', type: 'text' },
    //     { name: 'email', label: 'Email', type: 'email' },
    //     { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'] }
    // ];
    constructor(public dialogRef: MatDialogRef<ActionDialogComponent>, private fb: FormBuilder, private formConfigService: FormConfigService
    ) {

    }

    ngOnInit(): void {
        this.dynamicForm = this.fb.group({});
        // Get the form configuration from the service
        this.formConfig = this.formConfigService.getFormConfig();
        console.log("this.formConfig", this.formConfig);
        this.formConfig.forEach(field => {
            this.dynamicForm.addControl(field.name, this.fb.control('', this.getValidators(field)));
        });
        // this.someMethod(this.formConfig);
    }

    someMethod(fields: any[]) {
        fields.forEach((field) => {
            // Add the control dynamically
            // this.formGroup[field.name] = this.fb.control(field.value || '', field.validations);
            this.dynamicForm.addControl(field.name, this.fb.control('', this.getValidators(field)));
        });
        // Create the form group
        // this.dynamicForm = this.fb.group(this.formGroup);
        // console.log("dynamicForm", this.dynamicForm);
    }

    // Add validation based on field type or other conditions
    getValidators(field: any) {
        if (field.type === 'email') {
            return [Validators.required, Validators.email];
        }
        return [Validators.required];
    }

    onFileChange(event: any, field: string) {
        const file = event.target.files[0];
        console.log("fileeeee", file);
        this.dynamicForm.get(field)!.setValue(file.name);
    }

    onAction(action: any) {
        console.log("action", action);
        if (action === "yes") {
            const formData = this.dynamicForm.value;
            this.saveFormData(formData);
            this.dialogRef.close({ result: true });
        } else {
            this.dialogRef.close({ result: false });
        }
    }

    saveFormData(formData: any): void {
        const data = {
            ...formData,
            createdAt: new Date().toISOString() // Add timestamp if needed
        };

        // Saving to Firebase Realtime Database
        // this.db.list('forms').push(data).then(() => {
        //     console.log('Data saved successfully');
        // }).catch((error: any) => {
        //     console.error('Error saving data', error);
        // });

        // If you're using Firestore, you would use AngularFireFirestore like:
        // this.firestore.collection('forms').add(data);
    }
    // Submit the form
    onSubmit() {
        if (this.dynamicForm.valid) {
            console.log(this.dynamicForm.value);
        } else {
            console.log('Form is invalid');
        }
    }
}