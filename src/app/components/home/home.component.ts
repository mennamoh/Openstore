import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  products : any [] ;
  prodId:any[];
  constructor(private http:HttpClient) { }
    Idurl:string ='https://captello.firebaseio.com/products/1.json'
   url : string ='https://captello.firebaseio.com/products.json'
  ngOnInit(): void {
   this.http.get(this.url).subscribe((response : any)=>{this.products =response;})
  }
  update(){
    console.log("updated")
  }
  getbyId(){
    this.http.get(this.Idurl).subscribe((response : any)=>{this.prodId =response;})
    console.log(this.prodId)
  }

  }


