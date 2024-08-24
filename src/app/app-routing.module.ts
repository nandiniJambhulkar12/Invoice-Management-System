// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';
// // import { CreateinvoiceComponent } from './createinvoice/createinvoice.component';
// // import { ListingComponent } from './listing/listing.component';
// // import { RatingComponent } from './rating/rating.component';

// // const routes: Routes = [
// //   {component:ListingComponent,path:""},
// //   {component:CreateinvoiceComponent,path:"createinvoice"},
// //   {component:CreateinvoiceComponent,path:"editinvoice/:invoiceno"},
// //   {component:RatingComponent,path:"rating"}
// // ];

// // @NgModule({
// //   imports: [RouterModule.forRoot(routes)],
// //   exports: [RouterModule]
// // })
// // export class AppRoutingModule { }
// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';
// // import { LoginComponent } from './login/login.component';
// // import { ListingComponent } from './/listing/listing.component';
// // import { CreateinvoiceComponent } from './pages/createinvoice/createinvoice.component';
// // import { RatingComponent } from './pages/rating/rating.component';

// // const routes: Routes = [
// //   { path: '', redirectTo: 'login', pathMatch: 'full' },
// //   { path: 'login', component: LoginComponent },
// //   { path: 'listing', component: ListingComponent },
// //   { path: 'createinvoice', component: CreateinvoiceComponent },
// //   { path: 'editinvoice/:invoiceno', component: CreateinvoiceComponent },
// //   { path: 'rating', component: RatingComponent }
// // ];

// // @NgModule({
// //   imports: [RouterModule.forRoot(routes)],
// //   exports: [RouterModule]
// // })
// // export class AppRoutingModule { }


// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';
// // import { LoginComponent } from './login/login.component';
// // import { CreateinvoiceComponent } from './createinvoice/createinvoice.component';
// // import { ListingComponent } from './listing/listing.component';

// // const routes: Routes = [
// //     {
// //         path: '',
// //         redirectTo: 'login',
// //         pathMatch: 'full'
// //     },
// //     {
// //         path: 'login',
// //         component: LoginComponent
// //     },
// //     // path:''
// //     // children:[
// //     // {
// //     //     path: 'listing',
// //     //     component: ListingComponent
// //     // },
// //     // {
// //     //     path: 'createinvoice',
// //     //     component: CreateinvoiceComponent
// //     // },
// //     // {
// //     //     path: 'editinvoice/:invoiceno',
// //     //     component: CreateinvoiceComponent
// //     // }
// //     {
// //       path: '',
// //       // component: LayoutComponent,
// //       children: [
// //           // {
// //           //     path: 'dashboard',
// //           //     component: DashboardComponent
// //           // },
// //           {
// //               path: 'listing', // This will match the empty path under LayoutComponent
// //               component: ListingComponent
// //           },
// //           {
// //               path: 'createinvoice',
// //               component: CreateinvoiceComponent
// //           },
// //           {
// //               path: 'editinvoice/:invoiceno',
// //               component: CreateinvoiceComponent
// //           },
// //       ]
// //   }
// // ];

// // @NgModule({
// //     imports: [RouterModule.forRoot(routes)],
// //     exports: [RouterModule]
// // })
// // export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { ListingComponent } from './listing/listing.component';
// import { CreateinvoiceComponent } from './createinvoice/createinvoice.component';
// import { RatingComponent } from './rating/rating.component'; // Assuming you have this component

// const routes: Routes = [
//     { path: '', redirectTo: 'login', pathMatch: 'full' },
//     { path: 'login', component: LoginComponent },
//     { path: 'listing', component: ListingComponent },
//     { path: 'createinvoice', component: CreateinvoiceComponent },
//     { path: 'editinvoice/:invoiceno', component: CreateinvoiceComponent },
//     { path: 'rating', component: RatingComponent }
    
// ];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListingComponent } from './listing/listing.component';
import { CreateinvoiceComponent } from './createinvoice/createinvoice.component';
import { RatingComponent } from './rating/rating.component'; // Assuming you have this component
import { LayoutComponent } from './layout/layout.component'; // Import LayoutComponent

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'listing', component: ListingComponent },
            { path: 'createinvoice', component: CreateinvoiceComponent },
            { path: 'editinvoice/:invoiceno', component: CreateinvoiceComponent },
            { path: 'rating', component: RatingComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
