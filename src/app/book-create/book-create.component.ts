import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {bookService} from '../services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class bookCreateComponent implements OnInit {

  constructor(private service:bookService) { }

  onAddbook(form: NgForm) {

    this.service.addbook(form.value.title, form.value.content).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



  }

}
