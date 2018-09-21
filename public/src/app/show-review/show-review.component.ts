import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css']
})
export class ShowReviewComponent implements OnInit {
  idee: any;
  stuff = [];
  title = "" ;
  errors = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("This is in the params with params", params['id'])
      this.idee = params['id']
    });
    this.getMovie();
  }



  getMovie() {
    let obs = this._httpService.getOne(this.idee)
    obs.subscribe(data => {console.log("This is our stuff!", data),
    console.log(data['data']['reviews'],"This is the data i got for reviews")
    this.title = data['data']
    this.stuff = data['data']['reviews'];
  })}
  
  deleteOneStuff(id){
    this.errors = [];
    console.log("This is the id of the stuff", id);
    let obs = this._httpService.deleteStuff(id);
    obs.subscribe(data => {
      if(data['message'] == true) {
        console.log("Delete the stuff", data['data'])
        this.goHome();
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

  goHome() {
    this._router.navigate(['/movies'])

  }
}


