import { Component, OnInit } from '@angular/core';
import {bookService} from '../services/book.service';
import { Observable } from 'rxjs';
import {book} from '../book.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class bookDetailsComponent implements OnInit {

  
  book: any = [];

  constructor(private ps:bookService){}

  ngOnInit(){
   
    this.ps.getbookData().subscribe(data => {
        this.book = data;
    });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.ps.deletebook(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}
