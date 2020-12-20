export class Movie {
  constructor(public mediaType: string,
              public id: number,
              public poster: string,
              public title: string,
              public releaseDate: string,
              public overview: string) { }
}