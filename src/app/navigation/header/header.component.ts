import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  @Output() toggleSideNave = new EventEmitter<void>()

  onToggleSideNav(){
    this.toggleSideNave.emit()
  }

}
