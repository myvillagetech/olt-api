"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[62],{7914:(_,p,i)=>{i.d(p,{D:()=>u,a:()=>r});const r=["1:00","1:30","2:00","2:30","3:00","3:30","4:00","4:30","5:00","5:30","6:00","6:30","7:00","7:30","8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30","00:00","00:30"],u=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},5622:(_,p,i)=>{i.d(p,{q:()=>r,s:()=>u});var r=(()=>{return(d=r||(r={})).REQUESTED="REQUESTED",d.ACCEPTED="ACCEPTED",d.REJECTED="REJECTED",d.CANCELLED="CANCELLED",d.COMPLETED="COMPLETED",d.CONFIRMED="CONFIRMED",r;var d})();const u=[{value:"REQUESTED",label:"Requested"},{value:"ACCEPTED",label:"Accepted"},{value:"REJECTED",label:"Rejected"},{value:"CANCELLED",label:"Cancelled"},{value:"COMPLETED",label:"Completed"},{value:"CONFIRMED",label:"Confirmed"}]},6864:(_,p,i)=>{i.d(p,{F:()=>d});var r=i(4650),u=i(6557);let d=(()=>{class m{constructor(c){this.httpDataService=c}getAllCourses(){return this.httpDataService.get("course")}getSchedulesBySearchByCriteria(c){return this.httpDataService.post("schedule/searchByCriteria",c)}updateSchedule(c,t){return this.httpDataService.put(`schedule/${c}`,t)}getSchedulesByScheduleId(c){return console.log(c),this.httpDataService.get(`schedule/${c}`)}updateAcceptStatus(c){return this.httpDataService.post("schedule/acceptSchdule",c)}}return m.\u0275fac=function(c){return new(c||m)(r.LFG(u.L))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},7702:(_,p,i)=>{i.r(p),i.d(p,{PayoutsModule:()=>L});var r=i(6895),u=i(2912),d=i(4343),m=i(7914),T=i(5622),c=i(3252),t=i(4650),C=i(6557);let v=(()=>{class o{constructor(e){this.httpdataService=e}getUnpaidTutors(){return this.httpdataService.get("payments/getAllUnpaidTutors")}getUnpaidTutorDetailsById(e){return this.httpdataService.get(`payments/getAllUnpaidSchedulesByTutorid/${e}`)}getTutorProfilebyTutorId(e){return this.httpdataService.get(`tutorProfile/userId/${e}`)}postTutorPayOutDetails(e){return this.httpdataService.post("payments/updateTutorPayout",e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(C.L))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var D=i(9886),x=i(7185),y=i(8396),Z=i(805),f=i(5593),A=i(1740),g=i(4006),P=i(1989);function b(o,n){if(1&o&&(t.TgZ(0,"div")(1,"div",30)(2,"div",20)(3,"div",31)(4,"p")(5,"span",22),t._uU(6,"Name : "),t.qZA(),t._uU(7),t.qZA()(),t.TgZ(8,"div",32)(9,"div")(10,"p")(11,"span",22),t._uU(12,"Email : "),t.qZA(),t._uU(13),t.qZA()()()(),t._UZ(14,"hr"),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(7),t.AsE("",e.tutorProfileDetails.firstName," ",e.tutorProfileDetails.lastName," "),t.xp6(6),t.hij("",e.tutorProfileDetails.email," ")}}function U(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"h4"),t._uU(3,"Tutor payment details"),t.qZA()(),t.YNc(4,b,15,3,"div",18),t.TgZ(5,"div",19)(6,"h4"),t._uU(7,"Bank Details"),t.qZA()()(),t.TgZ(8,"div",13)(9,"div",20)(10,"div",21)(11,"p")(12,"span",22),t._uU(13,"Bank Name : "),t.qZA(),t._uU(14),t.qZA()(),t.TgZ(15,"div",21)(16,"p")(17,"span",22),t._uU(18,"Amount : "),t.qZA(),t._uU(19),t.qZA()()(),t.TgZ(20,"div",20)(21,"div",23)(22,"div")(23,"p")(24,"span",22),t._uU(25,"Bank Account Number : "),t.qZA(),t._uU(26),t.qZA()()(),t.TgZ(27,"div",24)(28,"div",25)(29,"label",26),t._uU(30,"TransactionRef Id :"),t.qZA(),t.TgZ(31,"input",27),t.NdJ("ngModelChange",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.transactionRefId=s)}),t.qZA()()()(),t.TgZ(32,"div",28)(33,"button",29),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.completePayment())}),t._uU(34,"complete Payment"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.tutorProfileDetails),t.xp6(10),t.hij("",e.tutorBankDetails[0].bankerName," "),t.xp6(5),t.hij("",e.totalAmountTobePaid," "),t.xp6(7),t.hij("",e.tutorBankDetails[0].accountNumber," "),t.xp6(5),t.Q6J("ngModel",e.transactionRefId),t.xp6(2),t.Q6J("disabled",""==e.transactionRefId)}}function q(o,n){1&o&&(t.TgZ(0,"tr"),t._UZ(1,"th",33),t.TgZ(2,"th"),t._uU(3,"Student"),t.qZA(),t.TgZ(4,"th"),t._uU(5,"Email"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Amount"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Actions"),t.qZA()())}function E(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"tr",34)(1,"td")(2,"p-checkbox",35),t.NdJ("ngModelChange",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.selectedPayouts=s)})("onChange",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onSelection())}),t.qZA()(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"button",36),t.NdJ("click",function(){const l=t.CHM(e).$implicit,h=t.oxw();return t.KtG(h.navigateToDetailsPage(l._id))}),t._uU(11,"View Details "),t._UZ(12,"i",37),t.qZA()()()}if(2&o){const e=n.$implicit,a=t.oxw();t.xp6(2),t.Q6J("value",e)("ngModel",a.selectedPayouts),t.xp6(2),t.AsE("",e.student.firstName," ",e.student.lastName,""),t.xp6(2),t.hij(" ",e.student.email," "),t.xp6(2),t.hij(" ",e.amount," ")}}function I(o,n){1&o&&(t.TgZ(0,"p",44),t._uU(1,"Bank details are not available! Please ask tutor to update bank details!!"),t.qZA())}function M(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"p")(2,"span",22),t._uU(3,"Tutor : "),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"p")(6,"span",22),t._uU(7,"Email : "),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"p")(10,"span",22),t._uU(11,"Total Amount : "),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14,"Service Fee (%)"),t.qZA(),t.TgZ(15,"div",38)(16,"input",39),t.NdJ("ngModelChange",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.serviceFee=s)}),t.qZA(),t.TgZ(17,"button",40),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.totalAmountToBePaidCalculator())}),t.qZA()(),t._UZ(18,"hr"),t.TgZ(19,"div")(20,"h4",22),t._uU(21,"Total Amount Be Paid"),t.qZA(),t.TgZ(22,"h1",41),t._uU(23),t.qZA(),t.TgZ(24,"button",42),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(),l=t.MAs(15);return t.KtG(s.navigateToPayment(l))}),t.qZA(),t.YNc(25,I,2,0,"p",43),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(4),t.AsE("",e.tutorProfileDetails.firstName," ",e.tutorProfileDetails.lastName," "),t.xp6(4),t.hij("",e.tutorProfileDetails.email," "),t.xp6(4),t.Oqu(e.totalAmount),t.xp6(4),t.Q6J("ngModel",e.serviceFee),t.xp6(7),t.hij("$ ",e.totalAmountTobePaid,""),t.xp6(1),t.Q6J("disabled",0===e.selectedPayouts.length||!(null!=e.tutorProfileDetails&&e.tutorProfileDetails.bankAccountDetails)||0===e.tutorProfileDetails.bankAccountDetails.length),t.xp6(1),t.Q6J("ngIf",!(null!=e.tutorProfileDetails&&e.tutorProfileDetails.bankAccountDetails)||0===e.tutorProfileDetails.bankAccountDetails.length)}}let N=(()=>{class o{constructor(e,a,s,l,h){this.activatedRoute=e,this.payoutsService=a,this.router=s,this.modalService=l,this.toastr=h,this.tutorId="",this.payoutDetails=[],this.selectedPayouts=[],this.totalAmount=0,this.serviceFee=20,this.totalAmountTobePaid=0,this.timeValues=m.a,this.transactionRefId=""}ngOnInit(){this.activatedRoute.queryParams.subscribe(e=>{this.tutorId=e.id}),this.getPayoutDetals()}getPayoutDetals(){(0,c.D)([this.payoutsService.getTutorProfilebyTutorId(this.tutorId),this.payoutsService.getUnpaidTutorDetailsById(this.tutorId)]).subscribe(a=>{console.log(a),this.tutorProfileDetails=a[0].data,this.tutorBankDetails=a[0].data.bankAccountDetails,this.payoutDetails=a[1],this.selectedPayouts=a[1],this.totalAmountCalculator()})}totalAmountCalculator(){this.totalAmount=0;for(let e=0;e<this.selectedPayouts.length;e++)this.totalAmount=this.selectedPayouts[e].amount+this.totalAmount;this.totalAmountTobePaid=this.totalAmount-this.serviceFee/100*this.totalAmount}totalAmountToBePaidCalculator(){0!==this.totalAmount&&(this.totalAmountTobePaid=this.totalAmount-this.serviceFee/100*this.totalAmount)}onSelection(){this.totalAmountCalculator()}navigateToPayment(e){this.modalRef=this.modalService.show(e,{class:"modal-dialog modal-dialog-centered"})}completePayment(){const e={scheduleIds:this.selectedPayouts.map(a=>a._id),paymentId:this.transactionRefId,status:T.q.CONFIRMED,amount:this.totalAmountTobePaid,paymentInfo:{}};this.payoutsService.postTutorPayOutDetails(e).subscribe(a=>{this.toastr.success("transaction successful"),this.modalService.hide()},a=>{this.toastr.error("something went wrong!")})}navigateToDetailsPage(e){this.router.navigate(["./admin/payout/schedule-details"],{queryParams:{sid:e}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.gz),t.Y36(v),t.Y36(u.F0),t.Y36(D.tT),t.Y36(x._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-payout-details"]],decls:34,vars:5,consts:[[1,"page-header"],[1,"row"],[1,"col"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],["showBankDetails",""],[1,"row","d-flex","flex-wrap"],[1,"col-8"],[1,"card"],[1,"card-header"],[1,"card-body"],["responsiveLayout","scroll",3,"value","rowHover"],["pTemplate","header"],["pTemplate","body"],[1,"col-4"],[4,"ngIf"],[1,"card-header","paddingBotom"],[1,"mentor-widget","row","form-row"],[1,"user-info-left","align-items-center","form-group","col-6","col-sm-6"],[1,"label-color"],[1,"user-info-left","align-items-center","form-group","col-12","col-sm-12"],[1,"mentor-widget"],[1,"user-info-left","align-items-center","form-group","col-12","col-sm-6"],["for","transactionId",1,"label-color","col-8"],["type","text","pInputText","","id","transactionRefId","placeholder","Enter TransactionRef Id",1,"col-12",3,"ngModel","ngModelChange"],[1,"user-info-right","align-items-center","col-6"],[1,"p-button",3,"disabled","click"],[1,"card-body","bottom"],[1,"form-group","col-6","col-sm-6"],[1,"user-info-right","align-items-center","form-group","col-6","col-sm-6"],[2,"width","3rem"],[1,"p-selectable-row"],[3,"value","ngModel","ngModelChange","onChange"],["pButton","","pRipple","",1,"p-button-text",3,"click"],[1,"pi","pi-chevron-right","m-1"],[1,"p-inputgroup"],["type","number","pInputText","",3,"ngModel","ngModelChange"],["type","button","pButton","","pRipple","","icon","pi pi-check","styleClass","p-button-success",3,"click"],[1,"total-amount"],["pButton","","pRipple","","type","button","label","Procced To payment",1,"p-button-raised",3,"disabled","click"],["style","color: red;",4,"ngIf"],[2,"color","red"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),t._uU(4,"Tutor Payout"),t.qZA(),t.TgZ(5,"ul",4)(6,"li",5)(7,"a",6),t._uU(8,"Dashboard"),t.qZA()(),t.TgZ(9,"li",5)(10,"a",6),t._uU(11,"Payouts"),t.qZA()(),t.TgZ(12,"li",7),t._uU(13,"Tutor Payout"),t.qZA()()()()(),t.YNc(14,U,35,6,"ng-template",null,8,t.W1O),t.TgZ(16,"div")(17,"div",9)(18,"div",10)(19,"div",11)(20,"div",12)(21,"h4"),t._uU(22,"Payments to be paid"),t.qZA()(),t.TgZ(23,"div",13)(24,"p-table",14),t.YNc(25,q,10,0,"ng-template",15),t.YNc(26,E,13,6,"ng-template",16),t.qZA()()()(),t.TgZ(27,"div",17)(28,"div",11)(29,"div",12)(30,"h4"),t._uU(31,"Payout Details"),t.qZA()(),t.TgZ(32,"div",13),t.YNc(33,M,26,8,"div",18),t.qZA()()()()()),2&e&&(t.xp6(7),t.Q6J("routerLink","/admin/dashboard"),t.xp6(3),t.Q6J("routerLink","/admin/payout"),t.xp6(14),t.Q6J("value",a.payoutDetails)("rowHover",!0),t.xp6(9),t.Q6J("ngIf",a.tutorProfileDetails))},dependencies:[r.O5,u.yS,y.iA,Z.jx,f.Hq,A.o,g.Fj,g.wV,g.JJ,g.On,P.XZ],styles:[".label-color[_ngcontent-%COMP%]{color:gray}.total-amount[_ngcontent-%COMP%]{color:#0a4d0a}.paddingBotom[_ngcontent-%COMP%]{padding-bottom:0}#transactionRefId[_ngcontent-%COMP%]{padding-inline-start:5px}"]}),o})();function S(o,n){1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Tutor "),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Email "),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Actions"),t.qZA()())}function k(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"button",14),t.NdJ("click",function(){const l=t.CHM(e).$implicit,h=t.oxw(2);return t.KtG(h.navigateToPayoutDetails(l._id))}),t._uU(7,"View Details "),t._UZ(8,"i",15),t.qZA()()()}if(2&o){const e=n.$implicit;t.xp6(2),t.AsE("",e.firstName," ",e.lastName,""),t.xp6(2),t.Oqu(e.email)}}function B(o,n){if(1&o&&(t.TgZ(0,"div")(1,"p-table",10,11),t.YNc(3,S,7,0,"ng-template",12),t.YNc(4,k,9,3,"ng-template",13),t.qZA()()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("value",e.unpaidTutors)}}function J(o,n){1&o&&(t.TgZ(0,"div",16)(1,"div",17)(2,"h5"),t._uU(3,"No Payouts Available !!"),t.qZA()()())}function w(o,n){if(1&o&&(t.TgZ(0,"div")(1,"div",8)(2,"div",9)(3,"div",10)(4,"p")(5,"span",4),t._uU(6,"Name : "),t.qZA(),t._uU(7),t.qZA()()(),t.TgZ(8,"div",11)(9,"div")(10,"p")(11,"span",4),t._uU(12,"Email : "),t.qZA(),t._uU(13),t.qZA()()(),t._UZ(14,"hr"),t.qZA(),t.TgZ(15,"div",2)(16,"h4",4),t._uU(17,"Bank Details"),t.qZA()(),t.TgZ(18,"div",10)(19,"p")(20,"span",4),t._uU(21,"Bank Name : "),t.qZA(),t._uU(22),t.qZA(),t.TgZ(23,"p")(24,"span",4),t._uU(25,"Bank Account Number : "),t.qZA(),t._uU(26),t.qZA()()()),2&o){const e=t.oxw(2);t.xp6(7),t.AsE("",e.tutorProfileDetails.firstName," ",e.tutorProfileDetails.lastName," "),t.xp6(6),t.hij("",e.tutorProfileDetails.email," "),t.xp6(9),t.hij("",e.tutorBankDetails[0].bankerName," "),t.xp6(4),t.hij("",e.tutorBankDetails[0].accountNumber," ")}}function F(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"div",1)(2,"div",2)(3,"h4"),t._uU(4,"Tutor payout"),t.qZA()(),t.YNc(5,w,27,5,"div",3),t.TgZ(6,"p")(7,"span",4),t._uU(8,"Amount : "),t.qZA(),t._uU(9),t.qZA(),t.TgZ(10,"label",5),t._uU(11,"Transaction Id"),t.qZA(),t.TgZ(12,"input",6),t.NdJ("ngModelChange",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.transactionId=s)}),t.qZA(),t.TgZ(13,"button",7),t._uU(14,"complete Payment"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(5),t.Q6J("ngIf",e.tutorProfileDetails),t.xp6(4),t.Oqu(e.amount),t.xp6(3),t.Q6J("ngModel",e.transactionId)}}const O=[{path:"",component:(()=>{class o{constructor(e,a){this.payoutsService=e,this.router=a,this.unpaidTutors=[]}ngOnInit(){this.getAllUnpaidTutors()}getAllUnpaidTutors(){this.payoutsService.getUnpaidTutors().subscribe(e=>{this.unpaidTutors=e})}navigateToPayoutDetails(e){this.router.navigate(["admin/payout/details"],{queryParams:{id:e}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-payouts"]],decls:13,vars:3,consts:[[1,"page-header"],[1,"row"],[1,"col"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[4,"ngIf"],["class","card",4,"ngIf"],[3,"value"],["dt1",""],["pTemplate","header"],["pTemplate","body"],["pButton","","pRipple","",1,"p-button-text",3,"click"],[1,"pi","pi-chevron-right","m-1"],[1,"card"],[1,"card-body",2,"text-align","center"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),t._uU(4,"Payouts"),t.qZA(),t.TgZ(5,"ul",4)(6,"li",5)(7,"a",6),t._uU(8,"Dashboard"),t.qZA()(),t.TgZ(9,"li",7),t._uU(10,"Payouts"),t.qZA()()()()(),t.YNc(11,B,5,1,"div",8),t.YNc(12,J,4,0,"div",9)),2&e&&(t.xp6(7),t.Q6J("routerLink","/admin/dashboard"),t.xp6(4),t.Q6J("ngIf",0!==a.unpaidTutors.length),t.xp6(1),t.Q6J("ngIf",0===a.unpaidTutors.length))},dependencies:[r.O5,u.yS,y.iA,Z.jx,f.Hq]}),o})()},{path:"details",component:N},{path:"payment",component:(()=>{class o{constructor(e,a,s){this.activatedRoute=e,this.payoutsService=a,this.router=s,this.transactionId=""}ngOnInit(){this.activatedRoute.queryParams.subscribe(a=>{this.tutorId=a.id});const e=this.activatedRoute.snapshot.queryParams;this.amount=e.amount,this.getTutorProfile(),console.log(e.amount)}getTutorProfile(){this.payoutsService.getTutorProfilebyTutorId(this.tutorId).subscribe(e=>{this.tutorProfileDetails=e.data,this.tutorBankDetails=this.tutorProfileDetails.bankAccountDetails})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.gz),t.Y36(v),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tutor-payment"]],decls:4,vars:0,consts:[["paymentDetails",""],[1,"card"],[1,"card-header"],[4,"ngIf"],[1,"label-color"],["for","transactionId"],["type","text","id","transactionId","placeholder","Please Entere Transaction Id",1,"col-8",3,"ngModel","ngModelChange"],[1,"btn","btn-primary"],[1,"card-body"],[1,"mentor-widget"],[1,"user-info-left","align-items-center"],[1,"user-info-right","align-items-center"]],template:function(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"welcome"),t.qZA(),t.YNc(2,F,15,3,"ng-template",null,0,t.W1O))},dependencies:[r.O5,g.Fj,g.JJ,g.On]}),o})()},{path:"schedule-details",component:d.B}];let Y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(O),u.Bz]}),o})(),L=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.ez,Y,y.U$,f.hJ,A.j,g.u5,P.nD]}),o})()}}]);