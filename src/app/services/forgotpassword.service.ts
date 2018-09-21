import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Globals } from '.././globals';
import { Router } from '@angular/router';

@Injectable()
export class ForgotpasswordService {

  constructor( private http: Http,private globals: Globals,private router: Router) { }
  
  forgot(fgpassEntity)
  { debugger
   let promise = new Promise((resolve, reject) => {
     this.http.post(this.globals.baseAPIUrl + 'Forgotpassword/forgot', fgpassEntity, this.globals.headerpath)
       .toPromise()
       .then(
         res => { // Success
           resolve(res.json());
         },
         msg => { // Error
       reject(msg);
       this.globals.isLoading = false;
       this.router.navigate(['/pagenotfound']);
         }
       );
   });		
   return promise;
   }

}
