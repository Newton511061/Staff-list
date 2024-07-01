import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginPara } from '../Model/login-para.module';
import { HttpServiceService } from '../Service/http-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {

  loginPara: LoginPara = {
    Account: '',
    Password: '',
  };

  constructor(private httpService: HttpServiceService, private router: Router) {}

  onSubmit() {
    this.httpService.login(this.loginPara).subscribe(
      (response) => {
        console.log('登入成功:', response);
        this.router.navigate(['/staff']);
      },
      (error) => {
        console.error('登入失敗:', error);
      }
    );
  }
}
