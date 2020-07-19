import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { StatsService } from './stats/stats.service';
import { CountryStatsComponent } from './stats/country-stats/country-stats.component';
import { StatsComponent } from './stats/stats.component';
import { SummaryComponent } from './stats/summary/summary.component';
import { CountryHistoryComponent } from './stats/country-history/country-history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialShareComponent } from './social-share/social-share.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    CountryStatsComponent,
    StatsComponent,
    CountryHistoryComponent,
    SocialShareComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  entryComponents:[SocialShareComponent],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
