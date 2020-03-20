import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Playlist } from 'src/app/models/playlist.class';
import { MatDialog } from '@angular/material/dialog';
import { VideoPopupComponent } from 'src/app/ui/video-popup/video-popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public playlist: Playlist;
  constructor(private yts: YoutubeService, private dialog: MatDialog) {}

  ngOnInit() {
    this.yts.getVideos().subscribe((result: Playlist) => {
      this.playlist = result;
    });
  }

  playVideo(id: string) {
    const dialogRef = this.dialog.open(VideoPopupComponent, {
      width: '625px',
      data: { url: `https://www.youtube.com/embed/${id}` }
    });
  }

  load() {
    this.yts.getVideos().subscribe((result: Playlist) => {
      this.playlist.items.push.apply(this.playlist.items, result.items);
    });
  }
}
