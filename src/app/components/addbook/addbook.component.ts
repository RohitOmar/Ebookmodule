import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  book:Book;

  constructor(private bookSvc:BooksService) {
    this.book={
      name:"",
      author:"",
      price:0,
    }
   }

  ngOnInit() {
  }

  save(form){
    //if(form.valid){
      console.log(form.value);
      if(form.valid){
        console.log("Form data is valid");
        this.bookSvc.addBook(form.value);
      }
      else{
        console.log("Form Data is not valid");
      }
    //}
  }
}
