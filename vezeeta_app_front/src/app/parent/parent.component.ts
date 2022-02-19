import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentarr:any=[
    {id:0,
      name:"Eman Tantawy",
      title:"Dental and Cosmetic Dental CenterDentist",
      im:"https://th.bing.com/th/id/OIP.7qqtTToEtgNU9L1XyZyHzAHaE8?pid=ImgDet&rs=1",
      fees:"100 EGP",
      location:"El-Zaiton",
      wt:"12 Minutes",
      phone:"16679-Cost for regular call"
    
    },
    {id:1,
      name:"Ahmed Badr",
      title:"Specialist in fixed prosthodontics",
      im:"https://th.bing.com/th/id/OIP.A1wxxaKg8cGPMMlMbxCzQgHaK_?pid=ImgDet&rs=1",
      fees:"100 EGP",
      location:"El-Zaiton",
      wt:"12 Minutes",
      phone:"16679-Cost for regular call"
    
    },
    {id:2,
      name:"Khaled Ali",
      title:"Dental and Cosmetic Dental CenterDentist",
      im:"https://image.freepik.com/free-photo/handsome-male-doctor-with-red-ribbon-as-symbol-aids_85574-4701.jpg",
      fees:"100 EGP",
      location:"El-Zaiton",
      wt:"12 Minutes",
      phone:"16679-Cost for regular call"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
