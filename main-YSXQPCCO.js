import{$ as le,$a as Ol,$b as Wl,A as Tn,Aa as xl,Ab as fa,B as en,Ba as Sl,Bb as ma,C as ra,Ca as Ml,Cb as xe,D as ul,Da as Al,Db as Si,E as fl,Ea as nt,Eb as _,F as ml,Fa as Tl,Fb as be,G as hl,Ga as Il,Gb as tn,H as vi,Ha as S,Hb as ha,I as dt,Ia as kn,Ib as pa,J as Ot,Ja as Rl,Jb as ga,K as $e,Ka as Ci,Kb as mt,L as Y,La as oa,Lb as Nl,M as gr,Ma as Pt,Mb as Ll,N as In,Na as rt,Nb as Bl,O as x,Oa as z,Ob as _e,P as De,Pa as aa,Pb as ot,Q as pl,Qa as Di,Qb as jl,R as T,Ra as Fl,Rb as Mi,S as G,Sa as sa,Sb as Vl,T as d,Ta as te,Tb as Dr,U as Rn,Ua as we,Ub as Ul,V as gl,Va as X,Vb as zl,W as tt,Wa as Qe,Wb as nn,X as Ye,Xa as Ei,Xb as Hl,Y as Ke,Ya as la,Yb as Ue,Z as Xe,Za as ca,Zb as $l,_ as Je,_a as Cr,_b as Gl,a as w,aa as vr,ab as Nn,b as he,ba as vl,bb as it,ca as Re,cb as pe,d as Mn,da as Ee,db as ge,e as ol,ea as hn,eb as wi,f as An,fa as br,fb as wt,g as Ie,ga as ye,gb as xt,h as We,ha as bl,hb as ke,i as qe,ia as _l,ib as v,j as Ze,ja as bi,jb as b,k as R,ka as ut,kb as Pe,l as hi,la as pn,lb as Oe,m as na,ma as ia,mb as Ne,n as al,na as Fe,nb as St,o as de,oa as yl,ob as gn,p as sl,pa as _r,pb as xi,q as Jt,qa as Cl,qb as ve,r as ll,ra as Fn,rb as ae,s as pi,sa as _i,sb as ft,t as gi,ta as yr,tb as Ae,u as cl,ua as yi,ub as da,v as ct,va as On,vb as ua,w as hr,wa as Pn,wb as je,x as pr,xa as Dl,xb as Ve,y as Qt,ya as El,yb as Pl,z as dl,za as wl,zb as kl}from"./chunk-V3FKIOYA.js";var Mf=Object.defineProperty,Af=Object.defineProperties,Tf=Object.getOwnPropertyDescriptors,ql=Object.getOwnPropertySymbols,If=Object.prototype.hasOwnProperty,Rf=Object.prototype.propertyIsEnumerable,_a=(t,r,e)=>r in t?Mf(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,Zl=(t,r)=>{for(var e in r||(r={}))If.call(r,e)&&_a(t,e,r[e]);if(ql)for(var e of ql(r))Rf.call(r,e)&&_a(t,e,r[e]);return t},Ff=(t,r)=>Af(t,Tf(r)),W=(t,r,e)=>(_a(t,typeof r!="symbol"?r+"":r,e),e),kt=globalThis;function ht(t){return(kt.__Zone_symbol_prefix||"__zone_symbol__")+t}function Of(){let t=kt.performance;function r(fe){t&&t.mark&&t.mark(fe)}function e(fe,h){t&&t.measure&&t.measure(fe,h)}r("Zone");let n=class ya{constructor(h,m){W(this,"_parent"),W(this,"_name"),W(this,"_properties"),W(this,"_zoneDelegate"),this._parent=h,this._name=m?m.name||"unnamed":"<root>",this._properties=m&&m.properties||{},this._zoneDelegate=new a(this,this._parent&&this._parent._zoneDelegate,m)}static assertZonePatched(){if(kt.Promise!==$.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let h=ya.current;for(;h.parent;)h=h.parent;return h}static get current(){return N.zone}static get currentTask(){return He}static __load_patch(h,m,f=!1){if($.hasOwnProperty(h)){let k=kt[ht("forceDuplicateZoneCheck")]===!0;if(!f&&k)throw Error("Already loaded patch: "+h)}else if(!kt["__Zone_disable_"+h]){let k="Zone:"+h;r(k),$[h]=m(kt,ya,ee),e(k,k)}}get parent(){return this._parent}get name(){return this._name}get(h){let m=this.getZoneWith(h);if(m)return m._properties[h]}getZoneWith(h){let m=this;for(;m;){if(m._properties.hasOwnProperty(h))return m;m=m._parent}return null}fork(h){if(!h)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,h)}wrap(h,m){if(typeof h!="function")throw new Error("Expecting function got: "+h);let f=this._zoneDelegate.intercept(this,h,m),k=this;return function(){return k.runGuarded(f,this,arguments,m)}}run(h,m,f,k){N={parent:N,zone:this};try{return this._zoneDelegate.invoke(this,h,m,f,k)}finally{N=N.parent}}runGuarded(h,m=null,f,k){N={parent:N,zone:this};try{try{return this._zoneDelegate.invoke(this,h,m,f,k)}catch(me){if(this._zoneDelegate.handleError(this,me))throw me}}finally{N=N.parent}}runTask(h,m,f){if(h.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(h.zone||B).name+"; Execution: "+this.name+")");let k=h,{type:me,data:{isPeriodic:ne=!1,isRefreshable:yt=!1}={}}=h;if(h.state===M&&(me===Z||me===Te))return;let jt=h.state!=ie;jt&&k._transitionTo(ie,U);let Vt=He;He=k,N={parent:N,zone:this};try{me==Te&&h.data&&!ne&&!yt&&(h.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,k,m,f)}catch(Ct){if(this._zoneDelegate.handleError(this,Ct))throw Ct}}finally{let Ct=h.state;if(Ct!==M&&Ct!==oe)if(me==Z||ne||yt&&Ct===C)jt&&k._transitionTo(U,ie,C);else{let D=k._zoneDelegates;this._updateTaskCount(k,-1),jt&&k._transitionTo(M,ie,M),yt&&(k._zoneDelegates=D)}N=N.parent,He=Vt}}scheduleTask(h){if(h.zone&&h.zone!==this){let f=this;for(;f;){if(f===h.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${h.zone.name}`);f=f.parent}}h._transitionTo(C,M);let m=[];h._zoneDelegates=m,h._zone=this;try{h=this._zoneDelegate.scheduleTask(this,h)}catch(f){throw h._transitionTo(oe,C,M),this._zoneDelegate.handleError(this,f),f}return h._zoneDelegates===m&&this._updateTaskCount(h,1),h.state==C&&h._transitionTo(U,C),h}scheduleMicroTask(h,m,f,k){return this.scheduleTask(new s(F,h,m,f,k,void 0))}scheduleMacroTask(h,m,f,k,me){return this.scheduleTask(new s(Te,h,m,f,k,me))}scheduleEventTask(h,m,f,k,me){return this.scheduleTask(new s(Z,h,m,f,k,me))}cancelTask(h){if(h.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(h.zone||B).name+"; Execution: "+this.name+")");if(!(h.state!==U&&h.state!==ie)){h._transitionTo(se,U,ie);try{this._zoneDelegate.cancelTask(this,h)}catch(m){throw h._transitionTo(oe,se),this._zoneDelegate.handleError(this,m),m}return this._updateTaskCount(h,-1),h._transitionTo(M,se),h.runCount=-1,h}}_updateTaskCount(h,m){let f=h._zoneDelegates;m==-1&&(h._zoneDelegates=null);for(let k=0;k<f.length;k++)f[k]._updateTaskCount(h.type,m)}};W(n,"__symbol__",ht);let i=n,o={name:"",onHasTask:(fe,h,m,f)=>fe.hasTask(m,f),onScheduleTask:(fe,h,m,f)=>fe.scheduleTask(m,f),onInvokeTask:(fe,h,m,f,k,me)=>fe.invokeTask(m,f,k,me),onCancelTask:(fe,h,m,f)=>fe.cancelTask(m,f)};class a{constructor(h,m,f){W(this,"_zone"),W(this,"_taskCounts",{microTask:0,macroTask:0,eventTask:0}),W(this,"_parentDelegate"),W(this,"_forkDlgt"),W(this,"_forkZS"),W(this,"_forkCurrZone"),W(this,"_interceptDlgt"),W(this,"_interceptZS"),W(this,"_interceptCurrZone"),W(this,"_invokeDlgt"),W(this,"_invokeZS"),W(this,"_invokeCurrZone"),W(this,"_handleErrorDlgt"),W(this,"_handleErrorZS"),W(this,"_handleErrorCurrZone"),W(this,"_scheduleTaskDlgt"),W(this,"_scheduleTaskZS"),W(this,"_scheduleTaskCurrZone"),W(this,"_invokeTaskDlgt"),W(this,"_invokeTaskZS"),W(this,"_invokeTaskCurrZone"),W(this,"_cancelTaskDlgt"),W(this,"_cancelTaskZS"),W(this,"_cancelTaskCurrZone"),W(this,"_hasTaskDlgt"),W(this,"_hasTaskDlgtOwner"),W(this,"_hasTaskZS"),W(this,"_hasTaskCurrZone"),this._zone=h,this._parentDelegate=m,this._forkZS=f&&(f&&f.onFork?f:m._forkZS),this._forkDlgt=f&&(f.onFork?m:m._forkDlgt),this._forkCurrZone=f&&(f.onFork?this._zone:m._forkCurrZone),this._interceptZS=f&&(f.onIntercept?f:m._interceptZS),this._interceptDlgt=f&&(f.onIntercept?m:m._interceptDlgt),this._interceptCurrZone=f&&(f.onIntercept?this._zone:m._interceptCurrZone),this._invokeZS=f&&(f.onInvoke?f:m._invokeZS),this._invokeDlgt=f&&(f.onInvoke?m:m._invokeDlgt),this._invokeCurrZone=f&&(f.onInvoke?this._zone:m._invokeCurrZone),this._handleErrorZS=f&&(f.onHandleError?f:m._handleErrorZS),this._handleErrorDlgt=f&&(f.onHandleError?m:m._handleErrorDlgt),this._handleErrorCurrZone=f&&(f.onHandleError?this._zone:m._handleErrorCurrZone),this._scheduleTaskZS=f&&(f.onScheduleTask?f:m._scheduleTaskZS),this._scheduleTaskDlgt=f&&(f.onScheduleTask?m:m._scheduleTaskDlgt),this._scheduleTaskCurrZone=f&&(f.onScheduleTask?this._zone:m._scheduleTaskCurrZone),this._invokeTaskZS=f&&(f.onInvokeTask?f:m._invokeTaskZS),this._invokeTaskDlgt=f&&(f.onInvokeTask?m:m._invokeTaskDlgt),this._invokeTaskCurrZone=f&&(f.onInvokeTask?this._zone:m._invokeTaskCurrZone),this._cancelTaskZS=f&&(f.onCancelTask?f:m._cancelTaskZS),this._cancelTaskDlgt=f&&(f.onCancelTask?m:m._cancelTaskDlgt),this._cancelTaskCurrZone=f&&(f.onCancelTask?this._zone:m._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let k=f&&f.onHasTask,me=m&&m._hasTaskZS;(k||me)&&(this._hasTaskZS=k?f:o,this._hasTaskDlgt=m,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,f.onScheduleTask||(this._scheduleTaskZS=o,this._scheduleTaskDlgt=m,this._scheduleTaskCurrZone=this._zone),f.onInvokeTask||(this._invokeTaskZS=o,this._invokeTaskDlgt=m,this._invokeTaskCurrZone=this._zone),f.onCancelTask||(this._cancelTaskZS=o,this._cancelTaskDlgt=m,this._cancelTaskCurrZone=this._zone))}get zone(){return this._zone}fork(h,m){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,h,m):new i(h,m)}intercept(h,m,f){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,h,m,f):m}invoke(h,m,f,k,me){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,h,m,f,k,me):m.apply(f,k)}handleError(h,m){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,h,m):!0}scheduleTask(h,m){let f=m;if(this._scheduleTaskZS)this._hasTaskZS&&f._zoneDelegates.push(this._hasTaskDlgtOwner),f=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,h,m),f||(f=m);else if(m.scheduleFn)m.scheduleFn(m);else if(m.type==F)V(m);else throw new Error("Task is missing scheduleFn.");return f}invokeTask(h,m,f,k){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,h,m,f,k):m.callback.apply(f,k)}cancelTask(h,m){let f;if(this._cancelTaskZS)f=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,h,m);else{if(!m.cancelFn)throw Error("Task is not cancelable");f=m.cancelFn(m)}return f}hasTask(h,m){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,h,m)}catch(f){this.handleError(h,f)}}_updateTaskCount(h,m){let f=this._taskCounts,k=f[h],me=f[h]=k+m;if(me<0)throw new Error("More tasks executed then were scheduled.");if(k==0||me==0){let ne={microTask:f.microTask>0,macroTask:f.macroTask>0,eventTask:f.eventTask>0,change:h};this.hasTask(this._zone,ne)}}}class s{constructor(h,m,f,k,me,ne){if(W(this,"type"),W(this,"source"),W(this,"invoke"),W(this,"callback"),W(this,"data"),W(this,"scheduleFn"),W(this,"cancelFn"),W(this,"_zone",null),W(this,"runCount",0),W(this,"_zoneDelegates",null),W(this,"_state","notScheduled"),this.type=h,this.source=m,this.data=k,this.scheduleFn=me,this.cancelFn=ne,!f)throw new Error("callback is not defined");this.callback=f;let yt=this;h===Z&&k&&k.useG?this.invoke=s.invokeTask:this.invoke=function(){return s.invokeTask.call(kt,yt,this,arguments)}}static invokeTask(h,m,f){h||(h=this),et++;try{return h.runCount++,h.zone.runTask(h,m,f)}finally{et==1&&L(),et--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(M,C)}_transitionTo(h,m,f){if(this._state===m||this._state===f)this._state=h,h==M&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${h}', expecting state '${m}'${f?" or '"+f+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let l=ht("setTimeout"),c=ht("Promise"),u=ht("then"),g=[],A=!1,P;function re(fe){if(P||kt[c]&&(P=kt[c].resolve(0)),P){let h=P[u];h||(h=P.then),h.call(P,fe)}else kt[l](fe,0)}function V(fe){et===0&&g.length===0&&re(L),fe&&g.push(fe)}function L(){if(!A){for(A=!0;g.length;){let fe=g;g=[];for(let h=0;h<fe.length;h++){let m=fe[h];try{m.zone.runTask(m,null,null)}catch(f){ee.onUnhandledError(f)}}}ee.microtaskDrainDone(),A=!1}}let B={name:"NO ZONE"},M="notScheduled",C="scheduling",U="scheduled",ie="running",se="canceling",oe="unknown",F="microTask",Te="macroTask",Z="eventTask",$={},ee={symbol:ht,currentZoneFrame:()=>N,onUnhandledError:Ce,microtaskDrainDone:Ce,scheduleMicroTask:V,showUncaughtError:()=>!i[ht("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:Ce,patchMethod:()=>Ce,bindArguments:()=>[],patchThen:()=>Ce,patchMacroTask:()=>Ce,patchEventPrototype:()=>Ce,getGlobalObjects:()=>{},ObjectDefineProperty:()=>Ce,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>Ce,wrapWithCurrentZone:()=>Ce,filterProperties:()=>[],attachOriginToPatched:()=>Ce,_redefineProperty:()=>Ce,patchCallbacks:()=>Ce,nativeScheduleMicroTask:re},N={parent:null,zone:new i(null,null)},He=null,et=0;function Ce(){}return e("Zone","Zone"),i}function Pf(){var t;let r=globalThis,e=r[ht("forceDuplicateZoneCheck")]===!0;if(r.Zone&&(e||typeof r.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return(t=r.Zone)!=null||(r.Zone=Of()),r.Zone}var wr=Object.getOwnPropertyDescriptor,Da=Object.defineProperty,Ea=Object.getPrototypeOf,kf=Object.create,Nf=Array.prototype.slice,wa="addEventListener",xa="removeEventListener",va=ht(wa),ba=ht(xa),Ut="true",zt="false",xr=ht("");function Sa(t,r){return Zone.current.wrap(t,r)}function Ma(t,r,e,n,i){return Zone.current.scheduleMacroTask(t,r,e,n,i)}var ue=ht,Ii=typeof window<"u",Ri=Ii?window:void 0,Le=Ii&&Ri||globalThis,Lf="removeAttribute";function Aa(t,r){for(let e=t.length-1;e>=0;e--)typeof t[e]=="function"&&(t[e]=Sa(t[e],r+"_"+e));return t}function Bf(t,r){let e=t.constructor.name;for(let n=0;n<r.length;n++){let i=r[n],o=t[i];if(o){let a=wr(t,i);if(!ec(a))continue;t[i]=(s=>{let l=function(){return s.apply(this,Aa(arguments,e+"."+i))};return $t(l,s),l})(o)}}}function ec(t){return t?t.writable===!1?!1:!(typeof t.get=="function"&&typeof t.set>"u"):!0}var tc=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Fi=!("nw"in Le)&&typeof Le.process<"u"&&Le.process.toString()==="[object process]",Ta=!Fi&&!tc&&!!(Ii&&Ri.HTMLElement),nc=typeof Le.process<"u"&&Le.process.toString()==="[object process]"&&!tc&&!!(Ii&&Ri.HTMLElement),Ti={},jf=ue("enable_beforeunload"),Yl=function(t){if(t=t||Le.event,!t)return;let r=Ti[t.type];r||(r=Ti[t.type]=ue("ON_PROPERTY"+t.type));let e=this||t.target||Le,n=e[r],i;if(Ta&&e===Ri&&t.type==="error"){let o=t;i=n&&n.call(this,o.message,o.filename,o.lineno,o.colno,o.error),i===!0&&t.preventDefault()}else i=n&&n.apply(this,arguments),t.type==="beforeunload"&&Le[jf]&&typeof i=="string"?t.returnValue=i:i!=null&&!i&&t.preventDefault();return i};function Kl(t,r,e){let n=wr(t,r);if(!n&&e&&wr(e,r)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;let i=ue("on"+r+"patched");if(t.hasOwnProperty(i)&&t[i])return;delete n.writable,delete n.value;let o=n.get,a=n.set,s=r.slice(2),l=Ti[s];l||(l=Ti[s]=ue("ON_PROPERTY"+s)),n.set=function(c){let u=this;if(!u&&t===Le&&(u=Le),!u)return;typeof u[l]=="function"&&u.removeEventListener(s,Yl),a?.call(u,null),u[l]=c,typeof c=="function"&&u.addEventListener(s,Yl,!1)},n.get=function(){let c=this;if(!c&&t===Le&&(c=Le),!c)return null;let u=c[l];if(u)return u;if(o){let g=o.call(this);if(g)return n.set.call(this,g),typeof c[Lf]=="function"&&c.removeAttribute(r),g}return null},Da(t,r,n),t[i]=!0}function rc(t,r,e){if(r)for(let n=0;n<r.length;n++)Kl(t,"on"+r[n],e);else{let n=[];for(let i in t)i.slice(0,2)=="on"&&n.push(i);for(let i=0;i<n.length;i++)Kl(t,n[i],e)}}var Mt=ue("originalInstance");function Er(t){let r=Le[t];if(!r)return;Le[ue(t)]=r,Le[t]=function(){let i=Aa(arguments,t);switch(i.length){case 0:this[Mt]=new r;break;case 1:this[Mt]=new r(i[0]);break;case 2:this[Mt]=new r(i[0],i[1]);break;case 3:this[Mt]=new r(i[0],i[1],i[2]);break;case 4:this[Mt]=new r(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},$t(Le[t],r);let e=new r(function(){}),n;for(n in e)t==="XMLHttpRequest"&&n==="responseBlob"||(function(i){typeof e[i]=="function"?Le[t].prototype[i]=function(){return this[Mt][i].apply(this[Mt],arguments)}:Da(Le[t].prototype,i,{set:function(o){typeof o=="function"?(this[Mt][i]=Sa(o,t+"."+i),$t(this[Mt][i],o)):this[Mt][i]=o},get:function(){return this[Mt][i]}})})(n);for(n in r)n!=="prototype"&&r.hasOwnProperty(n)&&(Le[t][n]=r[n])}function Vf(t,r){if(typeof Object.getOwnPropertySymbols!="function")return;Object.getOwnPropertySymbols(t).forEach(n=>{let i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,{get:function(){return t[n]},set:function(o){i&&(!i.writable||typeof i.set!="function")||(t[n]=o)},enumerable:i?i.enumerable:!0,configurable:i?i.configurable:!0})})}var Uf=!1;function Ht(t,r,e){let n=t;for(;n&&!n.hasOwnProperty(r);)n=Ea(n);!n&&t[r]&&(n=t);let i=ue(r),o=null;if(n&&(!(o=n[i])||!n.hasOwnProperty(i))){o=n[i]=n[r];let a=n&&wr(n,r);if(ec(a)){let s=e(o,i,r);n[r]=function(){return s(this,arguments)},$t(n[r],o),Uf&&Vf(o,n[r])}}return o}function zf(t,r,e){let n=null;function i(o){let a=o.data;return a.args[a.cbIdx]=function(){o.invoke.apply(this,arguments)},n.apply(a.target,a.args),o}n=Ht(t,r,o=>function(a,s){let l=e(a,s);return l.cbIdx>=0&&typeof s[l.cbIdx]=="function"?Ma(l.name,s[l.cbIdx],l,i):o.apply(a,s)})}function $t(t,r){t[ue("OriginalDelegate")]=r}function Xl(t){return typeof t=="function"}function Jl(t){return typeof t=="number"}var Hf={useG:!0},pt={},ic={},oc=new RegExp("^"+xr+"(\\w+)(true|false)$"),ac=ue("propagationStopped");function sc(t,r){let e=(r?r(t):t)+zt,n=(r?r(t):t)+Ut,i=xr+e,o=xr+n;pt[t]={},pt[t][zt]=i,pt[t][Ut]=o}function $f(t,r,e,n){let i=n&&n.add||wa,o=n&&n.rm||xa,a=n&&n.listeners||"eventListeners",s=n&&n.rmAll||"removeAllListeners",l=ue(i),c="."+i+":",u="prependListener",g="."+u+":",A=function(M,C,U){if(M.isRemoved)return;let ie=M.callback;typeof ie=="object"&&ie.handleEvent&&(M.callback=F=>ie.handleEvent(F),M.originalDelegate=ie);let se;try{M.invoke(M,C,[U])}catch(F){se=F}let oe=M.options;if(oe&&typeof oe=="object"&&oe.once){let F=M.originalDelegate?M.originalDelegate:M.callback;C[o].call(C,U.type,F,oe)}return se};function P(M,C,U){if(C=C||t.event,!C)return;let ie=M||C.target||t,se=ie[pt[C.type][U?Ut:zt]];if(se){let oe=[];if(se.length===1){let F=A(se[0],ie,C);F&&oe.push(F)}else{let F=se.slice();for(let Te=0;Te<F.length&&!(C&&C[ac]===!0);Te++){let Z=A(F[Te],ie,C);Z&&oe.push(Z)}}if(oe.length===1)throw oe[0];for(let F=0;F<oe.length;F++){let Te=oe[F];r.nativeScheduleMicroTask(()=>{throw Te})}}}let re=function(M){return P(this,M,!1)},V=function(M){return P(this,M,!0)};function L(M,C){if(!M)return!1;let U=!0;C&&C.useG!==void 0&&(U=C.useG);let ie=C&&C.vh,se=!0;C&&C.chkDup!==void 0&&(se=C.chkDup);let oe=!1;C&&C.rt!==void 0&&(oe=C.rt);let F=M;for(;F&&!F.hasOwnProperty(i);)F=Ea(F);if(!F&&M[i]&&(F=M),!F||F[l])return!1;let Te=C&&C.eventNameToString,Z={},$=F[l]=F[i],ee=F[ue(o)]=F[o],N=F[ue(a)]=F[a],He=F[ue(s)]=F[s],et;C&&C.prepend&&(et=F[ue(C.prepend)]=F[C.prepend]);function Ce(p,E){return E?typeof p=="boolean"?{capture:p,passive:!0}:p?typeof p=="object"&&p.passive!==!1?Ff(Zl({},p),{passive:!0}):p:{passive:!0}:p}let fe=function(p){if(!Z.isExisting)return $.call(Z.target,Z.eventName,Z.capture?V:re,Z.options)},h=function(p){if(!p.isRemoved){let E=pt[p.eventName],O;E&&(O=E[p.capture?Ut:zt]);let j=O&&p.target[O];if(j){for(let I=0;I<j.length;I++)if(j[I]===p){j.splice(I,1),p.isRemoved=!0,p.removeAbortListener&&(p.removeAbortListener(),p.removeAbortListener=null),j.length===0&&(p.allRemoved=!0,p.target[O]=null);break}}}if(p.allRemoved)return ee.call(p.target,p.eventName,p.capture?V:re,p.options)},m=function(p){return $.call(Z.target,Z.eventName,p.invoke,Z.options)},f=function(p){return et.call(Z.target,Z.eventName,p.invoke,Z.options)},k=function(p){return ee.call(p.target,p.eventName,p.invoke,p.options)},me=U?fe:m,ne=U?h:k,yt=function(p,E){let O=typeof E;return O==="function"&&p.callback===E||O==="object"&&p.originalDelegate===E},jt=C?.diff||yt,Vt=Zone[ue("UNPATCHED_EVENTS")],Ct=t[ue("PASSIVE_EVENTS")];function D(p){if(typeof p=="object"&&p!==null){let E=Zl({},p);return p.signal&&(E.signal=p.signal),E}return p}let y=function(p,E,O,j,I=!1,K=!1){return function(){let J=this||t,Q=arguments[0];C&&C.transferEventName&&(Q=C.transferEventName(Q));let Se=arguments[1];if(!Se)return p.apply(this,arguments);if(Fi&&Q==="uncaughtException")return p.apply(this,arguments);let Me=!1;if(typeof Se!="function"){if(!Se.handleEvent)return p.apply(this,arguments);Me=!0}if(ie&&!ie(p,Se,J,arguments))return;let Xt=!!Ct&&Ct.indexOf(Q)!==-1,Dt=D(Ce(arguments[2],Xt)),mn=Dt?.signal;if(mn?.aborted)return;if(Vt){for(let Ft=0;Ft<Vt.length;Ft++)if(Q===Vt[Ft])return Xt?p.call(J,Q,Se,Dt):p.apply(this,arguments)}let ea=Dt?typeof Dt=="boolean"?!0:Dt.capture:!1,el=Dt&&typeof Dt=="object"?Dt.once:!1,Sf=Zone.current,ta=pt[Q];ta||(sc(Q,Te),ta=pt[Q]);let tl=ta[ea?Ut:zt],Sn=J[tl],nl=!1;if(Sn){if(nl=!0,se){for(let Ft=0;Ft<Sn.length;Ft++)if(jt(Sn[Ft],Se))return}}else Sn=J[tl]=[];let mi,rl=J.constructor.name,il=ic[rl];il&&(mi=il[Q]),mi||(mi=rl+E+(Te?Te(Q):Q)),Z.options=Dt,el&&(Z.options.once=!1),Z.target=J,Z.capture=ea,Z.eventName=Q,Z.isExisting=nl;let mr=U?Hf:void 0;mr&&(mr.taskData=Z),mn&&(Z.options.signal=void 0);let Et=Sf.scheduleEventTask(mi,Se,mr,O,j);if(mn){Z.options.signal=mn;let Ft=()=>Et.zone.cancelTask(Et);p.call(mn,"abort",Ft,{once:!0}),Et.removeAbortListener=()=>mn.removeEventListener("abort",Ft)}if(Z.target=null,mr&&(mr.taskData=null),el&&(Z.options.once=!0),typeof Et.options!="boolean"&&(Et.options=Dt),Et.target=J,Et.capture=ea,Et.eventName=Q,Me&&(Et.originalDelegate=Se),K?Sn.unshift(Et):Sn.push(Et),I)return J}};return F[i]=y($,c,me,ne,oe),et&&(F[u]=y(et,g,f,ne,oe,!0)),F[o]=function(){let p=this||t,E=arguments[0];C&&C.transferEventName&&(E=C.transferEventName(E));let O=arguments[2],j=O?typeof O=="boolean"?!0:O.capture:!1,I=arguments[1];if(!I)return ee.apply(this,arguments);if(ie&&!ie(ee,I,p,arguments))return;let K=pt[E],J;K&&(J=K[j?Ut:zt]);let Q=J&&p[J];if(Q)for(let Se=0;Se<Q.length;Se++){let Me=Q[Se];if(jt(Me,I)){if(Q.splice(Se,1),Me.isRemoved=!0,Q.length===0&&(Me.allRemoved=!0,p[J]=null,!j&&typeof E=="string")){let Xt=xr+"ON_PROPERTY"+E;p[Xt]=null}return Me.zone.cancelTask(Me),oe?p:void 0}}return ee.apply(this,arguments)},F[a]=function(){let p=this||t,E=arguments[0];C&&C.transferEventName&&(E=C.transferEventName(E));let O=[],j=lc(p,Te?Te(E):E);for(let I=0;I<j.length;I++){let K=j[I],J=K.originalDelegate?K.originalDelegate:K.callback;O.push(J)}return O},F[s]=function(){let p=this||t,E=arguments[0];if(E){C&&C.transferEventName&&(E=C.transferEventName(E));let O=pt[E];if(O){let j=O[zt],I=O[Ut],K=p[j],J=p[I];if(K){let Q=K.slice();for(let Se=0;Se<Q.length;Se++){let Me=Q[Se],Xt=Me.originalDelegate?Me.originalDelegate:Me.callback;this[o].call(this,E,Xt,Me.options)}}if(J){let Q=J.slice();for(let Se=0;Se<Q.length;Se++){let Me=Q[Se],Xt=Me.originalDelegate?Me.originalDelegate:Me.callback;this[o].call(this,E,Xt,Me.options)}}}}else{let O=Object.keys(p);for(let j=0;j<O.length;j++){let I=O[j],K=oc.exec(I),J=K&&K[1];J&&J!=="removeListener"&&this[s].call(this,J)}this[s].call(this,"removeListener")}if(oe)return this},$t(F[i],$),$t(F[o],ee),He&&$t(F[s],He),N&&$t(F[a],N),!0}let B=[];for(let M=0;M<e.length;M++)B[M]=L(e[M],n);return B}function lc(t,r){if(!r){let o=[];for(let a in t){let s=oc.exec(a),l=s&&s[1];if(l&&(!r||l===r)){let c=t[a];if(c)for(let u=0;u<c.length;u++)o.push(c[u])}}return o}let e=pt[r];e||(sc(r),e=pt[r]);let n=t[e[zt]],i=t[e[Ut]];return n?i?n.concat(i):n.slice():i?i.slice():[]}function Gf(t,r){let e=t.Event;e&&e.prototype&&r.patchMethod(e.prototype,"stopImmediatePropagation",n=>function(i,o){i[ac]=!0,n&&n.apply(i,o)})}function Wf(t,r){r.patchMethod(t,"queueMicrotask",e=>function(n,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}var Ai=ue("zoneTask");function Ln(t,r,e,n){let i=null,o=null;r+=n,e+=n;let a={};function s(c){let u=c.data;u.args[0]=function(){return c.invoke.apply(this,arguments)};let g=i.apply(t,u.args);return Jl(g)?u.handleId=g:(u.handle=g,u.isRefreshable=Xl(g.refresh)),c}function l(c){let{handle:u,handleId:g}=c.data;return o.call(t,u??g)}i=Ht(t,r,c=>function(u,g){var A;if(Xl(g[0])){let P={isRefreshable:!1,isPeriodic:n==="Interval",delay:n==="Timeout"||n==="Interval"?g[1]||0:void 0,args:g},re=g[0];g[0]=function(){try{return re.apply(this,arguments)}finally{let{handle:ie,handleId:se,isPeriodic:oe,isRefreshable:F}=P;!oe&&!F&&(se?delete a[se]:ie&&(ie[Ai]=null))}};let V=Ma(r,g[0],P,s,l);if(!V)return V;let{handleId:L,handle:B,isRefreshable:M,isPeriodic:C}=V.data;if(L)a[L]=V;else if(B&&(B[Ai]=V,M&&!C)){let U=B.refresh;B.refresh=function(){let{zone:ie,state:se}=V;return se==="notScheduled"?(V._state="scheduled",ie._updateTaskCount(V,1)):se==="running"&&(V._state="scheduling"),U.call(this)}}return(A=B??L)!=null?A:V}else return c.apply(t,g)}),o=Ht(t,e,c=>function(u,g){let A=g[0],P;Jl(A)?(P=a[A],delete a[A]):(P=A?.[Ai],P?A[Ai]=null:P=A),P?.type?P.cancelFn&&P.zone.cancelTask(P):c.apply(t,g)})}function qf(t,r){let{isBrowser:e,isMix:n}=r.getGlobalObjects();if(!e&&!n||!t.customElements||!("customElements"in t))return;let i=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];r.patchCallbacks(r,t.customElements,"customElements","define",i)}function Zf(t,r){if(Zone[r.symbol("patchEventTarget")])return;let{eventNames:e,zoneSymbolEventNames:n,TRUE_STR:i,FALSE_STR:o,ZONE_SYMBOL_PREFIX:a}=r.getGlobalObjects();for(let l=0;l<e.length;l++){let c=e[l],u=c+o,g=c+i,A=a+u,P=a+g;n[c]={},n[c][o]=A,n[c][i]=P}let s=t.EventTarget;if(!(!s||!s.prototype))return r.patchEventTarget(t,r,[s&&s.prototype]),!0}function Yf(t,r){r.patchEventPrototype(t,r)}function cc(t,r,e){if(!e||e.length===0)return r;let n=e.filter(o=>o.target===t);if(n.length===0)return r;let i=n[0].ignoreProperties;return r.filter(o=>i.indexOf(o)===-1)}function Ql(t,r,e,n){if(!t)return;let i=cc(t,r,e);rc(t,i,n)}function Ca(t){return Object.getOwnPropertyNames(t).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function Kf(t,r){if(Fi&&!nc||Zone[t.symbol("patchEvents")])return;let e=r.__Zone_ignore_on_properties,n=[];if(Ta){let i=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]),Ql(i,Ca(i),e,Ea(i))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<n.length;i++){let o=r[n[i]];o?.prototype&&Ql(o.prototype,Ca(o.prototype),e)}}function Xf(t){t.__load_patch("timers",r=>{let n="clear";Ln(r,"set",n,"Timeout"),Ln(r,"set",n,"Interval"),Ln(r,"set",n,"Immediate")}),t.__load_patch("requestAnimationFrame",r=>{Ln(r,"request","cancel","AnimationFrame"),Ln(r,"mozRequest","mozCancel","AnimationFrame"),Ln(r,"webkitRequest","webkitCancel","AnimationFrame")}),t.__load_patch("blocking",(r,e)=>{let n=["alert","prompt","confirm"];for(let i=0;i<n.length;i++){let o=n[i];Ht(r,o,(a,s,l)=>function(c,u){return e.current.run(a,r,u,l)})}}),t.__load_patch("EventTarget",(r,e,n)=>{Yf(r,n),Zf(r,n);let i=r.XMLHttpRequestEventTarget;i&&i.prototype&&n.patchEventTarget(r,n,[i.prototype])}),t.__load_patch("MutationObserver",(r,e,n)=>{Er("MutationObserver"),Er("WebKitMutationObserver")}),t.__load_patch("IntersectionObserver",(r,e,n)=>{Er("IntersectionObserver")}),t.__load_patch("FileReader",(r,e,n)=>{Er("FileReader")}),t.__load_patch("on_property",(r,e,n)=>{Kf(n,r)}),t.__load_patch("customElements",(r,e,n)=>{qf(r,n)}),t.__load_patch("XHR",(r,e)=>{c(r);let n=ue("xhrTask"),i=ue("xhrSync"),o=ue("xhrListener"),a=ue("xhrScheduled"),s=ue("xhrURL"),l=ue("xhrErrorBeforeScheduled");function c(u){let g=u.XMLHttpRequest;if(!g)return;let A=g.prototype;function P($){return $[n]}let re=A[va],V=A[ba];if(!re){let $=u.XMLHttpRequestEventTarget;if($){let ee=$.prototype;re=ee[va],V=ee[ba]}}let L="readystatechange",B="scheduled";function M($){let ee=$.data,N=ee.target;N[a]=!1,N[l]=!1;let He=N[o];re||(re=N[va],V=N[ba]),He&&V.call(N,L,He);let et=N[o]=()=>{if(N.readyState===N.DONE)if(!ee.aborted&&N[a]&&$.state===B){let fe=N[e.__symbol__("loadfalse")];if(N.status!==0&&fe&&fe.length>0){let h=$.invoke;$.invoke=function(){let m=N[e.__symbol__("loadfalse")];for(let f=0;f<m.length;f++)m[f]===$&&m.splice(f,1);!ee.aborted&&$.state===B&&h.call($)},fe.push($)}else $.invoke()}else!ee.aborted&&N[a]===!1&&(N[l]=!0)};return re.call(N,L,et),N[n]||(N[n]=$),Te.apply(N,ee.args),N[a]=!0,$}function C(){}function U($){let ee=$.data;return ee.aborted=!0,Z.apply(ee.target,ee.args)}let ie=Ht(A,"open",()=>function($,ee){return $[i]=ee[2]==!1,$[s]=ee[1],ie.apply($,ee)}),se="XMLHttpRequest.send",oe=ue("fetchTaskAborting"),F=ue("fetchTaskScheduling"),Te=Ht(A,"send",()=>function($,ee){if(e.current[F]===!0||$[i])return Te.apply($,ee);{let N={target:$,url:$[s],isPeriodic:!1,args:ee,aborted:!1},He=Ma(se,C,N,M,U);$&&$[l]===!0&&!N.aborted&&He.state===B&&He.invoke()}}),Z=Ht(A,"abort",()=>function($,ee){let N=P($);if(N&&typeof N.type=="string"){if(N.cancelFn==null||N.data&&N.data.aborted)return;N.zone.cancelTask(N)}else if(e.current[oe]===!0)return Z.apply($,ee)})}}),t.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&Bf(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),t.__load_patch("PromiseRejectionEvent",(r,e)=>{function n(i){return function(o){lc(r,i).forEach(s=>{let l=r.PromiseRejectionEvent;if(l){let c=new l(i,{promise:o.promise,reason:o.rejection});s.invoke(c)}})}}r.PromiseRejectionEvent&&(e[ue("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),e[ue("rejectionHandledHandler")]=n("rejectionhandled"))}),t.__load_patch("queueMicrotask",(r,e,n)=>{Wf(r,n)})}function Jf(t){t.__load_patch("ZoneAwarePromise",(r,e,n)=>{let i=Object.getOwnPropertyDescriptor,o=Object.defineProperty;function a(D){if(D&&D.toString===Object.prototype.toString){let y=D.constructor&&D.constructor.name;return(y||"")+": "+JSON.stringify(D)}return D?D.toString():Object.prototype.toString.call(D)}let s=n.symbol,l=[],c=r[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,u=s("Promise"),g=s("then"),A="__creationTrace__";n.onUnhandledError=D=>{if(n.showUncaughtError()){let y=D&&D.rejection;y?console.error("Unhandled Promise rejection:",y instanceof Error?y.message:y,"; Zone:",D.zone.name,"; Task:",D.task&&D.task.source,"; Value:",y,y instanceof Error?y.stack:void 0):console.error(D)}},n.microtaskDrainDone=()=>{for(;l.length;){let D=l.shift();try{D.zone.runGuarded(()=>{throw D.throwOriginal?D.rejection:D})}catch(y){re(y)}}};let P=s("unhandledPromiseRejectionHandler");function re(D){n.onUnhandledError(D);try{let y=e[P];typeof y=="function"&&y.call(this,D)}catch{}}function V(D){return D&&typeof D.then=="function"}function L(D){return D}function B(D){return ne.reject(D)}let M=s("state"),C=s("value"),U=s("finally"),ie=s("parentPromiseValue"),se=s("parentPromiseState"),oe="Promise.then",F=null,Te=!0,Z=!1,$=0;function ee(D,y){return p=>{try{Ce(D,y,p)}catch(E){Ce(D,!1,E)}}}let N=function(){let D=!1;return function(p){return function(){D||(D=!0,p.apply(null,arguments))}}},He="Promise resolved with itself",et=s("currentTaskTrace");function Ce(D,y,p){let E=N();if(D===p)throw new TypeError(He);if(D[M]===F){let O=null;try{(typeof p=="object"||typeof p=="function")&&(O=p&&p.then)}catch(j){return E(()=>{Ce(D,!1,j)})(),D}if(y!==Z&&p instanceof ne&&p.hasOwnProperty(M)&&p.hasOwnProperty(C)&&p[M]!==F)h(p),Ce(D,p[M],p[C]);else if(y!==Z&&typeof O=="function")try{O.call(p,E(ee(D,y)),E(ee(D,!1)))}catch(j){E(()=>{Ce(D,!1,j)})()}else{D[M]=y;let j=D[C];if(D[C]=p,D[U]===U&&y===Te&&(D[M]=D[se],D[C]=D[ie]),y===Z&&p instanceof Error){let I=e.currentTask&&e.currentTask.data&&e.currentTask.data[A];I&&o(p,et,{configurable:!0,enumerable:!1,writable:!0,value:I})}for(let I=0;I<j.length;)m(D,j[I++],j[I++],j[I++],j[I++]);if(j.length==0&&y==Z){D[M]=$;let I=p;try{throw new Error("Uncaught (in promise): "+a(p)+(p&&p.stack?`
`+p.stack:""))}catch(K){I=K}c&&(I.throwOriginal=!0),I.rejection=p,I.promise=D,I.zone=e.current,I.task=e.currentTask,l.push(I),n.scheduleMicroTask()}}}return D}let fe=s("rejectionHandledHandler");function h(D){if(D[M]===$){try{let y=e[fe];y&&typeof y=="function"&&y.call(this,{rejection:D[C],promise:D})}catch{}D[M]=Z;for(let y=0;y<l.length;y++)D===l[y].promise&&l.splice(y,1)}}function m(D,y,p,E,O){h(D);let j=D[M],I=j?typeof E=="function"?E:L:typeof O=="function"?O:B;y.scheduleMicroTask(oe,()=>{try{let K=D[C],J=!!p&&U===p[U];J&&(p[ie]=K,p[se]=j);let Q=y.run(I,void 0,J&&I!==B&&I!==L?[]:[K]);Ce(p,!0,Q)}catch(K){Ce(p,!1,K)}},p)}let f="function ZoneAwarePromise() { [native code] }",k=function(){},me=r.AggregateError;class ne{static toString(){return f}static resolve(y){return y instanceof ne?y:Ce(new this(null),Te,y)}static reject(y){return Ce(new this(null),Z,y)}static withResolvers(){let y={};return y.promise=new ne((p,E)=>{y.resolve=p,y.reject=E}),y}static any(y){if(!y||typeof y[Symbol.iterator]!="function")return Promise.reject(new me([],"All promises were rejected"));let p=[],E=0;try{for(let I of y)E++,p.push(ne.resolve(I))}catch{return Promise.reject(new me([],"All promises were rejected"))}if(E===0)return Promise.reject(new me([],"All promises were rejected"));let O=!1,j=[];return new ne((I,K)=>{for(let J=0;J<p.length;J++)p[J].then(Q=>{O||(O=!0,I(Q))},Q=>{j.push(Q),E--,E===0&&(O=!0,K(new me(j,"All promises were rejected")))})})}static race(y){let p,E,O=new this((K,J)=>{p=K,E=J});function j(K){p(K)}function I(K){E(K)}for(let K of y)V(K)||(K=this.resolve(K)),K.then(j,I);return O}static all(y){return ne.allWithCallback(y)}static allSettled(y){return(this&&this.prototype instanceof ne?this:ne).allWithCallback(y,{thenCallback:E=>({status:"fulfilled",value:E}),errorCallback:E=>({status:"rejected",reason:E})})}static allWithCallback(y,p){let E,O,j=new this((Q,Se)=>{E=Q,O=Se}),I=2,K=0,J=[];for(let Q of y){V(Q)||(Q=this.resolve(Q));let Se=K;try{Q.then(Me=>{J[Se]=p?p.thenCallback(Me):Me,I--,I===0&&E(J)},Me=>{p?(J[Se]=p.errorCallback(Me),I--,I===0&&E(J)):O(Me)})}catch(Me){O(Me)}I++,K++}return I-=2,I===0&&E(J),j}constructor(y){let p=this;if(!(p instanceof ne))throw new Error("Must be an instanceof Promise.");p[M]=F,p[C]=[];try{let E=N();y&&y(E(ee(p,Te)),E(ee(p,Z)))}catch(E){Ce(p,!1,E)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return ne}then(y,p){var E;let O=(E=this.constructor)==null?void 0:E[Symbol.species];(!O||typeof O!="function")&&(O=this.constructor||ne);let j=new O(k),I=e.current;return this[M]==F?this[C].push(I,j,y,p):m(this,I,j,y,p),j}catch(y){return this.then(null,y)}finally(y){var p;let E=(p=this.constructor)==null?void 0:p[Symbol.species];(!E||typeof E!="function")&&(E=ne);let O=new E(k);O[U]=U;let j=e.current;return this[M]==F?this[C].push(j,O,y,y):m(this,j,O,y,y),O}}ne.resolve=ne.resolve,ne.reject=ne.reject,ne.race=ne.race,ne.all=ne.all;let yt=r[u]=r.Promise;r.Promise=ne;let jt=s("thenPatched");function Vt(D){let y=D.prototype,p=i(y,"then");if(p&&(p.writable===!1||!p.configurable))return;let E=y.then;y[g]=E,D.prototype.then=function(O,j){return new ne((K,J)=>{E.call(this,K,J)}).then(O,j)},D[jt]=!0}n.patchThen=Vt;function Ct(D){return function(y,p){let E=D.apply(y,p);if(E instanceof ne)return E;let O=E.constructor;return O[jt]||Vt(O),E}}if(yt){Vt(yt);let D=yt.try;D&&typeof D=="function"&&(ne.try=D),Ht(r,"fetch",y=>Ct(y))}return Promise[e.__symbol__("uncaughtPromiseErrors")]=l,ne})}function Qf(t){t.__load_patch("toString",r=>{let e=Function.prototype.toString,n=ue("OriginalDelegate"),i=ue("Promise"),o=ue("Error"),a=function(){if(typeof this=="function"){let u=this[n];if(u)return typeof u=="function"?e.call(u):Object.prototype.toString.call(u);if(this===Promise){let g=r[i];if(g)return e.call(g)}if(this===Error){let g=r[o];if(g)return e.call(g)}}return e.call(this)};a[n]=e,Function.prototype.toString=a;let s=Object.prototype.toString,l="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?l:s.call(this)}})}function em(t,r,e,n,i){let o=Zone.__symbol__(n);if(r[o])return;let a=r[o]=r[n];r[n]=function(s,l,c){return l&&l.prototype&&i.forEach(function(u){let g=`${e}.${n}::`+u,A=l.prototype;try{if(A.hasOwnProperty(u)){let P=t.ObjectGetOwnPropertyDescriptor(A,u);P&&P.value?(P.value=t.wrapWithCurrentZone(P.value,g),t._redefineProperty(l.prototype,u,P)):A[u]&&(A[u]=t.wrapWithCurrentZone(A[u],g))}else A[u]&&(A[u]=t.wrapWithCurrentZone(A[u],g))}catch{}}),a.call(r,s,l,c)},t.attachOriginToPatched(r[n],a)}function tm(t){t.__load_patch("util",(r,e,n)=>{let i=Ca(r);n.patchOnProperties=rc,n.patchMethod=Ht,n.bindArguments=Aa,n.patchMacroTask=zf;let o=e.__symbol__("BLACK_LISTED_EVENTS"),a=e.__symbol__("UNPATCHED_EVENTS");r[a]&&(r[o]=r[a]),r[o]&&(e[o]=e[a]=r[o]),n.patchEventPrototype=Gf,n.patchEventTarget=$f,n.ObjectDefineProperty=Da,n.ObjectGetOwnPropertyDescriptor=wr,n.ObjectCreate=kf,n.ArraySlice=Nf,n.patchClass=Er,n.wrapWithCurrentZone=Sa,n.filterProperties=cc,n.attachOriginToPatched=$t,n._redefineProperty=Object.defineProperty,n.patchCallbacks=em,n.getGlobalObjects=()=>({globalSources:ic,zoneSymbolEventNames:pt,eventNames:i,isBrowser:Ta,isMix:nc,isNode:Fi,TRUE_STR:Ut,FALSE_STR:zt,ZONE_SYMBOL_PREFIX:xr,ADD_EVENT_LISTENER_STR:wa,REMOVE_EVENT_LISTENER_STR:xa})})}function nm(t){Jf(t),Qf(t),tm(t)}var dc=Pf();nm(dc);Xf(dc);var uc=null;function gt(){return uc}function Ia(t){uc??=t}var Sr=class{},Oi=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:()=>d(fc),providedIn:"platform"})}return t})();var fc=(()=>{class t extends Oi{_location;_history;_doc=d(le);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return gt().getBaseHref(this._doc)}onPopState(e){let n=gt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=gt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function pc(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function mc(t){let r=t.search(/#|\?|$/);return t[r-1]==="/"?t.slice(0,r-1)+t.slice(r):t}function rn(t){return t&&t[0]!=="?"?`?${t}`:t}var Bn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:()=>d(im),providedIn:"root"})}return t})(),rm=new T(""),im=(()=>{class t extends Bn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??d(le).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return pc(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+rn(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,o){let a=this.prepareExternalUrl(i+rn(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,i,o){let a=this.prepareExternalUrl(i+rn(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(G(Oi),G(rm,8))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var jn=(()=>{class t{_subject=new Ie;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=sm(mc(hc(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+rn(n))}normalize(e){return t.stripTrailingSlash(am(this._basePath,hc(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+rn(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+rn(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=rn;static joinWithSlash=pc;static stripTrailingSlash=mc;static \u0275fac=function(n){return new(n||t)(G(Bn))};static \u0275prov=x({token:t,factory:()=>om(),providedIn:"root"})}return t})();function om(){return new jn(G(Bn))}function am(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function hc(t){return t.replace(/\/index.html$/,"")}function sm(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Ra=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(Je);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||t)(z(Di))};static \u0275dir=X({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ut]})}return t})();function Pi(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[i,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===r)return decodeURIComponent(o)}return null}var vn=class{};var Fa="browser";function gc(t){return t===Fa}var Mr=class{_doc;constructor(r){this._doc=r}manager},ki=(()=>{class t extends Mr{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i,o){return e.addEventListener(n,i,o),()=>this.removeEventListener(e,n,i,o)}removeEventListener(e,n,i,o){return e.removeEventListener(n,i,o)}static \u0275fac=function(n){return new(n||t)(G(le))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),Bi=new T(""),Na=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof ki));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof ki);o&&this._plugins.push(o)}addEventListener(e,n,i,o){return this._findPluginFor(n).addEventListener(e,n,i,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new Y(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(G(Bi),G(Ee))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),Oa="ng-app-id";function vc(t){for(let r of t)r.remove()}function bc(t,r){let e=r.createElement("style");return e.textContent=t,e}function um(t,r,e,n){let i=t.head?.querySelectorAll(`style[${Oa}="${r}"],link[${Oa}="${r}"]`);if(i)for(let o of i)o.removeAttribute(Oa),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function ka(t,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var La=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,i,o={}){this.doc=e,this.appId=n,this.nonce=i,um(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let i of e)this.addUsage(i,this.inline,bc);n?.forEach(i=>this.addUsage(i,this.external,ka))}removeStyles(e,n){for(let i of e)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,n,i){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,n){let i=n.get(e);i&&(i.usage--,i.usage<=0&&(vc(i.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])vc(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(e,bc(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(e,ka(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(G(le),G(_r),G(yr,8),G(Fn))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),Pa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ba=/%COMP%/g;var yc="%COMP%",fm=`_nghost-${yc}`,mm=`_ngcontent-${yc}`,hm=!0,pm=new T("",{factory:()=>hm});function gm(t){return mm.replace(Ba,t)}function vm(t){return fm.replace(Ba,t)}function Cc(t,r){return r.map(e=>e.replace(Ba,t))}var Ir=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,i,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Ar(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,n);return i instanceof Li?i.applyToHost(e):i instanceof Tr&&i.applyStyles(),i}getOrCreateRenderer(e,n){let i=this.rendererByCompId,o=i.get(n.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,g=this.tracingService;switch(n.encapsulation){case yi.Emulated:o=new Li(l,c,n,this.appId,u,a,s,g);break;case yi.ShadowDom:return new Ni(l,e,n,a,s,this.nonce,g,c);case yi.ExperimentalIsolatedShadowDom:return new Ni(l,e,n,a,s,this.nonce,g);default:o=new Tr(l,c,n,u,a,s,g);break}i.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(G(Na),G(La),G(_r),G(pm),G(le),G(Ee),G(yr),G(Ci,8))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),Ar=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,n,i){this.eventManager=r,this.doc=e,this.ngZone=n,this.tracingService=i}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(Pa[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(_c(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){r&&(_c(r)?r.content:r).insertBefore(e,n)}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new Y(-5104,!1);return e||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,i){if(i){e=i+":"+e;let o=Pa[i];o?r.setAttributeNS(o,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let i=Pa[n];i?r.removeAttributeNS(i,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,i){i&(kn.DashCase|kn.Important)?r.style.setProperty(e,n,i&kn.Important?"important":""):r.style[e]=n}removeStyle(r,e,n){n&kn.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n,i){if(typeof r=="string"&&(r=gt().getGlobalEventTarget(this.doc,r),!r))throw new Y(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(r,e,o)),this.eventManager.addEventListener(r,e,o,i)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function _c(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Ni=class extends Ar{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,n,i,o,a,s,l){super(r,i,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=n.styles;c=Cc(n.id,c);for(let g of c){let A=document.createElement("style");a&&A.setAttribute("nonce",a),A.textContent=g,this.shadowRoot.appendChild(A)}let u=n.getExternalStyles?.();if(u)for(let g of u){let A=ka(g,i);a&&A.setAttribute("nonce",a),this.shadowRoot.appendChild(A)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Tr=class extends Ar{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,n,i,o,a,s,l){super(r,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let c=n.styles;this.styles=l?Cc(l,c):c,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Rl.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Li=class extends Tr{contentAttr;hostAttr;constructor(r,e,n,i,o,a,s,l){let c=i+"-"+n.id;super(r,e,n,o,a,s,l,c),this.contentAttr=gm(c),this.hostAttr=vm(c)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,""),n}};var ji=class t extends Sr{supportsDOMEvents=!0;static makeCurrent(){Ia(new t)}onAndCancel(r,e,n,i){return r.addEventListener(e,n,i),()=>{r.removeEventListener(e,n,i)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=_m();return e==null?null:ym(e)}resetBaseElement(){Rr=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Pi(document.cookie,r)}},Rr=null;function _m(){return Rr=Rr||document.head.querySelector("base"),Rr?Rr.getAttribute("href"):null}function ym(t){return new URL(t,document.baseURI).pathname}var Cm=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),Dc=["alt","control","meta","shift"],Dm={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Em={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Ec=(()=>{class t extends Mr{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,i,o){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>gt().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),Dc.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),a+=c+".")}),a+=o,n.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=a,l}static matchEventFullKeyCode(e,n){let i=Dm[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Dc.forEach(a=>{if(a!==i){let s=Em[a];s(e)&&(o+=a+".")}}),o+=i,o===n)}static eventCallback(e,n,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(G(le))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})();async function ja(t,r,e){let n=w({rootComponent:t},wm(r,e));return Hl(n)}function wm(t,r){return{platformRef:r?.platformRef,appProviders:[...Tm,...t?.providers??[]],platformProviders:Am}}function xm(){ji.makeCurrent()}function Sm(){return new hn}function Mm(){return yl(document),document}var Am=[{provide:Fn,useValue:Fa},{provide:Cl,useValue:xm,multi:!0},{provide:le,useFactory:Mm}];var Tm=[{provide:gl,useValue:"root"},{provide:hn,useFactory:Sm},{provide:Bi,useClass:ki,multi:!0},{provide:Bi,useClass:Ec,multi:!0},Ir,La,Na,{provide:Pt,useExisting:Ir},{provide:vn,useClass:Cm},[]];var on=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let i=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let n=r.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=(r.op==="a"?this.headers.get(e):void 0)||[];i.push(...n),this.headers.set(e,i);break;case"d":let o=r.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var Ua=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},za=class{encodeKey(r){return wc(r)}encodeValue(r){return wc(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function Im(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,s]=o==-1?[r.decodeKey(i),""]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var Rm=/%(\d[a-f0-9])/gi,Fm={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function wc(t){return encodeURIComponent(t).replace(Rm,(r,e)=>Fm[e]??r)}function Vi(t){return`${t}`}var Gt=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new za,r.fromString){if(r.fromObject)throw new Y(2805,!1);this.map=Im(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],i=Array.isArray(n)?n.map(Vi):[Vi(n)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let i=r[n];Array.isArray(i)?i.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:i,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(Vi(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let n=this.map.get(r.param)||[],i=n.indexOf(Vi(r.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function Om(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function xc(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Sc(t){return typeof Blob<"u"&&t instanceof Blob}function Mc(t){return typeof FormData<"u"&&t instanceof FormData}function Pm(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Ac="Content-Type",Tc="Accept",Ic="text/plain",Rc="application/json",km=`${Rc}, ${Ic}, */*`,Vn=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,i){this.url=e,this.method=r.toUpperCase();let o;if(Om(this.method)||i?(this.body=n!==void 0?n:null,o=i):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new Y(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new on,this.context??=new Ua,!this.params)this.params=new Gt,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||xc(this.body)||Sc(this.body)||Mc(this.body)||Pm(this.body)?this.body:this.body instanceof Gt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Mc(this.body)?null:Sc(this.body)?this.body.type||null:xc(this.body)?null:typeof this.body=="string"?Ic:this.body instanceof Gt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Rc:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,a=r.priority||this.priority,s=r.cache||this.cache,l=r.mode||this.mode,c=r.redirect||this.redirect,u=r.credentials||this.credentials,g=r.referrer||this.referrer,A=r.integrity||this.integrity,P=r.referrerPolicy||this.referrerPolicy,re=r.transferCache??this.transferCache,V=r.timeout??this.timeout,L=r.body!==void 0?r.body:this.body,B=r.withCredentials??this.withCredentials,M=r.reportProgress??this.reportProgress,C=r.headers||this.headers,U=r.params||this.params,ie=r.context??this.context;return r.setHeaders!==void 0&&(C=Object.keys(r.setHeaders).reduce((se,oe)=>se.set(oe,r.setHeaders[oe]),C)),r.setParams&&(U=Object.keys(r.setParams).reduce((se,oe)=>se.set(oe,r.setParams[oe]),U)),new t(e,n,L,{params:U,headers:C,context:ie,reportProgress:M,responseType:i,withCredentials:B,transferCache:re,keepalive:o,cache:s,priority:a,timeout:V,mode:l,redirect:c,credentials:u,referrer:g,integrity:A,referrerPolicy:P})}},bn=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(bn||{}),Fr=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n="OK"){this.headers=r.headers||new on,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},Ha=class t extends Fr{constructor(r={}){super(r)}type=bn.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},Or=class t extends Fr{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=bn.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},Un=class extends Fr{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},Nm=200,Lm=204;var Bm=/^\)\]\}',?\n/;var jm=(()=>{class t{xhrFactory;tracingService=d(Ci,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new Y(-2800,!1);let n=this.xhrFactory;return R(null).pipe(dt(()=>new An(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((L,B)=>a.setRequestHeader(L,B.join(","))),e.headers.has(Tc)||a.setRequestHeader(Tc,km),!e.headers.has(Ac)){let L=e.detectContentTypeHeader();L!==null&&a.setRequestHeader(Ac,L)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let L=e.responseType.toLowerCase();a.responseType=L!=="json"?L:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let L=a.statusText||"OK",B=new on(a.getAllResponseHeaders()),M=a.responseURL||e.url;return l=new Ha({headers:B,status:a.status,statusText:L,url:M}),l},u=this.maybePropagateTrace(()=>{let{headers:L,status:B,statusText:M,url:C}=c(),U=null;B!==Lm&&(U=typeof a.response>"u"?a.responseText:a.response),B===0&&(B=U?Nm:0);let ie=B>=200&&B<300;if(e.responseType==="json"&&typeof U=="string"){let se=U;U=U.replace(Bm,"");try{U=U!==""?JSON.parse(U):null}catch(oe){U=se,ie&&(ie=!1,U={error:oe,text:U})}}ie?(o.next(new Or({body:U,headers:L,status:B,statusText:M,url:C||void 0})),o.complete()):o.error(new Un({error:U,headers:L,status:B,statusText:M,url:C||void 0}))}),g=this.maybePropagateTrace(L=>{let{url:B}=c(),M=new Un({error:L,status:a.status||0,statusText:a.statusText||"Unknown Error",url:B||void 0});o.error(M)}),A=g;e.timeout&&(A=this.maybePropagateTrace(L=>{let{url:B}=c(),M=new Un({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:B||void 0});o.error(M)}));let P=!1,re=this.maybePropagateTrace(L=>{P||(o.next(c()),P=!0);let B={type:bn.DownloadProgress,loaded:L.loaded};L.lengthComputable&&(B.total=L.total),e.responseType==="text"&&a.responseText&&(B.partialText=a.responseText),o.next(B)}),V=this.maybePropagateTrace(L=>{let B={type:bn.UploadProgress,loaded:L.loaded};L.lengthComputable&&(B.total=L.total),o.next(B)});return a.addEventListener("load",u),a.addEventListener("error",g),a.addEventListener("timeout",A),a.addEventListener("abort",g),e.reportProgress&&(a.addEventListener("progress",re),s!==null&&a.upload&&a.upload.addEventListener("progress",V)),a.send(s),o.next({type:bn.Sent}),()=>{a.removeEventListener("error",g),a.removeEventListener("abort",g),a.removeEventListener("load",u),a.removeEventListener("timeout",A),e.reportProgress&&(a.removeEventListener("progress",re),s!==null&&a.upload&&a.upload.removeEventListener("progress",V)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||t)(G(vn))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Vm(t,r){return r(t)}function Um(t,r,e){return(n,i)=>Ye(e,()=>r(n,o=>t(o,i)))}var zm=new T("",{factory:()=>[]}),Fc=new T(""),Hm=new T("",{factory:()=>!0});var $m=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=G(jm),i},providedIn:"root"})}return t})();var Gm=(()=>{class t{backend;injector;chain=null;pendingTasks=d(_l);contributeToStability=d(Hm);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(zm),...this.injector.get(Fc,[])]));this.chain=n.reduceRight((i,o)=>Um(i,o,this.injector),Vm)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(Tn(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(G($m),G(tt))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=G(Gm),i},providedIn:"root"})}return t})();function Va(t,r){return{body:r,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var $a=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,i={}){let o;if(e instanceof Vn)o=e;else{let l;i.headers instanceof on?l=i.headers:l=new on(i.headers);let c;i.params&&(i.params instanceof Gt?c=i.params:c=new Gt({fromObject:i.params})),o=new Vn(e,n,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=R(o).pipe(pr(l=>this.handler.handle(l)));if(e instanceof Vn||i.observe==="events")return a;let s=a.pipe(ct(l=>l instanceof Or));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(de(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Y(2806,!1);return l.body}));case"blob":return s.pipe(de(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Y(2807,!1);return l.body}));case"text":return s.pipe(de(l=>{if(l.body!==null&&typeof l.body!="string")throw new Y(2808,!1);return l.body}));default:return s.pipe(de(l=>l.body))}case"response":return s;default:throw new Y(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Gt().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,i={}){return this.request("PATCH",e,Va(i,n))}post(e,n,i={}){return this.request("POST",e,Va(i,n))}put(e,n,i={}){return this.request("PUT",e,Va(i,n))}static \u0275fac=function(n){return new(n||t)(G(Wm))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ui=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(G(le))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ga=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=G(Xm),i},providedIn:"root"})}return t})(),Xm=(()=>{class t extends Ga{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case nt.NONE:return n;case nt.HTML:return Pn(n,"HTML")?On(n):Al(this._doc,String(n)).toString();case nt.STYLE:return Pn(n,"Style")?On(n):n;case nt.SCRIPT:if(Pn(n,"Script"))return On(n);throw new Y(5200,!1);case nt.URL:return Pn(n,"URL")?On(n):Ml(String(n));case nt.RESOURCE_URL:if(Pn(n,"ResourceURL"))return On(n);throw new Y(5201,!1);default:throw new Y(5202,!1)}}bypassSecurityTrustHtml(e){return Dl(e)}bypassSecurityTrustStyle(e){return El(e)}bypassSecurityTrustScript(e){return wl(e)}bypassSecurityTrustUrl(e){return xl(e)}bypassSecurityTrustResourceUrl(e){return Sl(e)}static \u0275fac=function(n){return new(n||t)(G(le))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var q="primary",qr=Symbol("RouteTitle"),Xa=class{params;constructor(r){this.params=r||{}}has(r){return Object.prototype.hasOwnProperty.call(this.params,r)}get(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e[0]:e}return null}getAll(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function yn(t){return new Xa(t)}function qa(t,r,e){for(let n=0;n<t.length;n++){let i=t[n],o=r[n];if(i[0]===":")e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function Uc(t,r,e){let n=e.path.split("/"),i=n.indexOf("**");if(i===-1){if(n.length>t.length||e.pathMatch==="full"&&(r.hasChildren()||n.length<t.length))return null;let l={},c=t.slice(0,n.length);return qa(n,c,l)?{consumed:c,posParams:l}:null}if(i!==n.lastIndexOf("**"))return null;let o=n.slice(0,i),a=n.slice(i+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&r.hasChildren()&&e.path!=="**")return null;let s={};return!qa(o,t.slice(0,o.length),s)||!qa(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function qi(t){return new Promise((r,e)=>{t.pipe(en()).subscribe({next:n=>r(n),error:n=>e(n)})})}function Jm(t,r){if(t.length!==r.length)return!1;for(let e=0;e<t.length;++e)if(!Nt(t[e],r[e]))return!1;return!0}function Nt(t,r){let e=t?Ja(t):void 0,n=r?Ja(r):void 0;if(!e||!n||e.length!=n.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!zc(t[i],r[i]))return!1;return!0}function Ja(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function zc(t,r){if(Array.isArray(t)&&Array.isArray(r)){if(t.length!==r.length)return!1;let e=[...t].sort(),n=[...r].sort();return e.every((i,o)=>n[o]===i)}else return t===r}function Qm(t){return t.length>0?t[t.length-1]:null}function En(t){return na(t)?t:Cr(t)?Ze(Promise.resolve(t)):R(t)}function Hc(t){return na(t)?qi(t):Promise.resolve(t)}var eh={exact:Wc,subset:qc},$c={exact:th,subset:nh,ignored:()=>!0},Gc={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Qa={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Oc(t,r,e){return eh[e.paths](t.root,r.root,e.matrixParams)&&$c[e.queryParams](t.queryParams,r.queryParams)&&!(e.fragment==="exact"&&t.fragment!==r.fragment)}function th(t,r){return Nt(t,r)}function Wc(t,r,e){if(!_n(t.segments,r.segments)||!$i(t.segments,r.segments,e)||t.numberOfChildren!==r.numberOfChildren)return!1;for(let n in r.children)if(!t.children[n]||!Wc(t.children[n],r.children[n],e))return!1;return!0}function nh(t,r){return Object.keys(r).length<=Object.keys(t).length&&Object.keys(r).every(e=>zc(t[e],r[e]))}function qc(t,r,e){return Zc(t,r,r.segments,e)}function Zc(t,r,e,n){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!_n(i,e)||r.hasChildren()||!$i(i,e,n))}else if(t.segments.length===e.length){if(!_n(t.segments,e)||!$i(t.segments,e,n))return!1;for(let i in r.children)if(!t.children[i]||!qc(t.children[i],r.children[i],n))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!_n(t.segments,i)||!$i(t.segments,i,n)||!t.children[q]?!1:Zc(t.children[q],r,o,n)}}function $i(t,r,e){return r.every((n,i)=>$c[e](t[i].parameters,n.parameters))}var st=class{root;queryParams;fragment;_queryParamMap;constructor(r=new ce([],{}),e={},n=null){this.root=r,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=yn(this.queryParams),this._queryParamMap}toString(){return oh.serialize(this)}},ce=class{segments;children;parent=null;constructor(r,e){this.segments=r,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Gi(this)}},an=class{path;parameters;_parameterMap;constructor(r,e){this.path=r,this.parameters=e}get parameterMap(){return this._parameterMap??=yn(this.parameters),this._parameterMap}toString(){return Kc(this)}};function rh(t,r){return _n(t,r)&&t.every((e,n)=>Nt(e.parameters,r[n].parameters))}function _n(t,r){return t.length!==r.length?!1:t.every((e,n)=>e.path===r[n].path)}function ih(t,r){let e=[];return Object.entries(t.children).forEach(([n,i])=>{n===q&&(e=e.concat(r(i,n)))}),Object.entries(t.children).forEach(([n,i])=>{n!==q&&(e=e.concat(r(i,n)))}),e}var Kn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:()=>new sn,providedIn:"root"})}return t})(),sn=class{parse(r){let e=new ts(r);return new st(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(r){let e=`/${Pr(r.root,!0)}`,n=lh(r.queryParams),i=typeof r.fragment=="string"?`#${ah(r.fragment)}`:"";return`${e}${n}${i}`}},oh=new sn;function Gi(t){return t.segments.map(r=>Kc(r)).join("/")}function Pr(t,r){if(!t.hasChildren())return Gi(t);if(r){let e=t.children[q]?Pr(t.children[q],!1):"",n=[];return Object.entries(t.children).forEach(([i,o])=>{i!==q&&n.push(`${i}:${Pr(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=ih(t,(n,i)=>i===q?[Pr(t.children[q],!1)]:[`${i}:${Pr(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[q]!=null?`${Gi(t)}/${e[0]}`:`${Gi(t)}/(${e.join("//")})`}}function Yc(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function zi(t){return Yc(t).replace(/%3B/gi,";")}function ah(t){return encodeURI(t)}function es(t){return Yc(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Wi(t){return decodeURIComponent(t)}function Pc(t){return Wi(t.replace(/\+/g,"%20"))}function Kc(t){return`${es(t.path)}${sh(t.parameters)}`}function sh(t){return Object.entries(t).map(([r,e])=>`;${es(r)}=${es(e)}`).join("")}function lh(t){let r=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(i=>`${zi(e)}=${zi(i)}`).join("&"):`${zi(e)}=${zi(n)}`).filter(e=>e);return r.length?`?${r.join("&")}`:""}var ch=/^[^\/()?;#]+/;function Za(t){let r=t.match(ch);return r?r[0]:""}var dh=/^[^\/()?;=#]+/;function uh(t){let r=t.match(dh);return r?r[0]:""}var fh=/^[^=?&#]+/;function mh(t){let r=t.match(fh);return r?r[0]:""}var hh=/^[^&#]+/;function ph(t){let r=t.match(hh);return r?r[0]:""}var ts=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ce([],{}):new ce([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional("?"))do this.parseQueryParam(r);while(this.consumeOptional("&"));return r}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(r=0){if(r>50)throw new Y(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,r));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,r)),(e.length>0||Object.keys(n).length>0)&&(i[q]=new ce(e,n)),i}parseSegment(){let r=Za(this.remaining);if(r===""&&this.peekStartsWith(";"))throw new Y(4009,!1);return this.capture(r),new an(Wi(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(";");)this.parseParam(r);return r}parseParam(r){let e=uh(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let i=Za(this.remaining);i&&(n=i,this.capture(n))}r[Wi(e)]=Wi(n)}parseQueryParam(r){let e=mh(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=ph(this.remaining);a&&(n=a,this.capture(n))}let i=Pc(e),o=Pc(n);if(r.hasOwnProperty(i)){let a=r[i];Array.isArray(a)||(a=[a],r[i]=a),a.push(o)}else r[i]=o}parseParens(r,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Za(this.remaining),o=this.remaining[i.length];if(o!=="/"&&o!==")"&&o!==";")throw new Y(4010,!1);let a;i.indexOf(":")>-1?(a=i.slice(0,i.indexOf(":")),this.capture(a),this.capture(":")):r&&(a=q);let s=this.parseChildren(e+1);n[a??q]=Object.keys(s).length===1&&s[q]?s[q]:new ce([],s),this.consumeOptional("//")}return n}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new Y(4011,!1)}};function Xc(t){return t.segments.length>0?new ce([],{[q]:t}):t}function Jc(t){let r={};for(let[n,i]of Object.entries(t.children)){let o=Jc(i);if(n===q&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))r[a]=s;else(o.segments.length>0||o.hasChildren())&&(r[n]=o)}let e=new ce(t.segments,r);return gh(e)}function gh(t){if(t.numberOfChildren===1&&t.children[q]){let r=t.children[q];return new ce(t.segments.concat(r.segments),r.children)}return t}function ln(t){return t instanceof st}function Qc(t,r,e=null,n=null,i=new sn){let o=ed(t);return td(o,r,e,n,i)}function ed(t){let r;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new ce(o.url,a);return o===t&&(r=s),s}let n=e(t.root),i=Xc(n);return r??i}function td(t,r,e,n,i){let o=t;for(;o.parent;)o=o.parent;if(r.length===0)return Ya(o,o,o,e,n,i);let a=vh(r);if(a.toRoot())return Ya(o,o,new ce([],{}),e,n,i);let s=bh(a,o,t),l=s.processChildren?Nr(s.segmentGroup,s.index,a.commands):rd(s.segmentGroup,s.index,a.commands);return Ya(o,s.segmentGroup,l,e,n,i)}function Zi(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function jr(t){return typeof t=="object"&&t!=null&&t.outlets}function kc(t,r,e){t||="\u0275";let n=new st;return n.queryParams={[t]:r},e.parse(e.serialize(n)).queryParams[t]}function Ya(t,r,e,n,i,o){let a={};for(let[c,u]of Object.entries(n??{}))a[c]=Array.isArray(u)?u.map(g=>kc(c,g,o)):kc(c,u,o);let s;t===r?s=e:s=nd(t,r,e);let l=Xc(Jc(s));return new st(l,a,i)}function nd(t,r,e){let n={};return Object.entries(t.children).forEach(([i,o])=>{o===r?n[i]=e:n[i]=nd(o,r,e)}),new ce(t.segments,n)}var Yi=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,e,n){if(this.isAbsolute=r,this.numberOfDoubleDots=e,this.commands=n,r&&n.length>0&&Zi(n[0]))throw new Y(4003,!1);let i=n.find(jr);if(i&&i!==Qm(n))throw new Y(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function vh(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Yi(!0,0,t);let r=0,e=!1,n=t.reduce((i,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...i,{outlets:s}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?r++:s!=""&&i.push(s))}),i):[...i,o]},[]);return new Yi(e,r,n)}var Hn=class{segmentGroup;processChildren;index;constructor(r,e,n){this.segmentGroup=r,this.processChildren=e,this.index=n}};function bh(t,r,e){if(t.isAbsolute)return new Hn(r,!0,0);if(!e)return new Hn(r,!1,NaN);if(e.parent===null)return new Hn(e,!0,0);let n=Zi(t.commands[0])?0:1,i=e.segments.length-1+n;return _h(e,i,t.numberOfDoubleDots)}function _h(t,r,e){let n=t,i=r,o=e;for(;o>i;){if(o-=i,n=n.parent,!n)throw new Y(4005,!1);i=n.segments.length}return new Hn(n,!1,i-o)}function yh(t){return jr(t[0])?t[0].outlets:{[q]:t}}function rd(t,r,e){if(t??=new ce([],{}),t.segments.length===0&&t.hasChildren())return Nr(t,r,e);let n=Ch(t,r,e),i=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new ce(t.segments.slice(0,n.pathIndex),{});return o.children[q]=new ce(t.segments.slice(n.pathIndex),t.children),Nr(o,0,i)}else return n.match&&i.length===0?new ce(t.segments,{}):n.match&&!t.hasChildren()?ns(t,r,e):n.match?Nr(t,0,i):ns(t,r,e)}function Nr(t,r,e){if(e.length===0)return new ce(t.segments,{});{let n=yh(e),i={};if(Object.keys(n).some(o=>o!==q)&&t.children[q]&&t.numberOfChildren===1&&t.children[q].segments.length===0){let o=Nr(t.children[q],r,e);return new ce(t.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(i[o]=rd(t.children[o],r,a))}),Object.entries(t.children).forEach(([o,a])=>{n[o]===void 0&&(i[o]=a)}),new ce(t.segments,i)}}function Ch(t,r,e){let n=0,i=r,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(n>=e.length)return o;let a=t.segments[i],s=e[n];if(jr(s))break;let l=`${s}`,c=n<e.length-1?e[n+1]:null;if(i>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!Lc(l,c,a))return o;n+=2}else{if(!Lc(l,{},a))return o;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function ns(t,r,e){let n=t.segments.slice(0,r),i=0;for(;i<e.length;){let o=e[i];if(jr(o)){let l=Dh(o.outlets);return new ce(n,l)}if(i===0&&Zi(e[0])){let l=t.segments[r];n.push(new an(l.path,Nc(e[0]))),i++;continue}let a=jr(o)?o.outlets[q]:`${o}`,s=i<e.length-1?e[i+1]:null;a&&s&&Zi(s)?(n.push(new an(a,Nc(s))),i+=2):(n.push(new an(a,{})),i++)}return new ce(n,{})}function Dh(t){let r={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(r[e]=ns(new ce([],{}),0,n))}),r}function Nc(t){let r={};return Object.entries(t).forEach(([e,n])=>r[e]=`${n}`),r}function Lc(t,r,e){return t==e.path&&Nt(r,e.parameters)}var Lr="imperative",Be=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Be||{}),lt=class{id;url;constructor(r,e){this.id=r,this.url=e}},Cn=class extends lt{type=Be.NavigationStart;navigationTrigger;restoredState;constructor(r,e,n="imperative",i=null){super(r,e),this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Lt=class extends lt{urlAfterRedirects;type=Be.NavigationEnd;constructor(r,e,n){super(r,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ze=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(ze||{}),Vr=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Vr||{}),vt=class extends lt{reason;code;type=Be.NavigationCancel;constructor(r,e,n,i){super(r,e),this.reason=n,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function id(t){return t instanceof vt&&(t.code===ze.Redirect||t.code===ze.SupersededByNewNavigation)}var qt=class extends lt{reason;code;type=Be.NavigationSkipped;constructor(r,e,n,i){super(r,e),this.reason=n,this.code=i}},Dn=class extends lt{error;target;type=Be.NavigationError;constructor(r,e,n,i){super(r,e),this.error=n,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ur=class extends lt{urlAfterRedirects;state;type=Be.RoutesRecognized;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ki=class extends lt{urlAfterRedirects;state;type=Be.GuardsCheckStart;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xi=class extends lt{urlAfterRedirects;state;shouldActivate;type=Be.GuardsCheckEnd;constructor(r,e,n,i,o){super(r,e),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ji=class extends lt{urlAfterRedirects;state;type=Be.ResolveStart;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qi=class extends lt{urlAfterRedirects;state;type=Be.ResolveEnd;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},eo=class{route;type=Be.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},to=class{route;type=Be.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},no=class{snapshot;type=Be.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ro=class{snapshot;type=Be.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},io=class{snapshot;type=Be.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},oo=class{snapshot;type=Be.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Gn=class{},zr=class{},Wn=class{url;navigationBehaviorOptions;constructor(r,e){this.url=r,this.navigationBehaviorOptions=e}};function Eh(t){return!(t instanceof Gn)&&!(t instanceof Wn)&&!(t instanceof zr)}var ao=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new Xn(this.rootInjector)}},Xn=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let i=this.getOrCreateContext(e);i.outlet=n,this.contexts.set(e,i)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new ao(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(G(tt))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),so=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let e=this.pathFromRoot(r);return e.length>1?e[e.length-2]:null}children(r){let e=rs(r,this._root);return e?e.children.map(n=>n.value):[]}firstChild(r){let e=rs(r,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(r){let e=is(r,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==r)}pathFromRoot(r){return is(r,this._root).map(e=>e.value)}};function rs(t,r){if(t===r.value)return r;for(let e of r.children){let n=rs(t,e);if(n)return n}return null}function is(t,r){if(t===r.value)return[r];for(let e of r.children){let n=is(t,e);if(n.length)return n.unshift(r),n}return[]}var at=class{value;children;constructor(r,e){this.value=r,this.children=e}toString(){return`TreeNode(${this.value})`}};function zn(t){let r={};return t&&t.children.forEach(e=>r[e.value.outlet]=e),r}var Hr=class extends so{snapshot;constructor(r,e){super(r),this.snapshot=e,ms(this,r)}toString(){return this.snapshot.toString()}};function od(t,r){let e=wh(t,r),n=new We([new an("",{})]),i=new We({}),o=new We({}),a=new We({}),s=new We(""),l=new Tt(n,i,a,s,o,q,t,e.root);return l.snapshot=e.root,new Hr(new at(l,[]),e)}function wh(t,r){let e={},n={},i={},a=new qn([],e,i,"",n,q,t,null,{},r);return new $r("",new at(a,[]))}var Tt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(r,e,n,i,o,a,s,l){this.urlSubject=r,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(de(c=>c[qr]))??R(void 0),this.url=r,this.params=e,this.queryParams=n,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(de(r=>yn(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(de(r=>yn(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function fs(t,r,e="emptyOnly"){let n,{routeConfig:i}=t;return r!==null&&(e==="always"||i?.path===""||!r.component&&!r.routeConfig?.loadComponent)?n={params:w(w({},r.params),t.params),data:w(w({},r.data),t.data),resolve:w(w(w(w({},t.data),r.data),i?.data),t._resolvedData)}:n={params:w({},t.params),data:w({},t.data),resolve:w(w({},t.data),t._resolvedData??{})},i&&sd(i)&&(n.resolve[qr]=i.title),n}var qn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[qr]}constructor(r,e,n,i,o,a,s,l,c,u){this.url=r,this.params=e,this.queryParams=n,this.fragment=i,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=yn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=yn(this.queryParams),this._queryParamMap}toString(){let r=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${r}', path:'${e}')`}},$r=class extends so{url;constructor(r,e){super(e),this.url=r,ms(this,e)}toString(){return ad(this._root)}};function ms(t,r){r.value._routerState=t,r.children.forEach(e=>ms(t,e))}function ad(t){let r=t.children.length>0?` { ${t.children.map(ad).join(", ")} } `:"";return`${t.value}${r}`}function Ka(t){if(t.snapshot){let r=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Nt(r.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),r.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Nt(r.params,e.params)||t.paramsSubject.next(e.params),Jm(r.url,e.url)||t.urlSubject.next(e.url),Nt(r.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function os(t,r){let e=Nt(t.params,r.params)&&rh(t.url,r.url),n=!t.parent!=!r.parent;return e&&!n&&(!t.parent||os(t.parent,r.parent))}function sd(t){return typeof t.title=="string"||t.title===null}var ld=new T(""),Zr=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=q;activateEvents=new Re;deactivateEvents=new Re;attachEvents=new Re;detachEvents=new Re;routerOutletData=Vl();parentContexts=d(Xn);location=d(Di);changeDetector=d(nn);inputBinder=d(fo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:i}=e.name;if(n)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Y(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Y(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Y(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new Y(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new as(e,s,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ut]})}return t})(),as=class{route;childContexts;parent;outletData;constructor(r,e,n,i){this.route=r,this.childContexts=e,this.parent=n,this.outletData=i}get(r,e){return r===Tt?this.route:r===Xn?this.childContexts:r===ld?this.outletData:this.parent.get(r,e)}},fo=new T("");var hs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=te({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,i){n&1&&Pe(0,"router-outlet")},dependencies:[Zr],encapsulation:2})}return t})();function ps(t){let r=t.children&&t.children.map(ps),e=r?he(w({},t),{children:r}):w({},t);return!e.component&&!e.loadComponent&&(r||e.loadChildren)&&e.outlet&&e.outlet!==q&&(e.component=hs),e}function xh(t,r,e){let n=Gr(t,r._root,e?e._root:void 0);return new Hr(n,r)}function Gr(t,r,e){if(e&&t.shouldReuseRoute(r.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=r.value;let i=Sh(t,r,e);return new at(n,i)}else{if(t.shouldAttach(r.value)){let o=t.retrieve(r.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=r.value,a.children=r.children.map(s=>Gr(t,s)),a}}let n=Mh(r.value),i=r.children.map(o=>Gr(t,o));return new at(n,i)}}function Sh(t,r,e){return r.children.map(n=>{for(let i of e.children)if(t.shouldReuseRoute(n.value,i.value.snapshot))return Gr(t,n,i);return Gr(t,n)})}function Mh(t){return new Tt(new We(t.url),new We(t.params),new We(t.queryParams),new We(t.fragment),new We(t.data),t.outlet,t.component,t)}var Zn=class{redirectTo;navigationBehaviorOptions;constructor(r,e){this.redirectTo=r,this.navigationBehaviorOptions=e}},cd="ngNavigationCancelingError";function lo(t,r){let{redirectTo:e,navigationBehaviorOptions:n}=ln(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,i=dd(!1,ze.Redirect);return i.url=e,i.navigationBehaviorOptions=n,i}function dd(t,r){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[cd]=!0,e.cancellationCode=r,e}function Ah(t){return ud(t)&&ln(t.url)}function ud(t){return!!t&&t[cd]}var ss=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,e,n,i,o){this.routeReuseStrategy=r,this.futureState=e,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=o}activate(r){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,r),Ka(this.futureState.root),this.activateChildRoutes(e,n,r)}deactivateChildRoutes(r,e,n){let i=zn(e);r.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],n),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(r,e,n){let i=r.value,o=e?e.value:null;if(i===o)if(i.component){let a=n.getContext(i.outlet);a&&this.deactivateChildRoutes(r,e,a.children)}else this.deactivateChildRoutes(r,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(r,e){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,e):this.deactivateRouteAndOutlet(r,e)}detachAndStoreRouteSubtree(r,e){let n=e.getContext(r.value.outlet),i=n&&r.value.component?n.children:e,o=zn(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(n&&n.outlet){let a=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(r.value.snapshot,{componentRef:a,route:r,contexts:s})}}deactivateRouteAndOutlet(r,e){let n=e.getContext(r.value.outlet),i=n&&r.value.component?n.children:e,o=zn(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(r,e,n){let i=zn(e);r.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],n),this.forwardEvent(new oo(o.value.snapshot))}),r.children.length&&this.forwardEvent(new ro(r.value.snapshot))}activateRoutes(r,e,n){let i=r.value,o=e?e.value:null;if(Ka(i),i===o)if(i.component){let a=n.getOrCreateContext(i.outlet);this.activateChildRoutes(r,e,a.children)}else this.activateChildRoutes(r,e,n);else if(i.component){let a=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let s=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Ka(s.route.value),this.activateChildRoutes(r,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(r,null,a.children)}else this.activateChildRoutes(r,null,n)}},co=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}},$n=class{component;route;constructor(r,e){this.component=r,this.route=e}};function Th(t,r,e){let n=t._root,i=r?r._root:null;return kr(n,i,e,[n.value])}function Ih(t){let r=t.routeConfig?t.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:t,guards:r}}function Jn(t,r){let e=Symbol(),n=r.get(t,e);return n===e?typeof t=="function"&&!pl(t)?t:r.get(t):n}function kr(t,r,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=zn(r);return t.children.forEach(a=>{Rh(a,o[a.value.outlet],e,n.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Br(s,e.getContext(a),i)),i}function Rh(t,r,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=r?r.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=Fh(a,o,o.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new co(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?kr(t,r,s?s.children:null,n,i):kr(t,r,e,n,i),l&&s&&s.outlet&&s.outlet.isActivated&&i.canDeactivateChecks.push(new $n(s.outlet.component,a))}else a&&Br(r,s,i),i.canActivateChecks.push(new co(n)),o.component?kr(t,null,s?s.children:null,n,i):kr(t,null,e,n,i);return i}function Fh(t,r,e){if(typeof e=="function")return Ye(r._environmentInjector,()=>e(t,r));switch(e){case"pathParamsChange":return!_n(t.url,r.url);case"pathParamsOrQueryParamsChange":return!_n(t.url,r.url)||!Nt(t.queryParams,r.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!os(t,r)||!Nt(t.queryParams,r.queryParams);default:return!os(t,r)}}function Br(t,r,e){let n=zn(t),i=t.value;Object.entries(n).forEach(([o,a])=>{i.component?r?Br(a,r.children.getContext(o),e):Br(a,null,e):Br(a,r,e)}),i.component?r&&r.outlet&&r.outlet.isActivated?e.canDeactivateChecks.push(new $n(r.outlet.component,i)):e.canDeactivateChecks.push(new $n(null,i)):e.canDeactivateChecks.push(new $n(null,i))}function Yr(t){return typeof t=="function"}function Oh(t){return typeof t=="boolean"}function Ph(t){return t&&Yr(t.canLoad)}function kh(t){return t&&Yr(t.canActivate)}function Nh(t){return t&&Yr(t.canActivateChild)}function Lh(t){return t&&Yr(t.canDeactivate)}function Bh(t){return t&&Yr(t.canMatch)}function fd(t){return t instanceof al||t?.name==="EmptyError"}var Hi=Symbol("INITIAL_VALUE");function Yn(){return dt(t=>sl(t.map(r=>r.pipe(Qt(1),vi(Hi)))).pipe(de(r=>{for(let e of r)if(e!==!0){if(e===Hi)return Hi;if(e===!1||jh(e))return e}return!0}),ct(r=>r!==Hi),Qt(1)))}function jh(t){return ln(t)||t instanceof Zn}function md(t){return t.aborted?R(void 0).pipe(Qt(1)):new An(r=>{let e=()=>{r.next(),r.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function hd(t){return Ot(md(t))}function Vh(t){return Jt(r=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:o}}=r;return o.length===0&&i.length===0?R(he(w({},r),{guardsResult:!0})):Uh(o,e,n).pipe(Jt(a=>a&&Oh(a)?zh(e,i,t):R(a)),de(a=>he(w({},r),{guardsResult:a})))})}function Uh(t,r,e){return Ze(t).pipe(Jt(n=>qh(n.component,n.route,e,r)),en(n=>n!==!0,!0))}function zh(t,r,e){return Ze(r).pipe(pr(n=>ll($h(n.route.parent,e),Hh(n.route,e),Wh(t,n.path),Gh(t,n.route))),en(n=>n!==!0,!0))}function Hh(t,r){return t!==null&&r&&r(new io(t)),R(!0)}function $h(t,r){return t!==null&&r&&r(new no(t)),R(!0)}function Gh(t,r){let e=r.routeConfig?r.routeConfig.canActivate:null;if(!e||e.length===0)return R(!0);let n=e.map(i=>pi(()=>{let o=r._environmentInjector,a=Jn(i,o),s=kh(a)?a.canActivate(r,t):Ye(o,()=>a(r,t));return En(s).pipe(en())}));return R(n).pipe(Yn())}function Wh(t,r){let e=r[r.length-1],i=r.slice(0,r.length-1).reverse().map(o=>Ih(o)).filter(o=>o!==null).map(o=>pi(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=Jn(s,l),u=Nh(c)?c.canActivateChild(e,t):Ye(l,()=>c(e,t));return En(u).pipe(en())});return R(a).pipe(Yn())}));return R(i).pipe(Yn())}function qh(t,r,e,n){let i=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!i||i.length===0)return R(!0);let o=i.map(a=>{let s=r._environmentInjector,l=Jn(a,s),c=Lh(l)?l.canDeactivate(t,r,e,n):Ye(s,()=>l(t,r,e,n));return En(c).pipe(en())});return R(o).pipe(Yn())}function Zh(t,r,e,n,i){let o=r.canLoad;if(o===void 0||o.length===0)return R(!0);let a=o.map(s=>{let l=Jn(s,t),c=Ph(l)?l.canLoad(r,e):Ye(t,()=>l(r,e)),u=En(c);return i?u.pipe(hd(i)):u});return R(a).pipe(Yn(),pd(n))}function pd(t){return ol($e(r=>{if(typeof r!="boolean")throw lo(t,r)}),de(r=>r===!0))}function Yh(t,r,e,n,i,o){let a=r.canMatch;if(!a||a.length===0)return R(!0);let s=a.map(l=>{let c=Jn(l,t),u=Bh(c)?c.canMatch(r,e,i):Ye(t,()=>c(r,e,i));return En(u).pipe(hd(o))});return R(s).pipe(Yn(),pd(n))}var Wt=class t extends Error{segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,t.prototype)}},Wr=class t extends Error{urlTree;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,t.prototype)}};function Kh(t){throw new Y(4e3,!1)}function Xh(t){throw dd(!1,ze.GuardRejected)}var ls=class{urlSerializer;urlTree;constructor(r,e){this.urlSerializer=r,this.urlTree=e}async lineralizeSegments(r,e){let n=[],i=e.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return n;if(i.numberOfChildren>1||!i.children[q])throw Kh(`${r.redirectTo}`);i=i.children[q]}}async applyRedirectCommands(r,e,n,i,o){let a=await Jh(e,i,o);if(a instanceof st)throw new Wr(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),r,n);if(a[0]==="/")throw new Wr(s);return s}applyRedirectCreateUrlTree(r,e,n,i){let o=this.createSegmentGroup(r,e.root,n,i);return new st(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(r,e){let n={};return Object.entries(r).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);n[i]=e[s]}else n[i]=o}),n}createSegmentGroup(r,e,n,i){let o=this.createSegments(r,e.segments,n,i),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(r,l,n,i)}),new ce(o,a)}createSegments(r,e,n,i){return e.map(o=>o.path[0]===":"?this.findPosParam(r,o,i):this.findOrReturn(o,n))}findPosParam(r,e,n){let i=n[e.path.substring(1)];if(!i)throw new Y(4001,!1);return i}findOrReturn(r,e){let n=0;for(let i of e){if(i.path===r.path)return e.splice(n),i;n++}return r}};function Jh(t,r,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return qi(En(Ye(e,()=>n(r))))}function Qh(t,r){return t.providers&&!t._injector&&(t._injector=sa(t.providers,r,`Route: ${t.path}`)),t._injector??r}function At(t){return t.outlet||q}function ep(t,r){let e=t.filter(n=>At(n)===r);return e.push(...t.filter(n=>At(n)!==r)),e}var cs={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function gd(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function tp(t,r,e,n,i,o,a){let s=vd(t,r,e);if(!s.matched)return R(s);let l=gd(o(s));return n=Qh(r,n),Yh(n,r,e,i,l,a).pipe(de(c=>c===!0?s:w({},cs)))}function vd(t,r,e){if(r.path==="")return r.pathMatch==="full"&&(t.hasChildren()||e.length>0)?w({},cs):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(r.matcher||Uc)(e,t,r);if(!i)return w({},cs);let o={};Object.entries(i.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=i.consumed.length>0?w(w({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function Bc(t,r,e,n,i){return e.length>0&&ip(t,e,n,i)?{segmentGroup:new ce(r,rp(n,new ce(e,t.children))),slicedSegments:[]}:e.length===0&&op(t,e,n)?{segmentGroup:new ce(t.segments,np(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new ce(t.segments,t.children),slicedSegments:e}}function np(t,r,e,n){let i={};for(let o of e)if(mo(t,r,o)&&!n[At(o)]){let a=new ce([],{});i[At(o)]=a}return w(w({},n),i)}function rp(t,r){let e={};e[q]=r;for(let n of t)if(n.path===""&&At(n)!==q){let i=new ce([],{});e[At(n)]=i}return e}function ip(t,r,e,n){return e.some(i=>!mo(t,r,i)||!(At(i)!==q)?!1:!(n!==void 0&&At(i)===n))}function op(t,r,e){return e.some(n=>mo(t,r,n))}function mo(t,r,e){return(t.hasChildren()||r.length>0)&&e.pathMatch==="full"?!1:e.path===""}function ap(t,r,e){return r.length===0&&!t.children[e]}var ds=class{};async function sp(t,r,e,n,i,o,a="emptyOnly",s){return new us(t,r,e,n,i,a,o,s).recognize()}var lp=31,us=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,e,n,i,o,a,s,l){this.injector=r,this.configLoader=e,this.rootComponentType=n,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new ls(this.urlSerializer,this.urlTree)}noMatchError(r){return new Y(4002,`'${r.segmentGroup}'`)}async recognize(){let r=Bc(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(r),i=new at(n,e),o=new $r("",i),a=Qc(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(r){let e=new qn([],Object.freeze({}),Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),q,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,r,q,e),rootSnapshot:e}}catch(n){if(n instanceof Wr)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Wt?this.noMatchError(n):n}}async processSegmentGroup(r,e,n,i,o){if(n.segments.length===0&&n.hasChildren())return this.processChildren(r,e,n,o);let a=await this.processSegment(r,e,n,n.segments,i,!0,o);return a instanceof at?[a]:[]}async processChildren(r,e,n,i){let o=[];for(let l of Object.keys(n.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=n.children[l],u=ep(e,l),g=await this.processSegmentGroup(r,u,c,l,i);a.push(...g)}let s=bd(a);return cp(s),s}async processSegment(r,e,n,i,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??r,e,l,n,i,o,a,s)}catch(c){if(c instanceof Wt||fd(c))continue;throw c}if(ap(n,i,o))return new ds;throw new Wt(n)}async processSegmentAgainstRoute(r,e,n,i,o,a,s,l){if(At(n)!==a&&(a===q||!mo(i,o,n)))throw new Wt(i);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,i,n,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(r,i,e,n,o,a,l);throw new Wt(i)}async expandSegmentAgainstRouteUsingRedirect(r,e,n,i,o,a,s){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:g,remainingSegments:A}=vd(e,i,o);if(!l)throw new Wt(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>lp&&(this.allowRedirects=!1));let P=this.createSnapshot(r,i,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let re=await this.applyRedirects.applyRedirectCommands(u,i.redirectTo,g,gd(P),r),V=await this.applyRedirects.lineralizeSegments(i,re);return this.processSegment(r,n,e,V.concat(A),a,!1,s)}createSnapshot(r,e,n,i,o){let a=new qn(n,i,Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,up(e),At(e),e.component??e._loadedComponent??null,e,fp(e),r),s=fs(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(r,e,n,i,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=C=>this.createSnapshot(r,n,C.consumedSegments,C.parameters,a),l=await qi(tp(e,n,i,r,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!l?.matched)throw new Wt(e);r=n._injector??r;let{routes:c}=await this.getChildConfig(r,n,i),u=n._loadedInjector??r,{parameters:g,consumedSegments:A,remainingSegments:P}=l,re=this.createSnapshot(r,n,A,g,a),{segmentGroup:V,slicedSegments:L}=Bc(e,A,P,c,o);if(L.length===0&&V.hasChildren()){let C=await this.processChildren(u,c,V,re);return new at(re,C)}if(c.length===0&&L.length===0)return new at(re,[]);let B=At(n)===o,M=await this.processSegment(u,c,V,L,B?q:o,!0,re);return new at(re,M instanceof at?[M]:[])}async getChildConfig(r,e,n){if(e.children)return{routes:e.children,injector:r};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(r).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await qi(Zh(r,e,n,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(r,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Xh(e)}return{routes:[],injector:r}}};function cp(t){t.sort((r,e)=>r.value.outlet===q?-1:e.value.outlet===q?1:r.value.outlet.localeCompare(e.value.outlet))}function dp(t){let r=t.value.routeConfig;return r&&r.path===""}function bd(t){let r=[],e=new Set;for(let n of t){if(!dp(n)){r.push(n);continue}let i=r.find(o=>n.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...n.children),e.add(i)):r.push(n)}for(let n of e){let i=bd(n.children);r.push(new at(n.value,i))}return r.filter(n=>!e.has(n))}function up(t){return t.data||{}}function fp(t){return t.resolve||{}}function mp(t,r,e,n,i,o,a){return Jt(async s=>{let{state:l,tree:c}=await sp(t,r,e,n,s.extractedUrl,i,o,a);return he(w({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function hp(t){return Jt(r=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=r;if(!n.length)return R(r);let i=new Set(n.map(s=>s.route)),o=new Set;for(let s of i)if(!o.has(s))for(let l of _d(s))o.add(l);let a=0;return Ze(o).pipe(pr(s=>i.has(s)?pp(s,e,t):(s.data=fs(s,s.parent,t).resolve,R(void 0))),$e(()=>a++),ra(1),Jt(s=>a===o.size?R(r):qe))})}function _d(t){let r=t.children.map(e=>_d(e)).flat();return[t,...r]}function pp(t,r,e){let n=t.routeConfig,i=t._resolve;return n?.title!==void 0&&!sd(n)&&(i[qr]=n.title),pi(()=>(t.data=fs(t,t.parent,e).resolve,gp(i,t,r).pipe(de(o=>(t._resolvedData=o,t.data=w(w({},t.data),o),null)))))}function gp(t,r,e){let n=Ja(t);if(n.length===0)return R({});let i={};return Ze(n).pipe(Jt(o=>vp(t[o],r,e).pipe(en(),$e(a=>{if(a instanceof Zn)throw lo(new sn,a);i[o]=a}))),ra(1),de(()=>i),hr(o=>fd(o)?qe:hi(o)))}function vp(t,r,e){let n=r._environmentInjector,i=Jn(t,n),o=i.resolve?i.resolve(r,e):Ye(n,()=>i(r,e));return En(o)}function jc(t){return dt(r=>{let e=t(r);return e?Ze(e).pipe(de(()=>r)):R(r)})}var gs=(()=>{class t{buildTitle(e){let n,i=e.root;for(;i!==void 0;)n=this.getResolvedTitleForRoute(i)??n,i=i.children.find(o=>o.outlet===q);return n}getResolvedTitleForRoute(e){return e.data[qr]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:()=>d(yd),providedIn:"root"})}return t})(),yd=(()=>{class t extends gs{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(G(Ui))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qn=new T("",{factory:()=>({})}),Kr=new T(""),Cd=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(Bl);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let o=await Hc(Ye(e,()=>n.loadComponent())),a=await wd(Ed(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,i),i}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let o=await Dd(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,i),i}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function Dd(t,r,e,n){let i=await Hc(Ye(e,()=>t.loadChildren())),o=await wd(Ed(i)),a;o instanceof Fl||Array.isArray(o)?a=o:a=await r.compileModuleAsync(o),n&&n(t);let s,l,c=!1,u;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,u=a,l=s.get(Kr,[],{optional:!0,self:!0}).flat()),{routes:l.map(ps),injector:s,factory:u}}function bp(t){return t&&typeof t=="object"&&"default"in t}function Ed(t){return bp(t)?t.default:t}async function wd(t){return t}var ho=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:()=>d(_p),providedIn:"root"})}return t})(),_p=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xd=new T("");var yp=()=>{},Sd=new T(""),Md=(()=>{class t{currentNavigation=ye(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=ye(null);events=new Ie;transitionAbortWithErrorSubject=new Ie;configLoader=d(Cd);environmentInjector=d(tt);destroyRef=d(vr);urlSerializer=d(Kn);rootContexts=d(Xn);location=d(jn);inputBindingEnabled=d(fo,{optional:!0})!==null;titleStrategy=d(gs);options=d(Qn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(ho);createViewTransition=d(xd,{optional:!0});navigationErrorHandler=d(Sd,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>R(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new eo(i)),n=i=>this.events.next(new to(i));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;_e(()=>{this.transitions?.next(he(w({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new We(null),this.transitions.pipe(ct(n=>n!==null),dt(n=>{let i=!1,o=new AbortController,a=()=>!i&&this.currentTransition?.id===n.id;return R(n).pipe(dt(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",ze.SupersededByNewNavigation),qe;this.currentTransition=n;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?he(w({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&u!=="reload")return this.events.next(new qt(s.id,this.urlSerializer.serialize(s.rawUrl),"",Vr.IgnoredSameUrlNavigation)),s.resolve(!1),qe;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return R(s).pipe(dt(g=>(this.events.next(new Cn(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?qe:Promise.resolve(g))),mp(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),$e(g=>{n.targetSnapshot=g.targetSnapshot,n.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(A=>(A.finalUrl=g.urlAfterRedirects,A)),this.events.next(new zr)}),dt(g=>Ze(n.routesRecognizeHandler.deferredHandle??R(void 0)).pipe(de(()=>g))),$e(()=>{let g=new Ur(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:g,extractedUrl:A,source:P,restoredState:re,extras:V}=s,L=new Cn(g,this.urlSerializer.serialize(A),P,re);this.events.next(L);let B=od(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=he(w({},s),{targetSnapshot:B,urlAfterRedirects:A,extras:he(w({},V),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(M=>(M.finalUrl=A,M)),R(n)}else return this.events.next(new qt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Vr.IgnoredByUrlHandlingStrategy)),s.resolve(!1),qe}),de(s=>{let l=new Ki(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=n=he(w({},s),{guards:Th(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),Vh(s=>this.events.next(s)),dt(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw lo(this.urlSerializer,s.guardsResult);let l=new Xi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return qe;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",ze.GuardRejected),qe;if(s.guards.canActivateChecks.length===0)return R(s);let c=new Ji(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return qe;let u=!1;return R(s).pipe(hp(this.paramsInheritanceStrategy),$e({next:()=>{u=!0;let g=new Qi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)},complete:()=>{u||this.cancelNavigationTransition(s,"",ze.NoDataFromResolver)}}))}),jc(s=>{let l=u=>{let g=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let A=u._environmentInjector;g.push(this.configLoader.loadComponent(A,u.routeConfig).then(P=>{u.component=P}))}for(let A of u.children)g.push(...l(A));return g},c=l(s.targetSnapshot.root);return c.length===0?R(s):Ze(Promise.all(c).then(()=>s))}),jc(()=>this.afterPreactivation()),dt(()=>{let{currentSnapshot:s,targetSnapshot:l}=n,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?Ze(c).pipe(de(()=>n)):R(n)}),Qt(1),dt(s=>{let l=xh(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=n=s=he(w({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new Gn);let c=n.beforeActivateHandler.deferredHandle;return c?Ze(c.then(()=>s)):R(s)}),$e(s=>{new ss(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(i=!0,this.currentNavigation.update(l=>(l.abort=yp,l)),this.lastSuccessfulNavigation.set(_e(this.currentNavigation)),this.events.next(new Lt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Ot(md(o.signal).pipe(ct(()=>!i&&!n.targetRouterState),$e(()=>{this.cancelNavigationTransition(n,o.signal.reason+"",ze.Aborted)}))),$e({complete:()=>{i=!0}}),Ot(this.transitionAbortWithErrorSubject.pipe($e(s=>{throw s}))),Tn(()=>{o.abort(),i||this.cancelNavigationTransition(n,"",ze.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),hr(s=>{if(i=!0,this.destroyed)return n.resolve(!1),qe;if(ud(s))this.events.next(new vt(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),Ah(s)?this.events.next(new Wn(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let l=new Dn(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let c=Ye(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof Zn){let{message:u,cancellationCode:g}=lo(this.urlSerializer,c);this.events.next(new vt(n.id,this.urlSerializer.serialize(n.extractedUrl),u,g)),this.events.next(new Wn(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(c)}}return qe}))}))}cancelNavigationTransition(e,n,i){let o=new vt(e.id,this.urlSerializer.serialize(e.extractedUrl),n,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=_e(this.currentNavigation),i=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==i?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Cp(t){return t!==Lr}var Ad=new T("");var Td=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:()=>d(Dp),providedIn:"root"})}return t})(),uo=class{shouldDetach(r){return!1}store(r,e){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,e){return r.routeConfig===e.routeConfig}shouldDestroyInjector(r){return!0}},Dp=(()=>{class t extends uo{static \u0275fac=(()=>{let e;return function(i){return(e||(e=pn(t)))(i||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),po=(()=>{class t{urlSerializer=d(Kn);options=d(Qn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(jn);urlHandlingStrategy=d(ho);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new st;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=i??o;return a instanceof st?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:i}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,i),this.routerState=e):this.rawUrlTree=i}routerState=od(null,d(tt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:()=>d(Ep),providedIn:"root"})}return t})(),Ep=(()=>{class t extends po{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof Cn?this.updateStateMemento():e instanceof qt?this.commitTransition(n):e instanceof Ur?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Gn?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof vt&&!id(e)?this.restoreHistory(n):e instanceof Dn?this.restoreHistory(n,!0):e instanceof Lt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:i}){let{replaceUrl:o,state:a}=n;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,l=w(w({},a),this.generateNgRouterState(i,s));this.location.replaceState(e,"",l)}else{let s=w(w({},a),this.generateNgRouterState(i,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=pn(t)))(i||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function vs(t,r){t.events.pipe(ct(e=>e instanceof Lt||e instanceof vt||e instanceof Dn||e instanceof qt),de(e=>e instanceof Lt||e instanceof qt?0:(e instanceof vt?e.code===ze.Redirect||e.code===ze.SupersededByNewNavigation:!1)?2:1),ct(e=>e!==2),Qt(1)).subscribe(()=>{r()})}var er=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(la);stateManager=d(po);options=d(Qn,{optional:!0})||{};pendingTasks=d(vl);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(Md);urlSerializer=d(Kn);location=d(jn);urlHandlingStrategy=d(ho);injector=d(tt);_events=new Ie;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(Td);injectorCleanup=d(Ad,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Kr,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(fo,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Mn;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let i=this.navigationTransitions.currentTransition,o=_e(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof vt&&n.code!==ze.Redirect&&n.code!==ze.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Lt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof Wn){let a=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,i.currentRawUrl),l=w({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Cp(i.source)},a);this.scheduleNavigation(s,Lr,null,l,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Eh(n)&&this._events.next(n)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Lr,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,i,o)=>{this.navigateToSyncWithBrowser(e,i,n,o)})}navigateToSyncWithBrowser(e,n,i,o){let a=i?.navigationId?i:null;if(i){let l=w({},i);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,n,a,o).catch(l=>{this.disposed||this.injector.get(br)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return _e(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ps),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=w(w({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let g;try{let A=i?i.snapshot:this.routerState.snapshot.root;g=ed(A)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),g=this.currentUrlTree.root}return td(g,e,u,c??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let i=ln(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Lr,null,n)}navigate(e,n={skipLocationChange:!1}){return wp(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(gr(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let i;if(n===!0?i=w({},Gc):n===!1?i=w({},Qa):i=w(w({},Qa),n),ln(e))return Oc(this.currentUrlTree,e,i);let o=this.parseUrl(e);return Oc(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((n,[i,o])=>(o!=null&&(n[i]=o),n),{})}scheduleNavigation(e,n,i,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((g,A)=>{s=g,l=A});let u=this.pendingTasks.add();return vs(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function wp(t){for(let r=0;r<t.length;r++)if(t[r]==null)throw new Y(4008,!1)}var Mp=(()=>{class t{router=d(er);stateManager=d(po);fragment=ye("");queryParams=ye({});path=ye("");serializer=d(Kn);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Lt&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new st(n)))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Bt=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=d(new Mi("href"),{optional:!0});reactiveHref=jl(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return _e(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return _e(this._target)}_target=ye(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return _e(this._queryParams)}_queryParams=ye(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return _e(this._fragment)}_fragment=ye(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return _e(this._queryParamsHandling)}_queryParamsHandling=ye(void 0);set state(e){this._state.set(e)}get state(){return _e(this._state)}_state=ye(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return _e(this._info)}_info=ye(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return _e(this._relativeTo)}_relativeTo=ye(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return _e(this._preserveFragment)}_preserveFragment=ye(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return _e(this._skipLocationChange)}_skipLocationChange=ye(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return _e(this._replaceUrl)}_replaceUrl=ye(!1);isAnchorElement;onChanges=new Ie;applicationErrorHandler=d(br);options=d(Qn,{optional:!0});reactiveRouterState=d(Mp);constructor(e,n,i,o,a,s){this.router=e,this.route=n,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=ye(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(ln(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,i,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||n||i||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let i=this.renderer,o=this.el.nativeElement;n!==null?i.setAttribute(o,e,n):i.removeAttribute(o,e)}_urlTree=ot(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i==="preserve"||i==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let n=this.routerLinkInput();return n===null||!this.router.createUrlTree?null:ln(n)?n:this.router.createUrlTree(n,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,n)=>this.computeHref(e)===this.computeHref(n)});get urlTree(){return _e(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(n){return new(n||t)(z(er),z(Tt),ia("tabindex"),z(rt),z(Fe),z(Bn))};static \u0275dir=X({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,i){n&1&&ve("click",function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),n&2&&it("href",i.reactiveHref(),Il)("target",i._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Ue],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Ue],replaceUrl:[2,"replaceUrl","replaceUrl",Ue],routerLink:"routerLink"},features:[ut]})}return t})();var Ap=new T("");function bs(t,...r){return Rn([{provide:Kr,multi:!0,useValue:t},[],{provide:Tt,useFactory:Tp},{provide:Ol,multi:!0,useFactory:Ip},r.map(e=>e.\u0275providers)])}function Tp(){return d(er).routerState.root}function Ip(){let t=d(Je);return r=>{let e=t.get(Nn);if(r!==e.components[0])return;let n=t.get(er),i=t.get(Rp);t.get(Fp)===1&&n.initialNavigation(),t.get(Op,null,{optional:!0})?.setUpPreloading(),t.get(Ap,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var Rp=new T("",{factory:()=>new Ie}),Fp=new T("",{factory:()=>1});var Op=new T("");var kp="@",Np=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=d(Je);loadingSchedulerFn=d(Lp,{optional:!0});_engine;constructor(e,n,i,o,a){this.doc=e,this.delegate=n,this.zone=i,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-A5YQGRAY.js").then(i=>i),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(i=>{throw new Y(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:o})=>{this._engine=i(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,n){let i=this.delegate.createRenderer(e,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let o=new _s(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,n);o.use(s),this.scheduler??=this.injector.get(bl,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(i)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){aa()};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),_s=class{delegate;replay=[];\u0275type=1;constructor(r){this.delegate=r}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(r,e){return this.delegate.createElement(r,e)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}get destroyNode(){return this.delegate.destroyNode}appendChild(r,e){this.delegate.appendChild(r,e)}insertBefore(r,e,n,i){this.delegate.insertBefore(r,e,n,i)}removeChild(r,e,n,i){this.delegate.removeChild(r,e,n,i)}selectRootElement(r,e){return this.delegate.selectRootElement(r,e)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,e,n,i){this.delegate.setAttribute(r,e,n,i)}removeAttribute(r,e,n){this.delegate.removeAttribute(r,e,n)}addClass(r,e){this.delegate.addClass(r,e)}removeClass(r,e){this.delegate.removeClass(r,e)}setStyle(r,e,n,i){this.delegate.setStyle(r,e,n,i)}removeStyle(r,e,n){this.delegate.removeStyle(r,e,n)}setProperty(r,e,n){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(r,e,n)),this.delegate.setProperty(r,e,n)}setValue(r,e){this.delegate.setValue(r,e)}listen(r,e,n,i){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(r,e,n,i)),this.delegate.listen(r,e,n,i)}shouldReplay(r){return this.replay!==null&&r.startsWith(kp)}},Lp=new T("");function Id(t="animations"){return oa("NgAsyncAnimations"),Rn([{provide:Pt,useFactory:()=>new Np(d(le),d(Ir),d(Ee),t)},{provide:_i,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var go=class t{article;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=te({type:t,selectors:[["app-article-card-home"]],inputs:{article:"article"},decls:9,vars:3,consts:[[1,"article-preview"],["src","https://dac.digital/wp-content/uploads/2023/04/backend-java-optimized.png","alt","\u0421\u0442\u0430\u0442\u044C\u044F",1,"article-preview__img"],[1,"article-preview__title"],[1,"article-preview__date"],[1,"article-preview__text"]],template:function(e,n){e&1&&(Oe(0,"article",0),St(1,"img",1),Oe(2,"div")(3,"h3",2),_(4),Ne(),Oe(5,"p",3),_(6),Ne(),Oe(7,"p",4),_(8),Ne()()()),e&2&&(S(4),be(n.article.title),S(2),be(n.article.date),S(2),be(n.article.text))},styles:["[_nghost-%COMP%]{display:block}.article-preview[_ngcontent-%COMP%]{background-color:var(--color-bg-card);border:1px solid var(--color-border);border-radius:12px;padding:20px 24px;display:flex;gap:20px;align-items:flex-start;transition:background-color .25s ease,box-shadow .25s ease}.article-preview[_ngcontent-%COMP%]:hover{background-color:var(--color-bg-card-alt);box-shadow:0 4px 16px #2563eb1a}.article-preview__img[_ngcontent-%COMP%]{width:120px;height:90px;object-fit:cover;border-radius:8px;flex-shrink:0}.article-preview__title[_ngcontent-%COMP%]{font-size:1.05rem;font-weight:600;margin-bottom:4px;color:var(--color-text-primary)}.article-preview__date[_ngcontent-%COMP%]{font-size:.85rem;color:var(--color-text-muted);margin-bottom:6px}.article-preview__text[_ngcontent-%COMP%]{font-size:.95rem;color:var(--color-text-secondary)}"]})};var tr=new T("IArticlesService");var nr=class t{articles=[];total=0;activePage=1;saveArticles(r){this.articles=r}savePage(r){this.activePage=r}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var Fd=(t,r)=>r.title,Bp=(t,r)=>r.label,jp=(t,r)=>r.id;function Vp(t,r){if(t&1&&(v(0,"p",11),_(1),b()),t&2){let e=ae().$implicit;S(),be(e.meta)}}function Up(t,r){if(t&1&&(v(0,"div",6)(1,"h3"),_(2),b(),pe(3,Vp,2,1,"p",11),v(4,"p",11),_(5),b()()),t&2){let e=r.$implicit;S(2),be(e.title),S(),ge(e.meta?3:-1),S(2),be(e.description)}}function zp(t,r){if(t&1&&(v(0,"div",6)(1,"h3"),_(2),b(),v(3,"p",11),_(4),b()()),t&2){let e=r.$implicit;S(2),be(e.title),S(2),be(e.description)}}function Hp(t,r){if(t&1&&(v(0,"li",8),_(1),b()),t&2){let e=r.$implicit;S(),be(e)}}function $p(t,r){if(t&1&&(v(0,"div",10),Pe(1,"img",12),v(2,"div",13)(3,"span",14),_(4),b()()()),t&2){let e=r.$implicit;S(),ke("src",e.src,Tl)("alt",e.alt),S(3),be(e.label)}}function Gp(t,r){if(t&1&&Pe(0,"app-article-card-home",16),t&2){let e=r.$implicit;ke("article",e)}}function Wp(t,r){if(t&1&&(v(0,"section")(1,"h2",5),_(2,"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438"),b(),v(3,"div",15),wt(4,Gp,1,1,"app-article-card-home",16,jp),b(),v(6,"a",17),_(7,"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u2192"),b()()),t&2){let e=ae();S(4),xt(e.lastArticles)}}var vo=class t{constructor(r,e){this.articlesService=r;this.store=e}hobbies=[{src:"https://fireseo.ru/wp-content/uploads/2022/06/programming.jpeg",alt:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",label:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"},{src:"https://i.work.ua/cdn-cgi/image/f=jpeg/article/1161b.jpg",alt:"\u0427\u0442\u0435\u043D\u0438\u0435",label:"\u0427\u0442\u0435\u043D\u0438\u0435"},{src:"https://soberhotel.ru/wp-content/uploads/2023/10/treking_foto-1024x490.jpg",alt:"\u041F\u0435\u0448\u0438\u0435 \u043F\u0440\u043E\u0433\u0443\u043B\u043A\u0438",label:"\u041F\u0435\u0448\u0438\u0435 \u043F\u0440\u043E\u0433\u0443\u043B\u043A\u0438"},{src:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Opening_chess_position_from_black_side.jpg",alt:"\u0428\u0430\u0445\u043C\u0430\u0442\u044B",label:"\u0428\u0430\u0445\u043C\u0430\u0442\u044B"}];skills=["Python","C","C++","C#","Java","JavaScript","HTML","PostgreSQL","Git","Hyperskill","\u041E\u041E\u041F","\u0411\u044D\u043A\u0435\u043D\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430"];education=[{title:"\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A\u0438\u0439 \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442",meta:"4 \u043A\u0443\u0440\u0441 \u2014 \u043F\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F",description:"\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u043A\u0438 \u0438 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C: \xAB\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430\xBB. \u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435: \xAB\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u0438 \u0441\u0435\u0442\u0435\u0439\xBB."},{title:"\u041A\u0443\u0440\u0441\u044B \u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",meta:"",description:"Java Developer \u2014 Hyperskill.org (JetBrains). Java Backend Developer \u2014 Hyperskill.org (JetBrains)."}];experience=[{title:"\u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u043F\u044B\u0442",description:"\u041E\u043F\u044B\u0442\u0430 \u0432 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442, \u0441\u0442\u0430\u0436\u0438\u0440\u043E\u0432\u043E\u043A \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u0445 \u043D\u0435 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043B."},{title:"\u0423\u0447\u0435\u0431\u043D\u044B\u0435 \u0438 \u043B\u0438\u0447\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B",description:"\u0412 \u0440\u0430\u043C\u043A\u0430\u0445 \u0443\u0447\u0451\u0431\u044B \u0432 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0435 \u0438 \u043D\u0430 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043A\u0443\u0440\u0441\u0430\u0445 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u043B\u0438\u0441\u044C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B. \u041E\u043F\u044B\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u2014 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u0431\u0440\u0438\u0433\u0430\u0434\u0430\u043C\u0438."}];get lastArticles(){return this.store.articles.slice(0,2)}get hasArticles(){return this.store.articles.length>0}ngOnInit(){this.store.articles.length>0||this.articlesService.getArticles(1).subscribe(r=>{this.store.saveArticles(r.items),this.store.total=r.total})}static \u0275fac=function(e){return new(e||t)(z(tr),z(nr))};static \u0275cmp=te({type:t,selectors:[["app-home"]],decls:35,vars:1,consts:[[1,"container"],[1,"main-content"],[1,"about"],["src","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/fc/1c/1b/photo0jpg.jpg?w=500&h=500&s=1","alt","\u0424\u043E\u0442\u043E \u0430\u0432\u0442\u043E\u0440\u0430",1,"about__photo"],[1,"about__text"],[1,"section-title"],[1,"experience-item"],[1,"skills-list"],[1,"skills-list__item"],[1,"hobbies-grid"],[1,"hobby-card"],[1,"experience-item__meta"],[1,"hobby-card__img",3,"src","alt"],[1,"hobby-card__overlay"],[1,"hobby-card__label"],[1,"articles-preview"],[3,"article"],["routerLink","/blog",1,"all-articles-link"]],template:function(e,n){e&1&&(v(0,"main")(1,"div",0)(2,"div",1)(3,"section",2),Pe(4,"img",3),v(5,"div",4)(6,"h1"),_(7,"\u041E\u0431\u043E \u043C\u043D\u0435"),b(),v(8,"p"),_(9," \u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C! \u042F \u0441\u0442\u0443\u0434\u0435\u043D\u0442 4 \u043A\u0443\u0440\u0441\u0430 \u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A\u043E\u0433\u043E \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430. \u041D\u0430 \u044D\u0442\u043E\u043C \u0431\u043B\u043E\u0433\u0435 \u044F \u0434\u0435\u043B\u044E\u0441\u044C \u0441\u0432\u043E\u0438\u043C\u0438 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438, \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438 \u0438 \u0438\u0434\u0435\u044F\u043C\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F. "),b(),v(10,"p"),_(11," \u0412 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0441\u0442\u0430\u0440\u0430\u044E\u0441\u044C \u043F\u043E\u0432\u044B\u0448\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u043D\u0430\u043D\u0438\u0439, \u0432\u044B\u0431\u0438\u0440\u0430\u044F \u043A\u0443\u0440\u0441\u044B \u043F\u043E \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u044F\u0437\u044B\u043A\u0430\u043C \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u043C. \u0423\u0433\u043B\u0443\u0431\u043B\u0451\u043D\u043D\u043E \u0438\u0437\u0443\u0447\u0430\u044E Java. "),b()()(),v(12,"section")(13,"h2",5),_(14,"\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"),b(),wt(15,Up,6,3,"div",6,Fd),b(),v(17,"section")(18,"h2",5),_(19,"\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B"),b(),wt(20,zp,5,2,"div",6,Fd),b(),v(22,"section")(23,"h2",5),_(24,"\u041D\u0430\u0432\u044B\u043A\u0438"),b(),v(25,"ul",7),wt(26,Hp,2,1,"li",8,wi),b()(),v(28,"section")(29,"h2",5),_(30,"\u0425\u043E\u0431\u0431\u0438"),b(),v(31,"div",9),wt(32,$p,5,3,"div",10,Bp),b()(),pe(34,Wp,8,0,"section"),b()()()),e&2&&(S(15),xt(n.education),S(5),xt(n.experience),S(6),xt(n.skills),S(6),xt(n.hobbies),S(2),ge(n.hasArticles?34:-1))},dependencies:[go,Bt],styles:['@charset "UTF-8";.main-content[_ngcontent-%COMP%]{padding:48px 0;display:flex;flex-direction:column;gap:56px}.about[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;align-items:flex-start;gap:40px}.about__photo[_ngcontent-%COMP%]{width:220px;height:260px;object-fit:cover;border-radius:12px;flex-shrink:0}.about__text[_ngcontent-%COMP%]{flex:1}.experience-item[_ngcontent-%COMP%]{padding:16px 0;border-bottom:1px solid var(--color-border)}.experience-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.experience-item__meta[_ngcontent-%COMP%]{color:var(--color-text-secondary);margin-bottom:4px}.skills-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;list-style:none;padding:0}.skills-list__item[_ngcontent-%COMP%]{padding:6px 14px;background-color:var(--color-bg-card);border:1px solid var(--color-border);border-radius:20px;font-size:.9rem;color:var(--color-text-primary)}.hobbies-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.hobby-card[_ngcontent-%COMP%]{position:relative;height:200px;border-radius:12px;overflow:hidden;cursor:pointer}.hobby-card__img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s ease}.hobby-card[_ngcontent-%COMP%]:hover   .hobby-card__img[_ngcontent-%COMP%]{transform:scale(1.08)}.hobby-card__overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:var(--color-overlay);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .4s ease;border-radius:12px}.hobby-card[_ngcontent-%COMP%]:hover   .hobby-card__overlay[_ngcontent-%COMP%]{opacity:1}.hobby-card__label[_ngcontent-%COMP%]{color:#fff;font-size:1rem;font-weight:600;text-align:center;padding:8px}.articles-preview[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;max-width:700px}.article-preview[_ngcontent-%COMP%]{background-color:var(--color-bg-card);border:1px solid var(--color-border);border-radius:12px;padding:20px 24px;display:flex;gap:20px;align-items:flex-start;transition:background-color .25s ease,box-shadow .25s ease}.article-preview[_ngcontent-%COMP%]:nth-child(2n){background-color:var(--color-bg-card-alt)}.article-preview[_ngcontent-%COMP%]:hover{background-color:var(--color-bg-card-alt);box-shadow:0 4px 16px #2563eb1a}.article-preview__img[_ngcontent-%COMP%]{width:120px;height:90px;object-fit:cover;border-radius:8px;flex-shrink:0}.article-preview__title[_ngcontent-%COMP%]{font-size:1.05rem;font-weight:600;margin-bottom:4px;color:var(--color-text-primary)}.article-preview__date[_ngcontent-%COMP%]{font-size:.85rem;color:var(--color-text-muted);margin-bottom:6px}.article-preview__text[_ngcontent-%COMP%]{font-size:.95rem;color:var(--color-text-secondary);margin-bottom:0}.all-articles-link[_ngcontent-%COMP%]{display:inline-block;margin-top:12px;font-weight:500;color:var(--color-accent)}app-article-card-home[_ngcontent-%COMP%]{display:block}']})};var bo=new WeakMap,wn=(()=>{class t{_appRef;_injector=d(Je);_environmentInjector=d(tt);load(e){let n=this._appRef=this._appRef||this._injector.get(Nn),i=bo.get(n);i||(i={loaders:new Set,refs:[]},bo.set(n,i),n.onDestroy(()=>{bo.get(n)?.refs.forEach(o=>o.destroy()),bo.delete(n)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Wl(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _o;function qp(){if(_o===void 0&&(_o=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(_o=t.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return _o}function rr(t){return qp()?.createHTML(t)||t}function Od(t){return Error(`Unable to find icon with the name "${t}"`)}function Zp(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Pd(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function kd(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Zt=class{url;svgText;options;svgElement=null;constructor(r,e,n){this.url=r,this.svgText=e,this.options=n}},Ld=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,i,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=i}addSvgIcon(e,n,i){return this.addSvgIconInNamespace("",e,n,i)}addSvgIconLiteral(e,n,i){return this.addSvgIconLiteralInNamespace("",e,n,i)}addSvgIconInNamespace(e,n,i,o){return this._addSvgIconConfig(e,n,new Zt(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,i,o){let a=this._sanitizer.sanitize(nt.HTML,i);if(!a)throw kd(i);let s=rr(a);return this._addSvgIconConfig(e,n,new Zt("",s,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,i){return this._addSvgIconSetConfig(e,new Zt(n,null,i))}addSvgIconSetLiteralInNamespace(e,n,i){let o=this._sanitizer.sanitize(nt.HTML,n);if(!o)throw kd(n);let a=rr(o);return this._addSvgIconSetConfig(e,new Zt("",a,i))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(nt.RESOURCE_URL,e);if(!n)throw Pd(e);let i=this._cachedIconsByUrl.get(n);return i?R(yo(i)):this._loadSvgIconFromConfig(new Zt(e,null)).pipe($e(o=>this._cachedIconsByUrl.set(n,o)),de(o=>yo(o)))}getNamedSvgIcon(e,n=""){let i=Nd(n,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):hi(Od(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?R(yo(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(de(n=>yo(n)))}_getSvgFromIconSetConfigs(e,n){let i=this._extractIconWithNameFromAnySet(e,n);if(i)return R(i);let o=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(hr(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(nt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),R(null)})));return gi(o).pipe(de(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw Od(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let i=n.length-1;i>=0;i--){let o=n[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe($e(n=>e.svgText=n),de(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?R(null):this._fetchIcon(e).pipe($e(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,i){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let s=this._svgElementFromString(rr("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,i)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let i=n.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let n=this._svgElementFromString(rr("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:a,value:s}=i[o];a!=="id"&&n.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw Zp();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(nt.RESOURCE_URL,n);if(!a)throw Pd(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(de(c=>rr(c)),Tn(()=>this._inProgressUrlFetches.delete(a)),fl());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,n,i){return this._svgIconConfigs.set(Nd(e,n),i),this}_addSvgIconSetConfig(e,n){let i=this._iconSetConfigs.get(e);return i?i.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](n,e);if(o)return Yp(o)?new Zt(o.url,null,o.options):new Zt(o,null)}}static \u0275fac=function(n){return new(n||t)(G($a,8),G(Ga),G(le,8),G(hn))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function yo(t){return t.cloneNode(!0)}function Nd(t,r){return t+":"+r}function Yp(t){return!!(t.url&&t.options)}var Kp=new T("cdk-dir-doc",{providedIn:"root",factory:()=>d(le)}),Xp=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Bd(t){let r=t?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?Xp.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var ys=(()=>{class t{get value(){return this.valueSignal()}valueSignal=ye("ltr");change=new Re;constructor(){let e=d(Kp,{optional:!0});if(e){let n=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Bd(n||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=we({type:t});static \u0275inj=De({})}return t})();var Jp=["*"],Qp=new T("MAT_ICON_DEFAULT_OPTIONS"),eg=new T("mat-icon-location",{providedIn:"root",factory:()=>{let t=d(le),r=t?t.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),jd=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],tg=jd.map(t=>`[${t}]`).join(", "),ng=/^url\(['"]?#(.*?)['"]?\)$/,Co=(()=>{class t{_elementRef=d(Fe);_iconRegistry=d(Ld);_location=d(eg);_errorHandler=d(hn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Mn.EMPTY;constructor(){let e=d(new Mi("aria-hidden"),{optional:!0}),n=d(Qp,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let i=e.childNodes[n];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),n.forEach(i=>e.classList.add(i)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((i,o)=>{i.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(tg),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)jd.forEach(a=>{let s=n[o],l=s.getAttribute(a),c=l?l.match(ng):null;if(c){let u=i.get(s);u||(u=[],i.set(s,u)),u.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,i]=this._splitIconName(e);n&&(this._svgNamespace=n),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,n).pipe(Qt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${n}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=te({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,i){n&2&&(it("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Si(i.color?"mat-"+i.color:""),xe("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Ue],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Jp,decls:1,vars:0,template:function(n,i){n&1&&(ft(),Ae(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Do=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=we({type:t});static \u0275inj=De({imports:[bt]})}return t})();var rg=t=>["/blog",t],Eo=class t{article;delete=new Re;edit=new Re;onDelete(){this.delete.emit(this.article.id)}onEdit(){this.edit.emit(this.article)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=te({type:t,selectors:[["app-article-card-blog"]],inputs:{article:"article"},outputs:{delete:"delete",edit:"edit"},decls:17,vars:6,consts:[[1,"blog-card"],["src","https://dac.digital/wp-content/uploads/2023/04/backend-java-optimized.png","alt","\u0421\u0442\u0430\u0442\u044C\u044F",1,"blog-card__img"],[1,"blog-card__body"],[1,"blog-card__link",3,"routerLink"],[1,"blog-card__title"],[1,"blog-card__date"],[1,"blog-card__text"],[1,"blog-card__actions"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","warn",3,"click"]],template:function(e,n){e&1&&(v(0,"div",0),Pe(1,"img",1),v(2,"div",2)(3,"a",3)(4,"h2",4),_(5),b()(),v(6,"p",5),_(7),b(),v(8,"p",6),_(9),b()(),v(10,"div",7)(11,"button",8),ve("click",function(){return n.onEdit()}),v(12,"mat-icon"),_(13,"edit"),b()(),v(14,"button",9),ve("click",function(){return n.onDelete()}),v(15,"mat-icon"),_(16,"delete"),b()()()()),e&2&&(S(3),ke("routerLink",Nl(4,rg,n.article.id)),S(2),be(n.article.title),S(2),be(n.article.date),S(2),be(n.article.text))},dependencies:[Bt,Do,Co],styles:[".blog-card[_ngcontent-%COMP%]{background-color:var(--color-bg-card);border:1px solid var(--color-border);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;position:relative;transition:box-shadow .25s ease,transform .25s ease}.blog-card[_ngcontent-%COMP%]:hover{box-shadow:0 6px 24px #0000001a;transform:translateY(-3px)}.blog-card__img[_ngcontent-%COMP%]{width:100%;height:160px;object-fit:cover}.blog-card__body[_ngcontent-%COMP%]{padding:16px 20px 20px;display:flex;flex-direction:column;flex:1}.blog-card__title[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;margin-bottom:6px;color:var(--color-text-primary)}.blog-card__date[_ngcontent-%COMP%]{font-size:.8rem;color:var(--color-text-muted);margin-bottom:8px}.blog-card__text[_ngcontent-%COMP%]{font-size:.9rem;color:var(--color-text-secondary);flex:1}.blog-card__actions[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;display:flex;gap:6px;opacity:0;transition:opacity .2s ease}.blog-card[_ngcontent-%COMP%]:hover   .blog-card__actions[_ngcontent-%COMP%]{opacity:1}.blog-card__action-btn[_ngcontent-%COMP%]{width:28px;height:28px;border-radius:50%;border:none;font-size:.8rem;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .2s ease,background-color .2s ease}.blog-card__action-btn[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.blog-card__action-btn--edit[_ngcontent-%COMP%]{background-color:#2563ebe6;color:#fff}.blog-card__action-btn--edit[_ngcontent-%COMP%]:hover{background-color:#1d4ed8}.blog-card__action-btn--delete[_ngcontent-%COMP%]{background-color:#ef4444e6;color:#fff}.blog-card__action-btn--delete[_ngcontent-%COMP%]:hover{background-color:#dc2626}.blog-card__link[_ngcontent-%COMP%]{text-decoration:none;color:inherit}.blog-card__link[_ngcontent-%COMP%]:hover   .blog-card__title[_ngcontent-%COMP%]{color:#5c6bc0}"]})};var Yd=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(z(rt),z(Fe))};static \u0275dir=X({type:t})}return t})(),ig=(()=>{class t extends Yd{static \u0275fac=(()=>{let e;return function(i){return(e||(e=pn(t)))(i||t)}})();static \u0275dir=X({type:t,features:[Qe]})}return t})(),ws=new T("");var og={provide:ws,useExisting:In(()=>lr),multi:!0};function ag(){let t=gt()?gt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var sg=new T(""),lr=(()=>{class t extends Yd{_compositionMode;_composing=!1;constructor(e,n,i){super(e,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!ag())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(z(rt),z(Fe),z(sg,8))};static \u0275dir=X({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&ve("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},standalone:!1,features:[mt([og]),Qe]})}return t})();function xs(t){return t==null||Ss(t)===0}function Ss(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Oo=new T(""),Po=new T(""),lg=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,dn=class{static min(r){return cg(r)}static max(r){return dg(r)}static required(r){return ug(r)}static requiredTrue(r){return fg(r)}static email(r){return mg(r)}static minLength(r){return hg(r)}static maxLength(r){return pg(r)}static pattern(r){return gg(r)}static nullValidator(r){return Kd()}static compose(r){return nu(r)}static composeAsync(r){return ru(r)}};function cg(t){return r=>{if(r.value==null||t==null)return null;let e=parseFloat(r.value);return!isNaN(e)&&e<t?{min:{min:t,actual:r.value}}:null}}function dg(t){return r=>{if(r.value==null||t==null)return null;let e=parseFloat(r.value);return!isNaN(e)&&e>t?{max:{max:t,actual:r.value}}:null}}function ug(t){return xs(t.value)?{required:!0}:null}function fg(t){return t.value===!0?null:{required:!0}}function mg(t){return xs(t.value)||lg.test(t.value)?null:{email:!0}}function hg(t){return r=>{let e=r.value?.length??Ss(r.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function pg(t){return r=>{let e=r.value?.length??Ss(r.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function gg(t){if(!t)return Kd;let r,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),r=new RegExp(e)):(e=t.toString(),r=t),n=>{if(xs(n.value))return null;let i=n.value;return r.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function Kd(t){return null}function Xd(t){return t!=null}function Jd(t){return Cr(t)?Ze(t):t}function Qd(t){let r={};return t.forEach(e=>{r=e!=null?w(w({},r),e):r}),Object.keys(r).length===0?null:r}function eu(t,r){return r.map(e=>e(t))}function vg(t){return!t.validate}function tu(t){return t.map(r=>vg(r)?r:e=>r.validate(e))}function nu(t){if(!t)return null;let r=t.filter(Xd);return r.length==0?null:function(e){return Qd(eu(e,r))}}function Ms(t){return t!=null?nu(tu(t)):null}function ru(t){if(!t)return null;let r=t.filter(Xd);return r.length==0?null:function(e){let n=eu(e,r).map(Jd);return gi(n).pipe(de(Qd))}}function As(t){return t!=null?ru(tu(t)):null}function Ud(t,r){return t===null?[r]:Array.isArray(t)?[...t,r]:[t,r]}function iu(t){return t._rawValidators}function ou(t){return t._rawAsyncValidators}function Cs(t){return t?Array.isArray(t)?t:[t]:[]}function xo(t,r){return Array.isArray(t)?t.includes(r):t===r}function zd(t,r){let e=Cs(r);return Cs(t).forEach(i=>{xo(e,i)||e.push(i)}),e}function Hd(t,r){return Cs(r).filter(e=>!xo(t,e))}var So=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(r){this._rawValidators=r||[],this._composedValidatorFn=Ms(this._rawValidators)}_setAsyncValidators(r){this._rawAsyncValidators=r||[],this._composedAsyncValidatorFn=As(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(r){this._onDestroyCallbacks.push(r)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(r=>r()),this._onDestroyCallbacks=[]}reset(r=void 0){this.control?.reset(r)}hasError(r,e){return this.control?this.control.hasError(r,e):!1}getError(r,e){return this.control?this.control.getError(r,e):null}},Yt=class extends So{name;get formDirective(){return null}get path(){return null}},Kt=class extends So{_parent=null;name=null;valueAccessor=null},Mo=class{_cd;constructor(r){this._cd=r}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var ko=(()=>{class t extends Mo{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(z(Kt,2))};static \u0275dir=X({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&xe("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[Qe]})}return t})(),au=(()=>{class t extends Mo{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(z(Yt,10))};static \u0275dir=X({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,i){n&2&&xe("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[Qe]})}return t})();var Xr="VALID",wo="INVALID",ir="PENDING",Jr="DISABLED",un=class{},Ao=class extends un{value;source;constructor(r,e){super(),this.value=r,this.source=e}},ei=class extends un{pristine;source;constructor(r,e){super(),this.pristine=r,this.source=e}},ti=class extends un{touched;source;constructor(r,e){super(),this.touched=r,this.source=e}},or=class extends un{status;source;constructor(r,e){super(),this.status=r,this.source=e}},To=class extends un{source;constructor(r){super(),this.source=r}},ri=class extends un{source;constructor(r){super(),this.source=r}};function Ts(t){return(No(t)?t.validators:t)||null}function bg(t){return Array.isArray(t)?Ms(t):t||null}function Is(t,r){return(No(r)?r.asyncValidators:t)||null}function _g(t){return Array.isArray(t)?As(t):t||null}function No(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function su(t,r,e){let n=t.controls;if(!(r?Object.keys(n):n).length)throw new Y(1e3,"");if(!n[e])throw new Y(1001,"")}function lu(t,r,e){t._forEachChild((n,i)=>{if(e[i]===void 0)throw new Y(1002,"")})}var ar=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(r,e){this._assignValidators(r),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(r){this._rawValidators=this._composedValidatorFn=r}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(r){this._rawAsyncValidators=this._composedAsyncValidatorFn=r}get parent(){return this._parent}get status(){return _e(this.statusReactive)}set status(r){_e(()=>this.statusReactive.set(r))}_status=ot(()=>this.statusReactive());statusReactive=ye(void 0);get valid(){return this.status===Xr}get invalid(){return this.status===wo}get pending(){return this.status===ir}get disabled(){return this.status===Jr}get enabled(){return this.status!==Jr}errors;get pristine(){return _e(this.pristineReactive)}set pristine(r){_e(()=>this.pristineReactive.set(r))}_pristine=ot(()=>this.pristineReactive());pristineReactive=ye(!0);get dirty(){return!this.pristine}get touched(){return _e(this.touchedReactive)}set touched(r){_e(()=>this.touchedReactive.set(r))}_touched=ot(()=>this.touchedReactive());touchedReactive=ye(!1);get untouched(){return!this.touched}_events=new Ie;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(r){this._assignValidators(r)}setAsyncValidators(r){this._assignAsyncValidators(r)}addValidators(r){this.setValidators(zd(r,this._rawValidators))}addAsyncValidators(r){this.setAsyncValidators(zd(r,this._rawAsyncValidators))}removeValidators(r){this.setValidators(Hd(r,this._rawValidators))}removeAsyncValidators(r){this.setAsyncValidators(Hd(r,this._rawAsyncValidators))}hasValidator(r){return xo(this._rawValidators,r)}hasAsyncValidator(r){return xo(this._rawAsyncValidators,r)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(r={}){let e=this.touched===!1;this.touched=!0;let n=r.sourceControl??this;r.onlySelf||this._parent?.markAsTouched(he(w({},r),{sourceControl:n})),e&&r.emitEvent!==!1&&this._events.next(new ti(!0,n))}markAllAsDirty(r={}){this.markAsDirty({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(r))}markAllAsTouched(r={}){this.markAsTouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(r))}markAsUntouched(r={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=r.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:n})}),r.onlySelf||this._parent?._updateTouched(r,n),e&&r.emitEvent!==!1&&this._events.next(new ti(!1,n))}markAsDirty(r={}){let e=this.pristine===!0;this.pristine=!1;let n=r.sourceControl??this;r.onlySelf||this._parent?.markAsDirty(he(w({},r),{sourceControl:n})),e&&r.emitEvent!==!1&&this._events.next(new ei(!1,n))}markAsPristine(r={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=r.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:r.emitEvent})}),r.onlySelf||this._parent?._updatePristine(r,n),e&&r.emitEvent!==!1&&this._events.next(new ei(!0,n))}markAsPending(r={}){this.status=ir;let e=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new or(this.status,e)),this.statusChanges.emit(this.status)),r.onlySelf||this._parent?.markAsPending(he(w({},r),{sourceControl:e}))}disable(r={}){let e=this._parentMarkedDirty(r.onlySelf);this.status=Jr,this.errors=null,this._forEachChild(i=>{i.disable(he(w({},r),{onlySelf:!0}))}),this._updateValue();let n=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new Ao(this.value,n)),this._events.next(new or(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(he(w({},r),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(r={}){let e=this._parentMarkedDirty(r.onlySelf);this.status=Xr,this._forEachChild(n=>{n.enable(he(w({},r),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent}),this._updateAncestors(he(w({},r),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(r,e){r.onlySelf||(this._parent?.updateValueAndValidity(r),r.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(r){this._parent=r}getRawValue(){return this.value}updateValueAndValidity(r={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Xr||this.status===ir)&&this._runAsyncValidator(n,r.emitEvent)}let e=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new Ao(this.value,e)),this._events.next(new or(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),r.onlySelf||this._parent?.updateValueAndValidity(he(w({},r),{sourceControl:e}))}_updateTreeValidity(r={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(r)),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Jr:Xr}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(r,e){if(this.asyncValidator){this.status=ir,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:r!==!1};let n=Jd(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:r})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let r=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,r}return!1}setErrors(r,e={}){this.errors=r,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(r){let e=r;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,i)=>n&&n._find(i),this)}getError(r,e){let n=e?this.get(e):this;return n?.errors?n.errors[r]:null}hasError(r,e){return!!this.getError(r,e)}get root(){let r=this;for(;r._parent;)r=r._parent;return r}_updateControlsErrors(r,e,n){this.status=this._calculateStatus(),r&&this.statusChanges.emit(this.status),(r||n)&&this._events.next(new or(this.status,e)),this._parent&&this._parent._updateControlsErrors(r,e,n)}_initObservables(){this.valueChanges=new Re,this.statusChanges=new Re}_calculateStatus(){return this._allControlsDisabled()?Jr:this.errors?wo:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ir)?ir:this._anyControlsHaveStatus(wo)?wo:Xr}_anyControlsHaveStatus(r){return this._anyControls(e=>e.status===r)}_anyControlsDirty(){return this._anyControls(r=>r.dirty)}_anyControlsTouched(){return this._anyControls(r=>r.touched)}_updatePristine(r,e){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,r.onlySelf||this._parent?._updatePristine(r,e),i&&this._events.next(new ei(this.pristine,e))}_updateTouched(r={},e){this.touched=this._anyControlsTouched(),this._events.next(new ti(this.touched,e)),r.onlySelf||this._parent?._updateTouched(r,e)}_onDisabledChange=[];_registerOnCollectionChange(r){this._onCollectionChange=r}_setUpdateStrategy(r){No(r)&&r.updateOn!=null&&(this._updateOn=r.updateOn)}_parentMarkedDirty(r){return!r&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(r){return null}_assignValidators(r){this._rawValidators=Array.isArray(r)?r.slice():r,this._composedValidatorFn=bg(this._rawValidators)}_assignAsyncValidators(r){this._rawAsyncValidators=Array.isArray(r)?r.slice():r,this._composedAsyncValidatorFn=_g(this._rawAsyncValidators)}},sr=class extends ar{constructor(r,e,n){super(Ts(e),Is(n,e)),this.controls=r,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(r,e){return this.controls[r]?this.controls[r]:(this.controls[r]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(r,e,n={}){this.registerControl(r,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(r,e={}){this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),delete this.controls[r],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(r,e,n={}){this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),delete this.controls[r],e&&this.registerControl(r,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(r){return this.controls.hasOwnProperty(r)&&this.controls[r].enabled}setValue(r,e={}){lu(this,!0,r),Object.keys(r).forEach(n=>{su(this,!0,n),this.controls[n].setValue(r[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(r,e={}){r!=null&&(Object.keys(r).forEach(n=>{let i=this.controls[n];i&&i.patchValue(r[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(r={},e={}){this._forEachChild((n,i)=>{n.reset(r?r[i]:null,he(w({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ri(this))}getRawValue(){return this._reduceChildren({},(r,e,n)=>(r[n]=e.getRawValue(),r))}_syncPendingControls(){let r=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return r&&this.updateValueAndValidity({onlySelf:!0}),r}_forEachChild(r){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&r(n,e)})}_setUpControls(){this._forEachChild(r=>{r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(r){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&r(n))return!0;return!1}_reduceValue(){let r={};return this._reduceChildren(r,(e,n,i)=>((n.enabled||this.disabled)&&(e[i]=n.value),e))}_reduceChildren(r,e){let n=r;return this._forEachChild((i,o)=>{n=e(n,i,o)}),n}_allControlsDisabled(){for(let r of Object.keys(this.controls))if(this.controls[r].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(r){return this.controls.hasOwnProperty(r)?this.controls[r]:null}};var Ds=class extends sr{};var ii=new T("",{factory:()=>Lo}),Lo="always";function cu(t,r){return[...r.path,t]}function Io(t,r,e=Lo){Rs(t,r),r.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&r.valueAccessor.setDisabledState?.(t.disabled),Cg(t,r),Eg(t,r),Dg(t,r),yg(t,r)}function $d(t,r,e=!0){let n=()=>{};r?.valueAccessor?.registerOnChange(n),r?.valueAccessor?.registerOnTouched(n),Fo(t,r),t&&(r._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Ro(t,r){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(r)})}function yg(t,r){if(r.valueAccessor.setDisabledState){let e=n=>{r.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),r._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Rs(t,r){let e=iu(t);r.validator!==null?t.setValidators(Ud(e,r.validator)):typeof e=="function"&&t.setValidators([e]);let n=ou(t);r.asyncValidator!==null?t.setAsyncValidators(Ud(n,r.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let i=()=>t.updateValueAndValidity();Ro(r._rawValidators,i),Ro(r._rawAsyncValidators,i)}function Fo(t,r){let e=!1;if(t!==null){if(r.validator!==null){let i=iu(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==r.validator);o.length!==i.length&&(e=!0,t.setValidators(o))}}if(r.asyncValidator!==null){let i=ou(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==r.asyncValidator);o.length!==i.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return Ro(r._rawValidators,n),Ro(r._rawAsyncValidators,n),e}function Cg(t,r){r.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&du(t,r)})}function Dg(t,r){r.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&du(t,r),t.updateOn!=="submit"&&t.markAsTouched()})}function du(t,r){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),r.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Eg(t,r){let e=(n,i)=>{r.valueAccessor.writeValue(n),i&&r.viewToModelUpdate(n)};t.registerOnChange(e),r._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function uu(t,r){t==null,Rs(t,r)}function wg(t,r){return Fo(t,r)}function fu(t,r){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(r,e.currentValue)}function xg(t){return Object.getPrototypeOf(t.constructor)===ig}function mu(t,r){t._syncPendingControls(),r.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function hu(t,r){if(!r)return null;Array.isArray(r);let e,n,i;return r.forEach(o=>{o.constructor===lr?e=o:xg(o)?n=o:i=o}),i||n||e||null}function Sg(t,r){let e=t.indexOf(r);e>-1&&t.splice(e,1)}var Mg={provide:Yt,useExisting:In(()=>Fs)},Qr=Promise.resolve(),Fs=(()=>{class t extends Yt{callSetDisabledState;get submitted(){return _e(this.submittedReactive)}_submitted=ot(()=>this.submittedReactive());submittedReactive=ye(!1);_directives=new Set;form;ngSubmit=new Re;options;constructor(e,n,i){super(),this.callSetDisabledState=i,this.form=new sr({},Ms(e),As(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Qr.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Io(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Qr.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Qr.then(()=>{let n=this._findContainer(e.path),i=new sr({});uu(i,e),n.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Qr.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){Qr.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),mu(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new To(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(z(Oo,10),z(Po,10),z(ii,8))};static \u0275dir=X({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,i){n&1&&ve("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[mt([Mg]),Qe]})}return t})();function Gd(t,r){let e=t.indexOf(r);e>-1&&t.splice(e,1)}function Wd(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ni=class extends ar{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(r=null,e,n){super(Ts(e),Is(n,e)),this._applyFormState(r),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),No(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Wd(r)?this.defaultValue=r.value:this.defaultValue=r)}setValue(r,e={}){this.value=this._pendingValue=r,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(r,e={}){this.setValue(r,e)}reset(r=this.defaultValue,e={}){this._applyFormState(r),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new ri(this))}_updateValue(){}_anyControls(r){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(r){this._onChange.push(r)}_unregisterOnChange(r){Gd(this._onChange,r)}registerOnDisabledChange(r){this._onDisabledChange.push(r)}_unregisterOnDisabledChange(r){Gd(this._onDisabledChange,r)}_forEachChild(r){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(r){Wd(r)?(this.value=this._pendingValue=r.value,r.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=r}};var Ag=t=>t instanceof ni;var Tg={provide:Kt,useExisting:In(()=>Os)},qd=Promise.resolve(),Os=(()=>{class t extends Kt{_changeDetectorRef;callSetDisabledState;control=new ni;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new Re;constructor(e,n,i,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=hu(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),fu(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Io(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){qd.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,i=n!==0&&Ue(n);qd.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?cu(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(z(Yt,9),z(Oo,10),z(Po,10),z(ws,10),z(nn,8),z(ii,8))};static \u0275dir=X({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[mt([Tg]),Qe,ut]})}return t})();var pu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var Es=class extends ar{constructor(r,e,n){super(Ts(e),Is(n,e)),this.controls=r,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(r){return this.controls[this._adjustIndex(r)]}push(r,e={}){Array.isArray(r)?r.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(r),this._registerControl(r)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(r,e,n={}){this.controls.splice(r,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(r,e={}){let n=this._adjustIndex(r);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(r,e,n={}){let i=this._adjustIndex(r);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(r,e={}){lu(this,!1,r),r.forEach((n,i)=>{su(this,!1,i),this.at(i).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(r,e={}){r!=null&&(r.forEach((n,i)=>{this.at(i)&&this.at(i).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(r=[],e={}){this._forEachChild((n,i)=>{n.reset(r[i],he(w({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ri(this))}getRawValue(){return this.controls.map(r=>r.getRawValue())}clear(r={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:r.emitEvent}))}_adjustIndex(r){return r<0?r+this.length:r}_syncPendingControls(){let r=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return r&&this.updateValueAndValidity({onlySelf:!0}),r}_forEachChild(r){this.controls.forEach((e,n)=>{r(e,n)})}_updateValue(){this.value=this.controls.filter(r=>r.enabled||this.disabled).map(r=>r.value)}_anyControls(r){return this.controls.some(e=>e.enabled&&r(e))}_setUpControls(){this._forEachChild(r=>this._registerControl(r))}_allControlsDisabled(){for(let r of this.controls)if(r.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(r){r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange)}_find(r){return this.at(r)??null}};var Ig=(()=>{class t extends Yt{callSetDisabledState;get submitted(){return _e(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ot(()=>this._submittedReactive());_submittedReactive=ye(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Fo(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return Io(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){$d(e.control||null,e,!1),Sg(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,mu(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new To(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,i=this.form.get(e.path);n!==i&&($d(n||null,e),Ag(i)&&(Io(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);uu(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&wg(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Rs(this.form,this),this._oldForm&&Fo(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(z(Oo,10),z(Po,10),z(ii,8))};static \u0275dir=X({type:t,features:[Qe,ut]})}return t})();var gu=new T("");var Rg={provide:Kt,useExisting:In(()=>Ps)},Ps=(()=>{class t extends Kt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new Re;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,i,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=hu(this,o)}ngOnChanges(e){this._added||this._setUpControl(),fu(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return cu(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(z(Yt,13),z(Oo,10),z(Po,10),z(ws,10),z(gu,8))};static \u0275dir=X({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[mt([Rg]),Qe,ut]})}return t})();var Fg={provide:Yt,useExisting:In(()=>oi)},oi=(()=>{class t extends Ig{form=null;ngSubmit=new Re;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=pn(t)))(i||t)}})();static \u0275dir=X({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,i){n&1&&ve("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[mt([Fg]),Qe]})}return t})();var vu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=we({type:t});static \u0275inj=De({})}return t})();function Zd(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var bu=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let i=this._reduceControls(e),o={};return Zd(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new sr(i,o)}record(e,n=null){let i=this._reduceControls(e);return new Ds(i,n)}control(e,n,i){let o={};return this.useNonNullable?(Zd(n)?o=n:(o.validators=n,o.asyncValidators=i),new ni(e,he(w({},o),{nonNullable:!0}))):new ni(e,n,i)}array(e,n,i){let o=e.map(a=>this._createControl(a));return new Es(o,n,i)}_reduceControls(e){let n={};return Object.keys(e).forEach(i=>{n[i]=this._createControl(e[i])}),n}_createControl(e){if(e instanceof ni)return e;if(e instanceof ar)return e;if(Array.isArray(e)){let n=e[0],i=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,i,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _u=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ii,useValue:e.callSetDisabledState??Lo}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=we({type:t});static \u0275inj=De({imports:[vu]})}return t})(),yu=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:gu,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:ii,useValue:e.callSetDisabledState??Lo}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=we({type:t});static \u0275inj=De({imports:[vu]})}return t})();function Og(t,r){t&1&&(v(0,"span",6),_(1,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"),b())}function Pg(t,r){if(t&1&&(v(0,"span",6),_(1),b()),t&2){let e=ae();S(),tn(" \u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u2014 25 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 (\u0441\u0435\u0439\u0447\u0430\u0441 ",(e.titleControl==null||e.titleControl.value==null?null:e.titleControl.value.length)??0,") ")}}function kg(t,r){t&1&&(v(0,"span",6),_(1,"\u0422\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"),b())}var Bo=class t{constructor(r){this.fb=r}editArticle=null;save=new Re;cancel=new Re;form;get formTitle(){return this.editArticle?"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E"}get saveLabel(){return this.editArticle?"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"}get titleControl(){return this.form.get("title")}get textControl(){return this.form.get("text")}ngOnInit(){this.form=this.fb.group({title:[this.editArticle?.title??"",[dn.required,dn.minLength(25)]],text:[this.editArticle?.text??"",[dn.required]]})}onSave(){if(this.form.invalid)return;let{title:r,text:e}=this.form.value,n={id:this.editArticle?.id??Date.now(),date:this.editArticle?.date??new Date().toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}),title:r.trim(),text:e.trim(),rating:0};this.save.emit(n),this.form.reset()}onCancel(){this.form.reset(),this.cancel.emit()}static \u0275fac=function(e){return new(e||t)(z(bu))};static \u0275cmp=te({type:t,selectors:[["app-article-form"]],inputs:{editArticle:"editArticle"},outputs:{save:"save",cancel:"cancel"},decls:20,vars:11,consts:[[1,"create-article-form"],[1,"create-article-form__title"],[3,"formGroup"],[1,"create-article-form__field"],[1,"create-article-form__label"],["formControlName","title","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0430\u0442\u044C\u0438 (\u043C\u0438\u043D\u0438\u043C\u0443\u043C 25 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)",1,"create-article-form__input"],[1,"create-article-form__error"],["formControlName","text","rows","5","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438",1,"create-article-form__textarea"],[1,"create-article-form__buttons"],["type","button",1,"btn","btn--primary",3,"click","disabled"],["type","button",1,"btn","btn--secondary",3,"click"]],template:function(e,n){e&1&&(v(0,"div",0)(1,"h2",1),_(2),b(),v(3,"form",2)(4,"div",3)(5,"label",4),_(6,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A *"),b(),Pe(7,"input",5),pe(8,Og,2,0,"span",6),pe(9,Pg,2,1,"span",6),b(),v(10,"div",3)(11,"label",4),_(12,"\u0422\u0435\u043A\u0441\u0442 *"),b(),Pe(13,"textarea",7),pe(14,kg,2,0,"span",6),b(),v(15,"div",8)(16,"button",9),ve("click",function(){return n.onSave()}),_(17),b(),v(18,"button",10),ve("click",function(){return n.onCancel()}),_(19,"\u041E\u0442\u043C\u0435\u043D\u0430"),b()()()()),e&2&&(S(2),be(n.formTitle),S(),ke("formGroup",n.form),S(4),xe("create-article-form__input--error",(n.titleControl==null?null:n.titleControl.invalid)&&(n.titleControl==null?null:n.titleControl.touched)),S(),ge(n.titleControl!=null&&n.titleControl.touched&&(n.titleControl!=null&&n.titleControl.hasError("required"))?8:-1),S(),ge(n.titleControl!=null&&n.titleControl.touched&&(n.titleControl!=null&&n.titleControl.hasError("minlength"))?9:-1),S(4),xe("create-article-form__textarea--error",(n.textControl==null?null:n.textControl.invalid)&&(n.textControl==null?null:n.textControl.touched)),S(),ge(n.textControl!=null&&n.textControl.touched&&(n.textControl!=null&&n.textControl.hasError("required"))?14:-1),S(2),ke("disabled",n.form.invalid),S(),tn(" ",n.saveLabel," "))},dependencies:[yu,pu,lr,ko,au,oi,Ps],styles:[".create-article-form[_ngcontent-%COMP%]{background-color:var(--color-bg-card);border:1px solid var(--color-border);border-radius:12px;padding:24px;max-width:600px}.create-article-form__title[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:600;margin-bottom:20px}.create-article-form__field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;margin-bottom:16px}.create-article-form__label[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:var(--color-text-secondary)}.create-article-form__input[_ngcontent-%COMP%], .create-article-form__textarea[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-size:.95rem;padding:10px 14px;border:1px solid var(--color-border);border-radius:8px;outline:none;width:100%;resize:vertical;transition:border-color .2s ease}.create-article-form__input[_ngcontent-%COMP%]:focus, .create-article-form__textarea[_ngcontent-%COMP%]:focus{border-color:var(--color-accent)}.create-article-form__input--error[_ngcontent-%COMP%], .create-article-form__textarea--error[_ngcontent-%COMP%]{border-color:#ef4444}.create-article-form__input--error[_ngcontent-%COMP%]:focus, .create-article-form__textarea--error[_ngcontent-%COMP%]:focus{border-color:#ef4444}.create-article-form__error[_ngcontent-%COMP%]{font-size:11px;color:#ef4444;margin-top:2px}.create-article-form__buttons[_ngcontent-%COMP%]{display:flex;gap:12px;margin-top:8px}.btn--primary[_ngcontent-%COMP%]:disabled{opacity:.45;cursor:not-allowed}"]})};var Ng=(t,r)=>r.id;function Lg(t,r){if(t&1){let e=gn();v(0,"app-article-form",10),ve("save",function(i){Ke(e);let o=ae();return Xe(o.onSave(i))})("cancel",function(){Ke(e);let i=ae();return Xe(i.onCancelForm())}),b()}if(t&2){let e=ae();ke("editArticle",e.editArticle)}}function Bg(t,r){t&1&&(v(0,"div",9)(1,"span",11),_(2,"\u{1F4C4}"),b(),v(3,"p",12),_(4,"\u0421\u0442\u0430\u0442\u0435\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442"),b(),v(5,"p",13),_(6,"\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u0443\u044E \u0441\u0442\u0430\u0442\u044C\u044E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043D\u043E\u043F\u043A\u0438 \u0432 \u043F\u0430\u043D\u0435\u043B\u0438"),b()())}function jg(t,r){if(t&1){let e=gn();v(0,"app-article-card-blog",17),ve("delete",function(i){Ke(e);let o=ae(2);return Xe(o.onDelete(i))})("edit",function(i){Ke(e);let o=ae(2);return Xe(o.onShowEditForm(i))}),b()}if(t&2){let e=r.$implicit;ke("article",e)}}function Vg(t,r){if(t&1){let e=gn();v(0,"button",19),ve("click",function(){let i=Ke(e).$implicit,o=ae(3);return Xe(o.onPageChange(i))}),_(1),b()}if(t&2){let e=r.$implicit,n=ae(3);xe("pagination__btn--active",e===n.store.activePage),S(),tn(" ",e," ")}}function Ug(t,r){if(t&1&&(v(0,"div",16),wt(1,Vg,2,3,"button",18,wi),b()),t&2){let e=ae(2);S(),xt(e.pages)}}function zg(t,r){if(t&1&&(v(0,"div",14),wt(1,jg,1,1,"app-article-card-blog",15,Ng),b(),pe(3,Ug,3,0,"div",16)),t&2){let e=ae();S(),xt(e.store.articles),S(2),ge(e.totalPages>1?3:-1)}}var jo=class t{constructor(r,e){this.articlesService=r;this.store=e}showForm=!1;editArticle=null;ngOnInit(){this.store.articles.length>0||this.loadPage(this.store.activePage)}loadPage(r){this.articlesService.getArticles(r).subscribe(e=>{this.store.saveArticles(e.items),this.store.savePage(r),this.store.total=e.total})}get totalPages(){return Math.ceil(this.store.total/7)}get pages(){return Array.from({length:this.totalPages},(r,e)=>e+1)}get postCount(){return this.store.total}onPageChange(r){this.store.savePage(r),this.loadPage(r)}onShowCreateForm(){this.editArticle=null,this.showForm=!0}onShowEditForm(r){this.editArticle=r,this.showForm=!0}onCancelForm(){this.showForm=!1,this.editArticle=null}onSave(r){(this.editArticle?this.articlesService.updateArticle(r):this.articlesService.addArticle(r)).subscribe(n=>{this.store.saveArticles(n.items),this.store.savePage(1),this.store.total=n.total}),this.showForm=!1,this.editArticle=null}onDelete(r){this.articlesService.deleteArticle(r).subscribe(e=>{this.store.saveArticles(e.items),this.store.total=e.total})}onShowStats(){alert(`\u0421\u0442\u0430\u0442\u0435\u0439 \u0432\u0441\u0435\u0433\u043E: ${this.store.total}`)}static \u0275fac=function(e){return new(e||t)(z(tr),z(nr))};static \u0275cmp=te({type:t,selectors:[["app-blog"]],decls:17,vars:3,consts:[[1,"container"],[1,"blog-layout"],[1,"admin-sidebar"],[1,"admin-sidebar__title"],["title","\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u0441\u0442\u0430\u0442\u044C\u044E",1,"admin-sidebar__btn","admin-sidebar__btn--primary",3,"click"],["title","\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",1,"admin-sidebar__btn",3,"click"],[1,"admin-sidebar__count"],[1,"blog-content"],[3,"editArticle"],[1,"blog-empty"],[3,"save","cancel","editArticle"],[1,"blog-empty__icon"],[1,"blog-empty__title"],[1,"blog-empty__text"],[1,"blog-grid"],[3,"article"],[1,"pagination"],[3,"delete","edit","article"],[1,"pagination__btn",3,"pagination__btn--active"],[1,"pagination__btn",3,"click"]],template:function(e,n){e&1&&(v(0,"div",0)(1,"div",1)(2,"aside",2)(3,"span",3),_(4,"\u041F\u0430\u043D\u0435\u043B\u044C"),b(),v(5,"button",4),ve("click",function(){return n.onShowCreateForm()}),_(6," \u270F\uFE0F \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E "),b(),v(7,"button",5),ve("click",function(){return n.onShowStats()}),_(8," \u{1F4CA} \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 "),b(),v(9,"p",6),_(10),b()(),v(11,"div",7)(12,"h1"),_(13,"\u0421\u0442\u0430\u0442\u044C\u0438"),b(),pe(14,Lg,1,1,"app-article-form",8),pe(15,Bg,7,0,"div",9)(16,zg,4,1),b()()()),e&2&&(S(10),tn("\u0421\u0442\u0430\u0442\u0435\u0439: ",n.postCount),S(4),ge(n.showForm?14:-1),S(),ge(n.store.articles.length===0?15:16))},dependencies:[Eo,Bo],styles:['@charset "UTF-8";.blog-layout[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:32px;padding:48px 0}.blog-content[_ngcontent-%COMP%]{flex:1;min-width:0;display:flex;flex-direction:column;gap:40px}.blog-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.admin-sidebar[_ngcontent-%COMP%]{width:220px;flex-shrink:0;background-color:var(--color-bg-card);border:1px solid var(--color-border);border-radius:12px;padding:20px 16px;display:flex;flex-direction:column;gap:10px;position:sticky;top:80px}.admin-sidebar__title[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--color-text-muted)}.admin-sidebar__btn[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-size:.9rem;font-weight:500;padding:10px 14px;border-radius:8px;border:1px solid var(--color-border);background-color:#fff;color:var(--color-text-primary);cursor:pointer;text-align:left;display:flex;align-items:center;gap:8px;transition:background-color .2s ease,border-color .2s ease}.admin-sidebar__btn[_ngcontent-%COMP%]:hover{background-color:var(--color-bg-card-alt);border-color:var(--color-accent);color:var(--color-accent)}.admin-sidebar__btn--primary[_ngcontent-%COMP%]{background-color:var(--color-accent);color:#fff;border-color:var(--color-accent)}.admin-sidebar__btn--primary[_ngcontent-%COMP%]:hover{background-color:var(--color-accent-hover)}.admin-sidebar__count[_ngcontent-%COMP%]{font-size:.9rem;color:var(--color-text-muted);margin:0}.blog-empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;padding:64px 24px;text-align:center;background-color:var(--color-bg-card);border:2px dashed var(--color-border);border-radius:16px}.blog-empty__icon[_ngcontent-%COMP%]{font-size:3rem}.blog-empty__title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600}.blog-empty__text[_ngcontent-%COMP%]{font-size:.95rem;color:var(--color-text-muted)}.pagination[_ngcontent-%COMP%]{display:flex;gap:8px;justify-content:center;margin-top:8px}.pagination__btn[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-size:.9rem;font-weight:500;width:36px;height:36px;border-radius:8px;border:1px solid var(--color-border);background-color:#fff;color:var(--color-text-primary);cursor:pointer;transition:background-color .2s ease,border-color .2s ease,color .2s ease}.pagination__btn[_ngcontent-%COMP%]:hover{background-color:var(--color-bg-card-alt);border-color:var(--color-accent);color:var(--color-accent)}.pagination__btn--active[_ngcontent-%COMP%]{background-color:var(--color-accent);color:#fff;border-color:var(--color-accent)}.pagination__btn--active[_ngcontent-%COMP%]:hover{background-color:var(--color-accent-hover)}@media(max-width:800px){.blog-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.blog-layout[_ngcontent-%COMP%]{flex-direction:column}.admin-sidebar[_ngcontent-%COMP%]{width:100%;position:static}}']})};var Hg=["*"];var $g=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Gg=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Wg=new T("MAT_CARD_CONFIG"),Du=(()=>{class t{appearance;constructor(){let e=d(Wg,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=te({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,i){n&2&&xe("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Hg,decls:1,vars:0,template:function(n,i){n&1&&(ft(),Ae(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),Eu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var wu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),xu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})(),Su=(()=>{class t{align="start";static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(n,i){n&2&&xe("mat-mdc-card-actions-align-end",i.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),Mu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=te({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Gg,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,i){n&1&&(ft($g),Ae(0),Oe(1,"div",0),Ae(2,1),Ne(),Ae(3,2))},encapsulation:2,changeDetection:0})}return t})();var Au=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return t})();var Tu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=we({type:t});static \u0275inj=De({imports:[bt]})}return t})();function ai(t){return t.buttons===0||t.detail===0}function si(t){let r=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var ks;function Iu(){if(ks==null){let t=typeof document<"u"?document.head:null;ks=!!(t&&(t.createShadowRoot||t.attachShadow))}return ks}function Ns(t){if(Iu()){let r=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function It(t){return t.composedPath?t.composedPath()[0]:t.target}var Ls;try{Ls=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ls=!1}var Ge=(()=>{class t{_platformId=d(Fn);isBrowser=this._platformId?gc(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ls)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var li;function Ru(){if(li==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>li=!0}))}finally{li=li||!1}return li}function cr(t){return Ru()?t:!!t.capture}function Rt(t){return t instanceof Fe?t.nativeElement:t}var Fu=new T("cdk-input-modality-detector-options"),Ou={ignoreKeys:[18,17,224,91,16]},Pu=650,Bs={passive:!0,capture:!0},ku=(()=>{class t{_platform=d(Ge);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new We(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=It(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Pu||(this._modality.next(ai(e)?"keyboard":"mouse"),this._mostRecentTarget=It(e))};_onTouchstart=e=>{if(si(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=It(e)};constructor(){let e=d(Ee),n=d(le),i=d(Fu,{optional:!0});if(this._options=w(w({},Ou),i),this.modalityDetected=this._modality.pipe(hl(1)),this.modalityChanged=this.modalityDetected.pipe(dl()),this._platform.isBrowser){let o=d(Pt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,Bs),o.listen(n,"mousedown",this._onMousedown,Bs),o.listen(n,"touchstart",this._onTouchstart,Bs)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ci=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(ci||{}),Nu=new T("cdk-focus-monitor-default-options"),Vo=cr({passive:!0,capture:!0}),js=(()=>{class t{_ngZone=d(Ee);_platform=d(Ge);_inputModalityDetector=d(ku);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(le);_stopInputModalityDetector=new Ie;constructor(){let e=d(Nu,{optional:!0});this._detectionMode=e?.detectionMode||ci.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=It(e);for(let i=n;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,n=!1){let i=Rt(e);if(!this._platform.isBrowser||i.nodeType!==1)return R();let o=Ns(i)||this._document,a=this._elementInfo.get(i);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new Ie,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=Rt(e),i=this._elementInfo.get(n);i&&(i.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(i))}focusVia(e,n,i){let o=Rt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,n,l)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ci.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===ci.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?Pu:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,n){let i=this._elementInfo.get(n),o=It(e);!i||!i.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),i)}_onBlur(e,n){let i=this._elementInfo.get(n);!i||i.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(i,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Vo),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Vo)}),this._rootNodeFocusListenerCount.set(n,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ot(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let i=this._rootNodeFocusListenerCount.get(n);i>1?this._rootNodeFocusListenerCount.set(n,i-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Vo),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Vo),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,i){this._setClasses(e,n),this._emitOrigin(i,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&n.push([o,i])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Lu=new Set,xn,Vs=(()=>{class t{_platform=d(Ge);_nonce=d(yr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Yg}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Zg(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Zg(t,r){if(!Lu.has(t))try{xn||(xn=document.createElement("style"),r&&xn.setAttribute("nonce",r),xn.setAttribute("type","text/css"),document.head.appendChild(xn)),xn.sheet&&(xn.sheet.insertRule(`@media ${t} {body{ }}`,0),Lu.add(t))}catch(e){console.error(e)}}function Yg(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Kg=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Bu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=we({type:t});static \u0275inj=De({providers:[Kg]})}return t})();var Us={},fn=class t{_appId=d(_r);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){return this._appId!=="ng"&&(r+=this._appId),Us.hasOwnProperty(r)||(Us[r]=0),`${r}${e?t._infix+"-":""}${Us[r]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var dr,ju=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function zs(){if(dr)return dr;if(typeof document!="object"||!document)return dr=new Set(ju),dr;let t=document.createElement("input");return dr=new Set(ju.filter(r=>(t.setAttribute("type",r),t.type===r))),dr}var Xg=new T("MATERIAL_ANIMATIONS"),Vu=null;function Jg(){return d(Xg,{optional:!0})?.animationsDisabled||d(_i,{optional:!0})==="NoopAnimations"?"di-disabled":(Vu??=d(Vs).matchMedia("(prefers-reduced-motion)").matches,Vu?"reduced-motion":"enabled")}function ur(){return Jg()!=="enabled"}function fr(t){return t!=null&&`${t}`!="false"}var _t=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(_t||{}),Hs=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=_t.HIDDEN;constructor(r,e,n,i=!1){this._renderer=r,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},Uu=cr({passive:!0,capture:!0}),$s=class{_events=new Map;addHandler(r,e,n,i){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(i):o.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Uu)})}removeHandler(r,e,n){let i=this._events.get(r);if(!i)return;let o=i.get(e);o&&(o.delete(n),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,Uu)))}_delegateEventHandler=r=>{let e=It(r);e&&this._events.get(r.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(o=>o.handleEvent(r))})}},di={enterDuration:225,exitDuration:150},ev=800,zu=cr({passive:!0,capture:!0}),Hu=["mousedown","touchstart"],$u=["mouseup","mouseleave","touchend","touchcancel"],tv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=te({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Uo=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new $s;constructor(r,e,n,i,o){this._target=r,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=Rt(n)),o&&o.get(wn).load(tv)}fadeInRipple(r,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=w(w({},di),n.animation);n.centered&&(r=i.left+i.width/2,e=i.top+i.height/2);let a=n.radius||nv(r,e,i),s=r-i.left,l=e-i.top,c=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);let g=window.getComputedStyle(u),A=g.transitionProperty,P=g.transitionDuration,re=A==="none"||P==="0s"||P==="0s, 0s"||i.width===0&&i.height===0,V=new Hs(this,u,n,re);u.style.transform="scale3d(1, 1, 1)",V.state=_t.FADING_IN,n.persistent||(this._mostRecentTransientRipple=V);let L=null;return!re&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let B=()=>{L&&(L.fallbackTimer=null),clearTimeout(C),this._finishRippleTransition(V)},M=()=>this._destroyRipple(V),C=setTimeout(M,c+100);u.addEventListener("transitionend",B),u.addEventListener("transitioncancel",M),L={onTransitionEnd:B,onTransitionCancel:M,fallbackTimer:C}}),this._activeRipples.set(V,L),(re||!c)&&this._finishRippleTransition(V),V}fadeOutRipple(r){if(r.state===_t.FADING_OUT||r.state===_t.HIDDEN)return;let e=r.element,n=w(w({},di),r.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",r.state=_t.FADING_OUT,(r._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=Rt(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Hu.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{$u.forEach(e=>{this._triggerElement.addEventListener(e,this,zu)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===_t.FADING_IN?this._startFadeOutTransition(r):r.state===_t.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:n}=r.config;r.state=_t.VISIBLE,!n&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=_t.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=ai(r),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ev;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!si(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===_t.VISIBLE||r.config.terminateOnPointerUp&&r.state===_t.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(Hu.forEach(e=>t._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&($u.forEach(e=>r.removeEventListener(e,this,zu)),this._pointerUpEventsRegistered=!1))}};function nv(t,r,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(n*n+i*i)}var Gu=new T("mat-ripple-global-options");var rv={capture:!0},iv=["focus","mousedown","mouseenter","touchstart"],Gs="mat-ripple-loader-uninitialized",Ws="mat-ripple-loader-class-name",Wu="mat-ripple-loader-centered",zo="mat-ripple-loader-disabled",qu=(()=>{class t{_document=d(le);_animationsDisabled=ur();_globalRippleOptions=d(Gu,{optional:!0});_platform=d(Ge);_ngZone=d(Ee);_injector=d(Je);_eventCleanups;_hosts=new Map;constructor(){let e=d(Pt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>iv.map(n=>e.listen(this._document,n,this._onInteraction,rv)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(Gs,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(Ws))&&e.setAttribute(Ws,n.className||""),n.centered&&e.setAttribute(Wu,""),n.disabled&&e.setAttribute(zo,"")}setDisabled(e,n){let i=this._hosts.get(e);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):n?e.setAttribute(zo,""):e.removeAttribute(zo)}_onInteraction=e=>{let n=It(e);if(n instanceof HTMLElement){let i=n.closest(`[${Gs}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(Ws)),e.append(n);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??di.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??di.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(zo),rippleConfig:{centered:e.hasAttribute(Wu),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Uo(s,this._ngZone,n,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(Gs)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=te({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var ov=["mat-icon-button",""],av=["*"],sv=new T("MAT_BUTTON_CONFIG");function Yu(t){return t==null?void 0:$l(t)}var qs=(()=>{class t{_elementRef=d(Fe);_ngZone=d(Ee);_animationsDisabled=ur();_config=d(sv,{optional:!0});_focusMonitor=d(js);_cleanupClick;_renderer=d(rt);_rippleLoader=d(qu);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(wn).load(Zu);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,i){n&2&&(it("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Si(i.color?"mat-"+i.color:""),xe("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Ue],disabled:[2,"disabled","disabled",Ue],ariaDisabled:[2,"aria-disabled","ariaDisabled",Ue],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ue],tabIndex:[2,"tabIndex","tabIndex",Yu],_tabindex:[2,"tabindex","_tabindex",Yu]}})}return t})(),Zs=(()=>{class t extends qs{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=te({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Qe],attrs:ov,ngContentSelectors:av,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(ft(),St(0,"span",0),Ae(1),St(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Ku=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=we({type:t});static \u0275inj=De({imports:[bt]})}return t})();var lv=["matButton",""],cv=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],dv=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Xu=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ju=(()=>{class t extends qs{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=uv(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?Xu.get(this._appearance):null,o=Xu.get(e);i&&n.remove(...i),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=te({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Qe],attrs:lv,ngContentSelectors:dv,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(ft(cv),St(0,"span",0),Ae(1),Oe(2,"span",1),Ae(3,1),Ne(),Ae(4,2),St(5,"span",2)(6,"span",3)),n&2&&xe("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function uv(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Qu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=we({type:t});static \u0275inj=De({imports:[Ku,bt]})}return t})();var Ys=class{_box;_destroyed=new Ie;_resizeSubject=new Ie;_resizeObserver;_elementObservables=new Map;constructor(r){this._box=r,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(r){return this._elementObservables.has(r)||this._elementObservables.set(r,new An(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(r,{box:this._box}),()=>{this._resizeObserver?.unobserve(r),n.unsubscribe(),this._elementObservables.delete(r)}}).pipe(ct(e=>e.some(n=>n.target===r)),ml({bufferSize:1,refCount:!0}),Ot(this._destroyed))),this._elementObservables.get(r)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ef=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(Ee);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let i=n?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new Ys(i)),this._observers.get(i).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var mv=["notch"],hv=["matFormFieldNotchedOutline",""],pv=["*"],tf=["iconPrefixContainer"],nf=["textPrefixContainer"],rf=["iconSuffixContainer"],of=["textSuffixContainer"],gv=["textField"],vv=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],bv=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function _v(t,r){t&1&&Pe(0,"span",21)}function yv(t,r){if(t&1&&(v(0,"label",20),Ae(1,1),pe(2,_v,1,0,"span",21),b()),t&2){let e=ae(2);ke("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),it("for",e._control.disableAutomaticLabeling?null:e._control.id),S(2),ge(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Cv(t,r){if(t&1&&pe(0,yv,3,5,"label",20),t&2){let e=ae();ge(e._hasFloatingLabel()?0:-1)}}function Dv(t,r){t&1&&Pe(0,"div",7)}function Ev(t,r){}function wv(t,r){if(t&1&&Ei(0,Ev,0,0,"ng-template",13),t&2){ae(2);let e=ma(1);ke("ngTemplateOutlet",e)}}function xv(t,r){if(t&1&&(v(0,"div",9),pe(1,wv,1,1,null,13),b()),t&2){let e=ae();ke("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),S(),ge(e._forceDisplayInfixLabel()?-1:1)}}function Sv(t,r){t&1&&(v(0,"div",10,2),Ae(2,2),b())}function Mv(t,r){t&1&&(v(0,"div",11,3),Ae(2,3),b())}function Av(t,r){}function Tv(t,r){if(t&1&&Ei(0,Av,0,0,"ng-template",13),t&2){ae();let e=ma(1);ke("ngTemplateOutlet",e)}}function Iv(t,r){t&1&&(v(0,"div",14,4),Ae(2,4),b())}function Rv(t,r){t&1&&(v(0,"div",15,5),Ae(2,5),b())}function Fv(t,r){t&1&&Pe(0,"div",16)}function Ov(t,r){t&1&&(v(0,"div",18),Ae(1,6),b())}function Pv(t,r){if(t&1&&(v(0,"mat-hint",22),_(1),b()),t&2){let e=ae(2);ke("id",e._hintLabelId),S(),be(e.hintLabel)}}function kv(t,r){if(t&1&&(v(0,"div",19),pe(1,Pv,2,2,"mat-hint",22),Ae(2,7),Pe(3,"div",23),Ae(4,8),b()),t&2){let e=ae();S(),ge(e.hintLabel?1:-1)}}var ui=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["mat-label"]]})}return t})(),Nv=new T("MatError");var Ks=(()=>{class t{align="start";id=d(fn).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,i){n&2&&(xi("id",i.id),it("align",null),xe("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),Lv=new T("MatPrefix");var ff=new T("MatSuffix"),Xs=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[mt([{provide:ff,useExisting:t}])]})}return t})(),mf=new T("FloatingLabelParent"),af=(()=>{class t{_elementRef=d(Fe);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(ef);_ngZone=d(Ee);_parent=d(mf);_resizeSubscription=new Mn;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Bv(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,i){n&2&&xe("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function Bv(t){let r=t;if(r.offsetParent!==null)return r.scrollWidth;let e=r.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var sf="mdc-line-ripple--active",Ho="mdc-line-ripple--deactivating",lf=(()=>{class t{_elementRef=d(Fe);_cleanupTransitionEnd;constructor(){let e=d(Ee),n=d(rt);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ho),e.add(sf)}deactivate(){this._elementRef.nativeElement.classList.add(Ho)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,i=n.contains(Ho);e.propertyName==="opacity"&&i&&n.remove(sf,Ho)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),cf=(()=>{class t{_elementRef=d(Fe);_ngZone=d(Ee);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=te({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,i){if(n&1&&ua(mv,5),n&2){let o;je(o=Ve())&&(i._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,i){n&2&&xe("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:hv,ngContentSelectors:pv,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,i){n&1&&(ft(),St(0,"div",1),Oe(1,"div",2,0),Ae(3),Ne(),St(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Js=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t})}return t})();var Qs=new T("MatFormField"),jv=new T("MAT_FORM_FIELD_DEFAULT_OPTIONS"),df="fill",Vv="auto",uf="fixed",Uv="translateY(-50%)",$o=(()=>{class t{_elementRef=d(Fe);_changeDetectorRef=d(nn);_platform=d(Ge);_idGenerator=d(fn);_ngZone=d(Ee);_defaults=d(jv,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Dr("iconPrefixContainer");_textPrefixContainerSignal=Dr("textPrefixContainer");_iconSuffixContainerSignal=Dr("iconSuffixContainer");_textSuffixContainerSignal=Dr("textSuffixContainer");_prefixSuffixContainers=ot(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Ul(ui);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=fr(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Vv}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||df;this._appearanceSignal.set(n)}_appearanceSignal=ye(df);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||uf}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||uf}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Ie;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ur();constructor(){let e=this._defaults,n=d(ys);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),bi(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ot(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(i+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(vi([void 0,void 0]),de(()=>[n.errorState,n.userAriaDescribedBy]),ul(),ct(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(Ot(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),cl(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Gl({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ot(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,i;if(n){let o=this._describedByIds||e;i=e.concat(n.filter(a=>a&&!o.includes(a)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",g=`${a+s}px`,P=`calc(${u} * (${g} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,re=`var(--mat-mdc-form-field-label-transform, ${Uv} translateX(${P}))`,V=a+s+l+c;return[re,V]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=te({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,i,o){if(n&1&&(Pl(o,i._labelChild,ui,5),da(o,Js,5)(o,Lv,5)(o,ff,5)(o,Nv,5)(o,Ks,5)),n&2){fa();let a;je(a=Ve())&&(i._formFieldControl=a.first),je(a=Ve())&&(i._prefixChildren=a),je(a=Ve())&&(i._suffixChildren=a),je(a=Ve())&&(i._errorChildren=a),je(a=Ve())&&(i._hintChildren=a)}},viewQuery:function(n,i){if(n&1&&(kl(i._iconPrefixContainerSignal,tf,5)(i._textPrefixContainerSignal,nf,5)(i._iconSuffixContainerSignal,rf,5)(i._textSuffixContainerSignal,of,5),ua(gv,5)(tf,5)(nf,5)(rf,5)(of,5)(af,5)(cf,5)(lf,5)),n&2){fa(4);let o;je(o=Ve())&&(i._textField=o.first),je(o=Ve())&&(i._iconPrefixContainer=o.first),je(o=Ve())&&(i._textPrefixContainer=o.first),je(o=Ve())&&(i._iconSuffixContainer=o.first),je(o=Ve())&&(i._textSuffixContainer=o.first),je(o=Ve())&&(i._floatingLabel=o.first),je(o=Ve())&&(i._notchedOutline=o.first),je(o=Ve())&&(i._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,i){n&2&&xe("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[mt([{provide:Qs,useExisting:t},{provide:mf,useExisting:t}])],ngContentSelectors:bv,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,i){if(n&1&&(ft(vv),Ei(0,Cv,1,1,"ng-template",null,0,Ll),v(2,"div",6,1),ve("click",function(a){return i._control.onContainerClick(a)}),pe(4,Dv,1,0,"div",7),v(5,"div",8),pe(6,xv,2,2,"div",9),pe(7,Sv,3,0,"div",10),pe(8,Mv,3,0,"div",11),v(9,"div",12),pe(10,Tv,1,1,null,13),Ae(11),b(),pe(12,Iv,3,0,"div",14),pe(13,Rv,3,0,"div",15),b(),pe(14,Fv,1,0,"div",16),b(),v(15,"div",17),pe(16,Ov,2,0,"div",18)(17,kv,5,1,"div",19),b()),n&2){let o;S(2),xe("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),S(2),ge(!i._hasOutline()&&!i._control.disabled?4:-1),S(2),ge(i._hasOutline()?6:-1),S(),ge(i._hasIconPrefix?7:-1),S(),ge(i._hasTextPrefix?8:-1),S(2),ge(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),S(2),ge(i._hasTextSuffix?12:-1),S(),ge(i._hasIconSuffix?13:-1),S(),ge(i._hasOutline()?-1:14),S(),xe("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let a=i._getSubscriptMessageType();S(),ge((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[af,cf,Ra,lf,Ks],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var fi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=we({type:t});static \u0275inj=De({imports:[Bu,$o,bt]})}return t})();var Hv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=te({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),$v={passive:!0},hf=(()=>{class t{_platform=d(Ge);_ngZone=d(Ee);_renderer=d(Pt).createRenderer(null,null);_styleLoader=d(wn);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return qe;this._styleLoader.load(Hv);let n=Rt(e),i=this._monitoredElements.get(n);if(i)return i.subject;let o=new Ie,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",s,$v)));return this._monitoredElements.set(n,{subject:o,unlisten:l}),o}stopMonitoring(e){let n=Rt(e),i=this._monitoredElements.get(n);i&&(i.unlisten(),i.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=we({type:t});static \u0275inj=De({})}return t})();var gf=new T("MAT_INPUT_VALUE_ACCESSOR");var vf=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Go=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(r,e,n,i,o){this._defaultMatcher=r,this.ngControl=e,this._parentFormGroup=n,this._parentForm=i,this._stateChanges=o}updateErrorState(){let r=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(i,e)??!1;o!==r&&(this.errorState=o,this._stateChanges.next())}};var Gv=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Wv=new T("MAT_INPUT_CONFIG"),bf=(()=>{class t{_elementRef=d(Fe);_platform=d(Ge);ngControl=d(Kt,{optional:!0,self:!0});_autofillMonitor=d(hf);_ngZone=d(Ee);_formField=d(Qs,{optional:!0});_renderer=d(rt);_uid=d(fn).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(Wv,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new Ie;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=fr(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(dn.required)??!1}set required(e){this._required=fr(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&zs().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=fr(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>zs().has(e));constructor(){let e=d(Fs,{optional:!0}),n=d(oi,{optional:!0}),i=d(vf),o=d(gf,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?ca(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Go(i,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&bi(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Gv.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=X({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,i){n&1&&ve("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),n&2&&(xi("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),it("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),xe("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ue]},exportAs:["matInput"],features:[mt([{provide:Js,useExisting:t}]),ut]})}return t})(),_f=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=we({type:t});static \u0275inj=De({imports:[fi,fi,pf,bt]})}return t})();var Wo=new T("IPostService");var qo=class t{article=null;comments=[];saveArticle(r){this.article=r}saveComments(r){this.comments=r}clear(){this.article=null,this.comments=[]}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var Yv=(t,r)=>r.id;function Kv(t,r){if(t&1&&(v(0,"span",13),_(1),b()),t&2){let e=ae(2);S(),tn("(",e.store.comments.length,")")}}function Xv(t,r){t&1&&(v(0,"p",14),_(1,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442. \u0411\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C!"),b())}function Jv(t,r){if(t&1){let e=gn();v(0,"mat-card",21)(1,"mat-card-header")(2,"mat-card-title"),_(3),b(),v(4,"mat-card-subtitle"),_(5),b()(),v(6,"mat-card-content")(7,"p"),_(8),b()(),v(9,"mat-card-actions",22)(10,"span",7),_(11,"\u0420\u0435\u0439\u0442\u0438\u043D\u0433:"),b(),v(12,"button",23),ve("click",function(){let i=Ke(e).$implicit,o=ae(3);return Xe(o.onCommentRating(i.id,-1))}),v(13,"mat-icon"),_(14,"thumb_down"),b()(),v(15,"span",9),_(16),b(),v(17,"button",24),ve("click",function(){let i=Ke(e).$implicit,o=ae(3);return Xe(o.onCommentRating(i.id,1))}),v(18,"mat-icon"),_(19,"thumb_up"),b()()()()}if(t&2){let e=r.$implicit;S(3),be(e.author),S(2),be(e.date),S(3),be(e.text),S(8),be(e.rating)}}function Qv(t,r){if(t&1&&wt(0,Jv,20,4,"mat-card",21,Yv),t&2){let e=ae(2);xt(e.store.comments)}}function eb(t,r){if(t&1){let e=gn();v(0,"mat-card",3)(1,"mat-card-header")(2,"mat-card-title"),_(3),b(),v(4,"mat-card-subtitle"),_(5),b()(),Pe(6,"img",4),v(7,"mat-card-content")(8,"p",5),_(9),b()(),v(10,"mat-card-actions",6)(11,"span",7),_(12,"\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0441\u0442\u0430\u0442\u044C\u0438:"),b(),v(13,"button",8),ve("click",function(){Ke(e);let i=ae();return Xe(i.onArticleRating(-1))}),v(14,"mat-icon"),_(15,"thumb_down"),b()(),v(16,"span",9),_(17),b(),v(18,"button",10),ve("click",function(){Ke(e);let i=ae();return Xe(i.onArticleRating(1))}),v(19,"mat-icon"),_(20,"thumb_up"),b()()()(),v(21,"section",11)(22,"h2",12),_(23," \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 "),pe(24,Kv,2,1,"span",13),b(),pe(25,Xv,2,0,"p",14)(26,Qv,2,0),b(),v(27,"section",15)(28,"h3"),_(29,"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),b(),v(30,"mat-form-field",16)(31,"mat-label"),_(32,"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F / \u043D\u0438\u043A"),b(),v(33,"input",17),ga("ngModelChange",function(i){Ke(e);let o=ae();return pa(o.newAuthor,i)||(o.newAuthor=i),Xe(i)}),b(),v(34,"mat-icon",18),_(35,"person"),b()(),v(36,"mat-form-field",16)(37,"mat-label"),_(38,"\u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F"),b(),v(39,"textarea",19),ga("ngModelChange",function(i){Ke(e);let o=ae();return pa(o.newText,i)||(o.newText=i),Xe(i)}),b(),v(40,"mat-icon",18),_(41,"comment"),b()(),v(42,"button",20),ve("click",function(){Ke(e);let i=ae();return Xe(i.onAddComment())}),v(43,"mat-icon"),_(44,"send"),b(),_(45," \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C "),b()()}if(t&2){let e=ae();S(3),be(e.store.article.title),S(2),be(e.store.article.date),S(4),be(e.store.article.text),S(8),be(e.store.article.rating),S(7),ge(e.store.comments.length>0?24:-1),S(),ge(e.store.comments.length===0?25:26),S(8),ha("ngModel",e.newAuthor),S(6),ha("ngModel",e.newText),S(3),ke("disabled",!e.newAuthor.trim()||!e.newText.trim())}}function tb(t,r){t&1&&(v(0,"p",2),_(1,"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."),b())}var Zo=class t{constructor(r,e,n,i){this.route=r;this.titleService=e;this.postService=n;this.store=i}newAuthor="";newText="";ngOnInit(){let r=Number(this.route.snapshot.paramMap.get("id"));this.store.clear(),this.postService.getPost(r).subscribe(e=>{this.store.saveArticle(e.article),this.store.saveComments(e.comments),this.titleService.setTitle(e.article.title||"\u041F\u043E\u0441\u0442")})}ngOnDestroy(){this.titleService.setTitle("\u0411\u043B\u043E\u0433")}onArticleRating(r){this.store.article&&this.postService.updateArticleRating(this.store.article.id,r).subscribe(e=>{this.store.saveArticle(e)})}onCommentRating(r,e){this.store.article&&this.postService.updateCommentRating(this.store.article.id,r,e).subscribe(n=>{this.store.saveComments(n)})}onAddComment(){if(!this.newAuthor.trim()||!this.newText.trim()||!this.store.article)return;let r={id:Date.now(),author:this.newAuthor.trim(),text:this.newText.trim(),date:new Date().toLocaleDateString("ru-RU"),rating:0};this.postService.addComment(this.store.article.id,r).subscribe(e=>{this.store.saveComments(e)}),this.newAuthor="",this.newText=""}static \u0275fac=function(e){return new(e||t)(z(Tt),z(Ui),z(Wo),z(qo))};static \u0275cmp=te({type:t,selectors:[["app-post"]],decls:7,vars:1,consts:[[1,"container"],["routerLink","/blog",1,"back-link"],[1,"post-loading"],[1,"post-card"],["mat-card-image","","src","https://placehold.co/900x300?text=Article+Image","alt","\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438",1,"post-card__image"],[1,"post-card__text"],[1,"post-card__actions"],[1,"rating-label"],["mat-icon-button","","color","warn","title","\u041F\u043E\u043D\u0438\u0437\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433",3,"click"],[1,"rating-value"],["mat-icon-button","","color","primary","title","\u041F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433",3,"click"],[1,"comments-section"],[1,"comments-section__title"],[1,"comments-count"],[1,"comments-empty"],[1,"add-comment-section"],["appearance","outline",1,"add-comment-section__field"],["matInput","","placeholder","\u0418\u043C\u044F \u0438\u043B\u0438 \u043D\u0438\u043A",3,"ngModelChange","ngModel"],["matSuffix",""],["matInput","","placeholder","\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439...","rows","4",3,"ngModelChange","ngModel"],["mat-raised-button","","color","primary",3,"click","disabled"],[1,"comment-card"],[1,"comment-card__actions"],["mat-icon-button","","color","warn",3,"click"],["mat-icon-button","","color","primary",3,"click"]],template:function(e,n){e&1&&(v(0,"div",0)(1,"a",1)(2,"mat-icon"),_(3,"arrow_back"),b(),_(4," \u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443 "),b(),pe(5,eb,46,9)(6,tb,2,0,"p",2),b()),e&2&&(S(5),ge(n.store.article?5:6))},dependencies:[Bt,_u,lr,ko,Os,Tu,Du,Su,wu,Mu,Au,xu,Eu,Qu,Ju,Zs,fi,$o,ui,Xs,_f,bf,Do,Co],styles:[".container[_ngcontent-%COMP%]{max-width:860px;margin:0 auto;padding:24px 16px 64px}.back-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;color:#5c6bc0;text-decoration:none;margin-bottom:24px;font-size:.95rem;transition:color .2s}.back-link[_ngcontent-%COMP%]:hover{color:#3949ab}.back-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.post-card[_ngcontent-%COMP%]{margin-bottom:40px}.post-card__image[_ngcontent-%COMP%]{width:100%;height:300px;object-fit:cover}.post-card__text[_ngcontent-%COMP%]{font-size:1.05rem;line-height:1.75;color:#333;white-space:pre-wrap}.post-card__actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:8px 16px 16px}.rating-label[_ngcontent-%COMP%]{font-size:.9rem;color:#666;margin-right:4px}.rating-value[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600;min-width:28px;text-align:center;color:#333}.comments-section[_ngcontent-%COMP%]{margin-bottom:40px}.comments-section__title[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:600;margin-bottom:16px;color:#222}.comments-count[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:#888;margin-left:6px}.comments-empty[_ngcontent-%COMP%]{color:#888;font-style:italic;padding:16px 0}.comment-card[_ngcontent-%COMP%]{margin-bottom:16px}.comment-card__actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:4px 16px 12px}.add-comment-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:600;margin-bottom:16px;color:#222}.add-comment-section__field[_ngcontent-%COMP%]{width:100%;margin-bottom:12px}.add-comment-section[_ngcontent-%COMP%]   button[mat-raised-button][_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.post-loading[_ngcontent-%COMP%]{text-align:center;color:#888;padding:60px 0;font-size:1.1rem}"]})};var yf=[{path:"",component:vo,title:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F"},{path:"blog",component:jo,title:"\u0411\u043B\u043E\u0433"},{path:"blog/:id",component:Zo}];var Cf="blog_posts",Df=7,Yo=class t{loadAll(){let r=localStorage.getItem(Cf);if(!r)return[];try{return JSON.parse(r)}catch{return[]}}saveAll(r){localStorage.setItem(Cf,JSON.stringify(r))}buildResponse(r,e){let n=r.length,i=(e-1)*Df;return{items:r.slice(i,i+Df),total:n}}getArticles(r){let e=this.loadAll();return R(this.buildResponse(e,r))}addArticle(r){let e=this.loadAll();return e.unshift(r),this.saveAll(e),R(this.buildResponse(e,1))}updateArticle(r){let n=this.loadAll().map(i=>i.id===r.id?r:i);return this.saveAll(n),R(this.buildResponse(n,1))}deleteArticle(r){let n=this.loadAll().filter(i=>i.id!==r);return this.saveAll(n),R(this.buildResponse(n,1))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ef="blog_posts",wf="blog_comments",Ko=class t{loadArticles(){try{return JSON.parse(localStorage.getItem(Ef)??"[]")}catch{return[]}}saveArticles(r){localStorage.setItem(Ef,JSON.stringify(r))}loadAllComments(){try{return JSON.parse(localStorage.getItem(wf)??"{}")}catch{return{}}}saveAllComments(r){localStorage.setItem(wf,JSON.stringify(r))}loadComments(r){return this.loadAllComments()[r]??[]}getPost(r){let e=this.loadArticles().find(i=>i.id===r)??null;if(!e)return R({article:{id:0,title:"",text:"",date:"",rating:0},comments:[]});let n=this.loadComments(r);return R({article:e,comments:n})}addComment(r,e){let n=this.loadAllComments(),i=n[r]??[];return i.push(e),n[r]=i,this.saveAllComments(n),R(i)}updateCommentRating(r,e,n){let i=this.loadAllComments(),o=(i[r]??[]).map(a=>a.id===e?he(w({},a),{rating:a.rating+n}):a);return i[r]=o,this.saveAllComments(i),R(o)}updateArticleRating(r,e){let n=this.loadArticles().map(o=>o.id===r?he(w({},o),{rating:o.rating+e}):o);this.saveArticles(n);let i=n.find(o=>o.id===r);return R(i)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})};var xf={providers:[zl({eventCoalescing:!0}),bs(yf),Id(),{provide:tr,useClass:Yo},{provide:Wo,useClass:Ko}]};var Xo=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=te({type:t,selectors:[["app-header"]],decls:8,vars:0,consts:[[1,"nav"],[1,"nav__list"],["routerLink","/",1,"nav__link"],["routerLink","/blog",1,"nav__link"]],template:function(e,n){e&1&&(v(0,"nav",0)(1,"ul",1)(2,"li")(3,"a",2),_(4,"\u0413\u043B\u0430\u0432\u043D\u0430\u044F"),b()(),v(5,"li")(6,"a",3),_(7,"\u0411\u043B\u043E\u0433"),b()()()())},dependencies:[Bt],styles:['@charset "UTF-8";.nav[_ngcontent-%COMP%]{background-color:var(--color-bg-page);border-bottom:1px solid var(--color-border);padding:0 40px;position:sticky;top:0;z-index:100}.nav__list[_ngcontent-%COMP%]{display:flex;list-style:none;gap:32px;max-width:1100px;margin:0 auto;padding:16px 0}.nav__link[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--color-text-primary);text-decoration:none;padding-bottom:2px;border-bottom:2px solid transparent;transition:font-weight .2s ease,border-color .2s ease,color .2s ease}.nav__link[_ngcontent-%COMP%]:hover{font-weight:700;color:var(--color-accent);border-bottom:2px solid var(--color-accent);text-decoration:none}']})};var Jo=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=te({type:t,selectors:[["app-footer"]],decls:23,vars:0,consts:[[1,"footer"],[1,"footer__inner"],[1,"footer__title"],[1,"footer__text"],["href","mailto:student@nstu.ru",1,"footer__link"],[1,"footer__social"],["href","#",1,"footer__social-link"]],template:function(e,n){e&1&&(Oe(0,"footer",0)(1,"div",1)(2,"div")(3,"h2",2),_(4,"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),Ne(),Oe(5,"p",3),_(6," Email: "),Oe(7,"a",4),_(8,"student@nstu.ru"),Ne()(),Oe(9,"p",3),_(10,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D: +7 (999) 123-45-67"),Ne()(),Oe(11,"div")(12,"h2",2),_(13,"\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438"),Ne(),Oe(14,"div",5)(15,"a",6),_(16,"Instagram"),Ne(),Oe(17,"a",6),_(18,"Twitter"),Ne(),Oe(19,"a",6),_(20,"LinkedIn"),Ne(),Oe(21,"a",6),_(22,"GitHub"),Ne()()()()())},styles:['@charset "UTF-8";.footer[_ngcontent-%COMP%]{background-color:var(--color-bg-footer);color:#fff;padding:40px}.footer__inner[_ngcontent-%COMP%]{max-width:1100px;margin:0 auto;display:flex;justify-content:space-between;align-items:flex-start;gap:40px;flex-wrap:wrap}.footer__title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600;color:#fff;margin-bottom:12px}.footer__text[_ngcontent-%COMP%]{font-size:.95rem;color:#ccc;margin-bottom:6px}.footer__link[_ngcontent-%COMP%]{color:#93c5fd;text-decoration:none}.footer__link[_ngcontent-%COMP%]:hover{text-decoration:underline}.footer__social[_ngcontent-%COMP%]{display:flex;gap:16px;margin-top:8px}.footer__social-link[_ngcontent-%COMP%]{font-size:.95rem;color:#93c5fd;text-decoration:none}.footer__social-link[_ngcontent-%COMP%]:hover{text-decoration:underline}']})};var Qo=class t{title="blog-app";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=te({type:t,selectors:[["app-root"]],decls:3,vars:0,template:function(e,n){e&1&&Pe(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[Zr,Xo,Jo],encapsulation:2})};ja(Qo,xf).catch(t=>console.error(t));
