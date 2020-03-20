import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'urlSanitizer'
})
export class UrlSanitizerPipe implements PipeTransform {
  constructor(private ds: DomSanitizer) {}
  transform(value: string): SafeResourceUrl {
    return this.ds.bypassSecurityTrustResourceUrl(value);
  }
}
