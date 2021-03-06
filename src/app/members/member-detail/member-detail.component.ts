import { User } from './../../../_models/user';
import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
user: User;
  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
  }
  loadUser() {
    this.userService.getUser(+this.route.snapshot.params['id'].subscribe((user: User) => {
    this.user = user;
  }, error => {
    this.alertify.error(error);
  }));
  }
}
