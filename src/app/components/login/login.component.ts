import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';
import axios from 'axios';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(data){
    axios.post('http://localhost:3000/login', data)
   .then(response =>{
    console.log(response.data);
    this.router.navigateByUrl('/dashboard');
   })
   .catch(error =>{
     console.log(error);
   })
 }
}
