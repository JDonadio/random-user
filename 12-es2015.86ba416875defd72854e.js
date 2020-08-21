(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"82nU":function(t,n,e){"use strict";e.r(n),e.d(n,"MainPageModule",(function(){return B}));var s=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),o=e("tyNb"),a=e("mrSG"),c=e("quSY"),b=e("2hxB"),l=e("AcyG"),u=e("dHa5"),h=e("mRtO"),d=e("fXoL");let f=(()=>{class t{constructor(){this.handleClick=new d.o}onClick(t){this.handleClick.emit(t)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d.Fb({type:t,selectors:[["user-row"]],inputs:{user:"user"},outputs:{handleClick:"handleClick"},decls:11,vars:6,consts:[[3,"click"],["slot","start"],[3,"src"],["slot","end"],["name","location-outline","color","secondary"]],template:function(t,n){1&t&&(d.Ob(0,"ion-item",0),d.Wb("click",(function(){return n.onClick(n.user)})),d.Ob(1,"ion-avatar",1),d.Mb(2,"img",2),d.Nb(),d.Ob(3,"ion-label"),d.Ob(4,"h2"),d.hc(5),d.Nb(),d.Ob(6,"h3"),d.hc(7),d.Nb(),d.Nb(),d.Ob(8,"ion-note",3),d.Mb(9,"ion-icon",4),d.hc(10),d.Nb(),d.Nb()),2&t&&(d.Bb(2),d.bc("src",n.user.picture.thumbnail,d.ec),d.Bb(3),d.ic(n.user.name.title),d.Bb(2),d.kc("",n.user.name.first," ",n.user.name.last,""),d.Bb(3),d.kc(" ",n.user.location.city,", ",n.user.location.country," "))},directives:[r.l,r.c,r.m,r.o,r.k],styles:[""]}),t})(),p=(()=>{class t{constructor(){this.name="dots"}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d.Fb({type:t,selectors:[["spinner"]],inputs:{name:"name"},decls:2,vars:1,consts:[[1,"spinner-container"],[3,"name"]],template:function(t,n){1&t&&(d.Ob(0,"div",0),d.Mb(1,"ion-spinner",1),d.Nb()),2&t&&(d.Bb(1),d.bc("name",n.name))},directives:[r.q],styles:[".spinner-container[_ngcontent-%COMP%]{width:100%;height:60px;display:flex;justify-content:center;align-items:center}"]}),t})();function g(t,n){if(1&t){const t=d.Pb();d.Ob(0,"ion-buttons",5),d.Ob(1,"ion-button",6),d.Wb("click",(function(){return d.dc(t),d.Yb().reset()})),d.Mb(2,"ion-icon",7),d.Nb(),d.Nb()}}function m(t,n){1&t&&(d.Ob(0,"div",8),d.hc(1," No data to show "),d.Nb())}function w(t,n){if(1&t){const t=d.Pb();d.Ob(0,"div",9),d.Wb("click",(function(){return d.dc(t),d.Yb().findUsers()})),d.hc(1,"Try Again"),d.Nb()}}function k(t,n){if(1&t){const t=d.Pb();d.Ob(0,"user-row",12),d.Wb("handleClick",(function(n){return d.dc(t),d.Yb(2).openUserDetais(n)})),d.Nb()}2&t&&d.bc("user",n.$implicit)}function O(t,n){if(1&t&&(d.Ob(0,"ion-list",10),d.gc(1,k,1,1,"user-row",11),d.Nb()),2&t){const t=d.Yb();d.Bb(1),d.bc("ngForOf",t.state.users)}}function y(t,n){1&t&&d.Mb(0,"spinner")}function v(t,n){if(1&t){const t=d.Pb();d.Ob(0,"div",9),d.Wb("click",(function(){return d.dc(t),d.Yb().showMore()})),d.hc(1,"Show More"),d.Nb()}}const C=[{path:"",component:(()=>{class t{constructor(t,n,e){this.router=t,this.route=n,this.store=e,this.state=Object(b.b)({}),this.pageCounter=1,this.subscription=new c.a}ngOnInit(){this.findUsers(),this.subscription.add(this.usersState$.subscribe(t=>{this.state=t}))}get showResetButton(){return this.state&&!this.state.isLoading}get showSpinner(){return this.state&&this.state.isLoading}get totalUsers(){var t;return this.state&&(null===(t=this.state.users)||void 0===t?void 0:t.length)||".."}openUserDetais(t){this.store.dispatch(new h.e({user:t})),this.router.navigate(["user-details"],{relativeTo:this.route})}findUsers(){this.store.dispatch(new h.a({page:this.pageCounter}))}showMore(){this.pageCounter++,this.store.dispatch(new h.a({page:this.pageCounter}))}reset(){this.pageCounter=1,this.store.dispatch(new h.d)}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(d.Lb(o.g),d.Lb(o.a),d.Lb(l.f))},t.\u0275cmp=d.Fb({type:t,selectors:[["app-main"]],decls:11,vars:7,consts:[["slot","primary",4,"ngIf"],["class","main__no-data",4,"ngIf"],["class","main__clear-button",3,"click",4,"ngIf"],["lines","none",4,"ngIf"],[4,"ngIf"],["slot","primary"],[3,"click"],["slot","icon-only","color","tertiary","name","refresh-outline"],[1,"main__no-data"],[1,"main__clear-button",3,"click"],["lines","none"],[3,"user","handleClick",4,"ngFor","ngForOf"],[3,"user","handleClick"]],template:function(t,n){1&t&&(d.Ob(0,"ion-header"),d.Ob(1,"ion-toolbar"),d.Ob(2,"ion-title"),d.hc(3),d.Nb(),d.gc(4,g,3,0,"ion-buttons",0),d.Nb(),d.Nb(),d.Ob(5,"ion-content"),d.gc(6,m,2,0,"div",1),d.gc(7,w,2,0,"div",2),d.gc(8,O,2,1,"ion-list",3),d.gc(9,y,1,0,"spinner",4),d.gc(10,v,2,0,"div",2),d.Nb()),2&t&&(d.Bb(3),d.jc("Users ","("+n.totalUsers+")",""),d.Bb(1),d.bc("ngIf",n.showResetButton),d.Bb(2),d.bc("ngIf",!n.state||n.state.hasError),d.Bb(1),d.bc("ngIf",(!n.state||n.state.hasError)&&!n.showSpinner),d.Bb(1),d.bc("ngIf",n.state&&n.state.users),d.Bb(1),d.bc("ngIf",n.showSpinner),d.Bb(1),d.bc("ngIf",n.state.users[0]&&!n.showSpinner))},directives:[r.j,r.s,r.r,s.j,r.i,r.g,r.f,r.k,r.n,s.i,f,p],styles:["@-webkit-keyframes slide-right{0%{transform:translateX(-2000px)}to{transform:translateX(0)}}@keyframes slide-right{0%{transform:translateX(-2000px)}to{transform:translateX(0)}}@-webkit-keyframes slide-left{0%{transform:translateX(2000px)}to{transform:translateX(0)}}@keyframes slide-left{0%{transform:translateX(2000px)}to{transform:translateX(0)}}ion-list[_ngcontent-%COMP%]{-webkit-animation:slide-right .6s 1;animation:slide-right .6s 1}.main__no-data[_ngcontent-%COMP%]{text-align:center;margin:40px;color:#e91051;border:2px solid #e91051;border-radius:4px;padding:40px}.main__clear-button[_ngcontent-%COMP%]{font-weight:600;text-align:center;color:#850718;padding:1.5rem 0;-webkit-animation:slide-left .6s 1;animation:slide-left .6s 1}"]}),Object(a.b)([Object(l.d)(u.a)],t.prototype,"usersState$",void 0),t})()},{path:"user-details",loadChildren:()=>e.e(13).then(e.bind(null,"0xcC")).then(t=>t.UserDetailsPageModule)}];let N=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(n){return new(n||t)},imports:[[o.i.forChild(C)],o.i]}),t})(),B=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(n){return new(n||t)},imports:[[s.b,i.a,r.t,N]]}),t})()}}]);