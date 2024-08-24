import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from '../service/master.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-createinvoice',
  templateUrl: './createinvoice.component.html',
  styleUrls: ['./createinvoice.component.css']
})
export class CreateinvoiceComponent implements OnInit {

  constructor(private builder: FormBuilder, public service: MasterService, private router: Router, private alert: ToastrService,
    private activeroute: ActivatedRoute) { }
  pagetitle = "Create Invoice"
  invoicedetail !: FormArray<any>;
  invoiceproduct !: FormGroup<any>;

  mastercustomer: any;
  masterproduct: any;
  editinvoiceno: any;
  isedit = false;
  editinvdetail: any;
  invoiceid:number=0;

  ngOnInit(): void {
    this.GetCustomers();
    this.GetProducts();




    this.editinvoiceno = this.activeroute.snapshot.paramMap.get('invoiceno');
    if (this.editinvoiceno != null) {
      this.pagetitle = "Edit Invoice";
      this.isedit = true;
      this.SetEditInfo(this.editinvoiceno);
    }

    this.invoiceid=this.service.invoiceNo;
    if(this.service.iseditinvoice){

      let invoice:any=this.service.getinvoice(this.service.editinvoice);
      console.log(invoice)
      if(invoice){
        this.invoiceform=this.builder.group({
          invoiceNo: this.builder.control({ value: invoice?.invoiceNo, disabled: true }, Validators.required,),
          customerId: this.builder.control(invoice?.customerId, Validators.required),
          customerName: this.builder.control(invoice?.customerName),
          deliveryAddress: this.builder.control(invoice?.deliveryAddress),
          remarks: this.builder.control(invoice?.remarks),
          total: this.builder.control({ value: invoice?.total, disabled: true }),
          tax: this.builder.control({ value: invoice?.tax, disabled: true }),
          netTotal: this.builder.control({ value: invoice?.netTotal, disabled: true }),
          details: this.builder.array(invoice?.details)
      
        });

      }
      
      
    }
    else{
      this.invoiceform=this.builder.group({
        invoiceNo: this.builder.control({ value: this.service?.invoiceNo.toString(), disabled: true }, Validators.required,),
        customerId: this.builder.control('', Validators.required),
        customerName: this.builder.control(''),
        deliveryAddress: this.builder.control(''),
        remarks: this.builder.control(''),
        total: this.builder.control({ value: 0, disabled: true }),
        tax: this.builder.control({ value: 0, disabled: true }),
        netTotal: this.builder.control({ value: 0, disabled: true }),
        details: this.builder.array([])
    
      });
      this.service.invoiceNo=this.service.invoiceNo+1;
    
    }

  }

  invoiceform = this.builder.group({
    invoiceNo: this.builder.control('', Validators.required),
    customerId: this.builder.control('', Validators.required),
    // customerId:this.builder.control(''),
    customerName: this.builder.control(''),
    deliveryAddress: this.builder.control(''),
    remarks: this.builder.control(''),
    total: this.builder.control({ value: 0, disabled: true }),
    tax: this.builder.control({ value: 0, disabled: true }),
    netTotal: this.builder.control({ value: 0, disabled: true }),
    details: this.builder.array([])

  });

  SetEditInfo(invoiceno: any) {
    this.service.GetInvDetailbycode(invoiceno).subscribe(res => {
      this.editinvdetail = res;
      for (let i = 0; i < this.editinvdetail.length; i++) {
        this.addnewproduct();
      };
    });

    this.service.GetInvHeaderbycode(invoiceno).subscribe(res => {
      let editdata: any;
      editdata = res;
      if (editdata != null) {
        this.invoiceform.setValue({
          invoiceNo: editdata.invoiceNo, customerId: editdata.customerId,
          customerName: editdata.customerName, deliveryAddress: editdata.deliveryAddress, remarks: editdata.remarks,
          total: editdata.total, tax: editdata.tax, netTotal: editdata.netTotal, details: this.editinvdetail
        })
      }
    });
  }


  
  SaveInvoice() {
    if (this.invoiceform.valid) {
      // this.service.SaveInvoice(this.invoiceform.getRawValue()).subscribe(res => {
      //   let result: any;
      //   result = res;
      //   if (result.result == 'pass') {
      //     if(this.isedit){
      //       this.alert.success('Updated Successfully.', 'Invoice :' + result.kyValue);
      //     }else{
      //     this.alert.success('Created Successfully.', 'Invoice :' + result.kyValue);
      //     }
      //     this.router.navigate(['/']);
      //   } else {
      //     this.alert.error('Failed to save.', 'Invoice');
    //     }
    //   });
    let invoicedetail=this.invoiceform.value;
    const invoice={invoiceNo:this.invoiceid,...invoicedetail};
    this.service.invoiceheader.push(invoice)
    console.log(invoicedetail)
    this.router.navigateByUrl('listing');
    } else {
      this.alert.warning('Please enter values in all mandatory filed', 'Validation');
    }

  }

  addnewproduct() {
    this.invoicedetail = this.invoiceform.get("details") as FormArray;

    let customercode = this.invoiceform.get("customerId")?.value;
    if ((customercode != null && customercode != '')  || this.isedit) {
      this.invoicedetail.push(this.Generaterow());
    } else {
      this.alert.warning('Please select the customer', 'Validation');
    }
  }

  get invproducts() {
    return this.invoiceform.get("details") as FormArray;
  }

  Generaterow() {
    return this.builder.group({
      invoiceNo: this.builder.control(''),
      productCode: this.builder.control('', Validators.required),
      productName: this.builder.control(''),
      qty: this.builder.control(1),
      salesPrice: this.builder.control(0),
      total: this.builder.control({ value: 0, disabled: true })
    });
  }


  GetCustomers() {
    // this.service.GetCustomer().subscribe(res => {
    //   this.mastercustomer = res;
    // })
    this.mastercustomer=[{code:'data',name:"Carison limited"},{code:'data1',name:"Adobe"},{code:'data2',name:"Bluewolf"},{code:'data3',name:"Salesforce"},{code:'data4',name:"Printic"},{code:'data5',name:"Tabdaq"},{code:'data6',name:"Apple"},{code:'data7',name:"Tookopic"}]
    
  }

  
  GetProducts() {
  //   this.service.GetProducts().subscribe(res => {
  //     this.masterproduct = res;
  //   })
  this.masterproduct=[{code:'data',name:"data1"},{code:'data2',name:"data2"},{code:'data2',name:"data3"},{code:'data2',name:"data4"},{code:'data2',name:"data5"},{code:'data2',name:"data6"},{code:'data2',name:"data7"}]
  }

  customerchange() {
    let customercode = this.invoiceform.get("customerId")?.value;
    this.service.GetCustomerbycode(customercode).subscribe(res => {
      let custdata: any;
      custdata = res;
      if (custdata != null) {
        this.invoiceform.get("deliveryAddress")?.setValue(custdata.address + ',' + custdata.phoneno + ',' + custdata.email);
        this.invoiceform.get("customerName")?.setValue(custdata.name);
      }
    });
  }

  productchange(index: any) {
    this.invoicedetail = this.invoiceform.get("details") as FormArray;
    this.invoiceproduct = this.invoicedetail.at(index) as FormGroup;
    let productcode = this.invoiceproduct.get("productCode")?.value;
    this.service.GetProductbycode(productcode).subscribe(res => {
      let proddata: any;
      proddata = res;
      console.log(proddata);
      if (proddata != null) {
        this.invoiceproduct.get("productName")?.setValue(proddata.name);
        this.invoiceproduct.get("salesPrice")?.setValue(proddata.price);
        this.Itemcalculation(index);
      }
    });
  }

  Itemcalculation(index: any) {
    this.invoicedetail = this.invoiceform.get("details") as FormArray;
    this.invoiceproduct = this.invoicedetail.at(index) as FormGroup;
    let qty = this.invoiceproduct.get("qty")?.value;
    let price = this.invoiceproduct.get("salesPrice")?.value;
    let total = qty * price;
    this.invoiceproduct.get("total")?.setValue(total);

    this.summarycalculation();
  }
  Removeproduct(index: any){
    if(confirm('Do you want to remove?')){
      this.invproducts.removeAt(index);
      this.summarycalculation();

    }
  }

  summarycalculation() {
    let array = this.invoiceform.getRawValue().details;
    let sumtotal = 0
    array.forEach((x: any) => {
      sumtotal = sumtotal + x.total;
    });

    // tax calculation
    let sumtax = (7 / 100) * sumtotal;
    let nettotal = sumtotal + sumtax;

    this.invoiceform.get("total")?.setValue(sumtotal);
    this.invoiceform.get("tax")?.setValue(sumtax);
    this.invoiceform.get("netTotal")?.setValue(nettotal);
  }



}
