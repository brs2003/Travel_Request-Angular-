import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  requestDetails: any;

  constructor(private location: Location,private router: Router,) {}

  ngOnInit() {
    this.requestDetails = history.state.requestDetails;
    console.log(this.requestDetails);
  }

  goBack() {
    this.location.back();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}







