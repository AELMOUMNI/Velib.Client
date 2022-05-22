import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IRecord } from "src/app/core/models/record";
import { VelibApiService } from "src/app/core/services/velib-api.service";

@Component({
    selector: 'pm-dock-notworkingstation-list',
    templateUrl: './dock-notworkingstation-list.component.html'
  })
  export class DockNotworkingstationListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'le nombre de stations qui ne fonctionnent pas avec la liste de nom des stations';
    sub! : Subscription;
    errorMessage: string = '';
    docks: IRecord[] = [];

    constructor(private docksService: VelibApiService){}

    ngOnInit(): void{
        this.sub = this.docksService.getNotWorkingStation().subscribe({
            next: docks =>{
                this.docks = docks.data
            },
            error: err => this.errorMessage = err
        });
    }
    
    ngOnDestroy(){
        this.sub.unsubscribe();
    }
}
