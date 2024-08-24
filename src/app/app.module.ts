// // import { NgModule } from '@angular/core';
// // import { BrowserModule } from '@angular/platform-browser';

// // import { AppRoutingModule } from './app-routing.module';
// // import { AppComponent } from './app.component';
// // import { ListingComponent } from './listing/listing.component';
// // import { CreateinvoiceComponent } from './createinvoice/createinvoice.component';
// // import { ReactiveFormsModule } from '@angular/forms';
// // import { HttpClientModule } from '@angular/common/http';
// // import { ToastrModule } from 'ngx-toastr';
// // import { RatingComponent } from './rating/rating.component';
// // import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// // import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'
// // import {DataTablesModule} from 'angular-datatables';
// // // import { LoginComponent } from './login/login.component'


// // @NgModule({
// //   declarations: [
// //     AppComponent,
// //     ListingComponent,
// //     CreateinvoiceComponent,
// //     RatingComponent,
// //     // LoginComponent
// //   ],
// //   imports: [
// //     BrowserModule,
// //     AppRoutingModule,
// //     ReactiveFormsModule,
// //     HttpClientModule,
// //     ToastrModule.forRoot(),
// //     NgbModule,
// //     NgxExtendedPdfViewerModule,
// //     DataTablesModule
// //   ],
// //   providers: [],
// //   bootstrap: [AppComponent]
// // })
// // export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ListingComponent } from './listing/listing.component';
// import { CreateinvoiceComponent } from './createinvoice/createinvoice.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { ToastrModule } from 'ngx-toastr';
// import { RatingComponent } from './rating/rating.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
// import { DataTablesModule } from 'angular-datatables';
// import { LoginComponent } from './login/login.component'; // Added LoginComponent

// @NgModule({
//   declarations: [
//     AppComponent,
//     ListingComponent,
//     CreateinvoiceComponent,
//     RatingComponent,
//     LoginComponent // Declared LoginComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     ToastrModule.forRoot(),
//     NgbModule,
//     NgxExtendedPdfViewerModule,
//     DataTablesModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { CreateinvoiceComponent } from './createinvoice/createinvoice.component';
import { RatingComponent } from './rating/rating.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    CreateinvoiceComponent,
    RatingComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    NgxExtendedPdfViewerModule,
    DataTablesModule,
    LoginComponent // Import the standalone component here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
