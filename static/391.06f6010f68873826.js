"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[391],{8391:(H,d,a)=>{a.r(d),a.d(d,{LoginPageModule:()=>G});var u=a(6895),c=a(2912),p=a(1651),g=a(4025),s=a(4006),_=a(7579),f=a(2722),o=a(4650),h=a(529),P=a(6557);let w=(()=>{class t{constructor(e,n){this.httpClient=e,this.httpDataService=n}login(e){return this.httpDataService.authPost("auth/login",e)}loginWitGoogle(e){return this.httpDataService.post("auth/googleSignIn",e)}forgotPassword(e){return this.httpDataService.post("auth/forgotPassword",e)}resetPassword(e){return this.httpDataService.post("auth/verifyOtp",e)}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(h.eN),o.LFG(P.L))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=a(7185),x=a(791),Z=a(8248),m=a(8472);function T(t,i){1&t&&(o.TgZ(0,"p",23),o._uU(1," Please enter a valid email address "),o.qZA())}function L(t,i){1&t&&(o.TgZ(0,"p",23),o._uU(1," Email is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function S(t,i){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,T,2,0,"p",22),o.YNc(2,L,4,0,"p",22),o.qZA()),2&t){const e=o.oxw(2);let n,r;o.xp6(1),o.Q6J("ngIf",(null==(n=e.loginForm.get("email"))?null:n.hasError("pattern"))&&!(null!=(n=e.loginForm.get("email"))&&n.hasError("required"))),o.xp6(1),o.Q6J("ngIf",null==(r=e.loginForm.get("email"))?null:r.hasError("required"))}}function F(t,i){1&t&&(o.TgZ(0,"p",23),o._uU(1," Password is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function y(t,i){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,F,4,0,"p",22),o.qZA()),2&t){const e=o.oxw(2);let n;o.xp6(1),o.Q6J("ngIf",null==(n=e.loginForm.get("password"))?null:n.hasError("required"))}}function C(t,i){if(1&t){const e=o.EpF();o.ynx(0),o.TgZ(1,"form",8),o.NdJ("ngSubmit",function(){o.CHM(e);const r=o.oxw();return o.KtG(r.userLogin())}),o.TgZ(2,"div",9)(3,"label",10),o._uU(4,"Email"),o.qZA(),o._UZ(5,"input",11),o.YNc(6,S,3,2,"div",7),o.qZA(),o.TgZ(7,"div",9)(8,"label",12),o._uU(9,"Password:"),o.qZA(),o.TgZ(10,"div",13),o._UZ(11,"input",14),o.TgZ(12,"i",15),o.NdJ("click",function(){o.CHM(e);const r=o.oxw();return o.KtG(r.togglePasswordVisibility())}),o.qZA()(),o.YNc(13,y,2,1,"div",7),o.qZA(),o.TgZ(14,"button",16),o._uU(15,"Login"),o.qZA()(),o.TgZ(16,"div",17),o._UZ(17,"asl-google-signin-button",18),o.qZA(),o.TgZ(18,"div",19),o._uU(19,"Don't have an account? "),o.TgZ(20,"a",20),o._uU(21,"Register"),o.qZA(),o.TgZ(22,"span",21),o.NdJ("click",function(){o.CHM(e);const r=o.oxw();return o.KtG(r.forgotPasswordScreen())}),o._uU(23,"Forgot Password ?"),o.qZA()(),o.BQk()}if(2&t){const e=o.oxw();let n,r;o.xp6(1),o.Q6J("formGroup",e.loginForm),o.xp6(5),o.Q6J("ngIf",(null==(n=e.loginForm.get("email"))?null:n.invalid)&&((null==(n=e.loginForm.get("email"))?null:n.dirty)||(null==(n=e.loginForm.get("email"))?null:n.touched))),o.xp6(5),o.s9C("type",e.showPassword?"text":"password"),o.xp6(1),o.Tol(e.showPassword?"pi pi-eye-slash eye":"pi pi-eye eye"),o.xp6(1),o.Q6J("ngIf",(null==(r=e.loginForm.get("password"))?null:r.invalid)&&((null==(r=e.loginForm.get("password"))?null:r.dirty)||(null==(r=e.loginForm.get("password"))?null:r.touched))),o.xp6(1),o.Q6J("disabled",e.loginForm.invalid),o.xp6(3),o.Q6J("text","signin_with"),o.xp6(3),o.Q6J("routerLink","/register")}}function A(t,i){1&t&&(o.TgZ(0,"p",23),o._uU(1," Please enter a valid email address "),o.qZA())}function q(t,i){1&t&&(o.TgZ(0,"p",23),o._uU(1," Email is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function U(t,i){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,A,2,0,"p",22),o.YNc(2,q,4,0,"p",22),o.qZA()),2&t){const e=o.oxw(2);let n,r;o.xp6(1),o.Q6J("ngIf",(null==(n=e.forgotPasswordForm.get("email"))?null:n.hasError("pattern"))&&!(null!=(n=e.forgotPasswordForm.get("email"))&&n.hasError("required"))),o.xp6(1),o.Q6J("ngIf",null==(r=e.forgotPasswordForm.get("email"))?null:r.hasError("required"))}}function b(t,i){if(1&t){const e=o.EpF();o.ynx(0),o.TgZ(1,"form",8),o.NdJ("ngSubmit",function(){o.CHM(e);const r=o.oxw();return o.KtG(r.forgotPassword())}),o.TgZ(2,"div",9)(3,"label",10),o._uU(4,"Email"),o.qZA(),o._UZ(5,"input",11),o.YNc(6,U,3,2,"div",7),o.qZA(),o.TgZ(7,"button",16),o._uU(8," Verify Email "),o.qZA()(),o.TgZ(9,"div",19),o._uU(10,"Don't have an account? "),o.TgZ(11,"a",20),o._uU(12,"Register"),o.qZA(),o.TgZ(13,"span",21),o.NdJ("click",function(){o.CHM(e);const r=o.oxw();return o.KtG(r.LoginScreen())}),o._uU(14,"Login"),o.qZA()(),o.BQk()}if(2&t){const e=o.oxw();let n;o.xp6(1),o.Q6J("formGroup",e.forgotPasswordForm),o.xp6(5),o.Q6J("ngIf",(null==(n=e.forgotPasswordForm.get("email"))?null:n.invalid)&&((null==(n=e.forgotPasswordForm.get("email"))?null:n.dirty)||(null==(n=e.forgotPasswordForm.get("email"))?null:n.touched))),o.xp6(1),o.Q6J("disabled",e.forgotPasswordForm.invalid),o.xp6(4),o.Q6J("routerLink","/register")}}function I(t,i){1&t&&(o.TgZ(0,"p",23),o._uU(1," OTP is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function J(t,i){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,I,4,0,"p",22),o.qZA()),2&t){const e=o.oxw(2);let n;o.xp6(1),o.Q6J("ngIf",null==(n=e.changePasswordForm.get("otp"))?null:n.hasError("required"))}}function N(t,i){1&t&&(o.TgZ(0,"p",23),o._uU(1," Password is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function Q(t,i){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,N,4,0,"p",22),o.qZA()),2&t){const e=o.oxw(2);let n;o.xp6(1),o.Q6J("ngIf",null==(n=e.changePasswordForm.get("password"))?null:n.hasError("required"))}}function E(t,i){1&t&&(o.TgZ(0,"p",23),o._uU(1," Password is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function Y(t,i){1&t&&(o.TgZ(0,"p"),o._uU(1," Passwords do not match. "),o.qZA())}function O(t,i){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,E,4,0,"p",22),o.YNc(2,Y,2,0,"p",7),o.qZA()),2&t){const e=o.oxw(2);let n,r;o.xp6(1),o.Q6J("ngIf",null==(n=e.changePasswordForm.get("confirmPassword"))?null:n.hasError("confirmPassword")),o.xp6(1),o.Q6J("ngIf",(null==(r=e.changePasswordForm.get("password"))?null:r.value)!==(null==(r=e.changePasswordForm.get("confirmPassword"))?null:r.value)&&(null==(r=e.changePasswordForm.get("confirmPassword"))?null:r.touched))}}function M(t,i){if(1&t){const e=o.EpF();o.ynx(0),o.TgZ(1,"form",8),o.NdJ("ngSubmit",function(){o.CHM(e);const r=o.oxw();return o.KtG(r.resetPassword())}),o.TgZ(2,"div",9)(3,"label",10),o._uU(4,"OTP"),o.qZA(),o._UZ(5,"input",24),o.YNc(6,J,2,1,"div",7),o.qZA(),o.TgZ(7,"div",9)(8,"label",12),o._uU(9,"Password:"),o.qZA(),o.TgZ(10,"div",13),o._UZ(11,"input",14),o.TgZ(12,"i",15),o.NdJ("click",function(){o.CHM(e);const r=o.oxw();return o.KtG(r.togglePasswordVisibility())}),o.qZA()(),o.YNc(13,Q,2,1,"div",7),o.qZA(),o.TgZ(14,"div",9)(15,"label",12),o._uU(16,"Confirm Password:"),o.qZA(),o.TgZ(17,"div",13),o._UZ(18,"input",25),o.TgZ(19,"i",15),o.NdJ("click",function(){o.CHM(e);const r=o.oxw();return o.KtG(r.togglePasswordVisibility())}),o.qZA()(),o.YNc(20,O,3,2,"div",7),o.qZA(),o.TgZ(21,"button",16),o._uU(22," Verify Email "),o.qZA()(),o.TgZ(23,"div",19),o._uU(24,"Don't have an account? "),o.TgZ(25,"a",20),o._uU(26,"Register"),o.qZA(),o.TgZ(27,"span",21),o.NdJ("click",function(){o.CHM(e);const r=o.oxw();return o.KtG(r.LoginScreen())}),o._uU(28,"Login"),o.qZA()(),o.BQk()}if(2&t){const e=o.oxw();let n,r,l;o.xp6(1),o.Q6J("formGroup",e.changePasswordForm),o.xp6(5),o.Q6J("ngIf",(null==(n=e.changePasswordForm.get("otp"))?null:n.invalid)&&((null==(n=e.changePasswordForm.get("otp"))?null:n.dirty)||(null==(n=e.changePasswordForm.get("otp"))?null:n.touched))),o.xp6(5),o.s9C("type",e.showPassword?"text":"password"),o.xp6(1),o.Tol(e.showPassword?"pi pi-eye-slash eye":"pi pi-eye eye"),o.xp6(1),o.Q6J("ngIf",(null==(r=e.changePasswordForm.get("password"))?null:r.invalid)&&((null==(r=e.changePasswordForm.get("password"))?null:r.dirty)||(null==(r=e.changePasswordForm.get("password"))?null:r.touched))),o.xp6(5),o.s9C("type",e.showPassword?"text":"password"),o.xp6(1),o.Tol(e.showPassword?"pi pi-eye-slash eye":"pi pi-eye eye"),o.xp6(1),o.Q6J("ngIf",(null==(l=e.changePasswordForm.get("confirmPassword"))?null:l.invalid)&&((null==(l=e.changePasswordForm.get("confirmPassword"))?null:l.dirty)||(null==(l=e.changePasswordForm.get("confirmPassword"))?null:l.touched))),o.xp6(1),o.Q6J("disabled",e.changePasswordForm.invalid),o.xp6(4),o.Q6J("routerLink","/register")}}const k=[{path:"",component:(()=>{class t{constructor(e,n,r,l,R,B){this.loginPageService=e,this.toastr=n,this.storageService=r,this.socialLoginService=l,this.router=R,this.formBuilder=B,this.showPassword=!1,this.isShowForgotPasswordScreen=!1,this.isShowLoginScreen=!0,this.verifyOtpScreen=!1,this.componentDestroyed$=new _.x}ngOnInit(){this.prepareLoginForm(),this.storageService.clearLocalStorage(),this.socialLoginService.initiateGoogleAuthentication().pipe((0,f.R)(this.componentDestroyed$)).subscribe(e=>{this.loginWithGoogleApi(e)})}loginWithGoogleApi(e){this.loginPageService.loginWitGoogle(e).subscribe(n=>{this.loginHandler(n)},n=>{this.toastr.error("Invalid Login Details")})}prepareLoginForm(){this.loginForm=this.formBuilder.group({email:new s.p4("",[s.kI.required,s.kI.pattern(p.u.EmailPattern)]),password:new s.p4("",[s.kI.required])})}initilizeResetPasswordForm(){this.changePasswordForm=this.formBuilder.group({otp:[null,[s.kI.required]],password:["",[s.kI.required]],confirmPassword:["",[s.kI.required]]})}initilizeforgotPasswordForm(){this.forgotPasswordForm=this.formBuilder.group({email:["",[s.kI.required,s.kI.pattern(p.u.EmailPattern)]]})}userLogin(){this.loginPageService.login(this.loginForm.value).subscribe(e=>{this.loginHandler(e.data)},e=>{this.toastr.error(e.error.message??"Invalid Login Details")})}loginHandler(e){this.toastr.success("Login Successfull"),this.storageService.setDataToLocalStorage(g.I.ACCESS_TOKEN,e.accessToken),this.storageService.setDataToLocalStorage(g.I.USER_ID,e.userId),this.storageService.setDataToLocalStorage(g.I.ROLE,e.roles[0]),"Tutor"===e.roles[0]?this.router.navigate(["tutor/dashboard"]):"Student"===e.roles[0]?this.router.navigate(["student/dashboard"]):"Admin"===e.roles[0]&&this.router.navigate(["admin/dashboard"])}ngOnDestroy(){this.componentDestroyed$.next({}),this.componentDestroyed$.complete()}togglePasswordVisibility(){this.showPassword=!this.showPassword}forgotPasswordScreen(){this.initilizeforgotPasswordForm(),this.isShowForgotPasswordScreen=!0,this.isShowLoginScreen=!1}LoginScreen(){this.isShowForgotPasswordScreen=!1,this.isShowLoginScreen=!0}forgotPassword(){this.loginPageService.forgotPassword(this.forgotPasswordForm.value).subscribe(e=>{this.verifyOtpScreen=!0,this.isShowForgotPasswordScreen=!1,this.initilizeResetPasswordForm(),this.toastr.success("Otp Sent Successfull")},e=>{this.toastr.error(e.error.message??"Invalid Email Details")})}resetPassword(){this.loginPageService.resetPassword({...this.changePasswordForm.value,...this.forgotPasswordForm.value,confirmPassword:null}).subscribe(e=>{this.verifyOtpScreen=!1,this.isShowLoginScreen=!0,this.prepareLoginForm(),this.toastr.success("Password Updated Successfull")},e=>{this.toastr.error(e.error.message??"Invalid Email Details")})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(w),o.Y36(v._W),o.Y36(x.V),o.Y36(Z.a),o.Y36(c.F0),o.Y36(s.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login-page"]],decls:14,vars:4,consts:[[1,"bg-pattern-style"],[1,"content"],[1,"account-content"],[1,"account-box"],[1,"login-right"],[1,"login-header"],["src","assets/eduffirm.jpg","width","180","height","60"],[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"form-control-label"],["type","email","name","email","id","email","formControlName","email",1,"form-control","floating"],["for","password"],[1,"password"],["id","password","formControlName","password",1,"form-control",3,"type"],[3,"click"],["type","submit",1,"btn","btn-primary","w-100","btn-lg","login-btn","mb-1",3,"disabled"],[1,"d-flex","justify-content-center"],["type","standard",3,"text"],[1,"text-center","dont-have"],[1,"me-2",3,"routerLink"],[1,"forgot",3,"click"],["class","feild-error",4,"ngIf"],[1,"feild-error"],["type","number","name","OTP","id","OTP","formControlName","otp",1,"form-control","floating"],["id","password","formControlName","confirmPassword",1,"form-control",3,"type"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h3"),o._uU(7),o.qZA(),o.TgZ(8,"span")(9,"a"),o._UZ(10,"img",6),o.qZA()()(),o.YNc(11,C,24,9,"ng-container",7),o.YNc(12,b,15,4,"ng-container",7),o.YNc(13,M,29,12,"ng-container",7),o.qZA()()()()()),2&e&&(o.xp6(7),o.hij("",n.isShowLoginScreen?"Login":"Forgot Password"," "),o.xp6(4),o.Q6J("ngIf",n.isShowLoginScreen),o.xp6(1),o.Q6J("ngIf",n.isShowForgotPasswordScreen),o.xp6(1),o.Q6J("ngIf",n.verifyOtpScreen))},dependencies:[u.O5,c.yS,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u,m.TI],styles:[".feild-error[_ngcontent-%COMP%]{color:#eb8989}.password[_ngcontent-%COMP%]{position:relative}.eye[_ngcontent-%COMP%]{position:absolute;right:10px;top:19px}.login-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.login-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{margin-right:-17px;width:-moz-fit-content;width:fit-content}.forgot[_ngcontent-%COMP%]{border-bottom:1px dashed;color:#009da6;cursor:pointer}"]}),t})()}];let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.Bz.forChild(k),c.Bz]}),t})(),G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.ez,D,s.u5,s.UX,m.RB]}),t})()}}]);