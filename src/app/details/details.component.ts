import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  selectedDog = this.appService.getSelectedDog();
  // selectedDogImage = this.appService.getSelectedDogImage();

  constructor( 
    public appService : AppService
    ) { }

  ngOnInit(): void {
  }

}
