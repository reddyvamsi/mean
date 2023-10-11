import { Component,OnInit} from '@angular/core';
import {EmpserviceService } from  '../employeservice.service'

@Component({
  selector: 'app-empnames',
  templateUrl: './empnames.component.html',
  styleUrls: ['./empnames.component.css']
})
export class EmpnamesComponent implements OnInit  {
  public employessname:any=[];
  public myErr:string=""

   constructor(public empservice:EmpserviceService){}
 
   ngOnInit():void{
    console.log("vamsikrishna")
    this.empservice.getemployename()
    .subscribe(data=>{
      this.employessname=data,
        (err:any)=>{
        this.myErr=err
      }
     
    })
   
   }
}

