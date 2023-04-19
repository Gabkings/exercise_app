import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from './DialogAnimationsExample.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.less']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() exitTraining = new EventEmitter()

  mat_dialog_close : Boolean = false

  constructor(public dialog: MatDialog) {}

  timer:any = 0;
  progres = 5 

  ngOnInit(): void {

    this.startOrResumeTime()
   
    
  }

  startOrResumeTime(){
    this.timer = setInterval(() => {
      this.progres = this.progres + 5 
      if(this.progres >= 100){
        clearInterval(this.timer)
      }
    }, 1000)
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
      if(result === true){
        this.exitTraining.emit()
      }else{
        this.startOrResumeTime()
      }
    });
  }

}
