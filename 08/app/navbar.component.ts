import {Component} from 'angular2/core'
import {BookmarkListComponent} from './bookmarkList.component'

@Component({
  selector: 'navbar',
  directives: [BookmarkListComponent],
  template: `
  <nav id="nav">
    <div class="nav-wrapper">
      <div class="col s12">
        <a class="brand-logo">MarkIt</a>
        <bookmark-list></bookmark-list>
        <a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
      </div>
    </div>
  </nav>
  `
})
export class NavbarComponent {}
