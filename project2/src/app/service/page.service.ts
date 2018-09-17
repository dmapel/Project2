import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from '../models/tag';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService {
tags : Tag[];
  constructor(private http : HttpClient ) { }

//Gets all tags.
getAllTags() {
  return this.http.get<Tag[]>(environment.apiUrl + '/getall/tags');
}

}
