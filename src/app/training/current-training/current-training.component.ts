import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from './DialogAnimationsExample.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.less']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0;
  timer: any = 0;



  mat_dialog_close : Boolean = false

  constructor(public dialog: MatDialog, private trainingService: TrainingService) {}

  progres = 5 

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    const step = this.trainingService.getRunningExercise().duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.trainingService.completeExercise();
        clearInterval(this.timer);
      }
    }, step);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    clearInterval(this.timer)

    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      data: {
        progres: this.progres
      },
      width: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startOrResumeTimer();
      }
    });
  }

}
