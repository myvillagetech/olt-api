"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[465],{2465:(D,g,o)=>{o.r(g),o.d(g,{MessagesModule:()=>w});var c=o(6895),r=o(4006),m=o(8396),d=o(2912),e=o(4650),p=o(54),u=o(791);const h=["scrollframe"],_=["item"];function f(s,n){if(1&s&&(e.TgZ(0,"div")(1,"a",32),e._UZ(2,"img",33),e.qZA()()),2&s){const t=e.oxw();e.xp6(2),e.Q6J("src",t.userData.photoUrl,e.LSH)}}function v(s,n){if(1&s&&(e.TgZ(0,"div",34),e._uU(1),e.ALo(2,"uppercase"),e.ALo(3,"uppercase"),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.AsE(" ",e.lcZ(2,2,t.currentUserFirstName),"",e.lcZ(3,4,t.currentUserLastName)," ")}}function M(s,n){if(1&s&&(e.TgZ(0,"div")(1,"a",32),e._UZ(2,"img",33),e.qZA()()),2&s){const t=e.oxw(2).$implicit;e.xp6(2),e.Q6J("src",t.photoUrl,e.LSH)}}function x(s,n){if(1&s&&(e.TgZ(0,"div",34),e._uU(1),e.ALo(2,"uppercase"),e.ALo(3,"uppercase"),e.qZA()),2&s){const t=e.oxw(2).$implicit;e.xp6(1),e.AsE(" ",e.lcZ(2,2,null==t?null:t.firstName[0]),"",e.lcZ(3,4,null==t?null:t.lastName[0])," ")}}function Z(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"a",36),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,l=e.oxw();return e.KtG(l.selectedUser(a))}),e.YNc(1,M,3,1,"div",5),e.YNc(2,x,4,6,"div",6),e.TgZ(3,"div",19)(4,"div")(5,"div",20),e._uU(6),e.qZA(),e.TgZ(7,"div",37),e._uU(8,"Hey, How are you?"),e.qZA()(),e.TgZ(9,"div")(10,"div",38),e._uU(11,"2 min"),e.qZA(),e.TgZ(12,"div",39),e._uU(13,"15"),e.qZA()()()()}if(2&s){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",t.photoUrl),e.xp6(1),e.Q6J("ngIf",!t.photoUrl),e.xp6(4),e.hij(" ",t.firstName+" "+t.lastName,"")}}function C(s,n){if(1&s&&(e.TgZ(0,"div"),e.YNc(1,Z,14,3,"a",35),e.qZA()),2&s){const t=n.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf",t._id!=i.loggedinUserID)}}function U(s,n){if(1&s&&(e.TgZ(0,"div")(1,"a",32),e._UZ(2,"img",33),e.qZA()()),2&s){const t=e.oxw();e.xp6(2),e.Q6J("src",t.userDetails.photoUrl,e.LSH)}}function A(s,n){if(1&s&&(e.TgZ(0,"div",34),e._uU(1),e.ALo(2,"uppercase"),e.ALo(3,"uppercase"),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.AsE(" ",e.lcZ(2,2,t.userFirstName),"",e.lcZ(3,4,t.userLastName)," ")}}function T(s,n){if(1&s&&(e.TgZ(0,"li",44)(1,"div",19)(2,"div",45)(3,"div")(4,"p"),e._uU(5),e.qZA(),e.TgZ(6,"ul",46)(7,"li")(8,"div",47)(9,"span"),e._uU(10),e.ALo(11,"date"),e.qZA()()()()()()()()),2&s){const t=e.oxw().$implicit;e.xp6(5),e.Oqu(t.message),e.xp6(5),e.Oqu(e.xi3(11,2,t.createdAt,"shortTime"))}}function b(s,n){if(1&s&&(e.TgZ(0,"div")(1,"a",32),e._UZ(2,"img",33),e.qZA()()),2&s){const t=e.oxw(3);e.xp6(2),e.Q6J("src",t.userDetails.photoUrl,e.LSH)}}function O(s,n){if(1&s&&(e.TgZ(0,"div",51),e._uU(1),e.ALo(2,"uppercase"),e.ALo(3,"uppercase"),e.qZA()),2&s){const t=e.oxw(3);e.xp6(1),e.AsE(" ",e.lcZ(2,2,t.userFirstName),"",e.lcZ(3,4,t.userLastName)," ")}}function I(s,n){if(1&s&&(e.TgZ(0,"li",48),e.YNc(1,b,3,1,"div",5),e.YNc(2,O,4,6,"div",49),e.TgZ(3,"div",19)(4,"div",45)(5,"div")(6,"p"),e._uU(7),e.qZA(),e.TgZ(8,"ul",46)(9,"li")(10,"div",50)(11,"span"),e._uU(12),e.ALo(13,"date"),e.qZA()()()()()()()()),2&s){const t=e.oxw().$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.userDetails.photoUrl),e.xp6(1),e.Q6J("ngIf",!i.userDetails.photoUrl),e.xp6(5),e.Oqu(t.message),e.xp6(5),e.Oqu(e.xi3(13,4,t.createdAt,"shortTime"))}}function N(s,n){if(1&s&&(e.TgZ(0,"ul",40,41),e.YNc(2,T,12,5,"li",42),e.YNc(3,I,14,7,"li",43),e.qZA()),2&s){const t=n.$implicit,i=e.oxw();e.xp6(2),e.Q6J("ngIf",i.loggedinUserID===t.from&&i.selectedUserID===t.to),e.xp6(1),e.Q6J("ngIf",i.loggedinUserID===t.to&&i.selectedUserID===t.from)}}const y=[{path:"",component:(()=>{class s{constructor(t,i){this._messagesService=t,this._storageService=i,this.users=[],this.allMessages=[],this.latestMessage="",this.userDetails=[],this.userLastName="",this.studentId="",this.userData=[],this.currentUserFirstName="",this.currentUserLastName=""}ngOnInit(){this.getAllMessagedUsers(),this.refreshData(),this.studentId=this._storageService.getDataFromLocalStorage("id"),this.getUserDetailsById()}getUserDetailsById(){this.studentId&&this._messagesService.getUserDetailsById(this.studentId).subscribe(t=>{this.userData=t.existingUser,this.currentUserFirstName=t.existingUser.firstName,this.currentUserLastName=t.existingUser.lastName})}getAllMessagedUsers(){this.loggedinUserID&&this._messagesService.getAllMessagedUsers(this.loggedinUserID).subscribe(t=>{if(t.users.length>0)if(this.users=t.users,history.state.data){let i={_id:history.state.data.userId,firstName:history.state.data.firstName,lastName:history.state.data.lastName};this.selectedUser(i)}else t.users[0]._id!=this.loggedinUserID?this.selectedUser(t.users[0]):t.users.length>1&&this.selectedUser(t.users[1])})}selectedUser(t){t&&(this.selectedUserID=t._id,this.currentUser=t.firstName+" "+t.lastName,this.userFirstName=t.firstName.split("")[0],this.userLastName=t.lastName.split("")[0],this.getAllByFromAndTo())}get loggedinUserID(){return this._storageService.getDataFromLocalStorage("id")}send(){this._messagesService.send({from:this.loggedinUserID,to:this.selectedUserID,message:this.message}).subscribe(i=>{this.message="",this.getAllByFromAndTo()})}getAllByFromAndTo(){this._messagesService.getAllByFromAndTo({from:this.loggedinUserID,to:this.selectedUserID}).subscribe(i=>{i.results.length>0&&(this.allMessages=i.results)})}getLatestMessage(){this.latestMessage="",this.allMessages&&this.allMessages.map((t,i)=>{this.allMessages.length-1==i&&(this.latestMessage=t.message)})}ngAfterViewInit(){this.scrollContainer=this.scrollFrame.nativeElement,this.itemElements.changes.subscribe(t=>this.onItemElementsChanged())}onItemElementsChanged(){this.scrollToBottom()}scrollToBottom(){this.scrollContainer.scroll({top:this.scrollContainer.scrollHeight,left:0})}refreshData(){this.getAllByFromAndTo()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(p.K),e.Y36(u.V))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-messages"]],viewQuery:function(t,i){if(1&t&&(e.Gf(h,5),e.Gf(_,5)),2&t){let a;e.iGM(a=e.CRH())&&(i.scrollFrame=a.first),e.iGM(a=e.CRH())&&(i.itemElements=a)}},decls:42,vars:9,consts:[[1,"row","chat_wrapper"],[1,"col-xl-12"],[1,"chat-window"],[1,"chat-cont-left"],[1,"chat-search","d-flex","align-items-center"],[4,"ngIf"],["class","cource-initial me-2",4,"ngIf"],[1,"input-group"],[1,"input-group-prepend"],[1,"fas","fa-search"],["type","text","placeholder","Search",1,"form-control","rounded-pill"],[1,"chat-header"],[1,"chat-users-list"],[1,"chat-scroll"],[4,"ngFor","ngForOf"],[1,"chat-cont-right","msg-p"],["id","back_user_list","href","javascript:void(0)",1,"back-user-list"],[1,"material-icons"],[1,"media","d-flex"],[1,"media-body","flex-grow-1"],[1,"user-name"],[1,"user-status"],[1,"chat-options"],["type","checkbox","id","rotate-trigger",1,"rotate-trigger"],["for","rotate-trigger",1,"icon-container"],[1,"fa-solid","fa-arrows-rotate",3,"click"],[1,"chat-body"],["scrollframe",""],["class","list-unstyled",4,"ngFor","ngForOf"],[1,"chat-footer","msg-f"],["type","text","placeholder","Type something",1,"input-msg-send","form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","msg-send-btn",3,"disabled","click"],[1,"avatar","avatar-sm","me-2"],["alt","User Image",1,"avatar-img","rounded-circle",3,"src"],[1,"cource-initial","me-2"],["href","javascript:void(0);","class","media d-flex",3,"click",4,"ngIf"],["href","javascript:void(0);",1,"media","d-flex",3,"click"],[1,"user-last-chat"],[1,"last-chat-time","block"],[1,"badge","badge-primary","rounded-pill"],[1,"list-unstyled"],["item",""],["class","media sent d-flex",4,"ngIf"],["class","media received d-flex",4,"ngIf"],[1,"media","sent","d-flex"],[1,"msg-box"],[1,"chat-msg-info"],[1,"chat-time","msg-send"],[1,"media","received","d-flex"],["class","cource-initial",4,"ngIf"],[1,"chat-time","msg-rece"],[1,"cource-initial"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4),e.YNc(5,f,3,1,"div",5),e.YNc(6,v,4,6,"div",6),e.TgZ(7,"div",7)(8,"div",8),e._UZ(9,"i",9),e.qZA(),e._UZ(10,"input",10),e.qZA()(),e.TgZ(11,"div",11)(12,"span"),e._uU(13,"Chats"),e.qZA()(),e.TgZ(14,"div",12)(15,"div",13),e.YNc(16,C,2,1,"div",14),e.qZA()()(),e.TgZ(17,"div",15)(18,"div",11)(19,"a",16)(20,"i",17),e._uU(21,"chevron_left"),e.qZA()(),e.TgZ(22,"div",18),e.YNc(23,U,3,1,"div",5),e.YNc(24,A,4,6,"div",6),e.TgZ(25,"div",19)(26,"div",20),e._uU(27),e.qZA(),e._UZ(28,"div",21),e.qZA()(),e.TgZ(29,"div",22),e._UZ(30,"input",23),e.TgZ(31,"label",24)(32,"i",25),e.NdJ("click",function(){return i.refreshData()}),e.qZA()()()(),e.TgZ(33,"div",26,27)(35,"div"),e.YNc(36,N,4,2,"ul",28),e.qZA()(),e.TgZ(37,"div",29)(38,"div",7)(39,"input",30),e.NdJ("ngModelChange",function(l){return i.message=l}),e.qZA(),e.TgZ(40,"button",31),e.NdJ("click",function(){return i.send()}),e._uU(41,"Send"),e.qZA()()()()()()()),2&t&&(e.xp6(5),e.Q6J("ngIf",i.userData.photoUrl),e.xp6(1),e.Q6J("ngIf",!i.userData.photoUrl),e.xp6(10),e.Q6J("ngForOf",i.users),e.xp6(7),e.Q6J("ngIf",i.userDetails.photoUrl),e.xp6(1),e.Q6J("ngIf",!i.userDetails.photoUrl),e.xp6(3),e.Oqu(i.currentUser),e.xp6(9),e.Q6J("ngForOf",i.allMessages),e.xp6(3),e.Q6J("ngModel",i.message),e.xp6(1),e.Q6J("disabled",!i.message))},dependencies:[c.sg,c.O5,r._Y,r.Fj,r.JJ,r.JL,r.On,r.F,c.gd,c.uU],styles:[".chat-window .chat-cont-right .chat-footer .input-group .btn.msg-send-btn{border-radius:6px}.msg-send[_ngcontent-%COMP%]{color:#fff!important}.msg-rece[_ngcontent-%COMP%]{color:#32414866!important}.msg-p[_ngcontent-%COMP%]{position:relative!important}.msg-f[_ngcontent-%COMP%]{width:100%!important;position:absolute!important;bottom:0!important}.chat_wrapper[_ngcontent-%COMP%]{height:85vh!important}.chat-window[_ngcontent-%COMP%]{height:100%}.chat-options[_ngcontent-%COMP%]{color:#a5a5b0;font-size:1.2rem;margin-right:1rem}i[_ngcontent-%COMP%]{cursor:pointer}.chat-window[_ngcontent-%COMP%]   .chat-cont-left[_ngcontent-%COMP%]   .chat-users-list[_ngcontent-%COMP%]   a.media[_ngcontent-%COMP%]:las{border-bottom:none!important}.chat-cont-right[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .media.received[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .msg-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{content:none}.chat-window[_ngcontent-%COMP%]   .chat-cont-right[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .media.received[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .msg-box[_ngcontent-%COMP%]:first-child:before{border-bottom:6px solid transparent;border-right:6px solid #fff;border-top:6px solid transparent;content:none;height:0;left:-6px;position:absolute;right:auto;top:1px;width:0}.chat-cont-right[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .media.received[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .msg-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#fff;border-radius:0 14px 14px}.chat-cont-right[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]{background-color:#f5f5f6;height:calc(100vh - 243px);overflow:auto}.icon-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;cursor:pointer}.fa-arrows-rotate[_ngcontent-%COMP%]{transition:transform .3s ease;color:#009da6;transform:(0deg)}.rotate-trigger[_ngcontent-%COMP%]{display:none}.rotate-trigger[_ngcontent-%COMP%]:checked + .icon-container[_ngcontent-%COMP%]   .fa-arrows-rotate[_ngcontent-%COMP%]{transform:rotate(360deg)}"]}),s})()}];let P=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[d.Bz.forChild(y),d.Bz]}),s})(),w=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[c.ez,P,r.u5,r.UX,m.U$]}),s})()}}]);