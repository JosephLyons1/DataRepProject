import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {bookService} from '../services/book.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class bookEditComponent implements OnInit {
  book : any = [];
  myTitle : String; 
  myContent : String; 
  constructor(private router:Router, private route: ActivatedRoute, private service:bookService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getbook(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.book = data;
      console.log(this.book);
      this.myTitle = this.book.title;
      console.log("message" +this.myTitle);

    });
  }
  onEditbook(form: NgForm) {
    this.service.updatebook(this.book._id, form.value.title, form.value.content).subscribe(() =>
    {
      this.router.navigate(['/list']);
    });
  }

}
