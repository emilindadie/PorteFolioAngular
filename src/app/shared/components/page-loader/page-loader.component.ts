import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit {

  @Input('showSpinner') showSpinner$;
  @Input('page') page;

 constructor() { }

 ngOnInit(): void {
  
 }

}
