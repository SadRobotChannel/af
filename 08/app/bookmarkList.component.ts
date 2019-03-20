import {Component} from 'angular2/core'

@Component({
  selector: 'bookmark-list',
  template: `
  <ul class="right hide-on-med-and-down">
    <li>
      <a href="bookmarks.html">Bookmarks</a>
    </li>
  </ul>
  <ul id="slide-out" class="side-nav">
    <li>
      <a href="bookmarks.html">Bookmarks</a>
    </li>
  </ul>
  `
})
export class BookmarkListComponent {}
