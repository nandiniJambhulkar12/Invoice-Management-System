// import { JsonpInterceptor } from '@angular/common/http';
// import { Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';


// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

//   isLoginView:boolean=true;
//   userRegisterObj:any ={
//     userName:'',
//     password:'',
//     emailId:''

//   }

//   userLogin: any={
//     userName:'',
//     password:'',
//   }

//   router = inject(this.Router);


//   onRegister(){
//     debugger;
//     const isLocalData=localStorage.getItem("angular18Local");
//     if(isLocalData!=null){
//       const localArray=JSON.parse(isLocalData);
//       localArray.push(this.userRegisterObj);
//       localStorage.setItem("angular18local",JSON.stringify(localArray))
//     }else{
//       const localArray=[];
//       localArray.push(this.userRegisterObj);
//       localStorage.setItem("angular18local",JSON.stringify(localArray))
//     }
//     alert("Registration Successful")
//   }
//   onLogin(){
//     debugger;
//     const isLocalData=localStorage.getItem("angular18Local");
//     if(isLocalData!=null){
//       const users =JSON.parse(isLocalData);


//       const isUserFound=users.find((m:any)=>m.userName==this.userLogin.userName&& m.password==this.userLogin.password);
//       if(isUserFound!=undefined){
//         this.router.navigateByUrl('dashboard')
//       }else{
//         alert("user name or password is wrong ")
//       }
//     }
//   }

// }

import { JsonpInterceptor } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected styleUrls
})
export class LoginComponent {

  isLoginView: boolean = true;
  userRegisterObj: any = {
    userName: '',
    password: '',
    emailId: ''
  };

  userLogin: any = {
    userName: '',
    password: ''
  };

  // Inject Router via constructor
  constructor(private router: Router) { }

  onRegister() {
    if(this.userRegisterObj.userName && this.userRegisterObj.password){
      const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray)); // Fixed key name
      this.router.navigateByUrl('listing');
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray)); // Fixed key name
      this.router.navigateByUrl('listing');
    }
    alert("Registration Successful");
      
    }else{
      alert("please fill username and password")


    }
    
  }

  onLogin() {
    debugger;
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const users = JSON.parse(isLocalData);

      const isUserFound = users.find((m: any) => m.userName === this.userLogin.userName && m.password === this.userLogin.password);
      if (isUserFound !== undefined) {
        this.router.navigateByUrl('listing'); // Correct usage
      } else {
        alert("Username or password is wrong");
      }
    }
  }
}
