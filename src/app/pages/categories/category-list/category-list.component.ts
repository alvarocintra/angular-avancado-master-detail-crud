import { Component } from '@angular/core';

import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';

// ICONS
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends BaseResourceListComponent<Category> {
  faPlus = faPlus;
  faPen = faPen;
  faTrashAlt = faTrashAlt;

  constructor(private categoryService: CategoryService, protected spinner: NgxSpinnerService) {
    super(categoryService, spinner);
  }

}
