import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VisitService } from 'app/services/visit.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  addDoctorForm!: FormGroup;
  isSubmitted = false;
  item: any = { name: '', email: '', appointment: '' };
  name: any;
  email: any;
  appointment: any;

  constructor(private fb: FormBuilder, private visit: VisitService) {}

  ngOnInit(): void {
    this.addDoctorForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(25),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(25),
        ],
      ],
      date: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    console.log(this.addDoctorForm.value);

    console.log(this.f['name'].errors?.['required']);

    setTimeout(() => {
      this.isSubmitted = false;
    }, 3000);
  }

  get f() {
    return this.addDoctorForm.controls;
  }

  addone() {
    this.item.name = this.name;
    this.item.email = this.email;
    this.item.appointment = this.appointment;
    console.log(this.item);

    this.visit.addVisit(this.item).subscribe((response: any) => {
      this.item = response;
    });
  }
}
