import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from '../models/tag';
import { environment } from '../../environments/environment';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {
tags : Tag[];
  constructor(private http : HttpClient ) { }

//Gets all tags.
getAllTags() {
  return this.http.get(environment.apiUrl + '/getall/tags');
}

filter(tagId : number) {
  return this.http.get<Page[]>(environment.apiUrl + `/filter/tags/${tagId}`)
}

}
