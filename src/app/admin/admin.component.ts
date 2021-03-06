import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  menu = [
    {
      title: 'Menu Management',
      icon: 'fas fa-utensils-alt',
      link: ''
    },
    {
      title: 'Fleet Management',
      icon: 'fas fa-video',
      link: 'manage_progress_monitor'
    },
    {
      title: 'Sales',
      icon: 'fas fa-user',
      link: ''
    },
    {
      title: 'Employees',
      icon: 'fas fa-users',
      link: ''
    },
    // {
    //   title: 'Manage Progress Monitor ',
    //   icon: 'fas fa-video',
    //   link: 'manage_progress_monitor'
    // },
    // {
    //   title: 'Manage Kiosks',
    //   icon: 'fas fa-video',
    //   link: 'manage_kiosks'
    // },
    {
      title: 'Profile',
      icon: 'fas fa-address-card',
      link: 'profile'
    },
  ];

  logout() {
    localStorage.removeItem('usr');
    this.router.navigate(['']);
  }

}
