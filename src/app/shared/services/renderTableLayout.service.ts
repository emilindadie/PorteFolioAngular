import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";



@Injectable()
export class RenderTableLayoutService {

    private actionChangePageSource = new BehaviorSubject('home');
    actionChangePage = this.actionChangePageSource.asObservable();

    renderTable(newPage : string){
      this.actionChangePageSource.next(newPage);
    }
}