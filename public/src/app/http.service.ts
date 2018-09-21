import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addStuff(newStuff) {
    console.log("New stuff in service", newStuff);
    return this._http.post('/new', newStuff);
  }

  getAllStuff() {
    console.log("Holy cow I made it here");
    return this._http.get('/stuff');
  }

  getOne(id) {
    return this._http.get('/show/'+id);
  }

  editStuff(edStuff) {
    console.log("This is the new stuff data: ", edStuff);
    return this._http.put('/edit/' + edStuff._id, edStuff);
  }

  deleteStuff(id) {
    console.log("This is the id in the service", id);
    return this._http.delete('/delete/'+ id);
  }

  addReview(review){
    console.log("I am really doing it with teh review")
    return this._http.post('/newreview', review);
  }

  addReviewSolo(review) {
    console.log("This is a different review add")
    return this._http.post('/addReview/'+ review._id, review);
  }
}
