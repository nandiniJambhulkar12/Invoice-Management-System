import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { data } from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }
  invoiceheader:any=[
    {invoiceNo:121,customerName:'Design Works',customerId:'',deliveryaddress:'',remarks:'Carison Limited',total:400,tax:487,netTotal:887,details:[]},
    {invoiceNo:122,customerName:'UX Wireframes',customerId:'',deliveryaddress:'',remarks:'Adobe',total:600,tax:600,netTotal:1200,details:[]},
    {invoiceNo:123,customerName:'New Dashboard',customerId:'',deliveryaddress:'',remarks:'Bluewolf',total:324,tax:200,netTotal:524,details:[]},
    {invoiceNo:124,customerName:'Landing Page',customerId:'',deliveryaddress:'',remarks:'Salesforce',total:1000,tax:500,netTotal:1500,details:[]},
    {invoiceNo:125,customerName:'Marketing Templates',customerId:'',deliveryaddress:'',remarks:'Printic',total:500,tax:148,netTotal:648,details:[]},
    {invoiceNo:126,customerName:'Sales Presentation',customerId:'',deliveryaddress:'',remarks:'Tabdaq',total:200,tax:100,netTotal:300,details:[]},
    {invoiceNo:127,customerName:'Logo and Prints',customerId:'',deliveryaddress:'',remarks:'Apple',total:2000,tax:500,netTotal:2500,details:[]},
    {invoiceNo:128,customerName:'Icons',customerId:'',deliveryaddress:'',remarks:'Tookapic',total:800,tax:140,netTotal:940,details:[]},
    // {invoiceNo:129,customerName:'Design Works',customerId:'',deliveryaddress:'',remarks:'Carison Limited',total:87956621,tax:123445,netTotal:354567678,details:[]},
    // {invoiceNo:130,customerName:'Design Works',customerId:'',deliveryaddress:'',remarks:'Carison Limited',total:87956621,tax:123445,netTotal:354567678,details:[]},
    // {invoiceNo:131,customerName:'Design Works',customerId:'',deliveryaddress:'',remarks:'Carison Limited',total:87956621,tax:123445,netTotal:354567678,details:[]},
    // {invoiceNo:132,customerName:'Design Works',customerId:'',deliveryaddress:'',remarks:'Carison Limited',total:87956621,tax:123445,netTotal:354567678,details:[]},
    // {invoiceNo:133,customerName:'Design Works',customerId:'',deliveryaddress:'',remarks:'Carison Limited',total:87956621,tax:123445,netTotal:354567678,details:[]},
    // {invoiceNo:134,customerName:'Design Works',customerId:'',deliveryaddress:'',remarks:'Carison Limited',total:87956621,tax:123445,netTotal:354567678,details:[]},

    
  ];

  invoiceNo=129;
  editinvoice:number=0;
  iseditinvoice=false;
  getinvoice(invoiceno:number){
    let invoicedata;
    this.invoiceheader.forEach((data:any)=>{
      if(invoiceno===data.invoiceNo){
        invoicedata=data;

      
      }
    })
    return invoicedata
  }
  deleteinvoice(invoiceno:number){
    let invoicedata:any=[];
    this.invoiceheader.forEach((data:any)=>{
      if(invoiceno!==data.invoiceNo){
        invoicedata.push(data);

      
      }
    })
    this.invoiceheader=invoicedata;
    // return invoicedata
  }

  GetCustomer() {
    return this.http.get('https://localhost:7118/Customer/GetAll');
  }
  GetCustomerbycode(code: any) {
    return this.http.get('https://localhost:7118/Customer/GetByCode?Code='+code);
  }
  GetProducts() {
    return this.http.get('https://localhost:7118/Product/GetAll');
  }
  GetProductbycode(code: any) {
    return this.http.get('https://localhost:7118/Product/GetByCode?Code='+code);
  }

  GetAllInvoice(){
    return this.http.get('https://localhost:7118/Invoice/GetAllHeader');
  }

  GetInvHeaderbycode(invoiceno:any){
    return this.http.get('https://localhost:7118/Invoice/GetAllHeaderbyCode?invoiceno='+invoiceno);
  }
  GetInvDetailbycode(invoiceno:any){
    return this.http.get('https://localhost:7118/Invoice/GetAllDetailbyCode?invoiceno='+invoiceno);
  }
  RemoveInvoice(invoiceno:any){
    return this.http.delete('https://localhost:7118/Invoice/Remove?invoiceno='+invoiceno);
  }

  SaveInvoice(invoicedata:any){
    return this.http.post('https://localhost:7118/Invoice/Save',invoicedata);
  }

  GenerateInvoicePDF(invoiceno:any){
    return this.http.get('https://localhost:7118/Invoice/generatepdf?InvoiceNo='+invoiceno,{observe:'response',responseType:'blob'});
    
  }



}
