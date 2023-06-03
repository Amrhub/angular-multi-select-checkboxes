import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupCheckboxComponent } from './group-checkbox/group-checkbox.component';
import { CheckboxComponent } from './group-checkbox/checkbox/checkbox.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [AppComponent, CheckboxComponent, GroupCheckboxComponent, FilterPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
