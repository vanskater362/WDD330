function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{X3zk:function(n,t,e){"use strict";e.r(t),e.d(t,"LoginPageModule",(function(){return h}));var o=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),a=e("tyNb"),c=e("SxV6"),l=e("fXoL"),s=e("XOPY");function b(n,t){1&n&&(l.Mb(0,"ion-item",18),l.Mb(1,"ion-label",19),l.ic(2,"Should be a valid email address."),l.Lb(),l.Lb())}function g(n,t){1&n&&(l.Mb(0,"ion-item",18),l.Mb(1,"ion-label",19),l.ic(2,"Should be 6 characters long."),l.Lb(),l.Lb())}var d,u,f,m=[{path:"",component:(d=function(){function n(t,e,o,i){_classCallCheck(this,n),this.authenticationService=t,this.router=e,this.loadingCtrl=o,this.alertCtrl=i,this.isLoading=!1,this.authenticationService.currentUserValue&&this.router.navigate(["/mileage-tracker"])}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"authenticate",value:function(n,t){var e=this;this.isLoading=!0,this.loadingCtrl.create({keyboardClose:!0,message:"Logging in..."}).then((function(o){o.present(),e.authenticationService.login(n,t).pipe(Object(c.a)()).subscribe((function(n){o.dismiss(),document.location.href="/mileage-tracker"}),(function(n){o.dismiss(),e.showAlert("Authentication Failed.")}))}))}},{key:"showAlert",value:function(n){this.alertCtrl.create({header:"Authentication failed",message:n,buttons:["Okay"]}).then((function(n){return n.present()}))}},{key:"onSubmit",value:function(n){n.valid&&(this.authenticate(n.value.email,n.value.password),n.reset())}}]),n}(),d.\u0275fac=function(n){return new(n||d)(l.Jb(s.a),l.Jb(a.g),l.Jb(r.v),l.Jb(r.a))},d.\u0275cmp=l.Db({type:d,selectors:[["app-login"]],decls:30,vars:3,consts:[["color","primary"],[1,"login-form",3,"ngSubmit"],["f","ngForm"],[1,"ion-no-padding"],["size","12",1,"ion-no-padding"],["size","10","offset","1"],["position","floating"],["type","text","name","email","autofocus","true","ngModel","","required",""],["emailCtrl","ngModel"],["lines","none",4,"ngIf"],[1,"margin-top-5"],["type","password","name","password","ngModel","","required",""],["passwordCtrl","ngModel"],[1,"forgot-box","ion-text-right"],[1,"ion-text-center"],["type","submit","color","secondary","expand","block",3,"disabled"],[1,"btn-register"],["routerLink","/login/register",1,"secondary-item-text"],["lines","none"],[1,"error-danger"]],template:function(n,t){if(1&n){var e=l.Nb();l.Mb(0,"ion-content",0),l.Mb(1,"form",1,2),l.Ub("ngSubmit",(function(){l.ec(e);var n=l.dc(2);return t.onSubmit(n)})),l.Mb(3,"ion-grid",3),l.Mb(4,"ion-row"),l.Mb(5,"ion-col",4),l.Mb(6,"h1"),l.ic(7,"Orginizd Logo here"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(8,"ion-grid"),l.Mb(9,"ion-row"),l.Mb(10,"ion-col",5),l.Mb(11,"ion-item"),l.Mb(12,"ion-label",6),l.ic(13,"Username"),l.Lb(),l.Kb(14,"ion-input",7,8),l.Lb(),l.hc(16,b,3,0,"ion-item",9),l.Mb(17,"ion-item",10),l.Mb(18,"ion-label",6),l.ic(19,"Password"),l.Lb(),l.Kb(20,"ion-input",11,12),l.Lb(),l.hc(22,g,3,0,"ion-item",9),l.Kb(23,"div",13),l.Mb(24,"div",14),l.Mb(25,"ion-button",15),l.ic(26," LOGIN "),l.Lb(),l.Lb(),l.Mb(27,"div",16),l.Mb(28,"a",17),l.ic(29," REGISTER "),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()}if(2&n){var o=l.dc(2),i=l.dc(15),r=l.dc(21);l.zb(16),l.bc("ngIf",!i.valid&&i.touched),l.zb(6),l.bc("ngIf",!r.valid&&r.touched),l.zb(3),l.bc("disabled",!o.valid)}},directives:[r.e,i.i,i.e,i.f,r.h,r.q,r.d,r.l,r.n,r.k,r.z,i.d,i.g,i.h,o.j,r.c,a.i,r.y],styles:[".login-form[_ngcontent-%COMP%]{top:50%;left:50%;position:absolute;text-align:center;width:100%;transform:translate(-50%,-50%)}.login-form[_ngcontent-%COMP%]   .primary-item[_ngcontent-%COMP%]{--background:var(--ion-color-primary);--background-focused:var(--ion-color-primary)}.login-form[_ngcontent-%COMP%]   .secondary-item-text[_ngcontent-%COMP%]{color:var(--ion-color-primary-contrast)}.login-form[_ngcontent-%COMP%]   .error-danger[_ngcontent-%COMP%]{color:var(--ion-color-danger)}.login-form[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%]{padding-top:10px}.login-form[_ngcontent-%COMP%]   .margin-top-5[_ngcontent-%COMP%]{margin-top:5px}.login-form[_ngcontent-%COMP%]   .forgot-box[_ngcontent-%COMP%]{padding:10px 0}.login-form[_ngcontent-%COMP%]   .forgot-box[_ngcontent-%COMP%]   .btn-forgot[_ngcontent-%COMP%]{color:var(--ion-color-primary-contrast)}@media (prefers-color-scheme:dark){.login-form[_ngcontent-%COMP%]   .forgot-box[_ngcontent-%COMP%]   .btn-forgot[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .secondary-item-text[_ngcontent-%COMP%]{color:var(--ion-color-basic-contrast)}}"]}),d)},{path:"register",loadChildren:function(){return e.e(0).then(e.bind(null,"dymE")).then((function(n){return n.RegisterPageModule}))}}],p=((f=function n(){_classCallCheck(this,n)}).\u0275mod=l.Hb({type:f}),f.\u0275inj=l.Gb({factory:function(n){return new(n||f)},imports:[[a.j.forChild(m)],a.j]}),f),h=((u=function n(){_classCallCheck(this,n)}).\u0275mod=l.Hb({type:u}),u.\u0275inj=l.Gb({factory:function(n){return new(n||u)},imports:[[o.b,i.b,r.t,p]]}),u)}}]);