import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from './video-card/video-card.component';
import { MaterialModule } from '../../material.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [VideoCardComponent],
  imports: [CommonModule, MaterialModule, PipesModule],
  exports: [VideoCardComponent]
})
export class VideoCardModule {}
