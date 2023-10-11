import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {employe}  from '../day13/employe'
import {Observable, throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(public http:HttpClient) { }
 
   public Url="../../assets/emp.json"

  getemployename():Observable<employe[]>{
    return this.http.get<employe[]>(this.Url)
    .pipe(catchError(this.myError))
  }

  myError(error:HttpErrorResponse){
          return throwError(()=>error.message)
  }
}

