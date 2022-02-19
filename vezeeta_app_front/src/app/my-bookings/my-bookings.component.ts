import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css'],
})
export class MyBookingsComponent implements OnInit {
  @Input() item: any = '';
  constructor() {}

  ngOnInit(): void {}
}
