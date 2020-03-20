import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { VideoCardModule } from '../../ui/video-card/video-card.module';
import { MaterialModule } from '../../material.module';
import { VideoPopupComponent } from '../../ui/video-popup/video-popup.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  entryComponents: [VideoPopupComponent],
  declarations: [HomeComponent, VideoPopupComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    VideoCardModule,
    MaterialModule,
    PipesModule
  ]
})
export class HomeModule {}
