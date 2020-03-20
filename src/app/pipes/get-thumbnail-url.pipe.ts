import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getThumbnailUrl'
})
export class GetThumbnailUrlPipe implements PipeTransform {
  transform(value: any): string {
    if (value) {
      return value.url;
    }
  }
}
