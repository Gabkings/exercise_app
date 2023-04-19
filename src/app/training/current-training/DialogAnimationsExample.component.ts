import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CurrentTrainingComponent } from './current-training.component';

/**
 * @title Dialog Animations
 */



@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
  styleUrls: ['./current-training.component.less']
})
export class DialogAnimationsExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
}
