import {IBookmark} from '../interfaces/bookmark.interface';
import {Injectable} from 'angular2/core';

@Injectable()
export class BookmarkService{
  saveItem(item:IBookmark) {
    if(!this.doesCategoryExits(item.category))
      this.createCategory(item.category);
    this.addItemToCategory(item);
  }

  doesCategoryExits(category:string){
    let categories = this.getCategories();
    return categories[category];
  }

  getCategories():string[]{
    return [""];
  }

  createCategory(category:string){

  }

  addItemToCategory(item:IBookmark){

  }
}
