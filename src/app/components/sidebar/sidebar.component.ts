import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  DisplayAll(){
    console.log("All");
  }

  Displaycomplex(){
    console.log("complex")
  }
}
