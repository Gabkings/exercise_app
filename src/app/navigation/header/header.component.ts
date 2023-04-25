import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }
  
  @Output() toggleSideNave = new EventEmitter<void>()

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onToggleSideNav(){
    this.toggleSideNave.emit()
  }

  onToggleSidenav() {
    this.toggleSideNave.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }


}
