"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[796],{3796:(y,r,a)=>{a.r(r),a.d(r,{ContactUsListingModule:()=>L});var d=a(6895),g=a(8396),l=a(2912),m=a(2887),t=a(4650),u=a(9069),p=a(7185),b=a(9886),_=a(805);function C(e,o){1&e&&(t.TgZ(0,"tr")(1,"th"),t._uU(2," Name "),t.qZA(),t.TgZ(3,"th"),t._uU(4," Phone Number "),t.qZA(),t.TgZ(5,"th"),t._uU(6," Email "),t.qZA(),t.TgZ(7,"th"),t._uU(8," Query "),t.qZA(),t.TgZ(9,"th"),t._uU(10," Action "),t.qZA()())}function U(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(n);const s=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.disableContactUs(s,"Deactivate"))}),t._UZ(1,"i",20),t.qZA()}}function v(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(n);const s=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.disableContactUs(s,"Activate"))}),t._UZ(1,"i",22),t.qZA()}}function f(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"button",15),t.NdJ("click",function(){const c=t.CHM(n).$implicit,S=t.oxw(2);return t.KtG(S.deleteContactUs(c._id))}),t._UZ(11,"i",16),t.qZA(),t.YNc(12,U,2,0,"button",17),t.YNc(13,v,2,0,"button",18),t.qZA()()}if(2&e){const n=o.$implicit;t.xp6(2),t.hij("",n.name," "),t.xp6(2),t.Oqu(n.mobileNumber),t.xp6(2),t.Oqu(n.email),t.xp6(2),t.Oqu(n.message),t.xp6(4),t.Q6J("ngIf",n.isActive),t.xp6(1),t.Q6J("ngIf",!n.isActive)}}const h=function(){return[10,25,50]};function Z(e,o){if(1&e&&(t.TgZ(0,"div")(1,"p-table",12),t.YNc(2,C,11,0,"ng-template",13),t.YNc(3,f,14,6,"ng-template",14),t.qZA()()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("value",n.contactUsDetails)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(5,h))}}function A(e,o){1&e&&(t.TgZ(0,"div",8)(1,"div",23)(2,"h5",24),t._uU(3,"No Enquiries found"),t.qZA()()())}const T=[{path:"",component:(()=>{class e{constructor(n,i,s){this.contactService=n,this.tosterService=i,this.modalService=s}ngOnInit(){this.getAllContactUsDetails()}getAllContactUsDetails(){this.contactService.getAllContactUs().subscribe(n=>{this.contactUsDetails=n.data})}deleteContactUs(n){this.modalRef=this.modalService.show(m.$,{class:"modal-dialog modal-dialog-centered",initialState:{confirmMessage:"Are you sure want to delete?"}}),this.modalRef.content.onClose.subscribe(i=>{i&&this.contactService.deleteContactUs(n).subscribe(s=>{this.tosterService.success(s.message),this.getAllContactUsDetails()},s=>{this.tosterService.error(s.message)})})}disableContactUs(n,i){this.modalRef=this.modalService.show(m.$,{class:"modal-dialog modal-dialog-centered",initialState:{confirmMessage:`Are you sure want to ${i}?`}}),this.modalRef.content.onClose.subscribe(s=>{s&&this.contactService.updateContactUs(n._id,{isActive:!n.isActive}).subscribe(c=>{this.tosterService.success(c.message),this.getAllContactUsDetails()},c=>{this.tosterService.error(c.message)})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.D),t.Y36(p._W),t.Y36(b.tT))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contact-us-listing"]],decls:18,vars:3,consts:[[1,"page-header"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-md-12"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[4,"ngIf"],["class","card",4,"ngIf"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],["data-bs-toggle","tooltip","data-bs-title","Delete",1,"btn","btn-sm","btn-danger",3,"click"],[1,"fas","fa-trash"],["data-bs-toggle","tooltip","data-bs-title","Disable","class","btn btn-sm btn-primary m-1",3,"click",4,"ngIf"],["class","btn btn-sm btn-primary m-1","data-bs-toggle","tooltip","data-bs-title","Active",3,"click",4,"ngIf"],["data-bs-toggle","tooltip","data-bs-title","Disable",1,"btn","btn-sm","btn-primary","m-1",3,"click"],[1,"fa","fa-ban"],["data-bs-toggle","tooltip","data-bs-title","Active",1,"btn","btn-sm","btn-primary","m-1",3,"click"],[1,"fa","fa-check"],[1,"card-body",2,"text-align","center"],[1,"text-danger"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Enquiries"),t.qZA(),t.TgZ(3,"ul",1)(4,"li",2)(5,"a",3),t._uU(6,"Dashboard"),t.qZA()(),t.TgZ(7,"li",4),t._uU(8,"Enquiries"),t.qZA()(),t._UZ(9,"br"),t.TgZ(10,"div",5)(11,"div",6)(12,"div",5)(13,"div",7)(14,"div",8)(15,"div",9),t.YNc(16,Z,4,6,"div",10),t.YNc(17,A,4,0,"div",11),t.qZA()()()()()()()),2&n&&(t.xp6(5),t.Q6J("routerLink","/student/dashboard"),t.xp6(11),t.Q6J("ngIf",0!=i.contactUsDetails.length),t.xp6(1),t.Q6J("ngIf",0===(null==i.contactUsDetails?null:i.contactUsDetails.length)))},dependencies:[d.O5,l.yS,g.iA,_.jx]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(T),l.Bz]}),e})(),L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,x,g.U$]}),e})()}}]);