"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[408],{7914:(f,m,r)=>{r.d(m,{D:()=>n,a:()=>l});const l=["1:00","1:30","2:00","2:30","3:00","3:30","4:00","4:30","5:00","5:30","6:00","6:30","7:00","7:30","8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30","00:00","00:30"],n=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},5408:(f,m,r)=>{r.r(m),r.d(m,{TutorDetailsModule:()=>F});var l=r(6895),n=r(4006),u=r(2912),c=r(7914),t=r(4650),T=r(792),Z=r(9886),_=r(791),h=r(54),b=r(7185),p=r(2796),v=r(5593);function A(o,s){if(1&o&&(t.TgZ(0,"div",43),t._uU(1),t.qZA()),2&o){const e=s.$implicit,i=t.oxw(3);t.xp6(1),t.AsE(" ",i.timeConstants[e.from]," - ",i.timeConstants[e.to]," ")}}function U(o,s){if(1&o&&(t.TgZ(0,"div",41)(1,"div",42)(2,"span"),t._uU(3),t.qZA(),t.YNc(4,A,2,2,"div",49),t.qZA()()),2&o){const e=t.oxw().$implicit,i=t.oxw();t.xp6(3),t.Oqu(i.days[e.day]),t.xp6(1),t.Q6J("ngForOf",e.slots)}}function q(o,s){if(1&o&&(t.TgZ(0,"li"),t.YNc(1,U,5,2,"div",48),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Q6J("ngIf",0!==e.slots.length)}}function y(o,s){1&o&&(t.TgZ(0,"p",60),t._uU(1," message is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function x(o,s){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,y,4,0,"p",59),t.qZA()),2&o){const e=t.oxw(2);let i;t.xp6(1),t.Q6J("ngIf",null==(i=e.messageForm.get("message"))?null:i.hasError("required"))}}function C(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",50)(1,"div",51)(2,"form",52),t.NdJ("ngSubmit",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onSubmit(a.messageForm))}),t.TgZ(3,"div",53)(4,"label"),t._uU(5,"Message"),t.qZA(),t._UZ(6,"textarea",54),t.YNc(7,x,2,1,"div",55),t.qZA(),t.TgZ(8,"div",56)(9,"button",57),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.closePopup())}),t._uU(10," Close "),t.qZA(),t.TgZ(11,"button",58),t._uU(12," Send "),t.qZA()()()()()}if(2&o){const e=t.oxw();let i;t.xp6(2),t.Q6J("formGroup",e.messageForm),t.xp6(5),t.Q6J("ngIf",(null==(i=e.messageForm.get("message"))?null:i.invalid)&&((null==(i=e.messageForm.get("message"))?null:i.dirty)||(null==(i=e.messageForm.get("message"))?null:i.touched))),t.xp6(4),t.Q6J("disabled",e.messageForm.invalid)}}const D=[{path:"",component:(()=>{class o{constructor(e,i,a,d,g,S,M){this.activatedRoute=e,this.sharedService=i,this.router=a,this.modalService=d,this._storageService=g,this._messagesService=S,this.toastr=M,this.tutorProfileId="",this.rate=4,this.days=c.D,this.timeConstants=c.a}ngOnInit(){this.activatedRoute.queryParams.subscribe(e=>{this.tutorProfileId=e.id}),this.tutorProfileId&&""!==this.tutorProfileId&&this.getTutorProfile()}get loggedinUserID(){return this._storageService.getDataFromLocalStorage("id")}createForm(){this.messageForm=new n.cw({message:new n.NI("",[n.kI.required])})}getTutorProfile(){this.sharedService.getTutorProfileDetailsById(this.tutorProfileId).subscribe(e=>{this.tutorProfile=e.data})}sendMessage(e){this.createForm(),this.modalRef=this.modalService.show(e,{class:"modal-dialog modal-dialog-centered"})}onSubmit(e){e.valid&&this.loggedinUserID&&this.tutorProfile.userId&&this._messagesService.send({from:this.loggedinUserID,to:this.tutorProfile.userId,message:e.value.message}).subscribe(a=>{a&&(this.closePopup(),this.toastr.success(a.message),this.router.navigate(["./chat"],{state:{data:this.tutorProfile}}))},a=>{console.log(a),this.toastr.error("Message sending failed")})}naviagteToTutorSchedule(e){this.router.navigate(["./student/courses/schedule"],{queryParams:{id:e}})}closePopup(){this.modalRef.hide()}naviagteToTutorRating(){this.router.navigate(["student/rate-tutor"],{queryParams:{id:this.tutorProfileId}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.gz),t.Y36(T.F),t.Y36(u.F0),t.Y36(Z.tT),t.Y36(_.V),t.Y36(h.K),t.Y36(b._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tutor-details"]],decls:139,vars:16,consts:[[1,"page-header"],[1,"row"],[1,"col"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"content"],[1,"container-fluid"],[1,"row","justify-content-center"],[1,"col-xl-8"],[1,"card"],[1,"card-body"],[1,"mentor-widget"],[1,"user-info-left","align-items-center"],[1,"mentor-img","d-flex","flex-wrap","justify-content-center"],[1,"pro-avatar"],[1,"rating","text-center"],[3,"rate","max","rateChange"],[1,"mentor-details","m-0"],[1,"user-location","m-0"],[1,"fas","fa-map-marker-alt"],[1,"user-info-cont"],[1,"usr-name"],[1,"mentor-type"],[1,"mentor-action"],[1,"mentor-type","social-title"],[1,"btn-blue",3,"click"],[1,"fas","fa-envelope"],[1,"user-info-right","d-flex","align-items-end","flex-wrap"],[1,"hireme-btn","text-center"],[1,"hire-rate"],[1,"blue-btn-radius",3,"routerLink","click"],["pButton","","pRipple","","type","button","label","Review and Feedback",1,"p-button-sm","p-button-text","p-button-secondary","m-1",3,"click"],[1,"card-body","custom-border-card","pb-0"],[1,"widget","about-widget","custom-about","mb-0"],[1,"widget-title"],[1,"widget","experience-widget","mb-0"],[1,"experience-box"],[1,"experience-list","profile-custom-list"],[1,"experience-content"],[1,"timeline-content"],[1,"row-result"],[1,"card-body","pb-1","custom-border-card"],[1,"widget","awards-widget","m-0"],[4,"ngFor","ngForOf"],["message",""],["class","experience-content",4,"ngIf"],["class","row-result",4,"ngFor","ngForOf"],[1,"modal-body","text-center"],[1,"form-content","p-2"],[3,"formGroup","ngSubmit"],[1,"form-group","msg-left"],["formControlName","message",1,"form-control"],[4,"ngIf"],[1,"text-end"],["type","button",1,"btn","btn-sm",3,"click"],["type","submit",1,"btn","btn-primary","btn-sm",3,"disabled"],["class","feild-error",4,"ngIf"],[1,"feild-error"]],template:function(e,i){if(1&e){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),t._uU(4,"Tutor Details"),t.qZA(),t.TgZ(5,"ul",4)(6,"li",5)(7,"a",6),t._uU(8,"Dashboard"),t.qZA()(),t.TgZ(9,"li",5)(10,"a",6),t._uU(11,"Courses"),t.qZA()(),t.TgZ(12,"li",7),t._uU(13,"Tutor Details"),t.qZA()()()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11)(18,"div",12)(19,"div",13)(20,"div",14)(21,"div",15)(22,"div",16)(23,"div",17),t._uU(24),t.qZA(),t.TgZ(25,"div",18)(26,"bar-rating",19),t.NdJ("rateChange",function(g){return i.rate=g}),t.qZA()(),t.TgZ(27,"div",20)(28,"p",21),t._UZ(29,"i",22),t._uU(30),t.qZA()()(),t.TgZ(31,"div",23)(32,"h4",24),t._uU(33),t.qZA(),t.TgZ(34,"p",25),t._uU(35),t.qZA(),t.TgZ(36,"div",26)(37,"p",27),t._uU(38,"Contact Me"),t.qZA(),t.TgZ(39,"a",28),t.NdJ("click",function(){t.CHM(a);const g=t.MAs(138);return t.KtG(i.sendMessage(g))}),t._UZ(40,"i",29),t.qZA()()()(),t.TgZ(41,"div",30)(42,"div",31)(43,"span",32),t._uU(44),t.qZA(),t.TgZ(45,"a",33),t.NdJ("click",function(){return i.naviagteToTutorSchedule(i.tutorProfile._id)}),t._uU(46,"Hire Me"),t.qZA(),t.TgZ(47,"button",34),t.NdJ("click",function(){return i.naviagteToTutorRating()}),t.qZA()()()()()(),t.TgZ(48,"div",12)(49,"div",35)(50,"div",36)(51,"h4",37),t._uU(52,"About Me"),t.qZA(),t._UZ(53,"hr"),t.TgZ(54,"p"),t._uU(55),t.qZA()()()(),t.TgZ(56,"div",12)(57,"div",35)(58,"div",38)(59,"h4",37),t._uU(60,"Qualification"),t.qZA(),t._UZ(61,"hr"),t.TgZ(62,"div",39)(63,"ul",40)(64,"li")(65,"div",41)(66,"div",42)(67,"span"),t._uU(68,"Undergraduate College"),t.qZA(),t.TgZ(69,"div",43),t._uU(70,"Coimbatore University"),t.qZA()()()(),t.TgZ(71,"li")(72,"div",41)(73,"div",42)(74,"span"),t._uU(75,"Undergraduate Major"),t.qZA(),t.TgZ(76,"div",43),t._uU(77,"Mathematics"),t.qZA()()()(),t.TgZ(78,"li")(79,"div",41)(80,"div",42)(81,"span"),t._uU(82,"Graduate College"),t.qZA(),t.TgZ(83,"div",43),t._uU(84,"Coimbatore University"),t.qZA()()()(),t.TgZ(85,"li")(86,"div",41)(87,"div",42)(88,"span"),t._uU(89,"Type of Degree"),t.qZA(),t.TgZ(90,"div",43),t._uU(91,"B.Sc (Maths)"),t.qZA()()()()()()()()(),t.TgZ(92,"div",12)(93,"div",44)(94,"div",45)(95,"h4",37),t._uU(96,"Available Slots"),t.qZA(),t._UZ(97,"hr"),t.TgZ(98,"div",39)(99,"ul",40),t.YNc(100,q,2,1,"li",46),t.qZA()()()()(),t.TgZ(101,"div",12)(102,"div",44)(103,"div",45)(104,"h4",37),t._uU(105,"Location"),t.qZA(),t._UZ(106,"hr"),t.TgZ(107,"div",39)(108,"ul",40)(109,"li")(110,"div",41)(111,"div",42)(112,"span"),t._uU(113,"Address 1"),t.qZA(),t.TgZ(114,"div",43),t._uU(115),t.qZA()()()(),t.TgZ(116,"li")(117,"div",41)(118,"div",42)(119,"span"),t._uU(120,"Country"),t.qZA(),t.TgZ(121,"div",43),t._uU(122,"India"),t.qZA()()()(),t.TgZ(123,"li")(124,"div",41)(125,"div",42)(126,"span"),t._uU(127,"City"),t.qZA(),t.TgZ(128,"div",43),t._uU(129),t.qZA()()()(),t.TgZ(130,"li")(131,"div",41)(132,"div",42)(133,"span"),t._uU(134,"State"),t.qZA(),t.TgZ(135,"div",43),t._uU(136),t.qZA()()()()()()()()()()()()(),t.YNc(137,C,13,3,"ng-template",null,47,t.W1O)}2&e&&(t.xp6(7),t.Q6J("routerLink","/student/dashboard"),t.xp6(3),t.Q6J("routerLink","/student/courses"),t.xp6(14),t.hij(" ",i.sharedService.getNameInitials(i.tutorProfile.firstName,i.tutorProfile.lastName)," "),t.xp6(2),t.Q6J("rate",i.rate)("max",5),t.xp6(4),t.hij(" ",i.tutorProfile.address," "),t.xp6(3),t.AsE(" ",i.tutorProfile.firstName," ",i.tutorProfile.lastName," "),t.xp6(2),t.Oqu(i.tutorProfile.title),t.xp6(9),t.hij("$",i.tutorProfile.hourlyRate," / Hour"),t.xp6(1),t.Q6J("routerLink","/student/courses/schedule"),t.xp6(10),t.Oqu(i.tutorProfile.description),t.xp6(45),t.Q6J("ngForOf",i.tutorProfile.slots),t.xp6(15),t.Oqu(i.tutorProfile.address),t.xp6(14),t.Oqu(i.tutorProfile.city),t.xp6(7),t.Oqu(i.tutorProfile.state))},dependencies:[l.sg,l.O5,u.yS,p.OJ,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,v.Hq],styles:[".feild-error[_ngcontent-%COMP%]{color:#eb8989}.msg-left[_ngcontent-%COMP%]{text-align:left}"]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(D),u.Bz]}),o})(),F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,P,p.C0,n.u5,n.UX,v.hJ]}),o})()}}]);