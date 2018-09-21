import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editStuff: any;
  idee: any;
  errors = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.editStuff = {title: "", description: ""};
    this._route.params.subscribe((params: Params) => {
      console.log("This is in the params with params", params['id'])
      this.idee = params['id']
    });
    this.getStuffService();
  }

  getStuffService(){
    console.log("this is the data i am going to pass to the service", this.idee);
    let obs = this._httpService.getOne(this.idee)
    obs.subscribe(data => {console.log("This is our stuff!", data)
    this.editStuff = data['data'];
  })
  }

  onEdit() {
    this.errors = [];
    console.log(this.editStuff);
    let obs = this._httpService.editStuff(this.editStuff)
    obs.subscribe(data => {console.log("This is the new updated stuff", data) 
    if(data['message'] == true) {
      console.log("We were able to edit the stuff");
      this.goHome();
    }
    else {
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
