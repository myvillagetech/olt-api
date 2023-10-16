"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[561],{7914:(p,h,o)=>{o.d(h,{D:()=>c,a:()=>r});const r=["1:00","1:30","2:00","2:30","3:00","3:30","4:00","4:30","5:00","5:30","6:00","6:30","7:00","7:30","8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30","00:00","00:30"],c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},5622:(p,h,o)=>{o.d(h,{q:()=>r,s:()=>c});var r=(()=>{return(u=r||(r={})).REQUESTED="REQUESTED",u.ACCEPTED="ACCEPTED",u.REJECTED="REJECTED",u.CANCELLED="CANCELLED",u.COMPLETED="COMPLETED",u.CONFIRMED="CONFIRMED",r;var u})();const c=[{value:"REQUESTED",label:"Requested"},{value:"ACCEPTED",label:"Accepted"},{value:"REJECTED",label:"Rejected"},{value:"CANCELLED",label:"Cancelled"},{value:"COMPLETED",label:"Completed"},{value:"CONFIRMED",label:"Confirmed"}]},1561:(p,h,o)=>{o.r(h),o.d(h,{StudentDashboardModule:()=>x});var r=o(6895),c=o(2912),u=o(7914);const S=[{name:"Profile",link:"student/profile",dispalyIcon:"pi pi-user"},{name:"Schedules",link:"student/schedules",dispalyIcon:"pi pi-calendar"},{name:"Courses",link:"student/courses",dispalyIcon:"pi pi-book"}];var l=o(5622),t=o(4650),C=o(2058),b=o(6864),v=o(791),m=o(7861);function T(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"h2",23)(3,"a",24),t._UZ(4,"img",25),t.qZA(),t.TgZ(5,"a",26),t._uU(6),t.TgZ(7,"span"),t._uU(8),t.qZA()()()(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"date"),t.TgZ(14,"span",27),t._uU(15),t.qZA()(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td")(19,"button",28),t.NdJ("click",function(){const d=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.navigateToDetailsPage(d._id))}),t._UZ(20,"i",29),t._uU(21," View "),t.qZA()()()}if(2&a){const e=i.$implicit,s=t.oxw(2);t.xp6(3),t.Q6J("routerLink","/mentor-profile"),t.xp6(2),t.Q6J("routerLink","/mentor-profile"),t.xp6(1),t.AsE("",e.tutor.firstName," ",e.tutor.lastName,""),t.xp6(2),t.Oqu(e.tutor.email),t.xp6(2),t.Oqu(e.subjects[0].courseName),t.xp6(2),t.hij("",t.xi3(13,12,e.slots[0].date,"dd MMM yyyy")," "),t.xp6(3),t.AsE("",s.timeValues[e.slots[0].from]," to ",s.timeValues[e.slots[0].to],""),t.xp6(1),t.Tol(s.statusClass(e.status)),t.xp6(1),t.Oqu(e.status)}}function D(a,i){if(1&a&&(t.TgZ(0,"div")(1,"h4"),t._uU(2,"Today Schedule List"),t.qZA(),t.TgZ(3,"div",19)(4,"div",13)(5,"div",20)(6,"table",21)(7,"thead")(8,"tr")(9,"th"),t._uU(10,"Tutor"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Course"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Slots"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Status"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Action"),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,T,22,15,"tr",22),t.qZA()()()()()()),2&a){const e=t.oxw();t.xp6(20),t.Q6J("ngForOf",e.todaySchedulesList)}}function Z(a,i){1&a&&(t.TgZ(0,"div",30)(1,"p"),t._uU(2,"No recent updates"),t.qZA()())}function E(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"h2",23)(3,"a",24),t._UZ(4,"img",25),t.qZA(),t.TgZ(5,"a",26),t._uU(6),t.TgZ(7,"span"),t._uU(8),t.qZA()()()(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"td",31)(13,"span"),t._uU(14),t.qZA()(),t.TgZ(15,"td",31)(16,"button",28),t.NdJ("click",function(){const d=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.navigateToDetailsPage(d._id))}),t._UZ(17,"i",29),t._uU(18," View "),t.qZA()()()}if(2&a){const e=i.$implicit,s=t.oxw(2);t.xp6(3),t.Q6J("routerLink","/mentor-profile"),t.xp6(2),t.Q6J("routerLink","/mentor-profile"),t.xp6(1),t.AsE("",e.tutor.firstName," ",e.tutor.lastName,""),t.xp6(2),t.Oqu(e.tutor.email),t.xp6(2),t.Oqu(t.xi3(11,9,e.updatedAt,"dd MMM yyyy")),t.xp6(2),t.Tol(s.statusClass(e.status)),t.xp6(2),t.Oqu(e.status)}}function y(a,i){if(1&a&&(t.TgZ(0,"div",19)(1,"div",13)(2,"div",20)(3,"table",21)(4,"thead")(5,"tr")(6,"th"),t._uU(7,"Basic Info"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Updated Date"),t.qZA(),t.TgZ(10,"th",31),t._uU(11,"Status"),t.qZA(),t.TgZ(12,"th",31),t._uU(13,"Action"),t.qZA()()(),t.TgZ(14,"tbody"),t.YNc(15,E,19,12,"tr",22),t.qZA()()()()()),2&a){const e=t.oxw();t.xp6(15),t.Q6J("ngForOf",e.latestUpdatedSchedules)}}const _=[{path:"",component:(()=>{class a{constructor(e,s,n,d){this.userService=e,this.schedulesService=s,this.storageService=n,this.router=d,this.todaySchedules=[],this.upcomingSchedules=[],this.timeValues=u.a,this.statusList=l.q,this.dashboardNavigations=S,this.studentSchedulesArray=[],this.latestUpdatedSchedules=[],this.todaySchedulesList=[]}ngOnInit(){this.getUserDetails();const e=new Date;let s=new Date;s.setDate(s.getDate()-1);let n=new Date;n.setDate(n.getDate()+7),this.getTodayScheduleDetails({from:s.toISOString(),to:e.toISOString()}),this.getWeekSchedules({from:e.toISOString(),to:n.toISOString()}),this.studentId=this.storageService.getDataFromLocalStorage("id"),this.getStudentScheduleCountById(),this.getLatestUpdatedSchedulesById(),this.getStatusChartmetricsCount()}getUserDetails(){this.userService.getLogedinUserDetails().subscribe(e=>{this.userDetails=e.existingUser,this.userService.userDetails=e.existingUser})}getTodayScheduleDetails(e){const s=this.storageService.getDataFromLocalStorage("id");this.schedulesService.getSchedulesBySearchByCriteria({pageNumber:0,pageSize:4,sortField:"",sortOrder:1,studentIds:[s],tutorIds:[],subjects:[],status:"",dateRange:e}).subscribe(d=>{this.todaySchedules=d,this.todaySchedulesList=d.data})}getWeekSchedules(e){const s=this.storageService.getDataFromLocalStorage("id");this.schedulesService.getSchedulesBySearchByCriteria({pageNumber:0,pageSize:4,sortField:"",sortOrder:1,studentIds:[s],tutorIds:[],subjects:[],status:"",dateRange:e}).subscribe(d=>{this.upcomingSchedules=d})}navigateToDetailsPage(e){this.router.navigate(["./student/schedules/details"],{queryParams:{sid:e}})}navigateToSchedules(){this.router.navigate(["student/schedules"])}getStudentScheduleCountById(){this.schedulesService.getStudentScheduleCountById(this.studentId).subscribe(e=>{this.studentSchedulesArray=e.schedule[0]})}getLatestUpdatedSchedulesById(){this.schedulesService.getLatestUpdatedSchedulesById(this.studentId).subscribe(e=>{this.latestUpdatedSchedules=e.data})}statusClass(e){return e===l.q.ACCEPTED?"confirm":e===l.q.REQUESTED?"pending":e===l.q.CANCELLED||e===l.q.REJECTED?"reject":e===l.q.COMPLETED||e===l.q.CONFIRMED?"accept":""}getStatusChartmetricsCount(){let e=[0,0,0,0,0],s=["REQUESTED","ACCEPTED","CONFIRMED","REJECTED","CANCELLED"];this.schedulesService.getStudentScheduleCountById(this.studentId).subscribe(n=>{n.schedule[0].statusMetrics.forEach(d=>{switch(d.status){case"REQUESTED":e[0]=d.count;break;case"ACCEPTED":e[1]=d.count;break;case"CONFIRMED":e[2]=d.count;break;case"REJECTED":e[3]=d.count;break;case"CANCELLED":e[4]=d.count}}),this.data={labels:s,datasets:[{data:e,backgroundColor:["#f39c12","rgb(15 67 183 )","rgba(15, 183, 107)","rgba(242, 17, 54)","rgba(242, 17, 54)"]}]}})}handleLabelClick(e){this.router.navigate(["student/schedules"],{queryParams:{status:this.data.labels[e.element.index]}})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(C.K),t.Y36(b.F),t.Y36(v.V),t.Y36(c.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-student-dashboard"]],decls:46,vars:8,consts:[[1,"row"],[1,"col-md-12","col-lg-4","dash-board-list","blue"],[1,"dash-widget"],[1,"circle-bar"],[1,"icon-col"],[1,"fas","fa-calendar-check"],[1,"dash-widget-info"],[1,"col-md-12","col-lg-4","dash-board-list","yellow"],[1,"col-md-12","col-lg-4","dash-board-list","pink"],[4,"ngIf"],[1,"col-md-4"],[1,"card-title"],[1,"card"],[1,"card-body"],[1,"chartcard"],["type","pie",3,"data","options","onDataSelect"],[1,"col-md-8"],["class","card p-4",4,"ngIf"],["class","card card-table",4,"ngIf"],[1,"card","card-table"],[1,"table-responsive"],[1,"table","table-hover","table-center","mb-0"],[4,"ngFor","ngForOf"],[1,"table-avatar"],[1,"avatar","avatar-sm","me-2",3,"routerLink"],["src","https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&w=600","alt","User Image",1,"avatar-img","rounded-circle"],[3,"routerLink"],[1,"Time_slot"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"far","fa-eye"],[1,"card","p-4"],[1,"text-center"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"i",5),t.qZA()(),t.TgZ(6,"div",6)(7,"h3"),t._uU(8),t.qZA(),t.TgZ(9,"h6"),t._uU(10,"Today Schedules"),t.qZA()()()(),t.TgZ(11,"div",7)(12,"div",2)(13,"div",3)(14,"div",4),t._UZ(15,"i",5),t.qZA()(),t.TgZ(16,"div",6)(17,"h3"),t._uU(18),t.qZA(),t.TgZ(19,"h6"),t._uU(20,"Appointments"),t.qZA()()()(),t.TgZ(21,"div",8)(22,"div",2)(23,"div",3)(24,"div",4),t._UZ(25,"i",5),t.qZA()(),t.TgZ(26,"div",6)(27,"h3"),t._uU(28),t.qZA(),t.TgZ(29,"h6"),t._uU(30,"Upcoming Schedules"),t.qZA()()()()(),t._UZ(31,"br"),t.YNc(32,D,21,1,"div",9),t.TgZ(33,"div",0)(34,"div",10)(35,"h4",11),t._uU(36,"Schedule Metrics"),t.qZA(),t.TgZ(37,"div",12)(38,"div",13)(39,"div",14)(40,"p-chart",15),t.NdJ("onDataSelect",function(d){return s.handleLabelClick(d)}),t.qZA()()()()(),t.TgZ(41,"div",16)(42,"h4"),t._uU(43,"Latest updated schedules"),t.qZA(),t.YNc(44,Z,3,0,"div",17),t.YNc(45,y,16,1,"div",18),t.qZA()()),2&e&&(t.xp6(8),t.Oqu(s.todaySchedules&&s.todaySchedules.totalCount||0),t.xp6(10),t.hij(" ",s.studentSchedulesArray&&s.studentSchedulesArray.totalDocuments||0," "),t.xp6(10),t.Oqu(s.upcomingSchedules&&s.upcomingSchedules.totalCount||0),t.xp6(4),t.Q6J("ngIf",s.todaySchedulesList.length>0),t.xp6(8),t.Q6J("data",s.data)("options",s.options),t.xp6(4),t.Q6J("ngIf",s.latestUpdatedSchedules&&0===s.latestUpdatedSchedules.length),t.xp6(1),t.Q6J("ngIf",s.latestUpdatedSchedules&&0!==s.latestUpdatedSchedules.length))},dependencies:[r.sg,r.O5,c.yS,m.C,r.uU],styles:[".access-title[_ngcontent-%COMP%], .access-image-div[_ngcontent-%COMP%]{display:flex;justify-content:center}.cards[_ngcontent-%COMP%]{gap:1rem}.access-image[_ngcontent-%COMP%]{border-radius:20%;width:100px;height:100px;border:1px solid rgb(189,186,186);display:grid;color:gray;place-items:center;margin-bottom:1rem}.access-image[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:4rem}.dashboard-card[_ngcontent-%COMP%]{margin:20px 0 30px 35px;width:200px;height:200px;padding:10px;background-image:linear-gradient(to bottom right,rgba(230,210,230,.747),rgba(104,104,235,.801))}.sch-label[_ngcontent-%COMP%]{color:gray}.cursor[_ngcontent-%COMP%]{cursor:pointer}.sch-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{border:1px solid black}.dashboard_status[_ngcontent-%COMP%]{border:1px solid rgba(183,183,183,.05);flex-direction:column;align-items:flex-start;padding:1rem}H4[_ngcontent-%COMP%], H6[_ngcontent-%COMP%]{color:inherit}.rejected[_ngcontent-%COMP%]{background-color:#f211361f;color:#e63c3c}.reject[_ngcontent-%COMP%]{color:#ea580c}.Time_slot[_ngcontent-%COMP%]{color:#888;display:block;font-size:12px;margin-top:3px}.chartcard[_ngcontent-%COMP%]{min-height:370px;display:flex;align-items:center;justify-content:center}canvas[_ngcontent-%COMP%]{height:400px!important}.card-title[_ngcontent-%COMP%]{margin-bottom:.5rem}"]}),a})()}];let f=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.Bz.forChild(_),c.Bz]}),a})();var A=o(5593),U=o(8396);let x=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[r.ez,f,A.hJ,U.U$,m.S]}),a})()}}]);