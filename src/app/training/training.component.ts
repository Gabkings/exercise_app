import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { TrainingService } from './training.service';
import { TrainingModel } from './training.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.less']
})
export class TrainingComponent {

  ongoingTraining = false;
  exerciseSubscription: Subscription;

  exercises : TrainingModel[] = []

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(
      exercise => {
        if (exercise) {
          this.ongoingTraining = true;
        } else {
          this.ongoingTraining = false;
        }
      }
    );
  }
}
