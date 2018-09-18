import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from '../models/tag';
import { environment } from '../../environments/environment';
import { Page } from '../models/page';
import { NewPage } from '../models/new-page';

@Injectable({
  providedIn: 'root'
})
export class PageService {
tags : Tag[];

static filteredPages: Page[];
  constructor(private http : HttpClient ) { }

//Gets all tags.
getAllTags() {
  return this.http.get<Tag[]>(environment.apiUrl + '/getall/tags');
}
//Gets pages by tag id.
filter(tagId : number) {
  console.log("In Page Service filter().........")
  return this.http.get(environment.apiUrl + `/filter/tags/${tagId}`);
}


//Get a page by page id.
getPageById(pageId) {
  return this.http.get<Page>(environment.apiUrl + `/page/${pageId}`);

}

//Sets filtered pages retrieved with the previous methkod (filter()).
setFilteredPages(pages) {
PageService.filteredPages = pages;
}
//Returns filtered pages retrieved with the previous methkod (filter()).
getFilteredPages() {
return PageService.filteredPages;
}



}
