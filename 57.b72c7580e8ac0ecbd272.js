(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{z0lq:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",(function(){return f}));var i=o("mrSG"),r=o("4BK2"),n=(o("ttJE"),o("wSPg"),o("6Wpj")),s=(o("ocqh"),o("pwSV"),o("3ogR")),a=o("Jky2"),p=o("v7+D"),c=o("0DHG"),l=function(e,t){var o="top",i="left",r=e.querySelector(".popover-content"),s=r.getBoundingClientRect(),a=s.width,p=s.height,c=e.ownerDocument.defaultView.innerWidth,l=e.ownerDocument.defaultView.innerHeight,h=t&&t.target&&t.target.getBoundingClientRect(),m=null!=h&&"top"in h?h.top:l/2-p/2,v=null!=h&&"left"in h?h.left:c/2,f=h&&h.width||0,b=h&&h.height||0,u=e.querySelector(".popover-arrow"),g=u.getBoundingClientRect(),y=g.width,w=g.height;null==h&&(u.style.display="none");var x={top:m+b,left:v+f/2-y/2},j={top:m+b+(w-1),left:v+f/2-a/2},O=!1,D=!1;j.left<d+25?(O=!0,j.left=d):a+d+j.left+25>c&&(D=!0,j.left=c-a-d,i="right"),m+b+p>l&&m-p>0?(x.top=m-(w+1),j.top=m-p-(w-1),e.className=e.className+" popover-bottom",o="bottom"):m+b+p>l&&(r.style.bottom=d+"%"),u.style.top=x.top+"px",u.style.left=x.left+"px",r.style.top=j.top+"px",r.style.left=j.left+"px",O&&(r.style.left="calc("+j.left+"px + var(--ion-safe-area-left, 0px))"),D&&(r.style.left="calc("+j.left+"px - var(--ion-safe-area-right, 0px))"),r.style.transformOrigin=o+" "+i;var k=Object(n.a)(),P=Object(n.a)(),E=Object(n.a)();return P.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),k.addElement(e).easing("ease").duration(100).addAnimation([P,E])},d=5,h=function(e){var t=Object(n.a)(),o=Object(n.a)(),i=Object(n.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,i])},m=function(e,t){var o=e.ownerDocument,i="rtl"===o.dir,r="top",s=i?"right":"left",a=e.querySelector(".popover-content"),p=a.getBoundingClientRect(),c=p.width,l=p.height,d=o.defaultView.innerWidth,h=o.defaultView.innerHeight,m=t&&t.target&&t.target.getBoundingClientRect(),v=null!=m&&"bottom"in m?m.bottom:h/2-l/2,f=m&&m.height||0,b={top:v,left:null!=m&&"left"in m?i?m.left-c+m.width:m.left:d/2-c/2};b.left<12?(b.left=12,s="left"):c+12+b.left>d&&(b.left=d-c-12,s="right"),v+f+l>h&&v-l>0?(b.top=v-l-f,e.className=e.className+" popover-bottom",r="bottom"):v+f+l>h&&(a.style.bottom="12px");var u=Object(n.a)(),g=Object(n.a)(),y=Object(n.a)(),w=Object(n.a)(),x=Object(n.a)();return g.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),y.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(a).beforeStyles({top:b.top+"px",left:b.left+"px","transform-origin":r+" "+s}).fromTo("transform","scale(0.001)","scale(1)"),x.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),u.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([g,y,w,x])},v=function(e){var t=Object(n.a)(),o=Object(n.a)(),i=Object(n.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,i])},f=function(){function e(e){var t=this;Object(r.k)(this,e),this.presented=!1,this.mode=Object(r.d)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,s.a)},this.onLifecycle=function(e){var o=t.usersElement,i=b[e.type];if(o&&i){var r=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(r)}},Object(s.e)(this.el),this.didPresent=Object(r.e)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.e)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.e)(this,"ionPopoverDidDismiss",7)}return e.prototype.present=function(){return Object(i.b)(this,void 0,void 0,(function(){var e,t,o;return Object(i.e)(this,(function(i){switch(i.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),o=this,[4,Object(p.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return o.usersElement=i.sent(),[4,Object(c.a)(this.usersElement)];case 2:return i.sent(),[2,Object(s.f)(this,"popoverEnter",l,m,this.event)]}}))}))},e.prototype.dismiss=function(e,t){return Object(i.b)(this,void 0,void 0,(function(){var o;return Object(i.e)(this,(function(i){switch(i.label){case 0:return[4,Object(s.g)(this,e,t,"popoverLeave",h,v,this.event)];case 1:return(o=i.sent())?[4,Object(p.b)(this.delegate,this.usersElement)]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2,o]}}))}))},e.prototype.onDidDismiss=function(){return Object(s.h)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(s.h)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,t=Object(r.d)(this),o=this.onLifecycle;return Object(r.i)(r.a,{"aria-modal":"true","no-router":!0,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(a.b)(this.cssClass)),(e={},e[t]=!0,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:o,onIonPopoverWillPresent:o,onIonPopoverWillDismiss:o,onIonPopoverDidDismiss:o,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(r.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.i)("div",{class:"popover-wrapper"},Object(r.i)("div",{class:"popover-arrow"}),Object(r.i)("div",{class:"popover-content"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);--backdrop-opacity:var(--ion-backdrop-opacity,0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"},enumerable:!0,configurable:!0}),e}(),b={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);