import { Video } from './video.class';

export class Playlist {
  constructor(
    public etag: string,
    public nextPageToken: string,
    public prevPageToken: string,
    public totalResults: number,
    public resultsPerPage: number,
    public items: Video[]
  ) {}
}
