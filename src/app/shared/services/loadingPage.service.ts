import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Injectable()
export class LoadingPageService {

    private actionChangePageSource = new BehaviorSubject('home');
    actionChangePage = this.actionChangePageSource.asObservable();

    constructor(private modalService : NgbModal){
      
    }
    changePage(newPage : string){
      this.actionChangePageSource.next(newPage);
    }

    loadSpinner(target:any){
      const modal = this.modalService.open(
        target, { backdrop: 'static' });
    }
}