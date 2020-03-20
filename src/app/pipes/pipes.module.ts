import { NgModule } from '@angular/core';
import { GetThumbnailUrlPipe } from './get-thumbnail-url.pipe';
import { UrlSanitizerPipe } from './url-sanitizer.pipe';

@NgModule({
  declarations: [GetThumbnailUrlPipe, UrlSanitizerPipe],
  exports: [GetThumbnailUrlPipe, UrlSanitizerPipe]
})
export class PipesModule {}
