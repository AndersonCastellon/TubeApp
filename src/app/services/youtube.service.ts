import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Playlist } from '../models/playlist.class';
import { Video } from '../models/video.class';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyChjHNou2ytheSkUBjRKfI8pNHfYVDAKxY';
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private uploadsId = 'UUBnFwsPRlWD3iDcoJwBiHzA';

  private nextPageToken = '';

  constructor(private http: HttpClient) {}

  getVideos() {
    const endPoint = `/playlistItems`;

    const urlParams = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '21')
      .set('playlistId', this.uploadsId)
      .set('pageToken', this.nextPageToken)
      .set('key', this.apiKey);

    return this.http
      .get(`${this.youtubeUrl}${endPoint}`, {
        params: urlParams
      })
      .pipe(
        map((result: any) => {
          const items: Video[] = [];

          for (const item of result.items) {
            const video = new Video(
              item.id,
              item.snippet.publichedAt,
              item.snippet.title,
              item.snippet.description,
              item.snippet.thumbnails.maxres,
              item.snippet.channelTitle,
              item.snippet.playlistId,
              item.snippet.resourceId.videoId
            );
            items.push(video);
          }

          const playlist = new Playlist(
            result.etag,
            result.nextPageToken,
            this.nextPageToken ? this.nextPageToken : '',
            result.pageInfo.totalResults,
            result.pageInfo.resultsPerPage,
            items
          );

          this.nextPageToken = playlist.nextPageToken;
          return playlist;
        })
      );
  }
}
