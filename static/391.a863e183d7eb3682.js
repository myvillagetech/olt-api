"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[391],{8391:(H,d,a)=>{a.r(d),a.d(d,{LoginPageModule:()=>G});var u=a(6895),c=a(2912),p=a(1651),g=a(4025),s=a(4006),_=a(7579),f=a(2722),o=a(4650),h=a(529),P=a(6557);let w=(()=>{class e{constructor(t,n){this.httpClient=t,this.httpDataService=n}login(t){return this.httpDataService.authPost("auth/login",t)}loginWitGoogle(t){return this.httpDataService.post("auth/googleSignIn",t)}forgotPassword(t){return this.httpDataService.authPost("auth/forgotPassword",t)}resetPassword(t){return this.httpDataService.authPost("auth/verifyOtp",t)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(h.eN),o.LFG(P.L))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=a(7185),x=a(791),Z=a(8248),m=a(8472);function T(e,i){1&e&&(o.TgZ(0,"p",23),o._uU(1," Please enter a valid email address "),o.qZA())}function L(e,i){1&e&&(o.TgZ(0,"p",23),o._uU(1," Email is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function S(e,i){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,T,2,0,"p",22),o.YNc(2,L,4,0,"p",22),o.qZA()),2&e){const t=o.oxw(2);let n,r;o.xp6(1),o.Q6J("ngIf",(null==(n=t.loginForm.get("email"))?null:n.hasError("pattern"))&&!(null!=(n=t.loginForm.get("email"))&&n.hasError("required"))),o.xp6(1),o.Q6J("ngIf",null==(r=t.loginForm.get("email"))?null:r.hasError("required"))}}function F(e,i){1&e&&(o.TgZ(0,"p",23),o._uU(1," Password is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function y(e,i){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,F,4,0,"p",22),o.qZA()),2&e){const t=o.oxw(2);let n;o.xp6(1),o.Q6J("ngIf",null==(n=t.loginForm.get("password"))?null:n.hasError("required"))}}function C(e,i){if(1&e){const t=o.EpF();o.ynx(0),o.TgZ(1,"form",8),o.NdJ("ngSubmit",function(){o.CHM(t);const r=o.oxw();return o.KtG(r.userLogin())}),o.TgZ(2,"div",9)(3,"label",10),o._uU(4,"Email"),o.qZA(),o._UZ(5,"input",11),o.YNc(6,S,3,2,"div",7),o.qZA(),o.TgZ(7,"div",9)(8,"label",12),o._uU(9,"Password:"),o.qZA(),o.TgZ(10,"div",13),o._UZ(11,"input",14),o.TgZ(12,"i",15),o.NdJ("click",function(){o.CHM(t);const r=o.oxw();return o.KtG(r.togglePasswordVisibility())}),o.qZA()(),o.YNc(13,y,2,1,"div",7),o.qZA(),o.TgZ(14,"button",16),o._uU(15,"Login"),o.qZA()(),o.TgZ(16,"div",17),o._UZ(17,"asl-google-signin-button",18),o.qZA(),o.TgZ(18,"div",19),o._uU(19,"Don't have an account? "),o.TgZ(20,"a",20),o._uU(21,"Register"),o.qZA(),o.TgZ(22,"span",21),o.NdJ("click",function(){o.CHM(t);const r=o.oxw();return o.KtG(r.forgotPasswordScreen())}),o._uU(23,"Forgot Password ?"),o.qZA()(),o.BQk()}if(2&e){const t=o.oxw();let n,r;o.xp6(1),o.Q6J("formGroup",t.loginForm),o.xp6(5),o.Q6J("ngIf",(null==(n=t.loginForm.get("email"))?null:n.invalid)&&((null==(n=t.loginForm.get("email"))?null:n.dirty)||(null==(n=t.loginForm.get("email"))?null:n.touched))),o.xp6(5),o.s9C("type",t.showPassword?"text":"password"),o.xp6(1),o.Tol(t.showPassword?"pi pi-eye-slash eye":"pi pi-eye eye"),o.xp6(1),o.Q6J("ngIf",(null==(r=t.loginForm.get("password"))?null:r.invalid)&&((null==(r=t.loginForm.get("password"))?null:r.dirty)||(null==(r=t.loginForm.get("password"))?null:r.touched))),o.xp6(1),o.Q6J("disabled",t.loginForm.invalid),o.xp6(3),o.Q6J("text","signin_with"),o.xp6(3),o.Q6J("routerLink","/register")}}function A(e,i){1&e&&(o.TgZ(0,"p",23),o._uU(1," Please enter a valid email address "),o.qZA())}function q(e,i){1&e&&(o.TgZ(0,"p",23),o._uU(1," Email is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function U(e,i){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,A,2,0,"p",22),o.YNc(2,q,4,0,"p",22),o.qZA()),2&e){const t=o.oxw(2);let n,r;o.xp6(1),o.Q6J("ngIf",(null==(n=t.forgotPasswordForm.get("email"))?null:n.hasError("pattern"))&&!(null!=(n=t.forgotPasswordForm.get("email"))&&n.hasError("required"))),o.xp6(1),o.Q6J("ngIf",null==(r=t.forgotPasswordForm.get("email"))?null:r.hasError("required"))}}function b(e,i){if(1&e){const t=o.EpF();o.ynx(0),o.TgZ(1,"form",8),o.NdJ("ngSubmit",function(){o.CHM(t);const r=o.oxw();return o.KtG(r.forgotPassword())}),o.TgZ(2,"div",9)(3,"label",10),o._uU(4,"Email"),o.qZA(),o._UZ(5,"input",11),o.YNc(6,U,3,2,"div",7),o.qZA(),o.TgZ(7,"button",16),o._uU(8," Verify Email "),o.qZA()(),o.TgZ(9,"div",19),o._uU(10,"Don't have an account? "),o.TgZ(11,"a",20),o._uU(12,"Register"),o.qZA(),o.TgZ(13,"span",21),o.NdJ("click",function(){o.CHM(t);const r=o.oxw();return o.KtG(r.LoginScreen())}),o._uU(14,"Login"),o.qZA()(),o.BQk()}if(2&e){const t=o.oxw();let n;o.xp6(1),o.Q6J("formGroup",t.forgotPasswordForm),o.xp6(5),o.Q6J("ngIf",(null==(n=t.forgotPasswordForm.get("email"))?null:n.invalid)&&((null==(n=t.forgotPasswordForm.get("email"))?null:n.dirty)||(null==(n=t.forgotPasswordForm.get("email"))?null:n.touched))),o.xp6(1),o.Q6J("disabled",t.forgotPasswordForm.invalid),o.xp6(4),o.Q6J("routerLink","/register")}}function I(e,i){1&e&&(o.TgZ(0,"p",23),o._uU(1," OTP is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function J(e,i){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,I,4,0,"p",22),o.qZA()),2&e){const t=o.oxw(2);let n;o.xp6(1),o.Q6J("ngIf",null==(n=t.changePasswordForm.get("otp"))?null:n.hasError("required"))}}function N(e,i){1&e&&(o.TgZ(0,"p",23),o._uU(1," Password is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function Q(e,i){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,N,4,0,"p",22),o.qZA()),2&e){const t=o.oxw(2);let n;o.xp6(1),o.Q6J("ngIf",null==(n=t.changePasswordForm.get("password"))?null:n.hasError("required"))}}function E(e,i){1&e&&(o.TgZ(0,"p",23),o._uU(1," Password is "),o.TgZ(2,"strong"),o._uU(3,"required"),o.qZA()())}function Y(e,i){1&e&&(o.TgZ(0,"p"),o._uU(1," Passwords do not match. "),o.qZA())}function O(e,i){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,E,4,0,"p",22),o.YNc(2,Y,2,0,"p",7),o.qZA()),2&e){const t=o.oxw(2);let n,r;o.xp6(1),o.Q6J("ngIf",null==(n=t.changePasswordForm.get("confirmPassword"))?null:n.hasError("confirmPassword")),o.xp6(1),o.Q6J("ngIf",(null==(r=t.changePasswordForm.get("password"))?null:r.value)!==(null==(r=t.changePasswordForm.get("confirmPassword"))?null:r.value)&&(null==(r=t.changePasswordForm.get("confirmPassword"))?null:r.touched))}}function M(e,i){if(1&e){const t=o.EpF();o.ynx(0),o.TgZ(1,"form",8),o.NdJ("ngSubmit",function(){o.CHM(t);const r=o.oxw();return o.KtG(r.resetPassword())}),o.TgZ(2,"div",9)(3,"label",10),o._uU(4,"OTP"),o.qZA(),o._UZ(5,"input",24),o.YNc(6,J,2,1,"div",7),o.qZA(),o.TgZ(7,"div",9)(8,"label",12),o._uU(9,"Password:"),o.qZA(),o.TgZ(10,"div",13),o._UZ(11,"input",14),o.TgZ(12,"i",15),o.NdJ("click",function(){o.CHM(t);const r=o.oxw();return o.KtG(r.togglePasswordVisibility())}),o.qZA()(),o.YNc(13,Q,2,1,"div",7),o.qZA(),o.TgZ(14,"div",9)(15,"label",12),o._uU(16,"Confirm Password:"),o.qZA(),o.TgZ(17,"div",13),o._UZ(18,"input",25),o.TgZ(19,"i",15),o.NdJ("click",function(){o.CHM(t);const r=o.oxw();return o.KtG(r.togglePasswordVisibility())}),o.qZA()(),o.YNc(20,O,3,2,"div",7),o.qZA(),o.TgZ(21,"button",16),o._uU(22," Verify Email "),o.qZA()(),o.TgZ(23,"div",19),o._uU(24,"Don't have an account? "),o.TgZ(25,"a",20),o._uU(26,"Register"),o.qZA(),o.TgZ(27,"span",21),o.NdJ("click",function(){o.CHM(t);const r=o.oxw();return o.KtG(r.LoginScreen())}),o._uU(28,"Login"),o.qZA()(),o.BQk()}if(2&e){const t=o.oxw();let n,r,l;o.xp6(1),o.Q6J("formGroup",t.changePasswordForm),o.xp6(5),o.Q6J("ngIf",(null==(n=t.changePasswordForm.get("otp"))?null:n.invalid)&&((null==(n=t.changePasswordForm.get("otp"))?null:n.dirty)||(null==(n=t.changePasswordForm.get("otp"))?null:n.touched))),o.xp6(5),o.s9C("type",t.showPassword?"text":"password"),o.xp6(1),o.Tol(t.showPassword?"pi pi-eye-slash eye":"pi pi-eye eye"),o.xp6(1),o.Q6J("ngIf",(null==(r=t.changePasswordForm.get("password"))?null:r.invalid)&&((null==(r=t.changePasswordForm.get("password"))?null:r.dirty)||(null==(r=t.changePasswordForm.get("password"))?null:r.touched))),o.xp6(5),o.s9C("type",t.showPassword?"text":"password"),o.xp6(1),o.Tol(t.showPassword?"pi pi-eye-slash eye":"pi pi-eye eye"),o.xp6(1),o.Q6J("ngIf",(null==(l=t.changePasswordForm.get("confirmPassword"))?null:l.invalid)&&((null==(l=t.changePasswordForm.get("confirmPassword"))?null:l.dirty)||(null==(l=t.changePasswordForm.get("confirmPassword"))?null:l.touched))),o.xp6(1),o.Q6J("disabled",t.changePasswordForm.invalid),o.xp6(4),o.Q6J("routerLink","/register")}}const k=[{path:"",component:(()=>{class e{constructor(t,n,r,l,R,B){this.loginPageService=t,this.toastr=n,this.storageService=r,this.socialLoginService=l,this.router=R,this.formBuilder=B,this.showPassword=!1,this.isShowForgotPasswordScreen=!1,this.isShowLoginScreen=!0,this.verifyOtpScreen=!1,this.componentDestroyed$=new _.x}ngOnInit(){this.prepareLoginForm(),this.storageService.clearLocalStorage(),this.socialLoginService.initiateGoogleAuthentication().pipe((0,f.R)(this.componentDestroyed$)).subscribe(t=>{this.loginWithGoogleApi(t)})}loginWithGoogleApi(t){this.loginPageService.loginWitGoogle(t).subscribe(n=>{this.loginHandler(n)},n=>{this.toastr.error("Invalid Login Details")})}prepareLoginForm(){this.loginForm=this.formBuilder.group({email:new s.p4("",[s.kI.required,s.kI.pattern(p.u.EmailPattern)]),password:new s.p4("",[s.kI.required])})}initilizeResetPasswordForm(){this.changePasswordForm=this.formBuilder.group({otp:["",[s.kI.required]],password:["",[s.kI.required]],confirmPassword:["",[s.kI.required]]})}initilizeforgotPasswordForm(){this.forgotPasswordForm=this.formBuilder.group({email:["",[s.kI.required,s.kI.pattern(p.u.EmailPattern)]]})}userLogin(){this.loginPageService.login(this.loginForm.value).subscribe(t=>{this.loginHandler(t.data)},t=>{this.toastr.error(t.error.message??"Invalid Login Details")})}loginHandler(t){this.toastr.success("Login Successfull"),this.storageService.setDataToLocalStorage(g.I.ACCESS_TOKEN,t.accessToken),this.storageService.setDataToLocalStorage(g.I.USER_ID,t.userId),this.storageService.setDataToLocalStorage(g.I.ROLE,t.roles[0]),"Tutor"===t.roles[0]?this.router.navigate(["tutor/dashboard"]):"Student"===t.roles[0]?this.router.navigate(["student/dashboard"]):"Admin"===t.roles[0]&&this.router.navigate(["admin/dashboard"])}ngOnDestroy(){this.componentDestroyed$.next({}),this.componentDestroyed$.complete()}togglePasswordVisibility(){this.showPassword=!this.showPassword}forgotPasswordScreen(){this.initilizeforgotPasswordForm(),this.isShowForgotPasswordScreen=!0,this.isShowLoginScreen=!1}LoginScreen(){this.isShowForgotPasswordScreen=!1,this.isShowLoginScreen=!0}forgotPassword(){this.loginPageService.forgotPassword(this.forgotPasswordForm.value).subscribe(t=>{this.verifyOtpScreen=!0,this.isShowForgotPasswordScreen=!1,this.initilizeResetPasswordForm(),this.toastr.success("Otp Sent Successfull")},t=>{this.toastr.error(t.error.message??"Invalid Email Details")})}resetPassword(){this.loginPageService.resetPassword({...this.changePasswordForm.value,...this.forgotPasswordForm.value,confirmPassword:null}).subscribe(t=>{this.verifyOtpScreen=!1,this.isShowLoginScreen=!0,this.prepareLoginForm(),this.toastr.success("Password Updated Successfull")},t=>{this.toastr.error(t.error.message??"Invalid Email Details")})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(w),o.Y36(v._W),o.Y36(x.V),o.Y36(Z.a),o.Y36(c.F0),o.Y36(s.qu))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-login-page"]],decls:14,vars:4,consts:[[1,"bg-pattern-style"],[1,"content"],[1,"account-content"],[1,"account-box"],[1,"login-right"],[1,"login-header"],["src","assets/eduffirm.jpg","width","180","height","60"],[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"form-control-label"],["type","email","name","email","id","email","formControlName","email",1,"form-control","floating"],["for","password"],[1,"password"],["id","password","formControlName","password",1,"form-control",3,"type"],[3,"click"],["type","submit",1,"btn","btn-primary","w-100","btn-lg","login-btn","mb-1",3,"disabled"],[1,"d-flex","justify-content-center"],["type","standard",3,"text"],[1,"text-center","dont-have"],[1,"me-2",3,"routerLink"],[1,"forgot",3,"click"],["class","feild-error",4,"ngIf"],[1,"feild-error"],["type","text","name","OTP","id","OTP","formControlName","otp",1,"form-control","floating"],["id","password","formControlName","confirmPassword",1,"form-control",3,"type"]],template:function(t,n){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h3"),o._uU(7),o.qZA(),o.TgZ(8,"span")(9,"a"),o._UZ(10,"img",6),o.qZA()()(),o.YNc(11,C,24,9,"ng-container",7),o.YNc(12,b,15,4,"ng-container",7),o.YNc(13,M,29,12,"ng-container",7),o.qZA()()()()()),2&t&&(o.xp6(7),o.hij("",n.isShowLoginScreen?"Login":"Forgot Password"," "),o.xp6(4),o.Q6J("ngIf",n.isShowLoginScreen),o.xp6(1),o.Q6J("ngIf",n.isShowForgotPasswordScreen),o.xp6(1),o.Q6J("ngIf",n.verifyOtpScreen))},dependencies:[u.O5,c.yS,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,m.TI],styles:[".feild-error[_ngcontent-%COMP%]{color:#eb8989}.password[_ngcontent-%COMP%]{position:relative}.eye[_ngcontent-%COMP%]{position:absolute;right:10px;top:19px}.login-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.login-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{margin-right:-17px;width:-moz-fit-content;width:fit-content}.forgot[_ngcontent-%COMP%]{border-bottom:1px dashed;color:#009da6;cursor:pointer}"]}),e})()}];let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[c.Bz.forChild(k),c.Bz]}),e})(),G=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.ez,D,s.u5,s.UX,m.RB]}),e})()}}]);