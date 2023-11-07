"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[876],{2876:(N,c,l)=>{l.r(c),l.d(c,{TutorsListModule:()=>y});var u=l(6895),d=l(8396),a=l(2912),p=l(2887),t=l(4650),m=l(1435),g=l(9886),_=l(7185),T=l(805);function v(o,s){1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2," Name "),t.qZA(),t.TgZ(3,"th"),t._uU(4," Phone Number "),t.qZA(),t.TgZ(5,"th"),t._uU(6," Email "),t.qZA(),t.TgZ(7,"th"),t._uU(8," Hours Spent "),t.qZA(),t.TgZ(9,"th"),t._uU(10," Action "),t.qZA()())}function h(o,s){if(1&o&&(t.TgZ(0,"div"),t._UZ(1,"img",23),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",null==e?null:e.photoUrl,t.LSH)}}function f(o,s){if(1&o&&(t.TgZ(0,"div")(1,"div",24),t._uU(2),t.ALo(3,"uppercase"),t.ALo(4,"uppercase"),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.AsE(" ",t.lcZ(3,2,null==e||null==e.firstName?null:e.firstName.split("")[0]),"",t.lcZ(4,4,null==e||null==e.lastName?null:e.lastName.split("")[0])," ")}}function b(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit,n=t.oxw(2);return t.KtG(n.disableTutor(r,"Deactivate"))}),t._UZ(1,"i",26),t.qZA()}}function Z(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit,n=t.oxw(2);return t.KtG(n.activateTutor(r,"Activate"))}),t._UZ(1,"i",28),t.qZA()}}function A(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"span",18),t.YNc(3,h,2,1,"div",13),t.YNc(4,f,5,6,"div",13),t.TgZ(5,"span"),t._uU(6),t.qZA()()(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"button",19),t.NdJ("click",function(){const n=t.CHM(e).$implicit,w=t.oxw(2);return t.KtG(w.navigateToUserDetails(n._id))}),t._UZ(15,"i",20),t._uU(16," View "),t.qZA(),t.YNc(17,b,2,0,"button",21),t.YNc(18,Z,2,0,"button",22),t.qZA()()}if(2&o){const e=s.$implicit;t.xp6(3),t.Q6J("ngIf",null==e?null:e.photoUrl),t.xp6(1),t.Q6J("ngIf",!(null!=e&&e.photoUrl)),t.xp6(2),t.AsE("",null==e?null:e.firstName," ",null==e?null:e.lastName,""),t.xp6(2),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.hoursSpent?e.hoursSpent:0),t.xp6(5),t.Q6J("ngIf",e.isActive),t.xp6(1),t.Q6J("ngIf",!e.isActive)}}const x=function(){return[10,25,50]};function U(o,s){if(1&o&&(t.TgZ(0,"div")(1,"p-table",15),t.YNc(2,v,11,0,"ng-template",16),t.YNc(3,A,19,9,"ng-template",17),t.qZA()()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("value",e.allTutors)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(5,x))}}function C(o,s){1&o&&(t.TgZ(0,"div",11)(1,"div",29)(2,"h5",30),t._uU(3,"No tutors found"),t.qZA()()())}const L=[{path:"",component:(()=>{class o{constructor(e,i,r,n){this.dashboardService=e,this.router=i,this.modalService=r,this.tosterService=n}ngOnInit(){this.getAllTutors()}getAllTutors(){this.dashboardService.getAllTutors().subscribe(e=>{this.allTutors=e.allTutors,this.getAllTutoringHours()})}getAllTutoringHours(){this.dashboardService.getTotalTutoringHours().subscribe(e=>{for(const i of e)for(const r of this.allTutors)if(i.tutorId===r._id){r.hoursSpent=i.hoursSpent;break}})}navigateToUserDetails(e){this.router.navigate(["admin/tutor-list/user-details-page"],{queryParams:{tId:e}})}disableTutor(e,i){this.modalRef=this.modalService.show(p.$,{class:"modal-dialog modal-dialog-centered",initialState:{confirmMessage:`Are you sure want to ${i}?`}}),this.modalRef.content.onClose.subscribe(r=>{r&&this.dashboardService.deactivateUser(e._id).subscribe(n=>{this.tosterService.success(n.message),this.getAllTutors()},n=>{this.tosterService.error(n.message)})})}activateTutor(e,i){this.modalRef=this.modalService.show(p.$,{class:"modal-dialog modal-dialog-centered",initialState:{confirmMessage:`Are you sure want to ${i}?`}}),this.modalRef.content.onClose.subscribe(r=>{r&&this.dashboardService.activateUser(e._id,{isActive:!e.isActive}).subscribe(n=>{this.tosterService.success(n.message),this.getAllTutors()},n=>{this.tosterService.error(n.message)})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.s),t.Y36(a.F0),t.Y36(g.tT),t.Y36(_._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tutors-list"]],decls:20,vars:3,consts:[[1,"page-header"],[1,"row"],[1,"col-md-11"],[1,"col"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"col-md-12"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[4,"ngIf"],["class","card",4,"ngIf"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],[1,"Userimg_wrapper"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"far","fa-eye"],["data-bs-toggle","tooltip","data-bs-title","Disable","class","btn btn-sm btn-danger m-1",3,"click",4,"ngIf"],["class","btn btn-sm btn-outline-primary m-1","data-bs-toggle","tooltip","data-bs-title","Active",3,"click",4,"ngIf"],["alt","User Image",1,"User_Image",3,"src"],[1,"User-initial"],["data-bs-toggle","tooltip","data-bs-title","Disable",1,"btn","btn-sm","btn-danger","m-1",3,"click"],[1,"fa","fa-ban"],["data-bs-toggle","tooltip","data-bs-title","Active",1,"btn","btn-sm","btn-outline-primary","m-1",3,"click"],[1,"fas","fa-check-circle"],[1,"card-body",2,"text-align","center"],[1,"text-danger"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),t._uU(5,"Tutor List"),t.qZA(),t.TgZ(6,"ul",5)(7,"li",6)(8,"a",7),t._uU(9,"Dashboard"),t.qZA()(),t.TgZ(10,"li",8),t._uU(11,"Tutor list"),t.qZA()()()()()(),t.TgZ(12,"div",1)(13,"div",9)(14,"div",1)(15,"div",10)(16,"div",11)(17,"div",12),t.YNc(18,U,4,6,"div",13),t.YNc(19,C,4,0,"div",14),t.qZA()()()()()()),2&e&&(t.xp6(8),t.Q6J("routerLink","/tutor/dashboard"),t.xp6(10),t.Q6J("ngIf",0!=(null==i.allTutors?null:i.allTutors.length)),t.xp6(1),t.Q6J("ngIf",0===(null==i.allTutors?null:i.allTutors.length)))},dependencies:[u.O5,a.yS,d.iA,T.jx,u.gd],styles:[".User_Image[_ngcontent-%COMP%]{border-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;object-fit:cover}.User-initial[_ngcontent-%COMP%]{width:50px;height:50px!important;border-radius:50%;border:2px solid #009da6;color:#009da6;display:grid;place-items:center;height:40px}.Userimg_wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}"]}),o})()}];let S=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.Bz.forChild(L),a.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,S,d.U$]}),o})()}}]);