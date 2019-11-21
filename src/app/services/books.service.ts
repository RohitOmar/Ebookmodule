import { Injectable } from '@angular/core';
import {Book} from 'src/app/models/book';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private API='http://localhost:3000/Books';

  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{

    //  return this.http.get<Book[]>(this.API)
    //  .subscribe(
    //    res=>{res as unknown as Observable<Book[]>},
    //    err=>{console.log(err)}
    //  );

    return this.http.get<Book[]>(this.API);

    
  }

  addBook(book:Book):any{
    console.log("Printing from the service:"+book.name+book.author+book.price)
    this.http.post(this.API,book)
    .subscribe(
      res=>{console.log("Item added successfully")},
      err=>{console.log("An error occured:"+ err)}
    )
  };


}
