import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { Form } from './login';
import { addUser } from '../../ngrx/actions/user.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/ngrx/state/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  model = new Form({username: '', password: ''})
  user$: Observable<User>
  
  constructor(private config: ConfigService, private store: Store<{ user: any }>) { 
    this.user$ = store.select('user');
  }

  ngOnInit(): void {
  }

  login(): void{
    this.config.login({username: this.model.user.username, password: this.model.user.password}).subscribe((data) => {
      console.log(data)
      this.store.dispatch(addUser({user: data}));
    });
  }

}
