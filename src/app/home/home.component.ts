import { Component, OnInit } from '@angular/core';
import { Service1 } from '../service';
import { registerElement } from 'nativescript-angular/element-registry';


@Component({
  selector: 'ns-test',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})


export class HomeComponent implements OnInit {
 
  constructor(private service: Service1) {
  
  }

  ngOnInit() {


  }



}