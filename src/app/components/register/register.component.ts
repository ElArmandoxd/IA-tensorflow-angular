import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmitReg(data){
   axios.post('http://localhost:3000/register', data)
   .then(response =>{
    console.log(response.data);
    this.router.navigateByUrl('/dashboard');
   })
   .catch(error =>{
     console.log(error);
   })
  }
}
