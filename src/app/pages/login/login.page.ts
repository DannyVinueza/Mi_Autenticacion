import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormsModule, 
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import{
 IonicModule,
 ToastController,
 isPlatform,
 LoadingController,
 AlertController
}from '@ionic/angular';


import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
