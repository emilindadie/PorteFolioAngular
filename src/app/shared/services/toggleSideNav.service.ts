import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ToggleSideNavService {

    private actionSideNavSource = new BehaviorSubject(false);
    actionSideNav = this.actionSideNavSource.asObservable();

    toggleSideNav(value: boolean) {
        this.actionSideNavSource.next(value);
      }
}