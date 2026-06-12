import { Component, inject, signal } from '@angular/core';
import { StateService } from '../../services/state-service';
import { Busy } from "../busy/busy";

@Component({
  selector: 'app-books-list',
  imports: [Busy],
  templateUrl: './books-list.html',
  styleUrl: './books-list.scss',
})
export class BooksList {

  readonly state = inject(StateService);
}
