import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { UiTestCardComponent } from './ui-test-card/ui-test-card.component';
import { TestServicesComponent } from './test-services/test-services.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule,
    FlexLayoutModule
  ],
  declarations: [UiTestCardComponent],
  exports:[UiTestCardComponent]
})
export class TestModule { }
