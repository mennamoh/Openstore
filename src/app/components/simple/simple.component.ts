import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  cat :any[];
  url:string ='https://captello.firebaseio.com/products.json'
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((response : any)=>{(this.cat=response) ;})
  }  
  
}
