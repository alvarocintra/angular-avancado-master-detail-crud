import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

import { Entry } from '../shared/entry.model';
import { EntryService } from '../shared/entry.service';

import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent extends BaseResourceListComponent<Entry> {
  // Icons
  faPen = faPen;
  faTrash = faTrash;
  faPlus = faPlus;
  //

  constructor(private entryService: EntryService, protected spinner: NgxSpinnerService) {
    super(entryService, spinner);
  }
}
