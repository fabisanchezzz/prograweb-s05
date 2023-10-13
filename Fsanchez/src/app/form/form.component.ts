import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
userData = {
  names:'',
  lastname:'',
  emails: '',
}; 

onSubmit(){
  console.log(this.userData);
}
}
