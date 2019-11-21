import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/models/book';
import {Router} from '@angular/router'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private books:Observable<Book[]>;

  constructor(booksvc:BooksService,private router:Router) { 
    this.books=booksvc.getBooks();
  }

  ngOnInit() {
  }

  public AddBook(){
    console.log("This menthod will take the book info and add to the list");
    this.router.navigate(['addbook']);
  };

}
