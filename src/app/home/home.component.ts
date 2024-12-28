import { Component } from '@angular/core';
import { ActionService } from '../shared/action.service';
import { ApiService } from '../shared/components/service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Validators } from '@angular/forms';

interface FormField {
  name: string;
  label: string;
  type: string;
  value?: any;
  validators?: any[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  gridColumns = 3;
  isShowDynamicForm: boolean = false;
  
  constructor(private actionService: ActionService, private apiService: ApiService, public dialog: MatDialog) {
    // this.getroducts();
  }

  pictures = [
    {
      id: 1,
      title: 'Mixing size Grade A',
      img: './../../assets/images/mixing_size_of_grade_A.jpeg',
      content: "mixing size of Grade A stone chips."
    },
    {
      id: 2,
      title: 'Mixing size Grade B',
      img: './../../assets/images/mixing_size_of_grade_B.jpeg',
      content: "Mixing size of Grade B stone chips."
    },
    {
      id: 3,
      title: 'Zero size Grade B',
      img: './../../assets/images/size_zero_of_grade_B.jpeg',
      content: "Zero size of Grade B stone chips"
    }
  ];

  addGrade() {
    this.isShowDynamicForm = true;
    const formFields: FormField[] = [
      { name: 'title', label: 'Title', type: 'text', validators: [Validators.required] },
      { name: 'description', label: 'Description', type: 'text' },
    ];
    console.log("Add Grade");
    // const dialogRef = this.dialog.open(DynamicFormDialogComponent, {
    //   data: { fields: formFields },
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  getroducts() {
    this.apiService.getMessage().subscribe(response => {
      console.log("resonse", response.message);
    });
  }

  onClickEdit(row: any) {
    console.log("num", row);
    this.actionService.editRow(row, this.pictures);
  }

  onClickDelete(row: any) {
    console.log("row", row);
    this.actionService.deleteRow(row, this.pictures);
  }

}
