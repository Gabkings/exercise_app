import { Component } from '@angular/core';
import { TrainingModel } from '../training.model';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.less']
})
export class NewTrainingComponent {

  exercises: TrainingModel[] = [];

  constructor(private trainingService: TrainingService) { }

  // @Output() trainingStart = new EventEmitter<void>()
  

  onTrainingEventStart(form: NgForm){
    this.trainingService.startExercise(form.value.exercise);

  }

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  // onStartTraining(form: NgForm) {
  //   this.trainingService.startExercise(form.value.exercise);
  // }
}
