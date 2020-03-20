export class Video {
  constructor(
    public id: string,
    public publichedAt: string,
    public title: string,
    public description: string,
    public thumbnails: {
      url: string;
      width: number;
      height: number;
    },
    public channelTitle: string,
    public playlistId: string,
    public videoId: string
  ) {}
}
