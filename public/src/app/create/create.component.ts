import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newStuff: any;
  errors = [];
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newStuff = {title: "", name: "", rating: "1", review: "" };
  }

  onCreate() {
    this.errors = [];
    console.log("Thi is the data",this.newStuff);
    let obs = this._httpService.addStuff(this.newStuff)
    obs.subscribe(data => {
      if(data['message'] == true) {
        console.log("Post our data!", data['data']['_id']);
        this.createReview();
        this.newStuff = {title:"", name: "", rating: 1, review: "" };
        this.goHome();
      }
      else {
        console.log("You're not able to add!");
        for(var key in data['error']['errors']){
          this.errors.push(data['error']['errors'][key]['message']);
        }
        console.log("errors array", this.errors)
      }
    })
  }

  goHome() {
    this._router.navigate(['/movies'])

  }

  createReview(){
    this.errors = [];
    let ob = this._httpService.addReview(this.newStuff)
    ob.subscribe(data => {
      if(data['message'] == true) {
        console.log("it works!");
      }
      else {
        console.log("Not able to do it")
        for(var key in data['error']['errors']){
          this.errors.push(data['error']['errors'][key]['message']);
        }
      }
    })
  }







}
