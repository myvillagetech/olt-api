"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[16],{4016:(Q,C,c)=>{c.r(C),c.d(C,{CourseModule:()=>R});var u=c(6895),l=c(4006),d=c(8396),p=c(2912),f=c(2887),Z=c(7579),e=c(4650),m=c(9886),y=c(6557);let _=(()=>{class o{constructor(t){this.httpDataService=t}getAllCourse(){return this.httpDataService.get("course")}addCourse(t){return this.httpDataService.post("course",t)}updateCourse(t,r){return this.httpDataService.put("course/"+t,r)}deleteCategory(t){return this.httpDataService.delete("course/"+t)}activateCourseById(t){return this.httpDataService.put(`course/activate/${t}`,{})}inactivateCourseById(t){return this.httpDataService.delete(`course/${t}`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(y.L))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var b=c(7185),U=c(2735);function A(o,a){1&o&&(e.TgZ(0,"p",20),e._uU(1," Course is "),e.TgZ(2,"strong"),e._uU(3,"required"),e.qZA()())}function x(o,a){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,A,4,0,"p",19),e.qZA()),2&o){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=t.courseForm.get("courseName"))?null:r.hasError("required"))}}function T(o,a){1&o&&(e.TgZ(0,"p",20),e._uU(1," Category is "),e.TgZ(2,"strong"),e._uU(3,"required"),e.qZA()())}function I(o,a){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,T,4,0,"p",19),e.qZA()),2&o){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=t.courseForm.get("category"))?null:r.hasError("required"))}}function M(o,a){1&o&&(e.TgZ(0,"p",20),e._uU(1," Description is "),e.TgZ(2,"strong"),e._uU(3,"required"),e.qZA()())}function S(o,a){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,M,4,0,"p",19),e.qZA()),2&o){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=t.courseForm.get("courseDiscription"))?null:r.hasError("required"))}}function N(o,a){if(1&o&&(e.TgZ(0,"div"),e._UZ(1,"img",21),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("src",t.courseImage,e.LSH)}}let v=(()=>{class o{constructor(t,r,i,s,n){this.modalRef=t,this.modalService=r,this._courseService=i,this.toastr=s,this.studentProfileService=n}ngOnInit(){this.onClose=new Z.x,this.createForm(),this.editValues?._id&&this.patchValues()}createForm(){this.courseImage="",this.courseForm=new l.cw({id:new l.NI(""),courseName:new l.NI("",[l.kI.required]),courseDiscription:new l.NI("",[l.kI.required]),category:new l.NI("",[l.kI.required]),courseImageUrl:new l.NI("")})}onSubmit(t){t.valid&&(t.value.id?this._courseService.updateCourse(t.value.id,{...t.value,courseImageUrl:this.courseImage}).subscribe(r=>{r.message&&(this.onClose.next(!0),this.modalRef.hide(),this.toastr.success("",r.message))}):this._courseService.addCourse({...t.value,courseImageUrl:this.courseImage}).subscribe(r=>{r.message&&(this.onClose.next(!0),this.modalRef.hide(),this.toastr.success("",r.message))}))}patchValues(){this.courseForm.patchValue({id:this.editValues?._id,courseName:this.editValues?.courseName,category:this.editValues?.category,courseDiscription:this.editValues?.courseDiscription,courseImageUrl:this.editValues?.courseImageUrl}),this.courseImage=this.courseForm.controls.courseImageUrl.value}closePopup(){this.modalRef.hide()}uploadDocs(t){this.courseName=this.courseForm.controls.courseName.value,this.filesData=t.target,this.filesData.files&&(this.fileObj=this.filesData.files[0]),this.studentProfileService.uploadFiletourl(this.fileObj.name,this.fileObj.type,"Course",this.courseName).subscribe(r=>{r?.uploadUrl&&this.updateFileInS3(r.uploadUrl,this.fileObj.type,this.fileObj)})}updateFileInS3(t,r,i){this.studentProfileService.updateFileInS3(t,r,i).subscribe(s=>{const n=t.split("?");this.courseImage=n[0]})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.UZ),e.Y36(m.tT),e.Y36(_),e.Y36(b._W),e.Y36(U.J))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-create-update-course"]],decls:36,vars:8,consts:[[1,"modal-body"],[1,"card","m-0"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","formControlName","courseName","required","",1,"form-control"],[4,"ngIf"],["type","text","formControlName","category","required","",1,"form-control"],["formControlName","courseDiscription",1,"form-control"],[1,"form-group","d-flex","gap-1"],["type","file","accept","image/*,jpg,png",2,"display","none",3,"change"],["file",""],[1,"Upload_img",3,"click"],["aria-hidden","true",1,"fa","fa-camera"],[1,"text-end"],["type","button",1,"btn","btn-danger","me-2",3,"click"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","feild-error",4,"ngIf"],[1,"feild-error"],["alt","profile",1,"courseImage",2,"width","100px","height","100px",3,"src"]],template:function(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),e._uU(4),e.qZA()(),e.TgZ(5,"div",4)(6,"form",5),e.NdJ("ngSubmit",function(){return r.onSubmit(r.courseForm)}),e.TgZ(7,"div",6)(8,"label"),e._uU(9,"Course"),e.qZA(),e._UZ(10,"input",7),e.YNc(11,x,2,1,"div",8),e.qZA(),e.TgZ(12,"div",6)(13,"label"),e._uU(14,"Category"),e.qZA(),e._UZ(15,"input",9),e.YNc(16,I,2,1,"div",8),e.qZA(),e.TgZ(17,"div",6)(18,"label"),e._uU(19,"Description"),e.qZA(),e._UZ(20,"textarea",10),e.YNc(21,S,2,1,"div",8),e.qZA(),e.TgZ(22,"div",11),e.YNc(23,N,2,1,"div",8),e.TgZ(24,"input",12,13),e.NdJ("change",function(n){return r.uploadDocs(n)}),e.qZA(),e.TgZ(26,"div",14),e.NdJ("click",function(){e.CHM(i);const n=e.MAs(25);return e.KtG(n.click())}),e.TgZ(27,"div"),e._UZ(28,"i",15),e.qZA(),e.TgZ(29,"div"),e._uU(30),e.qZA()()(),e.TgZ(31,"div",16)(32,"button",17),e.NdJ("click",function(){return r.closePopup()}),e._uU(33," Close "),e.qZA(),e.TgZ(34,"button",18),e._uU(35," Submit "),e.qZA()()()()()()}if(2&t){let i,s,n;e.xp6(4),e.hij(" ",null!=r.editValues&&r.editValues._id?"Update Course":"Add Course"," "),e.xp6(2),e.Q6J("formGroup",r.courseForm),e.xp6(5),e.Q6J("ngIf",(null==(i=r.courseForm.get("courseName"))?null:i.invalid)&&((null==(i=r.courseForm.get("courseName"))?null:i.dirty)||(null==(i=r.courseForm.get("courseName"))?null:i.touched))),e.xp6(5),e.Q6J("ngIf",(null==(s=r.courseForm.get("category"))?null:s.invalid)&&((null==(s=r.courseForm.get("category"))?null:s.dirty)||(null==(s=r.courseForm.get("category"))?null:s.touched))),e.xp6(5),e.Q6J("ngIf",(null==(n=r.courseForm.get("courseDiscription"))?null:n.invalid)&&((null==(n=r.courseForm.get("courseDiscription"))?null:n.dirty)||(null==(n=r.courseForm.get("courseDiscription"))?null:n.touched))),e.xp6(2),e.Q6J("ngIf",r.courseImage),e.xp6(7),e.hij(" ",r.courseImage?"Update Image":"add image"," "),e.xp6(4),e.Q6J("disabled",r.courseForm.invalid)}},dependencies:[u.O5,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u],styles:[".feild-error[_ngcontent-%COMP%]{color:#eb8989}.btn-right[_ngcontent-%COMP%]{margin-right:12px!important}.courseImage[_ngcontent-%COMP%]{height:100px;width:100px}.card-body[_ngcontent-%COMP%]{padding-inline:0}.fa-camera[_ngcontent-%COMP%]{font-size:1.5rem}.form-group[_ngcontent-%COMP%]   .Upload_img[_ngcontent-%COMP%]{text-align:center;border:dashed 1px #979797;padding:1rem;flex-direction:column;color:gray;cursor:pointer;flex-grow:1}"]}),o})();var P=c(805);function w(o,a){if(1&o&&(e.TgZ(0,"tr")(1,"div",21)(2,"h5",22),e._uU(3,"No courses found !!!"),e.qZA()()()),2&o){const t=a.$implicit;e.xp6(1),e.uIk("colspan",null==t?null:t.length)}}function O(o,a){1&o&&(e.TgZ(0,"tr")(1,"th",23),e._uU(2,"Course "),e._UZ(3,"p-sortIcon",24),e.qZA(),e.TgZ(4,"th",25),e._uU(5,"Description "),e._UZ(6,"p-sortIcon",26),e.qZA(),e.TgZ(7,"th",27),e._uU(8,"Active"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Action "),e.qZA()())}function q(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.ALo(2,"uppercase"),e.ALo(3,"uppercase"),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.AsE(" ",e.lcZ(2,2,t.courseName.split("")[0]),"",e.lcZ(3,4,t.courseName.split("")[1])," ")}}function F(o,a){if(1&o&&(e.TgZ(0,"span",40),e._UZ(1,"img",41),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("src",null==t?null:t.courseImageUrl,e.LSH)}}function D(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"tr",28)(1,"td")(2,"span",29),e._uU(3,"Category"),e.qZA(),e.TgZ(4,"div",30),e.YNc(5,q,4,6,"span",31),e.YNc(6,F,2,1,"span",32),e._uU(7),e.qZA()(),e.TgZ(8,"td")(9,"span",29),e._uU(10,"Discription"),e.qZA(),e._uU(11),e.qZA(),e.TgZ(12,"td")(13,"span",29),e._uU(14,"Active"),e.qZA(),e.TgZ(15,"div",33)(16,"input",34),e.NdJ("change",function(i){const s=e.CHM(t),n=s.$implicit,g=s.rowIndex,h=e.oxw();return e.KtG(h.handleActiveToggle(i,n,g))}),e.qZA(),e.TgZ(17,"label",35),e._uU(18),e.qZA()()(),e.TgZ(19,"td")(20,"span",29),e._uU(21,"Action"),e.qZA(),e.TgZ(22,"div",36)(23,"button",37),e.NdJ("click",function(){const s=e.CHM(t).$implicit,n=e.oxw();return e.KtG(n.editCourse(s))}),e._UZ(24,"i",38),e._uU(25," Edit "),e.qZA()()()()}if(2&o){const t=a.$implicit;e.xp6(5),e.Q6J("ngIf",!(null!=t&&t.courseImageUrl)),e.xp6(1),e.Q6J("ngIf",null==t?null:t.courseImageUrl),e.xp6(1),e.hij("",t.courseName," "),e.xp6(4),e.hij(" ",t.courseDiscription," "),e.xp6(5),e.MGl("id","status_",t.courseName,""),e.Q6J("checked",t.isActive),e.xp6(1),e.MGl("for","status_",t.courseName,""),e.xp6(1),e.hij(" ",t.isActive?"Active":"Inactive"," ")}}const J=function(){return[10,25,50]},k=[{path:"",component:(()=>{class o{constructor(t,r,i){this.modalService=t,this.toastr=r,this.courseService=i,this.loading=!1}ngOnInit(){this.getAllCourse()}getAllCourse(){this.courseService.getAllCourse().subscribe(t=>{this.loading=!0,t.data.length>0&&(this.course=t.data,this.loading=!1)})}openModal(){this.modalRef=this.modalService.show(v),this.modalRef.content.onClose.subscribe(t=>{t&&this.getAllCourse()})}editCourse(t){this.modalRef=this.modalService.show(v,{initialState:{editValues:t}}),this.modalRef.content.onClose.subscribe(r=>{r&&this.getAllCourse()})}deleteCourse(t){this.modalRef=this.modalService.show(f.$,{class:"modal-dialog modal-dialog-centered",initialState:{confirmMessage:"Are you sure want to delete?"}}),this.modalRef.content.onClose.subscribe(r=>{r&&this.courseService.deleteCategory(t._id).subscribe(i=>{i.message&&(this.toastr.success("",i.message),this.getAllCourse())})})}handleActiveToggle(t,r,i){this.modalRef=this.modalService.show(f.$,{class:"modal-dialog modal-dialog-centered",initialState:{confirmMessage:`Are you sure you want to change the status to ${t.target.checked?"Activate":"Deactivate"}?`}}),this.modalRef.content.onClose.subscribe(h=>{h?t.target.checked?this.courseService.activateCourseById(r._id).subscribe(j=>{this.getAllCourse()}):this.courseService.inactivateCourseById(r._id).subscribe(j=>{this.getAllCourse()}):this.course[i]={...this.course[i]}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.tT),e.Y36(b._W),e.Y36(_))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-course"]],decls:27,vars:10,consts:[[1,"page-header"],[1,"row"],[1,"col-md-11"],[1,"col"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"col-md-1"],[1,"add-btn-align"],["type","button",1,"btn","btn-primary","btn-sm","me-1",3,"click"],[1,"col-md-12"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],["dataKey","id","styleClass","p-datatable-customers","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","filterDelay"],["dt",""],["pTemplate","emptymessage"],["pTemplate","header"],["pTemplate","body"],[2,"display","flex","justify-content","center","align-items","center","height","10vh"],[1,"text-danger"],["pSortableColumn","categoryName"],["field","Category"],["pSortableColumn","categoryDiscription"],["field","Description"],["pSortableColumn","active"],[1,"p-selectable-row"],[1,"p-column-title"],[1,"cource_name"],["class","cource-initial",4,"ngIf"],["class","cource-img",4,"ngIf"],[1,"status-toggle"],["type","checkbox",1,"check",3,"id","checked","change"],[1,"checktoggle",3,"for"],[1,"actions"],[1,"btn","btn-primary","me-2",3,"click"],[1,"fe","fe-pencil"],[1,"cource-initial"],[1,"cource-img"],["alt","",3,"src"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),e._uU(5,"Course"),e.qZA(),e.TgZ(6,"ul",5)(7,"li",6)(8,"a",7),e._uU(9,"Dashboard"),e.qZA()(),e.TgZ(10,"li",8),e._uU(11,"Course"),e.qZA()()()(),e.TgZ(12,"div",9)(13,"div",10)(14,"button",11),e.NdJ("click",function(){return r.openModal()}),e._uU(15,"Add"),e.qZA()()()()(),e.TgZ(16,"div",1)(17,"div",12)(18,"div",1)(19,"div",13)(20,"div",14)(21,"div",15)(22,"p-table",16,17),e.YNc(24,w,4,1,"ng-template",18),e.YNc(25,O,11,0,"ng-template",19),e.YNc(26,D,26,8,"ng-template",20),e.qZA()()()()()()()),2&t&&(e.xp6(8),e.Q6J("routerLink","/tutor/dashboard"),e.xp6(14),e.Q6J("value",r.course)("rowHover",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(9,J))("loading",r.loading)("paginator",!0)("filterDelay",0))},dependencies:[u.O5,p.yS,d.iA,P.jx,d.lQ,d.fz,u.gd],styles:[".table-overflow[_ngcontent-%COMP%]{overflow-x:hidden}.add-btn-align[_ngcontent-%COMP%]{text-align:right;padding:0 38px 0 0}[_nghost-%COMP%]     .p-paginator .p-paginator-current{margin-left:auto}[_nghost-%COMP%]     .p-progressbar{height:.5rem;background-color:#d8dadc}[_nghost-%COMP%]     .p-progressbar .p-progressbar-value{background-color:#607d8b}[_nghost-%COMP%]     .table-header{display:flex;justify-content:space-between}[_nghost-%COMP%]     .p-calendar .p-datepicker{min-width:25rem}[_nghost-%COMP%]     .p-calendar .p-datepicker td{font-weight:400}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-header{padding:1rem;text-align:left;font-size:1.5rem}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-paginator{padding:1rem}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead>tr>th{text-align:left}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td{cursor:auto}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder){text-transform:uppercase}[_nghost-%COMP%]     .p-datatable-customers .p-datatable-tbody>tr>td .p-column-title{display:none}@media screen and (max-width: 960px){[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead>tr>th, [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tfoot>tr>td{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr{border-bottom:1px solid #dee2e6}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td{text-align:left;display:block;border:0 none!important;width:100%!important;float:left;clear:left;border:0 none}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4rem 1rem -.4rem -.4rem;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td .p-progressbar{margin-top:.5rem}}.course-card[_ngcontent-%COMP%]{background:transparent}.cource_name[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.cource-initial[_ngcontent-%COMP%]{width:40px;border-radius:50%;border:2px solid #009da6;color:#009da6;display:grid;place-items:center;height:40px}.cource-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;border-radius:50%;height:40px}"]}),o})()}];let Y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.Bz.forChild(k),p.Bz]}),o})(),R=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,Y,l.u5,l.UX,d.U$]}),o})()}}]);