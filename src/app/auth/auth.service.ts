import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


export interface AuthResponseType{

    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string ;  
    registered?: boolean;

}

@Injectable({providedIn: 'root'})
export class AuthService{

    constructor(private http: HttpClient ){


    }

    signup( email:string, password: string){
      return  this.http.post<AuthResponseType>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7aQzH0MFqw34mOxFf_UiJw5OTyjJ7sNc',
        {
            email: email,
            password:password,
            returnSecureToken: true

        }
        ).pipe( catchError( errorRes=>
            { let   errorMsg='An Error Occured!';
        if(!errorRes.error || errorRes.error.error){
            return throwError(errorMsg);
        }
        switch(errorRes.error.error.message){

            case 'EMAIL_EXISTS':
                errorMsg='This Emailexixts already';
                break;
                case 'EMAIL_NOT_FOUND' :
                    errorMsg='This Email not found';
                break;
                case 'INVALID_PASSWORD':
                    errorMsg='This password id invalid';


        }

        return throwError(errorMsg);
    }
        ));


        


    }

    login( email:string, password: string)
    {
        return  this.http.post<AuthResponseType>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7aQzH0MFqw34mOxFf_UiJw5OTyjJ7sNc',
        {
            email: email,
            password:password,
            returnSecureToken: true

        }).pipe( catchError(this.errorhandle
    
    ));
    }


    private errorhandle(errorRes: HttpErrorResponse){
    
      let   errorMsg='An Error Occured!';
        if(errorRes.error || !errorRes.error.error){
            return throwError(errorMsg);
        }
        switch(errorRes.error.error.message){

            case 'EMAIL_EXISTS':
                errorMsg='This Emailexixts already';
                break;
                case 'EMAIL_NOT_FOUND' :
                    errorMsg='This Email not found';
                break;
                case 'INVALID_PASSWORD':
                    errorMsg='This password id invalid';


        }

        return throwError(errorMsg);
    }

    }



    


