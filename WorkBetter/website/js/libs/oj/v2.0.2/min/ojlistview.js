/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdomscroller"],function(a,f){a.Ac=function(b,a,c){this.ub=a;this.u=b;this.dz=!1;this.z5(c);this.Init()};a.b.ga(a.Ac,a.b,"oj.DataSourceContentHandler");a.Ac.prototype.Init=function(){a.Ac.r.Init.call(this)};a.b.g("DataSourceContentHandler.prototype.Init",{Init:a.Ac.prototype.Init});a.Ac.prototype.HandleResize=function(){};a.Ac.prototype.Se=function(){f(this.ub).empty();this.ub=this.u=null};a.Ac.prototype.Xr=function(){return!this.dz};a.Ac.prototype.eP=
function(){this.tl()?this.ub.setAttribute("role","tree"):this.ub.setAttribute("role","listbox")};a.Ac.prototype.tQ=function(){this.eb();this.No(!1);this.eP();this.ab()};a.Ac.prototype.cd=function(b){return b.key};a.Ac.prototype.Jd=function(b){var a,c,e;a=f(this.ub).find("."+this.u.Rf());for(c=0;c<a.length;c++)if(e=a[c],b==this.cd(e))return e;return null};a.Ac.prototype.getDataSource=function(){return this.Fg};a.Ac.prototype.z5=function(b){this.Fg=b};a.Ac.prototype.No=function(){};a.Ac.prototype.XM=
function(b,a,c,e,g){var h;h=document.createElement("li");f(h).uniqueId();b.insertBefore(h,a===b.childElementCount?null:b.children[a]);this.aT(h,a,b,a,c,e,g)};a.Ac.prototype.lfa=function(b){var a,c,e;b=b.target;f(b).empty().removeClass("oj-listview-item-add-remove-transition").off("transitionend",this.vO);a=f.data(b,"ctx");f.removeData(b,"ctx");c=b.parentNode;e=f(c).children().index(b);this.aT(b,e,c,a.index,a.data,a.I4,a.Db)};a.Ac.prototype.tqa=function(b,a,c,e,g){null==this.vO&&(this.vO=this.lfa.bind(this));
f.data(b,"ctx",{index:a,data:c,I4:e,Db:g});this.eb();f(b).addClass("oj-listview-item-add-remove-transition").on("transitionend",this.vO).css("opacity",0)};a.Ac.prototype.aT=function(b,a,c,e,f,h,k){void 0==k&&(k=this.dr.bind(this));e=this.mN(e,f,h,b);h=this.u.mea();null!=h?(f=h.call(this,e),null!=f&&(null===f.parentNode||f.parentNode instanceof DocumentFragment?b.appendChild(f):null==f.parentNode&&f.toString&&(h=document.createElement("span"),h.appendChild(document.createTextNode(f.toString())),b.appendChild(h)))):
(h=document.createElement("span"),h.appendChild(document.createTextNode(null==f?"":f.toString())),b.appendChild(h));b=c.children[a];e.parentElement=b;k(b,e)};a.Ac.prototype.dr=function(b,a){var c;b.key=a.key;b=f(b);b.uniqueId();c=this.u.oE(b);c.attr("role",this.tl()?"treeitem":"option");c!=b&&b.attr("role","presentation");c.addClass(this.u.Wk());this.jO(a)||b.addClass("oj-skipfocus");b.addClass(this.u.Rf())};a.Ac.prototype.mN=function(b,a,c,e){var f,h;f={};f.parentElement=e;f.index=b;f.data=a;f.component=
this.u.Tf();f.datasource=this.getDataSource();for(h in c)c.hasOwnProperty(h)&&(f[h]=c[h]);return f};a.Ac.prototype.jO=function(b){return this.u.Ow("focusable",b,!0)};a.Ac.prototype.uE=function(b){return this.u.Ow("selectable",b,!0)};a.Ac.prototype.eb=function(){this.u&&this.u.eb()};a.Ac.prototype.ab=function(){this.u&&this.u.ab()};a.tb=function(b,d,c){a.tb.r.constructor.call(this,b,d,c)};a.b.ga(a.tb,a.Ac,"oj.TableDataSourceContentHandler");a.tb.prototype.Init=function(){a.tb.r.Init.call(this)};a.tb.prototype.tl=
function(){return!1};a.tb.prototype.Se=function(){a.tb.r.Se.call(this);this.u_();null!=this.Ou&&(this.Ou.destroy(),this.yO=this.Ou=null);this.ez=null};a.tb.prototype.HandleResize=function(b,a){this.Jh()&&void 0!=this.D4&&this.D4!=a&&(this.D4=a,this.checkViewport())};a.tb.prototype.Jh=function(){return"loadMoreOnScroll"==this.u.options.scrollPolicy?!0:!1};a.tb.prototype.wk=function(){return Math.max(0,this.u.options.scrollPolicyOptions.fetchSize)};a.tb.prototype.jJ=function(){return this.u.options.scrollPolicyOptions.maxCount};
a.tb.prototype.z5=function(b){var d;this.u_();if(null!=b){this.Jh()&&(d=this,this.yO=function(b){null!=b?(d.eb(),d.uL(),d.Xr()&&d.eb(),d.TJ(b),b.maxCountLimit?d.ZJ():d.nT(),d.ab(),d.ab()):void 0===b&&(d.uL(),d.ab())},this.Ou=new a.dg(this.u.UN(),b,{fetchSize:this.wk(),maxCount:this.jJ(),success:this.yO,error:this.ab}),this.Ou.$J=function(b,e){1>=e-b&&d.eb();a.dg.prototype.$J.call(this,b,e)});this.C4=this.kpa.bind(this);this.B4=this.jpa.bind(this);this.x4=this.fpa.bind(this);this.z4=this.hpa.bind(this);
this.y4=this.gpa.bind(this);this.A4=this.ipa.bind(this);if(a.la&&b instanceof a.la)b.on("sync",this.C4);b.on("sort",this.B4);b.on("add",this.x4);b.on("remove",this.z4);b.on("change",this.y4);b.on("reset",this.A4)}this.Fg=b};a.tb.prototype.nT=function(){var b,a;null==this.ez&&(b=f(document.createElement("li")),b.uniqueId().attr("role","presentation").addClass(this.u.Oj()),a=f(document.createElement("div")),a.addClass("oj-listview-loading-icon"),b.append(a),f(this.ub).append(b),this.ez=b)};a.tb.prototype.uL=
function(){null!=this.ez&&this.ez.remove();this.ez=null};a.tb.prototype.dr=function(b,d){var c;a.tb.r.dr.call(this,b,d);f(b).addClass(this.u.Oj());this.u.Dk()&&this.uE(d)&&this.u.qe(f(b)).attr("aria-selected",!1);this.Jh()&&(c=Math.min(this.Fg.totalSize(),this.jJ()),-1===c&&(c=this.jJ()),0<c&&f(b).attr("aria-setsize",c).attr("aria-posinset",d.index+1));this.u.$y(b,d)};a.tb.prototype.mna=function(b,a){var c,e,g;this.eb();this.dr(b,a);c=f(b);e=c.outerHeight();c.css("opacity","0");c.css("maxHeight",
"0");g=this.u.Oj();c.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e");c.removeClass(g).addClass("oj-listview-item-add-remove-transition");c.children().first().addClass(g);null==this.tO&&(this.tO=this.jfa.bind(this));f.data(b,"ctx",a);c.on("transitionend",this.tO);this.eb();requestAnimationFrame(function(){c.css("opacity","1");c.css("maxHeight",e+"px")});this.ab()};a.tb.prototype.ZJ=function(){a.q.error("max count reached")};a.tb.prototype.u_=function(){null!=this.Fg&&(this.Fg.off("sync",this.C4),this.Fg.off("sort",
this.B4),this.Fg.off("add",this.x4),this.Fg.off("remove",this.z4),this.Fg.off("change",this.y4),this.Fg.off("reset",this.A4))};a.tb.prototype.No=function(b){var d=!0,c;this.eb();if(this.Xr()&&(this.dz=!0,a.la&&this.Fg instanceof a.la&&(d=!1,this.eb()),d||b)){d&&this.eb();b={fetchType:"init",startIndex:0};this.Jh()&&(b.pageSize=this.wk());c=this;b=this.Fg.fetch(b);b.then(function(b){null!=c.u&&d&&(c.TJ(b),c.Jh()&&null!=b&&b.keys&&0<b.keys.length&&c.nT())},function(b){c.Yl(b);c.ab()});this.ab();return}this.ab()};
a.tb.prototype.Yl=function(b){a.q.error(b);this.Jh()&&this.uL();this.u.fp()};a.tb.prototype.bo=function(b,a){var c,e,f;c=this.ub.childElementCount;for(e=0;e<b.length;e++)f=b[e],this.XM(this.ub,c,f,this.getMetadata(c,a[e],f)),c+=1};a.tb.prototype.fpa=function(b){var a,c,e;if(null!=this.ub){this.eb();a=b.data;c=b.keys;b=b.indexes;if(null!=a&&null!=c&&0<c.length&&0<a.length&&c.length==a.length&&null!=b&&c.length==b.length){for(e=0;e<a.length;e++)this.eb(),this.XM(this.ub,b[e],a[e],this.getMetadata(b[e],
c[e],a[e]),this.mna.bind(this)),this.ab();this.Xr()&&this.eb();this.H2()}this.ab()}};a.tb.prototype.jfa=function(b){var a;b=b.target;a=f.data(b,"ctx");f.removeData(b,"ctx");f(b).removeClass("oj-listview-item-add-remove-transition").addClass(this.u.Oj()).off("transitionend",this.tO).children().children().unwrap();this.u.o4(b,a);this.ab()};a.tb.prototype.hpa=function(b){var a,c;b=b.keys;if(null!=this.ub&&null!=b&&0!=b.length){this.eb();for(a=0;a<b.length;a++)c=this.Jd(b[a]),null!=c&&(this.eb(),this.oka(c),
this.ab());this.u.Qr();this.ab()}};a.tb.prototype.oka=function(b){var a,c=this;this.eb();null==this.JO&&(this.JO=this.oga.bind(this));a=this.u.Oj();b=f(b);b.children().wrapAll("\x3cdiv class\x3d'"+a+"'\x3e\x3c/div\x3e");b.removeClass(a).css("maxHeight",b.outerHeight()+"px").addClass("oj-listview-item-add-remove-transition").on("transitionend",this.JO);setTimeout(function(){c.eb();b.css("opacity","0");b.css("maxHeight","0px");c.ab()},10)};a.tb.prototype.oga=function(b){var a;b=f(b.target);a=b.parent();
b.off("transitionend",this.JO);this.u.mO(b.get(0));b.remove();0==a.get(0).childElementCount&&this.u.fp();this.ab()};a.tb.prototype.gpa=function(b){var a,c,e,f;a=b.keys;if(null!=this.ub&&null!=a&&0!=a.length){this.eb();c=b.data;b=b.indexes;for(e=0;e<a.length;e++)f=this.Jd(a[e]),null!=f&&(this.eb(),this.tqa(f,b[e],c[e],this.getMetadata(b[e],a[e],c[e]),this.lna.bind(this)),this.ab());this.u.Qr();this.ab()}};a.tb.prototype.lna=function(b,a){var c=this;this.eb();f(b).css("opacity",0);this.dr(b,a);null==
this.uO&&(this.uO=this.kfa.bind(this));f(b).on("transitionend",this.uO);setTimeout(function(){f(b).addClass("oj-listview-item-add-remove-transition").css("opacity",1);c.ab()},10)};a.tb.prototype.kfa=function(b){f(b.target).removeClass("oj-listview-item-add-remove-transition").off("transitionend",this.uO);this.u.wqa();this.ab()};a.tb.prototype.ipa=function(){null!=this.ub&&(this.eb(),f(this.ub).empty(),this.u.Qr(),this.No(!0),this.ab())};a.tb.prototype.TJ=function(b){var a;null!=this.ub&&(a=b.data,
b=b.keys,Array.isArray(a)&&Array.isArray(b)&&a.length==b.length&&(this.bo(a,b),this.H2()))};a.tb.prototype.kpa=function(b){null!=this.ub&&(this.eb(),0===b.startIndex&&f(this.ub).empty(),this.u.Qr(),this.TJ(b),this.ab())};a.tb.prototype.jpa=function(){null!=this.ub&&(this.eb(),f(this.ub).empty(),this.u.Qr(),this.u.wj()&&this.u.$p(!0),this.No(!0),this.ab())};a.tb.prototype.H2=function(){this.dz=!1;this.u.fp();this.checkViewport();this.ab()};a.tb.prototype.checkViewport=function(){var b=this,a;this.eb();
null!=this.Ou&&0<this.Fg.totalSize()&&this.Xr()&&(a=this.Ou.checkViewport(),null!=a&&(this.eb(),a.then(function(a){b.yO(a);b.ab()},null)));this.ab()};a.tb.prototype.getMetadata=function(b,a,c){c=c.context;null==c&&(c={});null==c.index&&(c.index=b);null==c.key&&(c.key=a);return c};a.Rg=function(b,d,c){a.Rg.r.constructor.call(this,b,d,c)};a.b.ga(a.Rg,a.Ac,"oj.TreeDataSourceContentHandler");a.Rg.prototype.Init=function(){a.Rg.r.Init.call(this)};a.Rg.prototype.tl=function(){return!0};a.Rg.prototype.No=
function(){this.eb();this.Nf(0,null,this.ub,null);this.ab()};a.Rg.prototype.Nf=function(b,a,c,e){this.eb();this.dz=!0;b={start:b,count:this.Fg.ff(a)};this.Fg.Nf(a,b,{success:function(b){this.bo(b,a,c,e)}.bind(this),error:function(b){this.Yl(b)}.bind(this)});this.ab()};a.Rg.prototype.bo=function(b,a,c,e){var f,h,k,l;this.eb();a=b.ta();f=b.R();for(h=0;h<f;h++)k=b.getData(a+h),l=b.getMetadata(a+h),this.XM(c,a+h,k,l);this.dz=!1;null!=e&&e.call(null,c);this.u.fp();this.ab()};a.Rg.prototype.dr=function(b,
d){var c,e,g,h,k,l;this.eb();a.Rg.r.dr.call(this,b,d);c=this.u.Li();e=this.u.Oj();g=this.u.zg();h=this.u.lr();l=this.u.Mj();k=this.u.Wk();b=f(b);!1==d.leaf?(b.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e"),b.hasClass(k)?b.removeClass(k).children().first().addClass(k).attr("aria-expanded","false"):b.children().first().attr("role","presentation").find("."+k).attr("aria-expanded","false"),e=b.children().first(),e.uniqueId().addClass(g),this.u.Nu()&&(b.addClass("oj-collapsed"),g=document.createElement("a"),
f(g).attr("href","#").attr("aria-labelledby",e.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass(l),e.prepend(g)),l=document.createElement("ul"),f(l).addClass(c).addClass(h).attr("role","group"),b.append(l)):!0==d.leaf&&b.addClass(e);this.u.Dk()&&this.uE(d)&&this.u.qe(b).attr("aria-selected",!1);this.u.$y(b[0],d);this.ab()};a.Rg.prototype.Yl=function(b){this.eb();a.q.error(b);this.u.fp();this.ab()};a.Rg.prototype.Ur=function(b,a){var c,e;this.eb();c=this.cd(b[0]);e=b.children("ul")[0];
this.Nf(0,c,e,a);this.ab()};a.Rg.prototype.Rr=function(b){b.empty()};a.Sc=function(b,a){this.u=b;this.ub=a};a.b.ga(a.Sc,a.b,"oj.StaticContentHandler");a.Sc.prototype.Init=function(){a.Sc.r.Init.call(this)};a.Sc.prototype.Se=function(){this.s5(this.ub,0);this.hra()};a.Sc.prototype.Xr=function(){return!0};a.Sc.prototype.HandleResize=function(){};a.Sc.prototype.tQ=function(){this.N4(this.ub,0);this.eP();this.u.fp()};a.Sc.prototype.Ur=function(b,a){var c;c="."+this.u.Li();c=f(b).children(c)[0];f(c).css("display",
"block");a.call(null,c)};a.Sc.prototype.Rr=function(){};a.Sc.prototype.tl=function(){null==this.DO&&(this.DO=0<f(this.ub).children("li").children("ul").length);return this.DO};a.Sc.prototype.s5=function(b,a){var c,e,g,h,k,l,m,n,p,r;c=this.u.Li();e=this.u.lr();g=this.u.Fu();h=this.u.zg();k=this.u.Oj();l=this.u.Rf();m=b.children;for(n=0;n<m.length;n++)p=m[n],this.gra(p),p=f(p),p.removeClass(l).removeClass(k).removeClass(this.u.KN(a)).removeClass("oj-skipfocus").removeClass("oj-focus").removeClass("oj-hover").removeClass("oj-expanded").removeClass("oj-collapsed").removeClass("oj-selected"),
r=p.children("ul"),0<r.length&&(p.children("."+h).children().unwrap(),p.children(".oj-component-icon").remove(),p=f(r[0]),p.removeClass(c).removeClass(g).removeClass(e).removeAttr("role"),this.s5(p[0],a+1))};a.Sc.prototype.N4=function(b,a){var c,e,g,h,k,l,m,n,p,r,s,q,t,v,x;c=this.u.Oj();e=this.u.Rf();g=this.u.Li();h=this.u.zg();k=this.u.lr();l=this.u.Mj();m=this.u.Wk();n=b.children;p=this.u.Nu();for(r=0;r<n.length;r++)s=f(n[r]),q=this.mN(s),this.Cqa(s),s.uniqueId().addClass(e),0<a&&s.addClass(this.u.KN(a)),
this.jO(q)||s.addClass("oj-skipfocus"),t=s.children("ul"),0<t.length?(this.DO=!0,s.children(":not(ul)").wrapAll("\x3cdiv\x3e\x3c/div\x3e"),v=s.children().first(),v.addClass(h),this.spa(t[0])&&(s.hasClass(m)?(s.removeClass(m),v.addClass(m).attr("aria-expanded","false")):(v.attr("role","presentation"),v.find("."+m).attr("aria-expanded","false")),p&&(s.addClass("oj-collapsed"),v.uniqueId(),x=document.createElement("a"),f(x).attr("href","#").attr("role","button").attr("aria-labelledby",v.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass(l),
v.prepend(x))),t=f(t[0]),t.addClass(g).addClass(k).attr("role","group").css("display","none"),this.N4(t[0],a+1)):s.addClass(c),this.u.Dk()&&this.uE(q)&&this.u.qe(s).attr("aria-selected",!1),this.u.$y(s[0],q)};a.Sc.prototype.eP=function(){this.tl()?this.ub.setAttribute("role","tree"):this.ub.setAttribute("role","listbox")};a.Sc.prototype.hra=function(){this.ub.removeAttribute("role")};a.Sc.prototype.spa=function(b){return 0<f(b).children("li").length};a.Sc.prototype.mN=function(b){var a;a={};a.key=
b.attr("id");a.parentElement=b.children().first()[0];a.index=b.index();a.data=b[0];a.component=this.u.Tf();this.tl()&&(a.leaf=0==b.children("ul").length,b=b.parents("li."+this.u.Rf()),a.depth=b.length,a.parentKey=0==b.length?null:b.first().attr("id"));return a};a.Sc.prototype.Cqa=function(b){var a=this.u.oE(b);a.attr("role",this.tl()?"treeitem":"option");a!=b&&b.attr("role","presentation");a.addClass(this.u.Wk())};a.Sc.prototype.gra=function(b){b=this.u.oE(f(b));b.removeAttr("role");b.removeAttr("aria-selected");
b.removeAttr("aria-expanded");b.removeClass(this.u.Wk())};a.Sc.prototype.cd=function(b){return f(b).attr("id")};a.Sc.prototype.Jd=function(b){return document.getElementById(b)};a.Sc.prototype.jO=function(b){return this.u.Ow("focusable",b,!0)};a.Sc.prototype.uE=function(b){return this.u.Ow("selectable",b,!0)};a.SK=function(b,d){function c(){}a.b.ga(c,b,"");c.prototype=f.extend(c.prototype,d);return c}(Object,{nv:37,Dz:39,iF:40,LF:38,r7:9,E6:13,F6:27,G6:113,p7:32,cj:0,bj:1,wQ:2,qra:0,sp:1,Em:function(b){var d=
this;this.ep=[];this.eb();this.V=b.V;this.element=b.element;this.options=b;this.element.uniqueId().addClass(this.qF()+" oj-component-initnode").attr("tabIndex",0);this.V._on(this.element,{click:function(b){d.vF(b)},touchstart:function(b){d.$P(b)},touchend:function(b){d.wF(b)},touchcancel:function(b){d.wF(b)},mousedown:function(b){0!==b.button||d.Mx()||d.$P(b)},mouseup:function(b){d.FX(b);d.IO=!1},mouseout:function(b){d.DX(b)},mouseover:function(b){d.iga(b)},keydown:function(b){d.ZP(b)},focus:function(b){d.uF(b)},
blur:function(b){d.tF(b)},ojpanmove:function(b){d.FX(b)}});a.Na.Fy().browser===a.Na.sl.OP&&this.V._on(this.ld(),{focus:function(){d.element.focus()}});this.sp===this.sp?this.V._on(this.element,{focusin:function(b){d.uF(b)},focusout:function(b){d.R6(b)}}):this.V._on(this.element,{focus:function(b){d.uF(b)},blur:function(b){d.tF(b)}});this.V.document.bind("touchend.ojlistview touchcancel.ojlistview",this.wF.bind(this));this.p_()},tu:function(){var b;this.yaa();this.bY();b=this.ld();this.Bj(b[0]);this.ab()},
refresh:function(){this.L_();this.eb();this.vv();this.bY();this.p_();this.ab()},whenReady:function(){return this.k5},destroy:function(){this.element.removeClass(this.qF()+" oj-component-initnode");this.Ok(this.ld());this.L_();a.v.unwrap(this.element,this.ld());this.V.document.off(".ojlistview")},L_:function(){var b=this;this.MF();this.Waa(this.element);null!=this.ue&&(this.ue.Se(),delete this.ue,this.ue=null);this.mb=null;this.ep=[];this.k5=new Promise(function(a){b.l5=a});this.Qr()},U4:function(){this.ld().removeClass("oj-focus-ancestor");
null!=this.mb&&f(this.mb.elem).removeClass("oj-focus");null!=this.EO&&this.km(this.EO,"oj-hover")},Rsa:function(){},getNodeBySubId:function(b){var a;if(null==b)return this.element?this.element[0]:null;a=b.subId;if("oj-listview-disclosure"===a||"oj-listview-icon"===a)if(b=b.key,b=this.Jd(b),null!=b&&b.firstElementChild&&(b=b.firstElementChild.firstElementChild,null!=b&&(f(b).hasClass(this.xm())||f(b).hasClass(this.Mj()))))return b;return null},getSubIdByNode:function(b){if(null!=b&&f(b).hasClass(this.xm())||
f(b).hasClass(this.Mj()))if(b=this.Zh(b),null!=b&&0<b.length&&(b=this.cd(b[0]),null!=b))return{subId:"oj-listview-disclosure",key:b};return null},getContextByNode:function(b){var a,c,e;b=this.Zh(b);return null!=b&&0<b.length&&(a=this.cd(b[0]),null!=a)?(c=b.parent(),e=c.children("li").index(b),a={subId:"oj-listview-item",key:a,index:e},c.get(0)!=this.element.get(0)&&(a.parent=c.parent().get(0)),b.children().first().hasClass(this.zg())?a.group=!0:a.group=!1,a):null},Ok:function(b){b&&this.Le&&a.v.Si(b,
this.Le)},Bj:function(b){b&&(null==this.Le&&(this.Le=this.af.bind(this)),a.v.Ph(b,this.Le))},af:function(b,a){0<b&&0<a&&null!=this.ue&&this.ue.HandleResize(b,a)},zQ:function(b){return null!=b.data||null!=b.drillMode||null!=b.groupHeaderPosition||null!=b.item||null!=b.scrollPolicy||null!=b.scrollPolicyOptions},Ir:function(b){var a,c,e,g;if(this.zQ(b))return null!=b.data&&(null==b.currentItem&&this.yh("currentItem",null),null==b.selection&&this.$p(!0)),!0;null!=b.currentItem?(c=this.Jd(b.currentItem),
null!=c&&(c=f(c),this.gi(c)||this.En(c,null))):null===b.currentItem&&(this.Hz(),this.mb=null);null!=b.expanded&&this.ue.tl()&&(c=b.expanded,Array.isArray(c)&&(this.eb(),this.iba(),a=this,f.each(c,function(b,c){a.uN(c,!0,!0,!0)}),this.ab()));if(null!=b.selection&&this.Dk())for(b.selection=this.pda(b.selection),e=b.selection,this.$p(!1),g=0;g<e.length;g++)c=this.Jd(e[g]),null!=c&&this.bw(c,e[g]);null!=b.selectionMode&&(this.$p(!0),this.vv());return!1},mn:function(b,a,c){return this.V._trigger(b,a,c)},
yh:function(b,a,c){this.V.option(b,a,c)},Xd:function(b){return this.V.option(b)},eb:function(){var b=this;this.ep&&(0==this.ep.length&&(this.k5=new Promise(function(a){b.l5=a})),this.ep.push(1))},ab:function(){this.ep&&0<this.ep.length&&(this.ep.pop(),0==this.ep.length&&this.l5(null))},bY:function(){var b;this.eb();b=this.Xd("data");if(null!=b){if("undefined"===typeof a.T||"undefined"===typeof a.Ap)throw"oj.TableDataSource or oj.TreeDataSource not found. Ensure the required modules are imported";
if(b instanceof a.T)this.ue=new a.tb(this,this.element[0],b);else if(b instanceof a.Ap)this.ue=new a.Rg(this,this.element[0],b);else throw"Invalid data";}else this.ue=new a.Sc(this,this.element[0]);this.ama();this.ue.tQ();this.ab()},t7:function(b){this.element.attr("aria-activedescendant",b.attr("id"))},vv:function(){this.element.attr("aria-activedescendant","");this.wj()?this.element.attr("aria-multiselectable",!0):this.Dk()&&this.element.attr("aria-multiselectable",!1)},MF:function(){this.element.removeAttr("aria-activedescendant").removeAttr("aria-multiselectable")},
yaa:function(){var b,a;b=this.ld();this.vv();a=this.Baa();b.append(a);this.F4=a},Baa:function(){var b=f(document.createElement("div"));b.addClass("oj-listview-status").attr({id:this.aI("status"),role:"status"});return b},ama:function(){var b=this.V.A("msgFetchingData");this.F4.text(b).show()},Gga:function(){this.F4.hide()},UN:function(){return this.ld()},ld:function(){null==this.cz&&(this.cz=this.Kba());return this.cz},Kba:function(){var b=f(document.createElement("div"));b.addClass(this.VP()).addClass("oj-component");
this.element.parent()[0].replaceChild(b[0],this.element[0]);b.prepend(this.element);return b},cea:function(){return this.V.A("msgNoData")},uaa:function(){var b,a;b=this.cea();a=document.createElement("li");a.id=this.aI("empty");a.className="oj-listview-empty-text";a.textContent=b;return a},Ve:function(b){b=this.qe(b).attr("aria-expanded");return"true"==b?this.cj:"false"==b?this.bj:this.wQ},zp:function(b,a){var c=this.Nu();a==this.cj?(this.qe(b).attr("aria-expanded","true"),c&&b.removeClass("oj-collapsed").addClass("oj-expanded")):
a==this.bj&&(this.qe(b).attr("aria-expanded","false"),c&&b.removeClass("oj-expanded").addClass("oj-collapsed"))},Ow:function(b,a,c){b=this.options.item[b];return"function"==typeof b&&c?b.call(this,a):b},mea:function(){var b=this.Ow("renderer",null,!1);return"function"!=typeof b?null:b},o4:function(){},mO:function(b){var a;if(null!=b&&b.id&&null!=this.gl)for(a in this.gl)if(this.gl.hasOwnProperty(a)&&this.gl[a]===b.id){delete this.gl[a];break}},$y:function(b,a){var c,e,g,h;this.pI(b);if(this.Dk())if(c=
this.Xd("selection"),this.wh(b))for(g=0;g<c.length;g++){if(c[g]==a.key&&(this.bw(b,c[g]),!this.wj())){1<c.length&&(e=f(this.Jd(a.key)),this.yh("selection",[a.key],{_context:{originalEvent:null,Wa:!0,Kj:{items:e}},changed:!0}));break}}else if(g=c.indexOf(a.key),-1<g){c=c.slice(0);c.splice(g,1);e=Array(c.length);for(g=0;g<c.length;g++)e[g]=this.Jd(c[g]);this.yh("selection",c,{_context:{originalEvent:null,Wa:!0,Kj:{items:f(e)}},changed:!0})}this.ue.tl()&&this.Ve(f(b))==this.bj&&(g=this.Xd("expanded"),
this.Jt()?this.rp(f(b),null,!1,null,!1,!1,!1):Array.isArray(g)&&(h=this,f.each(g,function(c,e){e==a.key&&h.rp(f(b),null,!1,null,!1,!1,!1)})));null!=this.mb&&a.key==this.mb.key&&null!=this.mb.elem&&b!=this.mb.elem.get(0)&&(this.mb.elem=f(b))},fp:function(){var b;this.Gga();f(document.getElementById(this.aI("empty"))).remove();0==this.element[0].childElementCount?(b=this.uaa(),this.element.append(b)):(this.Pu=null,b=this.Xd("currentItem"),null==this.mb&&null!=b&&(b=this.Jd(b),null==b||this.gi(f(b))||
this.En(f(b),null)),this.ld().hasClass("oj-focus-ancestor")&&null==this.mb&&this.fY());this.mn("ready",null,{})},wqa:function(){var b=this.Xd("currentItem");null!=b&&(b=this.Jd(b),null==b||this.gi(f(b))||this.En(f(b),null))},Qr:function(){this.CO=this.Pu=null},T4:function(b,a,c){if(this.Az(f(a.target)))return!1;b=f(a.target).closest("."+this.Rf());0<b.length&&!this.gi(f(b[0]))&&this.En(f(b[0]),null);b={launcher:this.element,initialFocus:"menu"};"keyboard"===c&&(b.position={my:"start top",at:"start bottom",
of:this.mb.elem});this.V.wf(a,c,b)},cQ:function(b){return null!=b.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/)},Az:function(b){for(;null!=b&&b[0]!=this.element[0]&&"LI"!=b.prop("nodeName");){if(3!=b[0].nodeType){var a=b.attr("tabIndex"),c=b.attr("data-oj-tabindex");if(null!=a&&0<=a&&!b.hasClass(this.Wk())||this.cQ(b)&&(-1!=a||-1!=c))return!0}b=b.parent()}return!1},pI:function(b){var a;f(b).find("a, input, select, textarea, button, object, .oj-component-initnode").each(function(){f(this).removeAttr("data-first").removeAttr("data-last");
a=parseInt(f(this).attr("tabIndex"),10);(isNaN(a)||0<=a)&&f(this).attr("tabIndex",-1).attr("data-tabmod",isNaN(a)?-1:a)})},Yca:function(b){var a;b=f(b).find("[data-tabmod]").each(function(){a=parseInt(f(this).attr("data-tabmod"),10);f(this).removeAttr("data-tabmod");-1==a?f(this).removeAttr("tabIndex"):f(this).attr("tabIndex",a)});b.first().attr("data-first","true");b.last().attr("data-last","true")},Waa:function(b){f(b).find("[data-tabmod]").removeAttr("tabIndex").removeAttr("data-tabmod").removeAttr("data-first").removeAttr("data-last")},
gi:function(b){return b.hasClass("oj-skipfocus")},uF:function(b){this.ld().addClass("oj-focus-ancestor");null==this.mb?this.Nt()||this.IO||this.fY(b):this.IO||this.kv()},fY:function(b){var a,c,e;a=this.Pw();for(c=0;c<a.length;c++)if(e=f(a[c]),!this.gi(e)){this.En(e,b);break}},R6:function(b){this.tF(b)},tF:function(b){null!=b.relatedTarget&&f.contains(this.element.get(0),b.relatedTarget)||(this.ld().removeClass("oj-focus-ancestor"),this.Hz())},DX:function(b){b=this.Zh(b.target);null!=b&&(this.EO=null,
this.km(b,"oj-hover"))},iga:function(b){this.Mx()||(b=this.Zh(b.target),null==b||this.gi(b)||(this.EO=b,this.oC(b,"oj-hover")))},Mx:function(){return 500>Date.now()-this.FK},ZP:function(b){var a,c;if(this.Nu()&&(a=b.keyCode,a===this.nv||a===this.Dz))if(c=this.mb.elem,a===this.nv){if(this.Ve(c)==this.cj){this.an(c,b,!0,this.mb.key,!0,!0);return}}else if(this.Ve(c)==this.bj){this.rp(c,b,!0,this.mb.key,!0,!0,!0);return}!0===this.aQ(b)&&b.preventDefault()},FX:function(){this.BE&&this.km(this.BE,"oj-focus")},
$P:function(b){this.IO=!0;b=this.qj(f(b.target));null==b||0==b.length||this.gi(b)||(this.ld().hasClass("oj-focus-ancestor")||this.ld().addClass("oj-focus-ancestor"),this.BE=b,this.oC(b,"oj-focus"))},wF:function(b){null!=this.BE&&this.km(this.BE,"oj-focus");this.FK=Date.now();this.DX(b)},vF:function(b){var a,c,e,g;0===b.button&&(a=this.Mj(),c=this.xm(),e=this.zg(),g=f(b.target),g.hasClass(c)?(this.qk(b),b.preventDefault()):g.hasClass(a)?(this.ee(b),b.preventDefault()):(this.qY()&&null!=this.mb&&(this.JL(!1),
this.pI(this.mb.elem)),a=this.qj(g),null==a||0==a.length||this.gi(a)||(this.ld().hasClass("oj-focus-ancestor")||this.ld().addClass("oj-focus-ancestor"),this.Dk()&&this.wh(a[0])?this.Nt()?this.xga(a,b):this.Q6(a,b):this.sfa(a,b),this.Nu()&&g.closest("."+e)&&(this.Ve(a)==this.bj?this.ee(b):this.Ve(a)==this.cj&&this.qk(b)))))},Nt:function(){return a.v.Ud()},fI:function(b){return a.v.Fm(b)},aI:function(b){return[this.element.attr("id"),b].join(":")},Zh:function(b){return f(b).closest("."+this.Rf())},
uha:function(b){return b.hasClass("oj-clickthrough-disabled")||b.hasClass("oj-component-initnode")||b.hasClass("oj-component")},qj:function(b){for(;0<b.length&&!this.uha(b);){if(b.hasClass(this.Rf()))return b;b=b.parent()}return null},sea:function(){null==this.w4&&(this.w4=parseInt(this.ld().css("border-top-width"),10)+parseInt(this.ld().css("border-bottom-width"),10));return this.w4},a0:function(b){var a,c,e,g,h,k,l=0;a=b.offsetTop;c=b.offsetHeight;b=this.ld()[0];e=b.scrollTop;g=b.offsetHeight;null!=
this.Ne&&(h=parseInt(this.Ne.style.top,10),k=f(this.Ne).outerHeight(),a<=h&&h<a+c?l=(c+a-h)/2:a>=h&&a<h+k&&(l=(h+k-a)/2));a>=e&&a+c<=e+g?0<l&&(b.scrollTop=e-l):(a=Math.max(0,Math.min(a-l,Math.abs(a+c-g))),a>e&&(a+=this.sea()),b.scrollTop=a)},cd:function(b){return this.ue.cd(b)},Jd:function(b){var a;return null!=this.gl&&(a=this.gl[b],null!=a)?document.getElementById(a):this.ue.Jd(b)},Wr:function(b){return b==this.LF||b==this.iF},Pw:function(){var b,a,c;null==this.Pu&&(b=this.lr(),a="."+this.Rf()+
":visible",this.Pu=this.element.find(a).filter(function(){return(c=f(this).parent().hasClass(b))?!f(this).parent().parent().hasClass("oj-collapsed"):!0}));return this.Pu},wp:function(b,a,c){var e,g,h;if(!this.ue.Xr())return!0;e=!a||this.AE?this.mb.elem:this.Xo;g=!1;h=this.Pw();e=h.index(e);switch(b){case this.LF:e--;if(0<=e){for(b=f(h[e]);this.gi(b);){e--;if(0>e)return!1;b=f(h[e])}a?(this.CI(b,c),this.AE=!1):(this.En(b,c),this.AE=!0)}g=!0;break;case this.iF:e++;if(e<h.length){for(b=f(h[e]);this.gi(b);){e++;
if(e==h.length)return!1;b=f(h[e])}a?(this.CI(b,c),this.AE=!1):(this.En(b,c),this.AE=!0)}g=!0}return g},qY:function(){return"actionable"==this.Tpa},JL:function(b){this.Tpa=b?"actionable":"navigation";b||this.element[0].focus()},rra:function(){return this.sp},qe:function(b){return b.hasClass(this.Wk())?b:f(b.find("."+this.Wk()).first())},Ila:function(b){this.qe(b).attr("tabIndex",0)},Ika:function(b){var a;a=!0;"presentation"===b.attr("role")&&(a=!1);b=this.qe(b);a?b.removeAttr("tabIndex"):b.attr("tabIndex",
-1)},QV:function(b,a){this.sp===this.sp?(null!=b&&this.Ika(b),this.Ila(a),this.element.attr("tabIndex")&&this.element.removeAttr("tabIndex")):this.t7(a)},oE:function(b){var a;a=b.children("a, input, select, textarea, button");return 1===a.length&&0===a.first().find("a, input, select, textarea, button").length?a.first():b},e0:function(b,a){var c,e,f;null!=b?(c=b[0],c=this.cd(c),null==this.mb||c!=this.mb.key?(e={key:c,item:b},null!=this.mb&&(e.previousKey=this.mb.key,e.previousItem=this.mb.elem),f=
!this.mn("beforeCurrentItem",a,e),f||(this.mb=f={key:c,elem:b},this.QV(e.previousItem,b),this.yh("currentItem",c,{_context:{originalEvent:a,Wa:!0,Kj:{item:b}},changed:!0}))):c==this.mb.key&&(this.mb=f={key:c,elem:b},this.QV(null,b))):this.mb=null},kv:function(b){var a,c;null!=this.mb&&this.ld().hasClass("oj-focus-ancestor")&&(b=b||!1,a=this.mb.elem,this.oC(a,"oj-focus"),this.sp===this.sp&&(a=this.qe(a),c=document.activeElement,!b&&a.get(0).contains(c)||a.get(0).focus()))},Hz:function(){null!=this.mb&&
this.km(this.mb.elem,"oj-focus")},sfa:function(b,a){this.En(b,a)},En:function(b,a){this.a0(b[0]);this.Hz();this.e0(b,a);this.kv()},Dk:function(){return"none"!=this.Xd("selectionMode")},wj:function(){return"multiple"==this.Xd("selectionMode")},wh:function(b){b=this.qe(f(b)).get(0);return b.hasAttribute("aria-selected")},pda:function(b){var a,c,e;a=[];for(c=0;c<b.length&&(e=this.Jd(b[c]),null==e||!this.wh(e)||(a.push(b[c]),this.wj()));c++);return a},Ima:function(){var b,a;null!=this.gl&&(b=this,f.each(this.Xd("selection"),
function(c,e){a=b.Jd(e);null!=a&&b.km(a,"oj-selected")}))},oC:function(b,a){this.xp(b,a,!0)},km:function(b,a){this.xp(b,a,!1)},xp:function(b,a,c){var e;b=f(b);"oj-selected"==a&&this.qe(b).attr("aria-selected",c?"true":"false");e=b.children("."+this.zg());0<e.length&&(b=f(e[0]));c?b.addClass(a):b.removeClass(a)},Q6:function(b,a){var c,e;this.a0(b[0]);c=this.fI(a);e=a.shiftKey;this.wj()?c||e?!c&&e?this.CI(b,a):this.gH(b,a):this.uv(b,a):this.uv(b,a)},xga:function(b,a){this.wj()?this.gH(b,a):this.uv(b,
a)},$p:function(b){this.Ima();b&&this.yh("selection",[],{_context:{originalEvent:null,Wa:!0,Kj:{items:f()}},changed:!0});this.Xo=null},uv:function(b,a){this.$p(!1);this.gH(b,a,[])},CI:function(b,a){var c;null!=this.mb&&(c=this.Xo,c!=b&&(this.km(b,"oj-focus"),this.yV(this.mb.elem,b,a)))},yV:function(b,a,c){this.$p(!1);this.Xo=a;this.Kga(b,a,c);this.kv()},Kga:function(b,a,c){var e,g,h,k,l;e=[];g=[];h=this.Pw();b=h.index(b);k=h.index(a);b>k?a=k:(a=b,b=k);for(;a<=b;a++)k=h[a],this.wh(k)&&(l=this.ue.cd(k),
this.bw(k,l),e.push(l),g.push(k));this.yh("selection",e,{_context:{originalEvent:c,Wa:!0,Kj:{items:f(g)}},changed:!0})},bw:function(b,a){null==this.gl&&(this.gl={});this.gl[a]=f(b).attr("id");this.oC(b,"oj-selected")},gH:function(b,a,c){var e,g;e=this.cd(b[0]);void 0==c&&(c=this.Xd("selection").slice(0));this.Hz();g=c.indexOf(e);-1<g?(this.km(b,"oj-selected"),c.splice(g,1)):(this.Xo=b,this.bw(b,e),c.push(e));e=Array(c.length);for(g=0;g<c.length;g++)e[g]=this.Jd(c[g]);this.e0(b,a);this.kv();this.yh("selection",
c,{_context:{originalEvent:a,Wa:!0,Kj:{items:f(e)}},changed:!0})},Gz:function(b,a,c){var e,g,h,k;e=this.Xd("selection").slice(0);g=this.mb.elem;h=this.mb.key;k=e.indexOf(h);if(-1<k){if(c)return;this.km(g,"oj-selected");e.splice(k,1);0==e.length&&(this.Xo=null)}else this.wh(g[0])&&(a||(this.$p(!1),e.length=0),this.Xo=g,this.bw(g,h),e.push(h));a=Array(e.length);for(c=0;c<e.length;c++)a[c]=this.Jd(e[c]);this.yh("selection",e,{_context:{originalEvent:b,Wa:!0,Kj:{items:f(a)}},changed:!0})},aQ:function(b){var a,
c,e,f=!1;if(null==this.mb)return!1;a=b.keyCode;c=this.mb.elem;this.qY()?a==this.F6?(this.JL(!1),this.pI(c),this.kv(!0),f=!0):a===this.r7&&(a=c.find("[data-first]"),c=c.find("[data-last]"),b.shiftKey?0<a.length&&0<c.length&&a!=c&&b.target==a[0]&&(c[0].focus(),f=!0):0<a.length&&0<c.length&&a!=c&&b.target==c[0]&&(a[0].focus(),f=!0)):a==this.G6?(this.Yca(c),a=c.find("[data-first]"),0<a.length&&(a[0].focus(),this.JL(!0))):a==this.p7&&this.Dk()?(c=this.fI(b),(e=b.shiftKey)&&!c&&null!=this.Xo&&this.wj()?
this.yV(this.Xo,this.mb.elem,b):this.Gz(b,c&&!e&&this.wj(),!1),f=!0):a==this.E6&&this.Dk()?this.Gz(b,!1,!0):this.Wr(a)&&(c=this.fI(b),e=b.shiftKey,c||(f=this.wp(a,e&&this.Dk()&&this.wj(),b)));return f},Nu:function(){return"none"!=this.Xd("drillMode")},Jt:function(){var b=this.Xd("expanded");if("auto"===b){if(!this.Nu())return!0}else if("all"===b)return!0;return!1},uN:function(b,a,c,e){var g=this.Jd(b);null!=g&&this.rp(f(g),null,!1,b,a,e,c)},ee:function(b){var a=this.Zh(b.target);null!=a&&0<a.length&&
this.rp(a,b,!0,null,!0,!0,!0)},rp:function(b,a,c,e,f,h,k){var l;if(this.Ve(b)==this.bj){null==e&&(e=this.cd(b[0]));l={item:b,key:e};if(k&&(e=!this.mn("beforeExpand",a,l))&&f)return;this.eb();this.ue.Ur(b,function(b){this.hda(b,c,a,l,h)}.bind(this));this.Pu=null;null!=a&&a.stopPropagation();this.ab()}},hda:function(b,a,c,e,g){var h;this.eb();this.dF(f(b),a);b=b.parentNode;b=f(b);this.zp(b,this.cj);a=this.Mj();h=this.xm();b.children("."+this.zg()).find("."+a).removeClass(a).addClass(h);g&&this.mn("expand",
c,e);this.ab()},gT:function(b,a){var c;b.parentsUntil("ul.oj-component-initnode","ul."+this.Li()).each(function(){c=parseInt(f(this).css("maxHeight"),10);0<c&&f(this).css("maxHeight",c+a+"px")})},dF:function(b,a){var c=0;a?(this.eb(),b.children().each(function(){c+=f(this).outerHeight(!0)}),this.Nt()&&this.gT(b,c),null==this.zO&&(this.zO=this.Nfa.bind(this)),b.css("maxHeight","0px"),b.on("transitionend",this.zO),this.eb(),requestAnimationFrame(function(){b.css("maxHeight",c+"px")}),this.ab()):(this.Nt()?
(b.children().each(function(){c+=f(this).outerHeight(!0)}),b.css("maxHeight",c+"px"),this.gT(b,c)):b.css("maxHeight",""),this.eF(b))},Nfa:function(b){b=f(b.target);b.off("transitionend",this.zO);this.Nt()||b.css("maxHeight","");this.eF(b);this.ab()},eF:function(b){b.removeClass(this.lr()).addClass(this.Fu())},i2:function(b,a,c){var e=this.Jd(b);null!=e&&this.an(f(e),null,!1,b,a,c)},qk:function(b){var a=this.Zh(b.target);null!=a&&0<a.length&&this.an(a,b,!0,null,!0,!0)},an:function(b,a,c,e,f,h){var k;
this.Ve(b)==this.cj&&(null==e&&(e=this.cd(b[0])),e={item:b,key:e},k=!this.mn("beforeCollapse",a,e),k&&f||(this.eb(),this.bF(b,c),this.zp(b,this.bj),c=this.Mj(),f=this.xm(),b.find("."+f).first().removeClass(f).addClass(c),this.Pu=null,null!=a&&a.stopPropagation(),h&&this.mn("collapse",a,e),this.ab()))},bF:function(b,a){var c=0,e,g=this;e=b.children("ul").first();a?(this.eb(),null==this.wO&&(this.wO=this.ufa.bind(this)),e.children().each(function(){c+=f(this).outerHeight()}),e.css("transition-property",
"none"),e.css("maxHeight",c+"px"),e.css("transition-property",""),e.on("transitionend",this.wO),setTimeout(function(){g.eb();e.css("maxHeight","0px");g.ab()},100)):(e.css("maxHeight","0px"),this.cF(e))},ufa:function(b){b=f(b.target);b.off("transitionend",this.wO);this.cF(b);this.ab()},cF:function(b){b.removeClass(this.Fu()).addClass(this.lr());null!=this.ue&&this.ue.Rr(b)},iba:function(){var b;this.eb();b=this;this.Pw().each(function(){b.an(f(this),null,!1,null,!1,!1)});this.ab()},getExpanded:function(){var b,
a,c;b=[];a=this;this.Pw().each(function(){c=f(this);a.Ve(c)==a.cj&&b.push(a.cd(c[0]))});return b},Tf:function(){return a.Components.Tf(this.element)},VP:function(){return this.Nt()?"oj-listview oj-listview-container-touch":"oj-listview oj-listview-container"},qF:function(){return"oj-listview-element"},Oj:function(){return"oj-listview-item"},Wk:function(){return"oj-listview-focused-element"},Rf:function(){return"oj-listview-item-element"},zg:function(){return"oj-listview-group-item"},Li:function(){return"oj-listview-group"},
Fu:function(){return"oj-listview-collapsible-transition"},lr:function(){return this.Fu()},Mj:function(){return"oj-listview-collapse-icon"},xm:function(){return"oj-listview-expand-icon"},KN:function(){return""},p_:function(){var b=this;this.V._off(this.ld(),"scroll");this.FY()&&this.V._on(this.ld(),{scroll:function(){b.IX()}})},FY:function(){return"static"!=this.Xd("groupHeaderPosition")},Mw:function(){var b;null==this.CO&&(b="."+this.zg()+":visible",this.CO=this.element.find(b).filter(function(){return!f(this).parent().hasClass("oj-collapsed")&&
0<f(this).next().children().length?!0:!1}));return this.CO},HM:function(b){b.style.position="static";b.style.top="auto";b.style.width="auto"},JW:function(b){var a;a=this.Mw();b=a.index(b);return-1<b&&b<a.length-1?a[b+1]:null},aja:function(b,a){var c,e,f;c=b.offsetWidth;e=b.offsetHeight;f=this.JW(b);null!=f&&f.offsetTop<=a+e+5&&(a-=e);b.style.position="absolute";b.style.top=a+"px";b.style.width=c+"px"},IX:function(){var b,a,c,e,f,h,k,l;b=this.ld().get(0).scrollTop;if(null!=this.Ne&&0==b)this.HM(this.Ne),
this.Ne=null;else{c=this.Mw();e=0;null!=this.Ne&&(e=this.Ne.offsetHeight);for(f=0;f<c.length;f++)if(h=c[f],this.Ne!=h&&(k=c[f].offsetTop,l=k+h.parentNode.offsetHeight,k<b&&l>b+e)){a=h;break}null!=a&&a!=this.Ne?(null!=this.Ne&&this.HM(this.Ne),this.aja(a,b),this.Ne=a):null!=this.Ne&&(a=this.JW(this.Ne),this.Ne.style.top=null!=a&&a.offsetTop<=b+e?a.offsetTop-e+"px":b+"px")}},$_:function(b){var a,c;a=this.ld().get(0);c=a.scrollTop;null!=this.Ne&&(this.HM(this.Ne),this.Ne=null);a.scrollTop=b.offsetTop;
this.FY()&&c==a.scrollTop&&this.IX();this.mla(b)},mla:function(b){var a=this,c;f(b).next().children().each(function(){c=f(this);if(!a.gi(c))return a.yh("currentItem",this.key),!1})}});o_("_ojListView",a.SK,a);a.ya("oj.ojListView",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{currentItem:null,data:null,drillMode:"collapsible",expanded:"auto",groupHeaderPosition:"sticky",item:{focusable:!0,renderer:null,selectable:!0},scrollPolicy:"auto",scrollPolicyOptions:{fetchSize:25,maxCount:500},selection:[],
selectionMode:"none",beforeCurrentItem:null,beforeExpand:null,beforeCollapse:null,collapse:null,expand:null,optionChange:null,ready:null},_ComponentCreate:function(){this._super();this.Ba()},Ba:function(){var b={};b.element=this.element;b.V=this;b=f.extend(this.options,b);this.Qc=new a.SK;this.Qc.Em(b)},rf:function(){this._super();this.Qc.tu()},_destroy:function(){this.Qc.destroy();this._super()},uf:function(b,a,c){this.Qc.T4(b,a,c)},_setOptions:function(b,a){var c=this.Qc.Ir(b,a);this._super(b,a);
c&&(this.Qc.refresh(),this.LV())},_setOption:function(b,a){var c=!0;"selectionMode"==b?c="none"==a||"single"==a||"multiple"==a:"drillMode"==b?c="collapsible"==a||"none"==a:"scrollPolicy"==b?c="auto"==a||"loadMoreOnScroll"==a:"groupHeaderPosition"==b&&(c="static"==a||"sticky"==a);if(c)this._super(b,a);else throw"Invalid value: "+a+" for key: "+b;},oi:function(){this.Qc.U4()},Al:function(){},widget:function(){return this.Qc.UN()},refresh:function(){this._super();this.Qc.refresh();this.LV()},whenReady:function(){return this.Qc.whenReady()},
getNodeBySubId:function(b){return this.Qc.getNodeBySubId(b)},getSubIdByNode:function(b){return this.Qc.getSubIdByNode(b)},getContextByNode:function(b){return this.Qc.getContextByNode(b)},expand:function(b,a){this.Qc.uN(b,a,!0,!0)},collapse:function(b,a){this.Qc.i2(b,a,!0)},getExpanded:function(){return this.Qc.getExpanded()},getIndexerModel:function(){null==this.Py&&a.gg&&(this.Py=new a.gg(this.Qc));return this.Py},LV:function(){null!=this.Py&&this.Py.K2&&this.Py.K2()}})});