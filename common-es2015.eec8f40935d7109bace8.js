(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=`${t*e/n-t}ms`,r=2*Math.PI*e/n;return{r:5,style:{top:`${9*Math.sin(r)}px`,left:`${9*Math.cos(r)}px`,"animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=`${t*i-t}ms`,s=2*Math.PI*i;return{r:5,style:{top:`${9*Math.sin(s)}px`,left:`${9*Math.cos(s)}px`,"animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:`${9-9*e}px`,"animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})}}},KwJk:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a}));const i=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,s=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n)}return!1}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));const i=async(t,e,n,i,r)=>{if(t)return t.attachViewToDom(e,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>s.classList.add(t)),r&&Object.assign(s,r),e.appendChild(s),s.componentOnReady&&await s.componentOnReady(),s},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},Sy5g:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("tk/3"),r=n("AytR"),s=n("2Vo4"),o=n("w1tV"),a=n("fXoL");let c=(()=>{class t{constructor(t){this.http=t,this.tripList=[],this.tripListSubject=new s.a(this.tripList),this.currentTrips=this.tripListSubject.asObservable(),this.headers=(new i.c).set("Content-Type","application/json")}get currentTripsValue(){return this.tripListSubject.value}subMiles(t){return this.http.post(r.a.apiUrl+"/miles/submit",t,{headers:this.headers}).pipe(Object(o.a)())}getTrips(t,e){const n=(new i.d).set("userId",t).set("date",e);return this.http.get(r.a.apiUrl+"/miles/get",{params:n}).pipe(Object(o.a)())}}return t.\u0275fac=function(e){return new(e||t)(a.Qb(i.a))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},XOPY:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("tk/3"),r=n("AytR"),s=n("2Vo4"),o=n("lJxs"),a=n("w1tV"),c=n("fXoL");let l=(()=>{class t{constructor(t){this.http=t,this.headers=(new i.c).set("Content-Type","application/json"),this.currentUserSubject=new s.a(JSON.parse(localStorage.getItem("currentUser"))),this.currentUser=this.currentUserSubject.asObservable()}get currentUserValue(){return this.currentUserSubject.value}login(t,e){return this.http.post(`${r.a.apiUrl}/auth/login`,{email:t,password:e},{headers:this.headers}).pipe(Object(o.a)(t=>(localStorage.setItem("currentUser",JSON.stringify(t)),this.currentUserSubject.next(t),t)))}logout(){localStorage.removeItem("currentUser"),this.currentUserSubject.next(null)}updateUser(t){localStorage.setItem("currentUser",JSON.stringify(t)),this.currentUserSubject.next(t)}register(t){return this.http.post(r.a.apiUrl+"/auth/registerUser",t,{headers:this.headers}).pipe(Object(a.a)())}changePassword(t,e,n){return this.http.post(r.a.apiUrl+"/auth/changePassword",{curPasssword:t,password:e,userId:n}).pipe(Object(a.a)())}resetPassword(t){return this.http.post(r.a.apiUrl+"/auth/resetPassword",{email:t}).pipe(Object(a.a)())}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(i.a))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},dymE:function(t,e,n){"use strict";n.r(e),n.d(e,"RegisterPageModule",(function(){return f}));var i=n("ofXK"),r=n("3Pt+"),s=n("TEn/"),o=n("tyNb"),a=n("fXoL"),c=n("XOPY");function l(t,e){1&t&&(a.Mb(0,"ion-grid"),a.Mb(1,"ion-row"),a.Mb(2,"ion-col"),a.Mb(3,"p"),a.ic(4,"Account activated "),a.Lb(),a.Lb(),a.Lb(),a.Mb(5,"ion-row"),a.Mb(6,"ion-col",6),a.Mb(7,"ion-button",7),a.ic(8," Login "),a.Lb(),a.Lb(),a.Lb(),a.Lb())}function u(t,e){1&t&&(a.Mb(0,"ion-item",20),a.Mb(1,"ion-label",21),a.ic(2,"First Name required."),a.Lb(),a.Lb())}function b(t,e){1&t&&(a.Mb(0,"ion-item",20),a.Mb(1,"ion-label",21),a.ic(2,"Last Name required."),a.Lb(),a.Lb())}function d(t,e){1&t&&(a.Mb(0,"ion-item",20),a.Mb(1,"ion-label",21),a.ic(2,"Should be a valid email address."),a.Lb(),a.Lb())}function p(t,e){1&t&&(a.Mb(0,"ion-item",20),a.Mb(1,"ion-label",21),a.ic(2,"Should be 6 characters long."),a.Lb(),a.Lb())}function h(t,e){if(1&t&&(a.Mb(0,"ion-grid"),a.Mb(1,"ion-row"),a.Mb(2,"ion-col",6),a.Mb(3,"ion-item"),a.Mb(4,"ion-label",8),a.ic(5,"First Name"),a.Lb(),a.Kb(6,"ion-input",9,10),a.Lb(),a.hc(8,u,3,0,"ion-item",11),a.Lb(),a.Mb(9,"ion-col",6),a.Mb(10,"ion-item"),a.Mb(11,"ion-label",8),a.ic(12,"Last Name"),a.Lb(),a.Kb(13,"ion-input",12,13),a.Lb(),a.hc(15,b,3,0,"ion-item",11),a.Lb(),a.Mb(16,"ion-col",6),a.Mb(17,"ion-item"),a.Mb(18,"ion-label",8),a.ic(19,"Email"),a.Lb(),a.Kb(20,"ion-input",14,15),a.Lb(),a.hc(22,d,3,0,"ion-item",11),a.Lb(),a.Mb(23,"ion-col",6),a.Mb(24,"ion-item",16),a.Mb(25,"ion-label",8),a.ic(26,"Password"),a.Lb(),a.Kb(27,"ion-input",17,18),a.Lb(),a.hc(29,p,3,0,"ion-item",11),a.Lb(),a.Lb(),a.Mb(30,"ion-row"),a.Mb(31,"ion-col",6),a.Mb(32,"ion-button",19),a.ic(33," Activate Account "),a.Lb(),a.Lb(),a.Lb(),a.Mb(34,"ion-row"),a.Mb(35,"ion-col",6),a.Mb(36,"ion-button",7),a.ic(37," Login "),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&t){const t=a.dc(7),e=a.dc(14),n=a.dc(21),i=a.dc(28);a.Wb();const r=a.dc(2);a.zb(8),a.bc("ngIf",!t.valid&&t.touched),a.zb(7),a.bc("ngIf",!e.valid&&e.touched),a.zb(7),a.bc("ngIf",!n.valid&&n.touched),a.zb(7),a.bc("ngIf",!i.valid&&i.touched),a.zb(3),a.bc("disabled",!r.valid)}}const g=[{path:"",component:(()=>{class t{constructor(t,e,n){this.authService=t,this.loadingCtrl=e,this.alertCtrl=n,this.isLoading=!1,this.accountSuccess=!1,this.registerData={firstName:"",lastName:"",email:"",password:""},this.accountSuccess=!1}ngOnInit(){this.accountSuccess=!1}ngOnDestroy(){this.registerSub&&this.registerSub.unsubscribe(),this.accountSuccess=!1}onSubmit(t){t.valid&&(this.registerSub&&this.registerSub.unsubscribe(),this.registerData.firstName=t.value.firstName,this.registerData.lastName=t.value.lastName,this.registerData.email=t.value.email,this.registerData.password=t.value.password,this.loadingCtrl.create({keyboardClose:!0,message:"Activating account..."}).then(e=>{e.present(),this.registerSub=this.authService.register(this.registerData).subscribe(n=>{e.dismiss(),this.accountSuccess=!0,t.reset()},t=>{e.dismiss(),this.showAlert(t.error.message)})}))}showAlert(t){this.alertCtrl.create({header:"Activation failed",message:t,buttons:["Okay"]}).then(t=>t.present())}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(c.a),a.Jb(s.v),a.Jb(s.a))},t.\u0275cmp=a.Db({type:t,selectors:[["app-register"]],decls:10,vars:2,consts:[["color","primary"],[1,"register-form",3,"ngSubmit"],["f","ngForm"],[1,"ion-no-padding"],["size","12",1,"ion-no-padding"],[4,"ngIf"],["size","10","offset","1"],["routerLink","/login","expand","full","color","secondary"],["position","floating"],["type","text","name","firstName","ngModel","","required",""],["firstNameCtrl","ngModel"],["lines","none",4,"ngIf"],["type","text","name","lastName","ngModel","","required",""],["lastNameCtrl","ngModel"],["type","text","name","email","ngModel","","required","","email",""],["emailCtrl","ngModel"],[1,"margin-top-5"],["type","password","name","password","ngModel","","required",""],["passwordCtrl","ngModel"],["type","submit","expand","full","color","secondary",3,"disabled"],["lines","none"],[1,"error-danger"]],template:function(t,e){if(1&t){const t=a.Nb();a.Mb(0,"ion-content",0),a.Mb(1,"form",1,2),a.Ub("ngSubmit",(function(){a.ec(t);const n=a.dc(2);return e.onSubmit(n)})),a.Mb(3,"ion-grid",3),a.Mb(4,"ion-row"),a.Mb(5,"ion-col",4),a.Mb(6,"h1"),a.ic(7,"Orignizd Logo Here"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.hc(8,l,9,0,"ion-grid",5),a.hc(9,h,38,5,"ion-grid",5),a.Lb(),a.Lb()}2&t&&(a.zb(8),a.bc("ngIf",e.accountSuccess),a.zb(1),a.bc("ngIf",!e.accountSuccess))},directives:[s.e,r.i,r.e,r.f,s.h,s.q,s.d,i.j,s.c,s.y,o.h,s.l,s.n,s.k,s.z,r.d,r.g,r.h,r.a],styles:[".register-form[_ngcontent-%COMP%]{top:50%;left:50%;position:absolute;text-align:center;width:100%;transform:translate(-50%,-50%)}.register-form[_ngcontent-%COMP%]   .secondary-item-text[_ngcontent-%COMP%]{color:var(--ion-color-primary-contrast)}.register-form[_ngcontent-%COMP%]   .error-danger[_ngcontent-%COMP%]{color:var(--ion-color-danger)}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[o.j.forChild(g)],o.j]}),t})(),f=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[i.b,r.b,s.t,m]]}),t})()},xgmX:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return r}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())}},r=()=>{i.selection()},s=()=>{i.selectionStart()},o=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},c=t=>{i.impact(t)}}}]);