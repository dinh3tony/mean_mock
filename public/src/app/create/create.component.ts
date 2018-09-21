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
    this.newStuff = {title: "", description: ""};
  }

  onCreate() {
    this.errors = [];
    console.log(this.newStuff);
    let obs = this._httpService.addStuff(this.newStuff)
    obs.subscribe(data => {
      if(data['message'] == true) {
        console.log("Post our data!", data);
        this.newStuff = {title:"",description:""};
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
    this._router.navigate(['/products'])

  }









}
