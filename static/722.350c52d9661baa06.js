"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[722],{5722:(Oe,k,p)=>{p.d(k,{NU:()=>C,q4:()=>Me});var e=p(4650),h=p(7340),d=p(6895),c=p(9592),u=p(982),_=p(805),w=p(4006),m=p(4440),y=p(3608),b=p(1795);function M(l,o){if(1&l&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&l){const t=e.oxw();e.xp6(1),e.Oqu(t.label)}}function O(l,o){1&l&&e.GkF(0)}const x=function(l){return{height:l}},L=function(l,o){return{"p-highlight":l,"p-disabled":o}},I=function(l){return{"p-highlight":l}},S=function(l){return{"pi pi-check":l}},f=function(l){return{$implicit:l}},E=["container"],F=["filterInput"],A=["in"];function D(l,o){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const t=e.oxw(2);e.xp6(1),e.Oqu(t.valuesAsString||"empty")}}function V(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"span",18),e.NdJ("click",function(n){e.CHM(t);const s=e.oxw().$implicit,a=e.oxw(3);return e.KtG(a.removeChip(s,n))}),e.qZA()}}function Q(l,o){if(1&l&&(e.TgZ(0,"div",14,15)(2,"span",16),e._uU(3),e.qZA(),e.YNc(4,V,1,0,"span",17),e.qZA()),2&l){const t=o.$implicit,i=e.oxw(3);e.xp6(3),e.Oqu(i.findLabelByValue(t)),e.xp6(1),e.Q6J("ngIf",!i.disabled)}}function J(l,o){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const t=e.oxw(3);e.xp6(1),e.Oqu(t.placeholder||t.defaultLabel||"empty")}}function Z(l,o){if(1&l&&(e.ynx(0),e.YNc(1,Q,5,2,"div",13),e.YNc(2,J,2,1,"ng-container",7),e.BQk()),2&l){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.value),e.xp6(1),e.Q6J("ngIf",!t.value||0===t.value.length)}}function H(l,o){if(1&l&&(e.ynx(0),e.YNc(1,D,2,1,"ng-container",7),e.YNc(2,Z,3,2,"ng-container",7),e.BQk()),2&l){const t=e.oxw();e.xp6(1),e.Q6J("ngIf","comma"===t.display),e.xp6(1),e.Q6J("ngIf","chip"===t.display)}}function K(l,o){1&l&&e.GkF(0)}function P(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"i",19),e.NdJ("click",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.clear(n))}),e.qZA()}}function N(l,o){1&l&&e.GkF(0)}const G=function(l){return{"p-checkbox-disabled":l}},B=function(l,o,t){return{"p-highlight":l,"p-focus":o,"p-disabled":t}};function R(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"div",32)(1,"div",2)(2,"input",33),e.NdJ("focus",function(){e.CHM(t);const n=e.oxw(3);return e.KtG(n.onHeaderCheckboxFocus())})("blur",function(){e.CHM(t);const n=e.oxw(3);return e.KtG(n.onHeaderCheckboxBlur())})("keydown.space",function(n){e.CHM(t);const s=e.oxw(3);return e.KtG(s.toggleAll(n))}),e.qZA()(),e.TgZ(3,"div",34),e.NdJ("click",function(n){e.CHM(t);const s=e.oxw(3);return e.KtG(s.toggleAll(n))}),e._UZ(4,"span",35),e.qZA()()}if(2&l){const t=e.oxw(3);e.Q6J("ngClass",e.VKq(6,G,t.disabled||t.toggleAllDisabled)),e.xp6(2),e.Q6J("checked",t.allChecked)("disabled",t.disabled||t.toggleAllDisabled),e.xp6(1),e.Q6J("ngClass",e.kEZ(8,B,t.allChecked,t.headerCheckboxFocus,t.disabled||t.toggleAllDisabled)),e.uIk("aria-checked",t.allChecked),e.xp6(1),e.Q6J("ngClass",e.VKq(12,S,t.allChecked))}}function Y(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"div",36)(1,"input",37,38),e.NdJ("input",function(n){e.CHM(t);const s=e.oxw(3);return e.KtG(s.onFilterInputChange(n))}),e.qZA(),e._UZ(3,"span",39),e.qZA()}if(2&l){const t=e.oxw(3);e.xp6(1),e.Q6J("value",t.filterValue||"")("disabled",t.disabled),e.uIk("autocomplete",t.autocomplete)("placeholder",t.filterPlaceHolder)("aria-label",t.ariaFilterLabel)}}function q(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"div",26),e.Hsn(1),e.YNc(2,N,1,0,"ng-container",27),e.YNc(3,R,5,14,"div",28),e.YNc(4,Y,4,5,"div",29),e.TgZ(5,"button",30),e.NdJ("click",function(n){e.CHM(t);const s=e.oxw(2);return e.KtG(s.close(n))}),e._UZ(6,"span",31),e.qZA()()}if(2&l){const t=e.oxw(2);e.xp6(2),e.Q6J("ngTemplateOutlet",t.headerTemplate),e.xp6(1),e.Q6J("ngIf",t.showToggleAll&&!t.selectionLimit),e.xp6(1),e.Q6J("ngIf",t.filter)}}function z(l,o){if(1&l&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&l){const t=e.oxw().$implicit,i=e.oxw(3);e.xp6(1),e.Oqu(i.getOptionGroupLabel(t)||"empty")}}function U(l,o){1&l&&e.GkF(0)}function W(l,o){1&l&&e.GkF(0)}function $(l,o){if(1&l&&(e.TgZ(0,"li",41),e.YNc(1,z,2,1,"span",7),e.YNc(2,U,1,0,"ng-container",8),e.qZA(),e.YNc(3,W,1,0,"ng-container",8)),2&l){const t=o.$implicit;e.oxw(2);const i=e.MAs(7),n=e.oxw();e.xp6(1),e.Q6J("ngIf",!n.groupTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",n.groupTemplate)("ngTemplateOutletContext",e.VKq(5,f,t)),e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.VKq(7,f,n.getOptionGroupChildren(t)))}}function j(l,o){if(1&l&&(e.ynx(0),e.YNc(1,$,4,9,"ng-template",40),e.BQk()),2&l){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.optionsToRender)}}function X(l,o){1&l&&e.GkF(0)}function ee(l,o){if(1&l&&(e.ynx(0),e.YNc(1,X,1,0,"ng-container",8),e.BQk()),2&l){e.oxw();const t=e.MAs(7),i=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",e.VKq(2,f,i.optionsToRender))}}function te(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"p-multiSelectItem",45),e.NdJ("onClick",function(n){e.CHM(t);const s=e.oxw(4);return e.KtG(s.onOptionClick(n))})("onKeydown",function(n){e.CHM(t);const s=e.oxw(4);return e.KtG(s.onOptionKeydown(n))}),e.qZA()}if(2&l){const t=o.$implicit,i=e.oxw(4);e.Q6J("option",t)("selected",i.isSelected(t))("label",i.getOptionLabel(t))("disabled",i.isOptionDisabled(t))("template",i.itemTemplate)}}function ie(l,o){if(1&l&&(e.ynx(0),e.YNc(1,te,1,5,"ng-template",40),e.BQk()),2&l){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",t)}}function le(l,o){if(1&l){const t=e.EpF();e.ynx(0),e.TgZ(1,"p-multiSelectItem",50),e.NdJ("onClick",function(n){e.CHM(t);const s=e.oxw(5);return e.KtG(s.onOptionClick(n))})("onKeydown",function(n){e.CHM(t);const s=e.oxw(5);return e.KtG(s.onOptionKeydown(n))}),e.qZA(),e.BQk()}if(2&l){const t=o.$implicit,i=e.oxw(5);e.xp6(1),e.Q6J("option",t)("selected",i.isSelected(t))("label",i.getOptionLabel(t))("disabled",i.isOptionDisabled(t))("template",i.itemTemplate)("itemSize",i.itemSize)}}function ne(l,o){if(1&l&&(e.TgZ(0,"cdk-virtual-scroll-viewport",47,48),e.YNc(2,le,2,6,"ng-container",49),e.qZA()),2&l){const t=e.oxw(2).$implicit,i=e.oxw(2);e.Q6J("ngStyle",e.VKq(3,x,i.scrollHeight))("itemSize",i.itemSize),e.xp6(2),e.Q6J("cdkVirtualForOf",t)}}function se(l,o){if(1&l&&e.YNc(0,ne,3,5,"cdk-virtual-scroll-viewport",46),2&l){const t=e.oxw(3);e.Q6J("ngIf",t.virtualScroll&&!t.emptyOptions)}}function oe(l,o){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const t=e.oxw(4);e.xp6(1),e.hij(" ",t.emptyFilterMessageLabel," ")}}function ae(l,o){1&l&&e.GkF(0,null,52)}function re(l,o){if(1&l&&(e.TgZ(0,"li",51),e.YNc(1,oe,2,1,"ng-container",42),e.YNc(2,ae,2,0,"ng-container",27),e.qZA()),2&l){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf",!t.emptyFilterTemplate&&!t.emptyTemplate)("ngIfElse",t.emptyFilter),e.xp6(1),e.Q6J("ngTemplateOutlet",t.emptyFilterTemplate||t.emptyTemplate)}}function ce(l,o){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const t=e.oxw(4);e.xp6(1),e.hij(" ",t.emptyMessageLabel," ")}}function pe(l,o){1&l&&e.GkF(0,null,53)}function ue(l,o){if(1&l&&(e.TgZ(0,"li",51),e.YNc(1,ce,2,1,"ng-container",42),e.YNc(2,pe,2,0,"ng-container",27),e.qZA()),2&l){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf",!t.emptyTemplate)("ngIfElse",t.empty),e.xp6(1),e.Q6J("ngTemplateOutlet",t.emptyTemplate)}}function de(l,o){if(1&l&&(e.YNc(0,ie,2,1,"ng-container",42),e.YNc(1,se,1,1,"ng-template",null,43,e.W1O),e.YNc(3,re,3,3,"li",44),e.YNc(4,ue,3,3,"li",44)),2&l){const t=e.MAs(2),i=e.oxw(2);e.Q6J("ngIf",!i.virtualScroll)("ngIfElse",t),e.xp6(3),e.Q6J("ngIf",i.hasFilter()&&i.emptyOptions),e.xp6(1),e.Q6J("ngIf",!i.hasFilter()&&i.emptyOptions)}}function _e(l,o){1&l&&e.GkF(0)}function he(l,o){if(1&l&&(e.TgZ(0,"div",54),e.Hsn(1,1),e.YNc(2,_e,1,0,"ng-container",27),e.qZA()),2&l){const t=e.oxw(2);e.xp6(2),e.Q6J("ngTemplateOutlet",t.footerTemplate)}}const me=function(){return["p-multiselect-panel p-component"]},fe=function(l,o){return{showTransitionParams:l,hideTransitionParams:o}},ge=function(l){return{value:"visible",params:l}},ve=function(l){return{"p-multiselect-virtualscroll":l}};function be(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"div",20),e.NdJ("@overlayAnimation.start",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.onOverlayAnimationStart(n))})("@overlayAnimation.done",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.onOverlayAnimationEnd(n))})("keydown",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.onKeydown(n))})("click",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.onOverlayClick(n))}),e.YNc(1,q,7,3,"div",21),e.TgZ(2,"div",22)(3,"ul",23),e.YNc(4,j,2,1,"ng-container",7),e.YNc(5,ee,2,4,"ng-container",7),e.YNc(6,de,5,4,"ng-template",null,24,e.W1O),e.qZA()(),e.YNc(8,he,3,1,"div",25),e.qZA()}if(2&l){const t=e.oxw();e.Tol(t.panelStyleClass),e.Q6J("ngClass",e.DdM(12,me))("@overlayAnimation",e.VKq(16,ge,e.WLB(13,fe,t.showTransitionOptions,t.hideTransitionOptions)))("ngStyle",t.panelStyle),e.xp6(1),e.Q6J("ngIf",t.showHeader),e.xp6(1),e.Udp("max-height",t.virtualScroll?"auto":t.scrollHeight||"auto"),e.xp6(1),e.Q6J("ngClass",e.VKq(18,ve,t.virtualScroll)),e.xp6(1),e.Q6J("ngIf",t.group),e.xp6(1),e.Q6J("ngIf",!t.group),e.xp6(3),e.Q6J("ngIf",t.footerFacet||t.footerTemplate)}}const ye=[[["p-header"]],[["p-footer"]]],xe=function(l,o,t,i){return{"p-multiselect p-component":!0,"p-multiselect-open":l,"p-multiselect-chip":o,"p-focus":t,"p-disabled":i}},Se=function(l,o){return{"p-placeholder":l,"p-multiselect-label-empty":o}},Ce=function(){return{"p-multiselect-trigger":!0}},Te=["p-header","p-footer"],ke={provide:w.JU,useExisting:(0,e.Gpc)(()=>C),multi:!0};let we=(()=>{class l{constructor(){this.onClick=new e.vpe,this.onKeydown=new e.vpe}onOptionClick(t){this.onClick.emit({originalEvent:t,option:this.option})}onOptionKeydown(t){this.onKeydown.emit({originalEvent:t,option:this.option})}}return l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["p-multiSelectItem"]],hostAttrs:[1,"p-element"],inputs:{option:"option",selected:"selected",label:"label",disabled:"disabled",itemSize:"itemSize",template:"template"},outputs:{onClick:"onClick",onKeydown:"onKeydown"},decls:6,vars:20,consts:[["pRipple","",1,"p-multiselect-item",3,"ngStyle","ngClass","click","keydown"],[1,"p-checkbox","p-component"],[1,"p-checkbox-box",3,"ngClass"],[1,"p-checkbox-icon",3,"ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,i){1&t&&(e.TgZ(0,"li",0),e.NdJ("click",function(s){return i.onOptionClick(s)})("keydown",function(s){return i.onOptionKeydown(s)}),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"span",3),e.qZA()(),e.YNc(4,M,2,1,"span",4),e.YNc(5,O,1,0,"ng-container",5),e.qZA()),2&t&&(e.Q6J("ngStyle",e.VKq(9,x,i.itemSize+"px"))("ngClass",e.WLB(11,L,i.selected,i.disabled)),e.uIk("aria-label",i.label)("tabindex",i.disabled?null:"0"),e.xp6(2),e.Q6J("ngClass",e.VKq(14,I,i.selected)),e.xp6(1),e.Q6J("ngClass",e.VKq(16,S,i.selected)),e.xp6(1),e.Q6J("ngIf",!i.template),e.xp6(1),e.Q6J("ngTemplateOutlet",i.template)("ngTemplateOutletContext",e.VKq(18,f,i.option)))},dependencies:[b.H,d.PC,d.mk,d.O5,d.tP],encapsulation:2}),l})(),C=(()=>{class l{constructor(t,i,n,s,a,r){this.el=t,this.renderer=i,this.cd=n,this.filterService=s,this.config=a,this.overlayService=r,this.filter=!0,this.displaySelectedLabel=!0,this.maxSelectedLabels=3,this.selectedItemsLabel="ellipsis",this.showToggleAll=!0,this.emptyFilterMessage="",this.emptyMessage="",this.resetFilterOnHide=!1,this.dropdownIcon="pi pi-chevron-down",this.optionGroupChildren="items",this.showHeader=!0,this.autoZIndex=!0,this.baseZIndex=0,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.filterMatchMode="contains",this.tooltip="",this.tooltipPosition="right",this.tooltipPositionStyle="absolute",this.autofocusFilter=!0,this.display="comma",this.autocomplete="on",this.showClear=!1,this.onChange=new e.vpe,this.onFilter=new e.vpe,this.onFocus=new e.vpe,this.onBlur=new e.vpe,this.onClick=new e.vpe,this.onClear=new e.vpe,this.onPanelShow=new e.vpe,this.onPanelHide=new e.vpe,this.scrollHeight="200px",this.onModelChange=()=>{},this.onModelTouched=()=>{}}set defaultLabel(t){this._defaultLabel=t,this.updateLabel()}get defaultLabel(){return this._defaultLabel}set placeholder(t){this._placeholder=t,this.updateLabel()}get placeholder(){return this._placeholder}get options(){return this._options}set options(t){this._options=t,this.updateLabel()}get filterValue(){return this._filterValue}set filterValue(t){this._filterValue=t,this.activateFilter()}ngOnInit(){this.updateLabel()}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":default:this.itemTemplate=t.template;break;case"group":this.groupTemplate=t.template;break;case"selectedItems":this.selectedItemsTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"emptyfilter":this.emptyFilterTemplate=t.template;break;case"empty":this.emptyTemplate=t.template;break;case"footer":this.footerTemplate=t.template}})}ngAfterViewInit(){this.overlayVisible&&this.show()}ngAfterViewChecked(){this.filtered&&(this.alignOverlay(),this.filtered=!1)}getOptionLabel(t){return this.optionLabel?u.gb.resolveFieldData(t,this.optionLabel):null!=t.label?t.label:t}getOptionValue(t){return this.optionValue?u.gb.resolveFieldData(t,this.optionValue):this.optionLabel||void 0===t.value?t:t.value}getOptionGroupLabel(t){return this.optionGroupLabel?u.gb.resolveFieldData(t,this.optionGroupLabel):null!=t.label?t.label:t}getOptionGroupChildren(t){return this.optionGroupChildren?u.gb.resolveFieldData(t,this.optionGroupChildren):t.items}isOptionDisabled(t){return(this.optionDisabled?u.gb.resolveFieldData(t,this.optionDisabled):void 0!==t.disabled&&t.disabled)||this.maxSelectionLimitReached&&!this.isSelected(t)}writeValue(t){this.value=t,this.updateLabel(),this.updateFilledState(),this.checkSelectionLimit(),this.cd.markForCheck()}checkSelectionLimit(){this.maxSelectionLimitReached=!(!this.selectionLimit||!this.value||this.value.length!==this.selectionLimit)}updateFilledState(){this.filled=this.value&&this.value.length>0}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionClick(t){let i=t.option;if(this.isOptionDisabled(i))return;let n=this.getOptionValue(i),s=this.findSelectionIndex(n);-1!=s?(this.value=this.value.filter((a,r)=>r!=s),this.selectionLimit&&(this.maxSelectionLimitReached=!1)):((!this.selectionLimit||!this.value||this.value.length<this.selectionLimit)&&(this.value=[...this.value||[],n]),this.checkSelectionLimit()),this.onModelChange(this.value),this.onChange.emit({originalEvent:t.originalEvent,value:this.value,itemValue:n}),this.updateLabel(),this.updateFilledState()}isSelected(t){return-1!=this.findSelectionIndex(this.getOptionValue(t))}findSelectionIndex(t){let i=-1;if(this.value)for(let n=0;n<this.value.length;n++)if(u.gb.equals(this.value[n],t,this.dataKey)){i=n;break}return i}get toggleAllDisabled(){let t=this.optionsToRender;if(!t||0===t.length)return!0;for(let i of t)if(!this.isOptionDisabled(i))return!1;return!0}toggleAll(t){this.disabled||this.toggleAllDisabled||this.readonly||(this.allChecked?this.uncheckAll():this.checkAll(),this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.updateFilledState(),this.updateLabel(),t.preventDefault())}checkAll(){let i=[];this.optionsToRender.forEach(n=>{if(this.group){let s=this.getOptionGroupChildren(n);s&&s.forEach(a=>{let r=this.isOptionDisabled(a);(!r||r&&this.isSelected(a))&&i.push(this.getOptionValue(a))})}else{let s=this.isOptionDisabled(n);(!s||s&&this.isSelected(n))&&i.push(this.getOptionValue(n))}}),this.value=i}uncheckAll(){let i=[];this.optionsToRender.forEach(n=>{this.group?n.items&&n.items.forEach(s=>{this.isOptionDisabled(s)&&this.isSelected(s)&&i.push(this.getOptionValue(s))}):this.isOptionDisabled(n)&&this.isSelected(n)&&i.push(this.getOptionValue(n))}),this.value=i}show(){this.overlayVisible||(this.overlayVisible=!0,this.preventDocumentDefault=!0,this.cd.markForCheck())}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}onOverlayAnimationStart(t){switch(t.toState){case"visible":this.overlay=t.element,this.appendOverlay(),this.autoZIndex&&u.P9.set("overlay",this.overlay,this.baseZIndex+this.config.zIndex.overlay),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.filterInputChild&&this.filterInputChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&this.filterInputChild.nativeElement.focus()),this.onPanelShow.emit();break;case"void":this.onOverlayHide()}}onOverlayAnimationEnd(t){"void"===t.toState&&u.P9.clear(t.element)}appendOverlay(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.overlay):c.p.appendChild(this.overlay,this.appendTo),this.overlay.style.minWidth||(this.overlay.style.minWidth=c.p.getWidth(this.containerViewChild.nativeElement)+"px"))}restoreOverlayAppend(){this.overlay&&this.appendTo&&this.el.nativeElement.appendChild(this.overlay)}alignOverlay(){this.overlay&&(this.appendTo?c.p.absolutePosition(this.overlay,this.containerViewChild.nativeElement):c.p.relativePosition(this.overlay,this.containerViewChild.nativeElement))}hide(){this.overlayVisible=!1,this.unbindDocumentClickListener(),this.resetFilterOnHide&&(this.filterInputChild.nativeElement.value="",this._filterValue=null,this._filteredOptions=null),this.onPanelHide.emit(),this.cd.markForCheck()}close(t){this.hide(),t.preventDefault(),t.stopPropagation()}clear(t){this.value=null,this.updateLabel(),this.updateFilledState(),this.onClear.emit(),this.onModelChange(this.value),t.stopPropagation()}onMouseclick(t,i){this.disabled||this.readonly||t.target.isSameNode(this.accessibleViewChild.nativeElement)||(this.onClick.emit(t),!this.isOverlayClick(t)&&!c.p.hasClass(t.target,"p-multiselect-token-icon")&&(this.overlayVisible?this.hide():(i.focus(),this.show())))}removeChip(t,i){this.value=this.value.filter(n=>!u.gb.equals(n,t,this.dataKey)),this.onModelChange(this.value),this.checkSelectionLimit(),this.onChange.emit({originalEvent:i,value:this.value,itemValue:t}),this.updateLabel(),this.updateFilledState()}isOverlayClick(t){let i=t.target;return!!this.overlay&&(this.overlay.isSameNode(i)||this.overlay.contains(i))}isOutsideClicked(t){return!(this.el.nativeElement.isSameNode(t.target)||this.el.nativeElement.contains(t.target)||this.isOverlayClick(t))}onInputFocus(t){this.focus=!0,this.onFocus.emit({originalEvent:t})}onInputBlur(t){this.focus=!1,this.onBlur.emit({originalEvent:t}),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onOptionKeydown(t){if(!this.readonly)switch(t.originalEvent.which){case 40:var i=this.findNextItem(t.originalEvent.target.parentElement);i&&i.focus(),t.originalEvent.preventDefault();break;case 38:var n=this.findPrevItem(t.originalEvent.target.parentElement);n&&n.focus(),t.originalEvent.preventDefault();break;case 13:this.onOptionClick(t),t.originalEvent.preventDefault();break;case 9:this.hide()}}findNextItem(t){let i=t.nextElementSibling;return i?c.p.hasClass(i.children[0],"p-disabled")||c.p.isHidden(i.children[0])||c.p.hasClass(i,"p-multiselect-item-group")?this.findNextItem(i):i.children[0]:null}findPrevItem(t){let i=t.previousElementSibling;return i?c.p.hasClass(i.children[0],"p-disabled")||c.p.isHidden(i.children[0])||c.p.hasClass(i,"p-multiselect-item-group")?this.findPrevItem(i):i.children[0]:null}onKeydown(t){switch(t.which){case 40:!this.overlayVisible&&t.altKey&&(this.show(),t.preventDefault());break;case 32:this.overlayVisible||(this.show(),t.preventDefault());break;case 27:this.hide()}}updateLabel(){if(this.value&&this.options&&this.value.length&&this.displaySelectedLabel){let t="";for(let i=0;i<this.value.length;i++){let n=this.findLabelByValue(this.value[i]);n&&(t.length>0&&(t+=", "),t+=n)}if(this.value.length<=this.maxSelectedLabels||"ellipsis"===this.selectedItemsLabel)this.valuesAsString=t;else{let i=/{(.*?)}/;this.valuesAsString=i.test(this.selectedItemsLabel)?this.selectedItemsLabel.replace(this.selectedItemsLabel.match(i)[0],this.value.length+""):this.selectedItemsLabel}}else this.valuesAsString=this.placeholder||this.defaultLabel}findLabelByValue(t){if(this.group){let i=null;for(let n=0;n<this.options.length;n++){let s=this.getOptionGroupChildren(this.options[n]);if(s&&(i=this.searchLabelByValue(t,s),i))break}return i}return this.searchLabelByValue(t,this.options)}searchLabelByValue(t,i){let n=null;for(let s=0;s<i.length;s++){let a=i[s],r=this.getOptionValue(a);if(null==t&&null==r||u.gb.equals(t,r,this.dataKey)){n=this.getOptionLabel(a);break}}return n}get allChecked(){let t=this.optionsToRender;if(!t||0===t.length)return!1;{let i=0,n=0,s=0,a=this.group?0:this.optionsToRender.length;for(let r of t)if(this.group)for(let g of this.getOptionGroupChildren(r)){let v=this.isOptionDisabled(g),T=this.isSelected(g);if(v)T?i++:n++;else{if(!T)return!1;s++}a++}else{let g=this.isOptionDisabled(r),v=this.isSelected(r);if(g)v?i++:n++;else{if(!v)return!1;s++}}return a===i||a===s||s&&a===s+n+i}}get optionsToRender(){return this._filteredOptions||this.options}get emptyOptions(){let t=this.optionsToRender;return!t||0===t.length}get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(_.ws.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(_.ws.EMPTY_FILTER_MESSAGE)}hasFilter(){return this._filterValue&&this._filterValue.trim().length>0}onFilterInputChange(t){this._filterValue=t.target.value,this.activateFilter(),this.onFilter.emit({originalEvent:t,filter:this._filterValue}),this.cd.detectChanges(),this.alignOverlay()}activateFilter(){if(this.hasFilter()&&this._options){let t=(this.filterBy||this.optionLabel||"label").split(",");if(this.group){let i=[];for(let n of this.options){let s=this.filterService.filter(this.getOptionGroupChildren(n),t,this.filterValue,this.filterMatchMode,this.filterLocale);s&&s.length&&i.push({...n,[this.optionGroupChildren]:s})}this._filteredOptions=i}else this._filteredOptions=this.filterService.filter(this.options,t,this._filterValue,this.filterMatchMode,this.filterLocale)}else this._filteredOptions=null}onHeaderCheckboxFocus(){this.headerCheckboxFocus=!0}onHeaderCheckboxBlur(){this.headerCheckboxFocus=!1}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","click",i=>{!this.preventDocumentDefault&&this.isOutsideClicked(i)&&this.hide(),this.preventDocumentDefault=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}onWindowResize(){c.p.isAndroid()||this.hide()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new c.V(this.containerViewChild.nativeElement,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.overlay=null,this.onModelTouched()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&u.P9.clear(this.overlay),this.restoreOverlayAppend(),this.onOverlayHide()}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(_.iZ),e.Y36(_.b4),e.Y36(_.F0))},l.\u0275cmp=e.Xpm({type:l,selectors:[["p-multiSelect"]],contentQueries:function(t,i,n){if(1&t&&(e.Suo(n,_.$_,5),e.Suo(n,_.h4,5),e.Suo(n,_.jx,4)),2&t){let s;e.iGM(s=e.CRH())&&(i.footerFacet=s.first),e.iGM(s=e.CRH())&&(i.headerFacet=s.first),e.iGM(s=e.CRH())&&(i.templates=s)}},viewQuery:function(t,i){if(1&t&&(e.Gf(E,5),e.Gf(F,5),e.Gf(A,5)),2&t){let n;e.iGM(n=e.CRH())&&(i.containerViewChild=n.first),e.iGM(n=e.CRH())&&(i.filterInputChild=n.first),e.iGM(n=e.CRH())&&(i.accessibleViewChild=n.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:6,hostBindings:function(t,i){2&t&&e.ekj("p-inputwrapper-filled",i.filled)("p-inputwrapper-focus",i.focus||i.overlayVisible)("p-multiselect-clearable",i.showClear&&!i.disabled)},inputs:{style:"style",styleClass:"styleClass",panelStyle:"panelStyle",panelStyleClass:"panelStyleClass",inputId:"inputId",disabled:"disabled",readonly:"readonly",group:"group",filter:"filter",filterPlaceHolder:"filterPlaceHolder",filterLocale:"filterLocale",overlayVisible:"overlayVisible",tabindex:"tabindex",appendTo:"appendTo",dataKey:"dataKey",name:"name",label:"label",ariaLabelledBy:"ariaLabelledBy",displaySelectedLabel:"displaySelectedLabel",maxSelectedLabels:"maxSelectedLabels",selectionLimit:"selectionLimit",selectedItemsLabel:"selectedItemsLabel",showToggleAll:"showToggleAll",emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",resetFilterOnHide:"resetFilterOnHide",dropdownIcon:"dropdownIcon",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",showHeader:"showHeader",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",filterBy:"filterBy",virtualScroll:"virtualScroll",itemSize:"itemSize",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaFilterLabel:"ariaFilterLabel",filterMatchMode:"filterMatchMode",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",autofocusFilter:"autofocusFilter",display:"display",autocomplete:"autocomplete",showClear:"showClear",scrollHeight:"scrollHeight",defaultLabel:"defaultLabel",placeholder:"placeholder",options:"options",filterValue:"filterValue"},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onClear:"onClear",onPanelShow:"onPanelShow",onPanelHide:"onPanelHide"},features:[e._Bn([ke])],ngContentSelectors:Te,decls:13,vars:34,consts:[[3,"ngClass","ngStyle","click"],["container",""],[1,"p-hidden-accessible"],["type","text","readonly","readonly","aria-haspopup","listbox","role","listbox",3,"disabled","focus","blur","keydown"],["in",""],[1,"p-multiselect-label-container",3,"pTooltip","tooltipPosition","positionStyle","tooltipStyleClass"],[1,"p-multiselect-label",3,"ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-multiselect-clear-icon pi pi-times",3,"click",4,"ngIf"],[3,"ngClass"],[1,"p-multiselect-trigger-icon",3,"ngClass"],["onOverlayAnimationEnd","",3,"ngClass","ngStyle","class","keydown","click",4,"ngIf"],["class","p-multiselect-token",4,"ngFor","ngForOf"],[1,"p-multiselect-token"],["token",""],[1,"p-multiselect-token-label"],["class","p-multiselect-token-icon pi pi-times-circle",3,"click",4,"ngIf"],[1,"p-multiselect-token-icon","pi","pi-times-circle",3,"click"],[1,"p-multiselect-clear-icon","pi","pi-times",3,"click"],["onOverlayAnimationEnd","",3,"ngClass","ngStyle","keydown","click"],["class","p-multiselect-header",4,"ngIf"],[1,"p-multiselect-items-wrapper"],["role","listbox","aria-multiselectable","true",1,"p-multiselect-items","p-component",3,"ngClass"],["itemslist",""],["class","p-multiselect-footer",4,"ngIf"],[1,"p-multiselect-header"],[4,"ngTemplateOutlet"],["class","p-checkbox p-component",3,"ngClass",4,"ngIf"],["class","p-multiselect-filter-container",4,"ngIf"],["type","button","pRipple","",1,"p-multiselect-close","p-link",3,"click"],[1,"p-multiselect-close-icon","pi","pi-times"],[1,"p-checkbox","p-component",3,"ngClass"],["type","checkbox","readonly","readonly",3,"checked","disabled","focus","blur","keydown.space"],["role","checkbox",1,"p-checkbox-box",3,"ngClass","click"],[1,"p-checkbox-icon",3,"ngClass"],[1,"p-multiselect-filter-container"],["type","text","role","textbox",1,"p-multiselect-filter","p-inputtext","p-component",3,"value","disabled","input"],["filterInput",""],[1,"p-multiselect-filter-icon","pi","pi-search"],["ngFor","",3,"ngForOf"],[1,"p-multiselect-item-group"],[4,"ngIf","ngIfElse"],["virtualScrollList",""],["class","p-multiselect-empty-message",4,"ngIf"],[3,"option","selected","label","disabled","template","onClick","onKeydown"],[3,"ngStyle","itemSize",4,"ngIf"],[3,"ngStyle","itemSize"],["viewport",""],[4,"cdkVirtualFor","cdkVirtualForOf"],[3,"option","selected","label","disabled","template","itemSize","onClick","onKeydown"],[1,"p-multiselect-empty-message"],["emptyFilter",""],["empty",""],[1,"p-multiselect-footer"]],template:function(t,i){if(1&t){const n=e.EpF();e.F$t(ye),e.TgZ(0,"div",0,1),e.NdJ("click",function(a){e.CHM(n);const r=e.MAs(4);return e.KtG(i.onMouseclick(a,r))}),e.TgZ(2,"div",2)(3,"input",3,4),e.NdJ("focus",function(a){return i.onInputFocus(a)})("blur",function(a){return i.onInputBlur(a)})("keydown",function(a){return i.onKeydown(a)}),e.qZA()(),e.TgZ(5,"div",5)(6,"div",6),e.YNc(7,H,3,2,"ng-container",7),e.YNc(8,K,1,0,"ng-container",8),e.qZA(),e.YNc(9,P,1,0,"i",9),e.qZA(),e.TgZ(10,"div",10),e._UZ(11,"span",11),e.qZA(),e.YNc(12,be,9,20,"div",12),e.qZA()}2&t&&(e.Tol(i.styleClass),e.Q6J("ngClass",e.l5B(23,xe,i.overlayVisible,"chip"===i.display,i.focus,i.disabled))("ngStyle",i.style),e.xp6(3),e.Q6J("disabled",i.disabled),e.uIk("label",i.label)("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("aria-expanded",i.overlayVisible)("aria-labelledby",i.ariaLabelledBy),e.xp6(2),e.Q6J("pTooltip",i.tooltip)("tooltipPosition",i.tooltipPosition)("positionStyle",i.tooltipPositionStyle)("tooltipStyleClass",i.tooltipStyleClass),e.xp6(1),e.Q6J("ngClass",e.WLB(28,Se,i.valuesAsString===(i.defaultLabel||i.placeholder),!(null!=i.valuesAsString&&0!==i.valuesAsString.length||null!=i.placeholder&&0!==i.placeholder.length))),e.xp6(1),e.Q6J("ngIf",!i.selectedItemsTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",i.selectedItemsTemplate)("ngTemplateOutletContext",e.VKq(31,f,i.value)),e.xp6(1),e.Q6J("ngIf",null!=i.value&&i.filled&&!i.disabled&&i.showClear),e.xp6(1),e.Q6J("ngClass",e.DdM(33,Ce)),e.xp6(1),e.Q6J("ngClass",i.dropdownIcon),e.xp6(1),e.Q6J("ngIf",i.overlayVisible))},dependencies:[we,m.N7,d.mk,d.PC,y.u,d.O5,d.sg,d.tP,b.H,m.xd,m.x0],styles:[".p-multiselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-multiselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-multiselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer}.p-multiselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect .p-multiselect-panel{min-width:100%}.p-multiselect-panel{position:absolute;top:0;left:0}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{margin:0;padding:0;list-style-type:none}.p-multiselect-item{cursor:pointer;display:flex;align-items:center;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-multiselect-header{display:flex;align-items:center;justify-content:space-between}.p-multiselect-filter-container{position:relative;flex:1 1 auto}.p-multiselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}.p-multiselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-multiselect-clearable{position:relative}\n"],encapsulation:2,data:{animation:[(0,h.X$)("overlayAnimation",[(0,h.eR)(":enter",[(0,h.oB)({opacity:0,transform:"scaleY(0.8)"}),(0,h.jt)("{{showTransitionParams}}")]),(0,h.eR)(":leave",[(0,h.jt)("{{hideTransitionParams}}",(0,h.oB)({opacity:0}))])])]},changeDetection:0}),l})(),Me=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[d.ez,_.m8,m.Cl,y.z,b.T],_.m8,m.Cl]}),l})()}}]);