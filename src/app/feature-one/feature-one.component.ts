import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.scss']
})
export class FeatureOneComponent implements OnInit {

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
        "amout": "9674"
      }
    ];
  }
  onTableAction(event: any) {
    console.log('event', event)
  }

}
