import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config.service';
import { increment, decrement, reset, create } from '../../ngrx/actions/counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  count$: Observable<number>

  constructor(private config: ConfigService, private store: Store<{ count: number }>) { 
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    this.config.getPodcast().subscribe((data) => console.log(data));
    this.create(2)
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }
 
  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }
 
  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }

  create(val) {
    // TODO: Dispatch a reset action
    this.store.dispatch(create({val}));
  }

}
