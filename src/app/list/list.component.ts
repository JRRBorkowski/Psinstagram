import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {

  allDogs!: Observable<string[]>;


  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.allDogs = this.appService.getAllDogs();
  }
  onDogSelection(e:Event) {
    this.appService.selectDog((e.target as HTMLSelectElement).value);
  }
}
