import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  dogsList: string[] = [];

  selectedDog: string = '';

  selectDog(newDog: string) {
    this.selectedDog = newDog
  };

  getSelectedDog() {
    return this.selectedDog
  };

  getAllDogs() {
   return this.http.get<{message:any}>(
      'https://dog.ceo/api/breeds/list/all').pipe(map(allDogsResponse => Object.keys(allDogsResponse.message)));
  }

  getSelectedDogImage(dogName: string) {
    return this.http.get<{message:any}>(`https://dog.ceo/api/breed/${dogName}/images/random`).pipe(map(randomImageResponse => randomImageResponse.message))
  }
  constructor(
    private http: HttpClient
  ) { }
}
