import {Component} from 'angular2/core';
import {BookmarkService} from './services/bookmark.service';
import {IBookmark} from './interfaces/bookmark.interface';

@Component({
  selector: 'bookmark-form',
  templateUrl: './app/bookmarkForm.template.html',
  providers: [BookmarkService]
})
export class BookmarkFormComponent {
  public url:string;
  public title:string;
  public category:string;
  public tags:string;

  constructor(private _bookmarkService: BookmarkService){}

  save(){
    var item: IBookmark = {
      url: this.url,
      title: this.title,
      category: this.category,
      tags: this.tags.split(',')
    }
    this._bookmarkService.saveItem(item);
  }
}
