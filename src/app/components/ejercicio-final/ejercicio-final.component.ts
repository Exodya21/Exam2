import { Component } from '@angular/core';
import { ExamServiceService } from 'src/app/services/exam-service.service';

@Component({
  selector: 'app-ejercicio-final',
  templateUrl: './ejercicio-final.component.html',
  styleUrls: ['./ejercicio-final.component.css']
})
export class EjercicioFinalComponent {
  constructor( public props: ExamServiceService ){}
}
