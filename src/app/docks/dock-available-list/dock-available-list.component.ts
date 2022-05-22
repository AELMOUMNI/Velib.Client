import {Component, OnDestroy, OnInit} from "@angular/core"
import { Subscription } from "rxjs";
import { IRecord } from "../../core/models/record";
import { VelibApiService } from "../../core/services/velib-api.service";

@Component({
  selector: 'pm-dock-available-list',
  templateUrl: './dock-available-list.component.html',
  styleUrls: ['./dock-available-list.component.scss']
})

export class DockAvailableListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'la station avec le plus de borne disponible et le nombre de vélos disponible';
    sub! : Subscription;
    errorMessage: string = '';
    docks: IRecord[] = [];

    constructor(private docksService: VelibApiService){}

    ngOnInit(): void{
        this.sub = this.docksService.getMaxDocksAvailablel().subscribe({
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
