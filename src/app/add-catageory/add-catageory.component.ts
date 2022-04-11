import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Catageory } from '../Models/Catagery';
import { AdminopService } from '../Services/adminop.service';

@Component({
  selector: 'app-add-catageory',
  templateUrl: './add-catageory.component.html',
  styleUrls: ['./add-catageory.component.css']
})
export class AddCatageoryComponent implements OnInit {
  addform: FormGroup;
  ctg: Catageory;
  tempImgUrl: any = '';

  constructor(private fb: FormBuilder,private admin : AdminopService) { }

  ngOnInit(){
    this.addform = this.fb.group({
      Name: [''],
      Description: [''],
      Image: ['']
    })
  }
  onSelectFile(event) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (ev: any) => {
      this.tempImgUrl = reader.result;
    }
    
  }
  
  addctg() {
    this.ctg = this.addform.value;
    this.ctg.image = this.tempImgUrl;
    this.admin.addcatagery(this.ctg).subscribe(result=>{
      if (result) {
        alert('Catagery Added successfuly.. ');
      }
    })
  }

}
