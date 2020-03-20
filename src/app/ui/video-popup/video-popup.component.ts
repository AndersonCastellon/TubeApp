import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  styles: []
})
export class VideoPopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<VideoPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    console.log(this.data.url);
  }

  closeVideo() {
    this.dialogRef.close();
  }
}
