import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExamInfo } from '../interfaces/exam-info.interface';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {

  uri: string = 'https://db-portfolio-angular-default-rtdb.europe-west1.firebasedatabase.app/examen/ej15.json';

  examInfo: ExamInfo = {};
  isLoaded: boolean = false;

  constructor( private http: HttpClient ) {
    this.getInfo()
  }

  getInfo() {
    this.http
      .get(this.uri)
      .subscribe( (res) => {
        this.isLoaded = true;
        this.examInfo = res;
        console.log(res);
      })
  }
}
