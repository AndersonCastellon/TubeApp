import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from 'src/app/models/video.class';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent {
  @Input() video: Video;
  @Output() id: EventEmitter<string>;
  constructor() {
    this.id = new EventEmitter();
  }
}
