(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"o0n/":function(n,a,t){"use strict";t.r(a),t.d(a,"mdTransitionAnimation",(function(){return o})),t("4BK2"),t("ttJE"),t("wSPg");var e=t("6Wpj"),i=(t("ocqh"),t("0DHG")),o=function(n,a){var t="back"===a.direction,o=a.enteringEl,r=a.leavingEl,c=Object(i.b)(o),d=c.querySelector("ion-toolbar"),b=Object(e.a)();if(b.addElement(c).fill("both").beforeRemoveClass("ion-page-invisible"),t?b.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):b.duration(a.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),d){var s=Object(e.a)();s.addElement(d),b.addAnimation(s)}if(r&&t){b.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var l=Object(e.a)();l.addElement(Object(i.b)(r)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),b.addAnimation(l)}return b}}}]);