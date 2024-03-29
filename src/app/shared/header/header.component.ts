import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showLogout: boolean = true;

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    if (this.router.url == '/' || this.router.url == "/register") {
      this.showLogout = false;
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
