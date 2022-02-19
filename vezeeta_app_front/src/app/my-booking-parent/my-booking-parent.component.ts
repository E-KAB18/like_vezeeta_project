import { Component, OnInit } from '@angular/core';
import { VisitService } from 'app/services/visit.service';

@Component({
  selector: 'app-my-booking-parent',
  templateUrl: './my-booking-parent.component.html',
  styleUrls: ['./my-booking-parent.component.css'],
})
export class MyBookingParentComponent implements OnInit {
  booking: any = '';
  constructor(private visit: VisitService) {
    this.visit.getAll().subscribe((response: any) => {
      this.booking = response;
    });
  }

  ngOnInit(): void {}
}
