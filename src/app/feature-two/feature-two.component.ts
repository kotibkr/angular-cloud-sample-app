import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReferralService } from '../referral/referral.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'https://yourwebsite.com?ref=sdfsfsfssfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfs', weight: 10079 },
  { position: 2, name: 'https://yourwebsite.com?ref=sdfsfsfssfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfs', weight: 40026 },
  { position: 3, name: 'https://yourwebsite.com?ref=sdfsfsfssfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfs', weight: 6941 },
  { position: 4, name: 'https://yourwebsite.com?ref=sdfsfsfssfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfs', weight: 90122 },
  { position: 5, name: 'https://yourwebsite.com?ref=sdfsfsfssfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfs', weight: 10811 },
  { position: 6, name: 'https://yourwebsite.com?ref=sdfsfsfssfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfs', weight: 120107 },
  { position: 7, name: 'https://yourwebsite.com?ref=sdfsfsfssfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfs', weight: 140067 },
  { position: 8, name: 'https://yourwebsite.com?ref=sdfsfsfssfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfs', weight: 159994 },
  { position: 9, name: 'https://yourwebsite.com?ref=sdfsfsfssfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfs', weight: 189984 },
  { position: 10, name: 'https://yourwebsite.com?ref=sdfsfsfssfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfs', weight: 201797 },
];

@Component({
  selector: 'app-feature-two',
  templateUrl: './feature-two.component.html',
  styleUrls: ['./feature-two.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, FormsModule, MatTableModule, MatCheckboxModule, MatIconModule, MatInputModule, MatFormFieldModule],
})
export class FeatureTwoComponent implements OnInit {
  referralCode: string = '';
  referralLink: string = '';
  constructor(private referralService: ReferralService) { }
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

  displayedColumns: string[] = ['position', 'name', 'weight'];
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

  generateReferralLink() {
    this.referralLink = this.referralService.getReferralLink(this.referralCode);
    console.log("referralLink", this.referralLink);
  }

  copyLink(link: string) {
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
