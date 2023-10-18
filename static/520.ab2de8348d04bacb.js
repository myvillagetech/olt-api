"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[520],{4520:(w,c,o)=>{o.r(c),o.d(c,{StudentsListModule:()=>y});var d=o(6895),r=o(2912),u=o(2887),t=o(4650),p=o(1435),g=o(9886),_=o(7185),m=o(8396),v=o(805);function b(n,i){1&n&&(t.TgZ(0,"tr")(1,"th",18),t._uU(2," Name "),t.qZA(),t.TgZ(3,"th",19),t._uU(4," Phone Number "),t.qZA(),t.TgZ(5,"th",20),t._uU(6," Email "),t.qZA(),t.TgZ(7,"th",21),t._uU(8," Action "),t.qZA()())}function f(n,i){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"img",27),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",null==e?null:e.photoUrl,t.LSH)}}function h(n,i){if(1&n&&(t.TgZ(0,"div")(1,"div",28),t._uU(2),t.ALo(3,"uppercase"),t.ALo(4,"uppercase"),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.AsE(" ",t.lcZ(3,2,null==e||null==e.firstName?null:e.firstName.split("")[0]),"",t.lcZ(4,4,null==e||null==e.lastName?null:e.lastName.split("")[0])," ")}}function S(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(e);const l=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.disableStudent(l,"Deactivate"))}),t._UZ(1,"i",30),t.qZA()}}function x(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(e);const l=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.activateStudent(l,"Activate"))}),t._UZ(1,"i",32),t.qZA()}}function Z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"span",22),t.YNc(3,f,2,1,"div",13),t.YNc(4,h,5,6,"div",13),t.TgZ(5,"span"),t._uU(6),t.qZA()()(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"button",23),t.NdJ("click",function(){const s=t.CHM(e).$implicit,N=t.oxw(2);return t.KtG(N.navigateToUserDetails(s._id))}),t._UZ(13,"i",24),t._uU(14," View "),t.qZA(),t.YNc(15,S,2,0,"button",25),t.YNc(16,x,2,0,"button",26),t.qZA()()}if(2&n){const e=i.$implicit;t.xp6(3),t.Q6J("ngIf",null==e?null:e.photoUrl),t.xp6(1),t.Q6J("ngIf",!(null!=e&&e.photoUrl)),t.xp6(2),t.AsE(" ",e.firstName," ",e.lastName," "),t.xp6(2),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.email),t.xp6(5),t.Q6J("ngIf",e.isActive),t.xp6(1),t.Q6J("ngIf",!e.isActive)}}function A(n,i){1&n&&(t.TgZ(0,"div",11)(1,"div",33)(2,"h5",34),t._uU(3,"No students found"),t.qZA()()())}const T=function(){return[10,25,50]};function C(n,i){if(1&n&&(t.TgZ(0,"div")(1,"p-table",14),t.YNc(2,b,9,0,"ng-template",15),t.YNc(3,Z,17,8,"ng-template",16),t.qZA(),t.YNc(4,A,4,0,"div",17),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("value",e.allStudents)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(6,T)),t.xp6(3),t.Q6J("ngIf",0===e.allStudents.length)}}const U=[{path:"",component:(()=>{class n{constructor(e,a,l,s){this.dashboardService=e,this.router=a,this.modalService=l,this.tosterService=s}ngOnInit(){this.getAllStudents()}getAllStudents(){this.dashboardService.getAllStudents().subscribe(e=>{this.allStudents=e.allStudents})}navigateToUserDetails(e){this.router.navigate(["admin/student-list/user-details-page"],{queryParams:{sId:e}})}activateStudent(e,a){this.modalRef=this.modalService.show(u.$,{class:"modal-dialog modal-dialog-centered",initialState:{confirmMessage:`Are you sure want to ${a}?`}}),this.modalRef.content.onClose.subscribe(l=>{l&&this.dashboardService.activateUser(e._id,{isActive:!e.isActive}).subscribe(s=>{this.tosterService.success(s.message),this.getAllStudents()},s=>{this.tosterService.error(s.message)})})}disableStudent(e,a){this.modalRef=this.modalService.show(u.$,{class:"modal-dialog modal-dialog-centered",initialState:{confirmMessage:`Are you sure want to ${a}?`}}),this.modalRef.content.onClose.subscribe(l=>{l&&this.dashboardService.deactivateUser(e._id).subscribe(s=>{this.tosterService.success(s.message),this.getAllStudents()},s=>{this.tosterService.error(s.message)})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.s),t.Y36(r.F0),t.Y36(g.tT),t.Y36(_._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-students-list"]],decls:19,vars:2,consts:[[1,"page-header"],[1,"row"],[1,"col-md-11"],[1,"col"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"col-md-12"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[4,"ngIf"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],["class","card",4,"ngIf"],["pSortableColumn","firstName"],["pSortableColumn","phone"],["pSortableColumn","email"],["pSortableColumn","action"],[1,"Userimg_wrapper"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"far","fa-eye"],["data-bs-toggle","tooltip","data-bs-title","Disable","class","btn btn-sm btn-danger m-1",3,"click",4,"ngIf"],["class","btn btn-sm btn-outline-primary m-1","data-bs-toggle","tooltip","data-bs-title","Active",3,"click",4,"ngIf"],["alt","User Image",1,"User_Image",3,"src"],[1,"User-initial"],["data-bs-toggle","tooltip","data-bs-title","Disable",1,"btn","btn-sm","btn-danger","m-1",3,"click"],[1,"fa","fa-ban"],["data-bs-toggle","tooltip","data-bs-title","Active",1,"btn","btn-sm","btn-outline-primary","m-1",3,"click"],[1,"fas","fa-check-circle"],[1,"card-body",2,"text-align","center"],[1,"text-danger"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),t._uU(5,"Student List"),t.qZA(),t.TgZ(6,"ul",5)(7,"li",6)(8,"a",7),t._uU(9,"Dashboard"),t.qZA()(),t.TgZ(10,"li",8),t._uU(11,"Student List"),t.qZA()()()()()(),t.TgZ(12,"div",1)(13,"div",9)(14,"div",1)(15,"div",10)(16,"div",11)(17,"div",12),t.YNc(18,C,5,7,"div",13),t.qZA()()()()()()),2&e&&(t.xp6(8),t.Q6J("routerLink","/tutor/dashboard"),t.xp6(10),t.Q6J("ngIf",0!=a.allStudents))},dependencies:[d.O5,r.yS,m.iA,v.jx,m.lQ,d.gd],styles:[".Userimg_wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.User_Image[_ngcontent-%COMP%]{border-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;object-fit:cover}.User-initial[_ngcontent-%COMP%]{width:50px;height:50px!important;border-radius:50%;border:2px solid #009da6;color:#009da6;display:grid;place-items:center;height:40px}"]}),n})()}];let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(U),r.Bz]}),n})(),y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,L]}),n})()}}]);