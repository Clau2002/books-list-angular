import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() onAddBook: EventEmitter<Book> = new EventEmitter();
  title!: string;
  author!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.title){
      alert('Please add a book');
      return;
    }

    if(!this.author){
      alert('Please add a author');
      return;
    }

    const newBook = {
      title: this.title,
      author: this.author
    }

    this.onAddBook.emit(newBook);

    this.title = '';
    this.author = '';
  }
}
