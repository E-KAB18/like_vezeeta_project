import { Component, OnInit } from '@angular/core';
// import { Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
// @Output()newItemEvent=new EventEmitter<string>();
  constructor() { }

   ngOnInit(): void {
  }
//   addNewItem(value:string){
//     this.newItemEvent.emit(value)
//   }

}
