import { Title } from '@angular/platform-browser';
import { TokenStorageService } from './../_services/token-storage.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  form: any = {};
  ared: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  usertype: boolean = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private titleService: Title,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login');
    console.log(this.tokenStorage.getUser())
    if (this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().username;
      if (this.tokenStorage.getUser().usertype == 1){
        this.usertype = true;
      }
    }
    else{
      this.isLoggedIn = false ;
    }


  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.access_token);
        console.log(this.tokenStorage.getToken());
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().name;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  logout(): void{
    this.isLoggedIn = false;
    this.tokenStorage.signout();
    window.location.reload();
  }



}
