import { SearchData } from './../Model/search-data.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginPara } from '../Model/login-para.module';
import { MCode } from '../Model/mcode.module';
import { map } from 'rxjs/operators';
import { Mv_Staff } from '../Model/mv-staff.module';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(loginPara: LoginPara): Observable<any> {
    const url = 'https://wra.digitw.com/Practice_StaffListAPI/Auth/Login';
    return this.http.post(url, loginPara);
  }

  getJobTitles(): Observable<MCode[]> {
    const url = 'https://wra.digitw.com/Practice_StaffListAPI/Staff/GetJobTitleList';
    return this.http.get<{ Data: { JobTitleList: MCode[] } }>(url).pipe(
      map(response => response.Data.JobTitleList)
    );
  }

  searchStaff(searchData: SearchData): Observable<Mv_Staff[]> {
    const url = 'https://wra.digitw.com/Practice_StaffListAPI/Staff/GetStaffList';
    return this.http.post<{ Data: { StaffList: Mv_Staff[] } }>(url, searchData).pipe(
      map(response => response.Data.StaffList)
    );
  }
}
