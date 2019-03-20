import {Component} from 'angular2/core'
import {BookmarkFormComponent} from './bookmarkForm.component'
import {NavbarComponent} from './navbar.component'

@Component({
  selector: 'markit-app',
  directives: [BookmarkFormComponent, NavbarComponent],
  template: `
    <navbar></navbar>
    <bookmark-form></bookmark-form>
  `
})
export class AppComponent {}
