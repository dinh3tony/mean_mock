import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router,ActivatedRoute, Params, } from '@angular/router';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  newStuff: any;
  errors = [];
  idee: any;
  editStuff= "";

  constructor(private _httpService: HttpService, private _router: Router,private _route: ActivatedRoute,) { }

  ngOnInit() {
    this.newStuff = { name: "", rating: "1", review: "" };
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
    this.newStuff = data['data'];
  })
  }


  goHome() {
    this._router.navigate(['/movies'])

  }


  createReview(){
    this.errors = [];
    let ob = this._httpService.addReviewSolo(this.newStuff)
    ob.subscribe(data => {
      if(data['message'] == true) {
        console.log("it works!");
        this.goHome();
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
