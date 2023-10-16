"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[520],{4520:(y,c,o)=>{o.r(c),o.d(c,{StudentsListModule:()=>L});var u=o(6895),l=o(2912),m=o(2887),t=o(4650),p=o(1435),g=o(9886),b=o(7185),r=o(8396),v=o(805);function _(n,i){1&n&&(t.TgZ(0,"tr")(1,"th",18),t._uU(2," Name "),t._UZ(3,"p-sortIcon",19),t.qZA(),t.TgZ(4,"th",20),t._uU(5," Phone Number "),t._UZ(6,"p-sortIcon",21),t.qZA(),t.TgZ(7,"th",22),t._uU(8," Email "),t._UZ(9,"p-sortIcon",23),t.qZA(),t.TgZ(10,"th",24),t._uU(11," Action "),t._UZ(12,"p-sortIcon",25),t.qZA()())}function f(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(e);const d=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.disableStudent(d,"Deactivate"))}),t._UZ(1,"i",31),t.qZA()}}function S(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",32),t.NdJ("click",function(){t.CHM(e);const d=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.activateStudent(d,"Activate"))}),t._UZ(1,"i",33),t.qZA()}}function h(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"button",26),t.NdJ("click",function(){const s=t.CHM(e).$implicit,U=t.oxw(2);return t.KtG(U.navigateToUserDetails(s._id))}),t._UZ(9,"i",27),t._uU(10," View "),t.qZA(),t.YNc(11,f,2,0,"button",28),t.YNc(12,S,2,0,"button",29),t.qZA()()}if(2&n){const e=i.$implicit;t.xp6(2),t.AsE("",e.firstName," ",e.lastName,""),t.xp6(2),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.email),t.xp6(5),t.Q6J("ngIf",e.isActive),t.xp6(1),t.Q6J("ngIf",!e.isActive)}}function Z(n,i){1&n&&(t.TgZ(0,"div",11)(1,"div",34)(2,"h5",35),t._uU(3,"No students found"),t.qZA()()())}const A=function(){return[10,25,50]};function T(n,i){if(1&n&&(t.TgZ(0,"div")(1,"p-table",14),t.YNc(2,_,13,0,"ng-template",15),t.YNc(3,h,13,6,"ng-template",16),t.qZA(),t.YNc(4,Z,4,0,"div",17),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("value",e.allStudents)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(6,A)),t.xp6(3),t.Q6J("ngIf",0===e.allStudents.length)}}const x=[{path:"",component:(()=>{class n{constructor(e,a,d,s){this.dashboardService=e,this.router=a,this.modalService=d,this.tosterService=s}ngOnInit(){this.getAllStudents()}getAllStudents(){this.dashboardService.getAllStudents().subscribe(e=>{this.allStudents=e.allStudents})}navigateToUserDetails(e){this.router.navigate(["admin/student-list/user-details-page"],{queryParams:{sId:e}})}activateStudent(e,a){this.modalRef=this.modalService.show(m.$,{class:"modal-dialog modal-dialog-centered",initialState:{confirmMessage:`Are you sure want to ${a}?`}}),this.modalRef.content.onClose.subscribe(d=>{d&&this.dashboardService.activateUser(e._id,{isActive:!e.isActive}).subscribe(s=>{this.tosterService.success(s.message),this.getAllStudents()},s=>{this.tosterService.error(s.message)})})}disableStudent(e,a){this.modalRef=this.modalService.show(m.$,{class:"modal-dialog modal-dialog-centered",initialState:{confirmMessage:`Are you sure want to ${a}?`}}),this.modalRef.content.onClose.subscribe(d=>{d&&this.dashboardService.deactivateUser(e._id).subscribe(s=>{this.tosterService.success(s.message),this.getAllStudents()},s=>{this.tosterService.error(s.message)})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.s),t.Y36(l.F0),t.Y36(g.tT),t.Y36(b._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-students-list"]],decls:19,vars:2,consts:[[1,"page-header"],[1,"row"],[1,"col-md-11"],[1,"col"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"col-md-12"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[4,"ngIf"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],["class","card",4,"ngIf"],["pSortableColumn","firstName"],["field","firstName"],["pSortableColumn","phone"],["field","phone"],["pSortableColumn","email"],["field","email"],["pSortableColumn","action"],["field","action"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"far","fa-eye"],["data-bs-toggle","tooltip","data-bs-title","Disable","class","btn btn-sm btn-danger m-1",3,"click",4,"ngIf"],["class","btn btn-sm btn-outline-primary m-1","data-bs-toggle","tooltip","data-bs-title","Active",3,"click",4,"ngIf"],["data-bs-toggle","tooltip","data-bs-title","Disable",1,"btn","btn-sm","btn-danger","m-1",3,"click"],[1,"fa","fa-ban"],["data-bs-toggle","tooltip","data-bs-title","Active",1,"btn","btn-sm","btn-outline-primary","m-1",3,"click"],[1,"fas","fa-check-circle"],[1,"card-body",2,"text-align","center"],[1,"text-danger"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),t._uU(5,"Student List"),t.qZA(),t.TgZ(6,"ul",5)(7,"li",6)(8,"a",7),t._uU(9,"Dashboard"),t.qZA()(),t.TgZ(10,"li",8),t._uU(11,"Student List"),t.qZA()()()()()(),t.TgZ(12,"div",1)(13,"div",9)(14,"div",1)(15,"div",10)(16,"div",11)(17,"div",12),t.YNc(18,T,5,7,"div",13),t.qZA()()()()()()),2&e&&(t.xp6(8),t.Q6J("routerLink","/tutor/dashboard"),t.xp6(10),t.Q6J("ngIf",0!=a.allStudents))},dependencies:[u.O5,l.yS,r.iA,v.jx,r.lQ,r.fz]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(x),l.Bz]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,C]}),n})()}}]);