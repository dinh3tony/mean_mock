import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  stuff = [];
  errors = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAllStuff();
  }

  getAllStuff() {
    let obs = this._httpService.getAllStuff()
    obs.subscribe(data => {
      console.log("Got the data", data);
      this.stuff = data['data']
    })
  }

  deleteOneStuff(id){
    this.errors = [];
    console.log("This is the id of the stuff", id);
    let obs = this._httpService.deleteStuff(id);
    obs.subscribe(data => {
      if(data['message'] == true) {
        console.log("Delete the stuff", data['data'])
        this.getAllStuff();
      }
      else {
        console.log("You're not able to delete!");
        for(var key in data['error']['errors']){
          this.errors.push(data['error']['errors'][key]['message']);
        }
        console.log("errors array", this.errors)
      }
    })
  }

}
