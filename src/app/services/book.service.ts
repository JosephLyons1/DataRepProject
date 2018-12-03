import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {book} from '../book.model';
//import { Stream } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class bookService {

  constructor(private http: HttpClient) { }
  
    getbookData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/book");
    }

  addbook(title: string, content: string): Observable<any> {
    const book: book = {title: title, content: content};
    return this.http.post("http://localhost:8081/api/book",book);
  }

  deletebook(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/book/"+id);
  }

  getbook(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/book/"+id);
  }

  updatebook(id:String, title: string, content: string): Observable<any> {
    const book: book = {title: title, content: content};
  return this.http.put("http://localhost:8081/api/book/"+id, book);
  }
}
