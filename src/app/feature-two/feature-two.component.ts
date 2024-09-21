import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-feature-two',
  templateUrl: './feature-two.component.html',
  styleUrls: ['./feature-two.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule, MatIconModule],
})
export class FeatureTwoComponent implements OnInit {

  constructor() { }
  columns = [

    { columnDef: 'product', header: 'Product' },
    { columnDef: 'date', header: 'Date' },
    { columnDef: 'company', header: 'Company' },
    { columnDef: 'country', header: 'Country' },
    { columnDef: 'quantity', header: 'Quantity' },
    { columnDef: 'amout', header: 'Amout' },
  ]
  data: any[] = [];
  ngOnInit() {
    // get data from API 
    this.data = [
      {
        "product": "Molly Pope",
        "date": "Jul 27, 2021",
        "company": "Faucibus Orci Institute",
        "country": "New Zealand",
        "quantity": "Campinas",
        "amout": "1403"
      },
      {
        "product": "Alfonso Vinson",
        "date": "May 11, 2021",
        "company": "Non Ante Corp.",
        "country": "United Kingdom",
        "quantity": "Redlands",
        "amout": "411"
      },
      {
        "product": "Camden David",
        "date": "Aug 6, 2022",
        "company": "Cursus Et LLP",
        "country": "Nigeria",
        "quantity": "Iguala",
        "amout": "6853"
      },
      {
        "product": "Levi Goff",
        "date": "Nov 3, 2021",
        "company": "Vitae Incorporated",
        "country": "Sweden",
        "quantity": "Manavgat",
        "amout": "7985"
      },
      {
        "product": "Madaline Leach",
        "date": "Jun 13, 2022",
        "company": "Erat Volutpat Corp.",
        "country": "Chile",
        "quantity": "Niterói",
        "amout": "9674"
      },
      {
        "product": "Camden David",
        "date": "Aug 6, 2022",
        "company": "Cursus Et LLP",
        "country": "Nigeria",
        "quantity": "Iguala",
        "amout": "6853"
      },
      {
        "product": "Levi Goff",
        "date": "Nov 3, 2021",
        "company": "Vitae Incorporated",
        "country": "Sweden",
        "quantity": "Manavgat",
        "amout": "7985"
      },
      {
        "product": "Madaline Leach",
        "date": "Jun 13, 2022",
        "company": "Erat Volutpat Corp.",
        "country": "Chile",
        "quantity": "Niterói",
        "amout": "1-678-156-9674"
      }
    ];
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  onTableAction(event: any) {
    console.log('event', event)
  }

}
