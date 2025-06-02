import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-finance',
  imports: [CommonModule],
  templateUrl: './finance.html',
  styleUrl: './finance.scss'
})
export class Finance {
  public finances = [
    {
      opened: false, // added only to use in UI
      totalPaid: 1220,
      currency: "USD",
      source: "BCP",
      type: "CREDIT",
      time: new Date(),
      products: []
    },
    {
      opened: false,
      totalPaid: 33,
      currency: "PEN",
      source: "BCP",
      type: "DEBIT",
      time: new Date(),
      products: []
    },
    {
      opened: false,
      totalPaid: 20 + 5,
      currency: "PEN",
      source: "CASH",
      type: "CASH",
      time: new Date(),
      products: [
        {
          totalPaid: 20,
          reason: "Blueberries",
          measurementUnit: "mg",
          units: 500
        },
        {
          totalPaid: 5,
          reason: "Bananas",
          measurementUnit: "u",
          units: 5
        }
      ]
    }
  ]
}
