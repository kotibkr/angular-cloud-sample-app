import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActionDialogComponent } from './dialog/action-dialog';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  dialogRef!: MatDialogRef<ActionDialogComponent, any>;
  constructor(private dialog: MatDialog) {

  }

  editRow(row: any, data: any) {
    console.log("edit row", row, data);
    if (data && data.length > 0) {
      data.forEach((element: any) => {
        if (element.id === row.id) {
          this.dialogRef = this.dialog.open(ActionDialogComponent, {
            width: '50%',
            data: {
              action: "edit",
              row: row
            }
          });
        }
      });
    }
  }

  deleteRow(row: any, data: any) {
    if (data && data.length > 0) {
      data.forEach((element: any) => {
        if (element.id === row.id) {
          this.dialogRef = this.dialog.open(ActionDialogComponent, {
            width: '50%',
            data: {
              action: "delete",
              row: row
            }
          });
          this.dialogRef.afterClosed().subscribe((result) => {
            console.log("result", result);
            if(result.result) {
              data.splice(row, 1);
            }
          });
        }
      });
    }
  }
}
