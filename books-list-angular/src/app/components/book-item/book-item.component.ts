import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/book';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book!: Book;
  @Output() onDeleteBook: EventEmitter<Book> = new EventEmitter;

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(book: any){
    this.onDeleteBook.emit(book);
  }

}
