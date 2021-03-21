import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { Form } from './login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  model = new Form({username: '', password: ''})
  
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
  }

  login(): void{
    this.config.login({username: this.model.user.username, password: this.model.user.password}).subscribe((data) => {
      console.log(data)
    });
  }

}
