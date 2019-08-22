import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';


@NgModule({
  declarations: [
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    // shared modules
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,

    // shared components
    BreadCrumbComponent
  ]
})
export class SharedModule { }
