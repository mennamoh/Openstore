import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.css']
})
export class ComplexComponent implements OnInit {
  complexcat:any[];
  Url:string ='https://captello.firebaseio.com/products.json'
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.Url).subscribe((response : any)=>{(this.complexcat=response) ;})
  }

}
