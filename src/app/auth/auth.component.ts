import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseType } from './auth.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
 // styleUrls: ['./app.component.css']
})
export class AuthComponent {


    isLoginmode=true;
    isloading=false;
    error:string =null;

constructor(private authservice: AuthService){

}
    toswithmode(){

        this.isLoginmode=!this.isLoginmode
    }
    onsubmit(authform: NgForm){
        if(!authform.valid){
            return;

        }
          const email=authform.value.email;
          const password= authform.value.password;

     let   authobservable = new Observable<AuthResponseType>();

         
        this.isloading=true;

          if(this.isLoginmode){
            authobservable=    this.authservice.login(email, password);
         

          }
          else{
            authobservable=    this.authservice.signup(email, password);

        
          }

          authobservable.subscribe(

            response=>{
                console.log(response)
                this.isloading=false;
            },
            errorMsg=>
            {
                console.log(errorMsg);
                this.error=errorMsg;
                this.isloading=false;
                
            }


        )
        authform.reset();


    }

}