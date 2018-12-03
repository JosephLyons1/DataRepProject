import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { bookDetailsComponent } from './book-details/book-details.component';
import {bookService} from './services/book.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from "@angular/forms";
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';

import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { bookCreateComponent } from './book-create/book-create.component';
import { bookEditComponent } from './book-edit/book-edit.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  {
    path: 'list',
    component: bookDetailsComponent
  },
  {
    path: 'create',
    component: bookCreateComponent
  },
  {
    path: 'edit/:id',
    component: bookEditComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    bookDetailsComponent,
    bookCreateComponent,
    bookEditComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatDialogModule,
  MatExpansionModule,
  MatMenuModule,
  MatTableModule,
  MatDividerModule  ],
  providers: [bookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
