/*
 * Copyright (c) Ascensio System SIA 2016. All rights reserved
 *
 * http://www.onlyoffice.com
 *
 * Version: 4.6.0 (build:762)
 */
if(void 0===Common)var Common={};if(Common.Gateway=new function(){var a=this,b=$(a),c={init:function(a){b.trigger("init",a)},openDocument:function(a){b.trigger("opendocument",a)},showMessage:function(a){b.trigger("showmessage",a)},applyEditRights:function(a){b.trigger("applyeditrights",a)},processSaveResult:function(a){b.trigger("processsaveresult",a)},processRightsChange:function(a){b.trigger("processrightschange",a)},refreshHistory:function(a){b.trigger("refreshhistory",a)},setHistoryData:function(a){b.trigger("sethistorydata",a)},setEmailAddresses:function(a){b.trigger("setemailaddresses",a)},processMailMerge:function(a){b.trigger("processmailmerge",a)},downloadAs:function(){b.trigger("downloadas")},processMouse:function(a){b.trigger("processmouse",a)},internalCommand:function(a){b.trigger("internalcommand",a)},resetFocus:function(a){b.trigger("resetfocus",a)}},d=function(a){window.parent&&window.JSON&&window.parent.postMessage(window.JSON.stringify(a),"*")},e=function(a){var b=a.data;if("[object String]"===Object.prototype.toString.apply(b)&&window.JSON){var d,e;try{d=window.JSON.parse(b)}catch(f){d=""}d&&(e=c[d.command],e&&e.call(this,d.data))}},f=function(a){e(a)};return window.attachEvent?window.attachEvent("onmessage",f):window.addEventListener("message",f,!1),{ready:function(){d({event:"onReady"})},save:function(a){d({event:"onSave",data:a})},requestEditRights:function(){d({event:"onRequestEditRights"})},requestHistory:function(){d({event:"onRequestHistory"})},requestHistoryData:function(a){d({event:"onRequestHistoryData",data:a})},requestEmailAddresses:function(){d({event:"onRequestEmailAddresses"})},requestStartMailMerge:function(){d({event:"onRequestStartMailMerge"})},requestHistoryClose:function(){d({event:"onRequestHistoryClose"})},reportError:function(a,b){d({event:"onError",data:{errorCode:a,errorDescription:b}})},sendInfo:function(a){d({event:"onInfo",data:a})},setDocumentModified:function(a){d({event:"onDocumentStateChange",data:a})},internalMessage:function(a,b){d({event:"onInternalMessage",data:{type:a,data:b}})},updateVersion:function(){d({event:"onOutdatedVersion"})},downloadAs:function(a){d({event:"onDownloadAs",data:a})},collaborativeChanges:function(){d({event:"onCollaborativeChanges"})},on:function(c,d){var e=function(b,c){d.call(a,c)};b.on(c,e)}}},void 0===Common)var Common={};if(Common.component=Common.component||{},Common.Analytics=Common.component.Analytics=new function(){var a;return{initialize:function(b,c){if("undefined"==typeof b)throw"Analytics: invalid id.";if("undefined"==typeof c||"[object String]"!==Object.prototype.toString.apply(c))throw"Analytics: invalid category type.";a=c,$("head").append('<script type="text/javascript">var _gaq = _gaq || [];_gaq.push(["_setAccount", "'+b+'"]);_gaq.push(["_trackPageview"]);(function() {var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);})();</script>')},trackEvent:function(b,c,d){if("undefined"!=typeof b&&"[object String]"!==Object.prototype.toString.apply(b))throw"Analytics: invalid action type.";if("undefined"!=typeof c&&"[object String]"!==Object.prototype.toString.apply(c))throw"Analytics: invalid label type.";if("undefined"!=typeof d&&("[object Number]"!==Object.prototype.toString.apply(d)||!isFinite(d)))throw"Analytics: invalid value type.";if("undefined"!=typeof _gaq){if("undefined"===a)throw"Analytics is not initialized.";_gaq.push(["_trackEvent",a,b,c,d])}}}},Ext.Loader.setConfig({enabled:!0,disableCaching:!1,paths:{Common:"../../common/mobile/lib"}}),Ext.define("PE.view.Main",{extend:"Ext.Container",initialize:function(){this.callParent(arguments)}}),Ext.define("PE.view.phone.toolbar.View",{extend:"Ext.Toolbar",xtype:"viewtoolbar",config:{docked:"top",minHeight:44,ui:"edit"},initialize:function(){this.add([{id:"id-tb-btn-view-done",ui:"base-blue",cls:"text-offset-12",hidden:!0,text:this.doneText},{xtype:"spacer"},{id:"id-tb-btn-prev-slide",ui:"base",iconCls:"left"},{id:"id-tb-btn-play",ui:"base",iconCls:"play"},{id:"id-tb-btn-next-slide",ui:"base",iconCls:"right"},{xtype:"spacer"},{id:"id-tb-btn-view-share",ui:"base",iconCls:"share"},{id:"id-tb-btn-fullscreen",ui:"base",iconCls:"fullscreen"}]),this.callParent(arguments)},doneText:"Done"}),Ext.define("PE.view.phone.Main",{extend:"PE.view.Main",alias:"widget.pephonemain",requires:["PE.view.phone.toolbar.View"],config:{cls:"pe-phone-main",fullscreen:!0,layout:{type:"vbox",pack:"center"}},initialize:function(){this.add(Ext.create("PE.view.phone.toolbar.View",{hidden:!0})),this.add({xtype:"container",layout:"vbox",id:"id-conteiner-document",flex:1,items:[{xtype:"container",height:0,id:"id-sdkeditor"},{xtype:"container",flex:1,id:"id-presentation-preview"},{xtype:"panel",cls:"pnl-overlay",id:"id-preview-overlay-container",style:"position:absolute; left:0; top:0; width:100%; height:100%; z-index:4;"}]}),this.callParent(arguments)}}),Ext.define("PE.view.tablet.toolbar.View",{extend:"Ext.Toolbar",xtype:"viewtoolbar",config:{docked:"top",minHeight:44,ui:"edit"},initialize:function(){this.add([{id:"id-tb-btn-view-done",ui:"base-blue",cls:"text-offset-12",hidden:!0,text:this.doneText},{xtype:"spacer"},{id:"id-tb-btn-prev-slide",ui:"base",iconCls:"left"},{id:"id-tb-btn-play",ui:"base",iconCls:"play"},{id:"id-tb-btn-next-slide",ui:"base",iconCls:"right"},{xtype:"spacer"},{id:"id-tb-btn-view-share",ui:"base",iconCls:"share"},{id:"id-tb-btn-fullscreen",ui:"base",iconCls:"fullscreen"}]),this.callParent(arguments)},doneText:"Done"}),Ext.define("PE.view.tablet.Main",{extend:"PE.view.Main",alias:"widget.petabletmain",requires:["PE.view.tablet.toolbar.View"],config:{cls:"pe-tablet-main",fullscreen:!0,layout:{type:"vbox",pack:"center"}},initialize:function(){this.add(Ext.create("PE.view.tablet.toolbar.View",{hidden:!0})),this.add({xtype:"container",layout:"vbox",id:"id-conteiner-document",flex:1,items:[{xtype:"container",height:0,id:"id-sdkeditor"},{xtype:"container",flex:1,id:"id-presentation-preview"},{xtype:"panel",cls:"pnl-overlay",id:"id-preview-overlay-container",style:"position:absolute; left:0; top:0; width:100%; height:100%; z-index:4;"}]}),this.callParent(arguments)}}),Ext.define("PE.controller.Presentation",{extend:"Ext.app.Controller",config:{refs:{},control:{}},init:function(){},launch:function(){Ext.getCmp("id-conteiner-document").on("resize",this.onEditorResize,this)},setApi:function(a){this.api=a},onEditorResize:function(){this.api&&(this.api.Resize(),this.api.zoomFitToWidth())}}),Ext.define("PE.controller.Main",{extend:"Ext.app.Controller",editMode:!1,requires:["Ext.Anim","Ext.LoadMask","Ext.MessageBox"],launch:function(){if(!this._isSupport())return void Common.Gateway.reportError(void 0,this.unsupportedBrowserErrorText);this.initControl();{var a=this.api,b=this.getApplication();b.getCurrentProfile()}a=new asc_docs_api("id-sdkeditor"),a.SetMobileVersion(!0),a.CreateComponents(),a.asc_SetFontsPath("../../../../sdkjs/fonts/"),a.SetThemesPath("../../../../sdkjs/slide/themes/"),a.Init(),a.initEvents2MobileAdvances(),a.asc_registerCallback("asc_onStartAction",Ext.bind(this.onLongActionBegin,this)),a.asc_registerCallback("asc_onError",Ext.bind(this.onError,this)),a.asc_registerCallback("asc_onEndAction",Ext.bind(this.onLongActionEnd,this)),a.asc_registerCallback("asc_onDocumentContentReady",Ext.bind(this.onDocumentContentReady,this)),a.asc_registerCallback("asc_onOpenDocumentProgress",Ext.bind(this.onOpenDocument,this)),a.asc_registerCallback("asc_onSaveUrl",Ext.bind(this.onSaveUrl,this)),a.asc_registerCallback("asc_onGetEditorPermissions",Ext.bind(this.onEditorPermissions,this)),a.asc_registerCallback("asc_onDownloadUrl",Ext.bind(this.onDownloadUrl,this)),Ext.each(b.getControllers(),function(b){var c=this.getApplication().getController(b);c&&Ext.isFunction(c.setApi)&&c.setApi(a)},this),this.initApi(),this.editorConfig={},Common.Gateway.on("init",Ext.bind(this.loadConfig,this)),Common.Gateway.on("opendocument",Ext.bind(this.loadDocument,this)),Common.Gateway.on("showmessage",Ext.bind(this.onExternalMessage,this)),Common.Gateway.on("resetfocus",Ext.bind(this.onResetFocus,this)),Common.Gateway.on("processsaveresult",Ext.bind(this.onProcessSaveResult,this)),Common.Gateway.on("downloadas",Ext.bind(this.onDownloadAs,this)),Common.Gateway.ready()},initControl:function(){},initApi:function(){},loadConfig:function(a){this.editorConfig.user=this._fillUserInfo(a.config.user,this.editorConfig.lang,this.textAnonymous)},loadDocument:function(a){if(a.doc){this.permissions=a.doc.permissions;var b=new CUserInfo;b.put_Id(this.editorConfig.user.id),b.put_FirstName(this.editorConfig.user.firstname),b.put_LastName(this.editorConfig.user.lastname),b.put_FullName(this.editorConfig.user.fullname);var c=new CDocInfo;c.put_Id(a.doc.key),c.put_Url(a.doc.url),c.put_Title(a.doc.title),c.put_Format(a.doc.fileType),c.put_Options(a.doc.options),c.put_VKey(a.doc.vkey),c.put_UserInfo(b);var d=this.getApplication().getCurrentProfile().getName();this.getApplication().getController(d+".Main").setPresentationName(a.doc.title||"Unnamed Presentation"),this.api.asc_setDocInfo(c),this.api.asc_getEditorPermissions(this.editorConfig.licenseUrl,this.editorConfig.customerId),Common.component.Analytics.trackEvent("Load","Start")}},onEditorPermissions:function(){var a=this.permissions.edit!==!1&&"view"!==this.editorConfig.mode;this.api.asc_setViewMode(!a),this.api.asc_LoadDocument(),this.api.Resize()},onDocumentContentReady:function(){this.api&&this.api.StartDemonstration("id-presentation-preview",0),this._hideLoadSplash(),Common.component.Analytics.trackEvent("Load","Complete")},onOpenDocument:function(a){var b=document.getElementById("loadmask-text");if(b){var c=(a.asc_getCurrentFont()+a.asc_getCurrentImage())/(a.asc_getFontsCount()+a.asc_getImagesCount());b.innerHTML=this.textLoadingDocument+": "+Math.min(Math.round(100*c),100)+"%"}},onSaveUrl:function(a){Common.Gateway.save(a)},onDownloadUrl:function(a){Common.Gateway.downloadAs(a)},onLongActionBegin:function(a,b){var c="";switch(b){case c_oAscAsyncAction.Print:c=this.printText}a==c_oAscAsyncActionType.BlockInteraction&&Ext.Viewport.setMasked({xtype:"loadmask",message:c})},onLongActionEnd:function(){Ext.Viewport.unmask()},onError:function(a,b,c){this._hideLoadSplash();var d={closable:!1};switch(a){case c_oAscError.ID.Unknown:d.message=this.unknownErrorText;break;case c_oAscError.ID.ConvertationTimeout:d.message=this.convertationTimeoutText;break;case c_oAscError.ID.ConvertationError:d.message=this.convertationErrorText;break;case c_oAscError.ID.DownloadError:d.message=this.downloadErrorText;break;case c_oAscError.ID.UplImageSize:d.message=this.uploadImageSizeMessage;break;case c_oAscError.ID.UplImageExt:d.message=this.uploadImageExtMessage;break;case c_oAscError.ID.UplImageFileCount:d.message=this.uploadImageFileCountMessage;break;case c_oAscError.ID.SplitCellMaxRows:d.message=this.splitMaxRowsErrorText.replace("%1",c.get_Value());break;case c_oAscError.ID.SplitCellMaxCols:d.message=this.splitMaxColsErrorText.replace("%1",c.get_Value());break;case c_oAscError.ID.SplitCellRowsDivider:d.message=this.splitDividerErrorText.replace("%1",c.get_Value());break;case c_oAscError.ID.VKeyEncrypt:d.msg=this.errorKeyEncrypt;break;case c_oAscError.ID.KeyExpire:d.msg=this.errorKeyExpire;break;case c_oAscError.ID.UserCountExceed:d.msg=this.errorUsersExceed;break;default:d.message=this.errorDefaultMessage.replace("%1",a)}b==c_oAscError.Level.Critical?(Common.Gateway.reportError(a,d.message),d.title=this.criticalErrorTitle,d.message+="<br/>"+this.criticalErrorExtText,d.buttons=Ext.Msg.OK,d.fn=function(a){"ok"==a&&window.location.reload()}):(d.title=this.notcriticalErrorTitle,d.buttons=Ext.Msg.OK,d.fn=Ext.emptyFn),Ext.Msg.show(d),Common.component.Analytics.trackEvent("Internal Error",a.toString())},onExternalMessage:function(a){a&&(this._hideLoadSplash(),Ext.Msg.show({title:a.title,msg:"<br/>"+a.msg,icon:Ext.Msg[a.severity.toUpperCase()],buttons:Ext.Msg.OK}),Common.component.Analytics.trackEvent("External Error",a.title))},onResetFocus:function(){var a=document.activeElement;a.focus()},onProcessSaveResult:function(a){this.api&&this.api.asc_OnSaveEnd(a.result)},onDownloadAs:function(){this.api.asc_DownloadAs(c_oAscFileType.PPTX,!0)},_hideLoadSplash:function(){var a=Ext.get("loading-mask");a&&Ext.Anim.run(a,"fade",{out:!0,duration:250,after:function(){a.destroy()}})},_isSupport:function(){return Ext.browser.is.WebKit&&(Ext.os.is.iOS||Ext.os.is.Android||Ext.os.is.Desktop)},_fillUserInfo:function(a,b,c){var d=a||{};return!d.id&&(d.id="uid-"+Date.now()),_.isEmpty(d.firstname)&&_.isEmpty(d.lastname)&&(d.firstname=c),d.fullname=/^ru/.test(b)?d.lastname+" "+d.firstname:d.firstname+" "+d.lastname,d},printText:"Printing...",criticalErrorTitle:"Error",notcriticalErrorTitle:"Warning",errorDefaultMessage:"Error code: %1",criticalErrorExtText:'Press "Ok" to reload view page.',uploadImageSizeMessage:"Maximium image size limit exceeded.",uploadImageExtMessage:"Unknown image format.",uploadImageFileCountMessage:"No images uploaded.",reloadButtonText:"Reload Page",unknownErrorText:"Unknown error.",convertationTimeoutText:"Convertation timeout exceeded.",convertationErrorText:"Convertation failed.",downloadErrorText:"Download failed.",unsupportedBrowserErrorText:"Your browser is not supported.",splitMaxRowsErrorText:"The number of rows must be less than %1",splitMaxColsErrorText:"The number of columns must be less than %1",splitDividerErrorText:"The number of rows must be a divisor of %1",requestEditRightsText:"Requesting editing rights...",requestEditFailedTitleText:"Access denied",requestEditFailedMessageText:"Someone is editing this document right now. Please try again later.",errorKeyEncrypt:"Unknown key descriptor",errorKeyExpire:"Key descriptor expired",errorUsersExceed:"Count of users was exceed",textAnonymous:"Anonymous",textLoadingDocument:"Loading document"}),Ext.define("PE.controller.phone.Main",{extend:"PE.controller.Main",requires:["Ext.Anim"],config:{refs:{viewToolbar:"viewtoolbar"},control:{}},launch:function(){this.callParent(arguments)},initControl:function(){this.callParent(arguments)},initApi:function(){this.callParent(arguments)},setApi:function(a){this.api=a;var b=this.getViewToolbar();b&&b.show(),this.api&&this.api.asc_enableKeyEvents(!1)},setPresentationName:function(){}}),Ext.define("PE.controller.tablet.Main",{extend:"PE.controller.Main",requires:["Ext.Anim"],config:{refs:{viewToolbar:"viewtoolbar"},control:{}},launch:function(){this.callParent(arguments)},initControl:function(){this.callParent(arguments)},initApi:function(){this.callParent(arguments)},setApi:function(a){this.api=a;var b=this.getViewToolbar();b&&b.show(),this.api&&this.api.asc_enableKeyEvents(!1)},setPresentationName:function(){}}),Ext.define("PE.controller.toolbar.View",{extend:"Ext.app.Controller",config:{refs:{viewToolbar:"viewtoolbar",fullscreenButton:"#id-tb-btn-fullscreen",shareButton:"#id-tb-btn-view-share",btnPrevSlide:"#id-tb-btn-prev-slide",btnNextSlide:"#id-tb-btn-next-slide",btnPlaySlide:"#id-tb-btn-play",overlayContainer:"#id-preview-overlay-container",doneButton:"#id-tb-btn-view-done"},control:{fullscreenButton:{tap:"onTapFullscreenButton"},shareButton:{tap:"onTapShareButton"},btnPrevSlide:{tap:"onPrevSlide"},btnNextSlide:{tap:"onNextSlide"},btnPlaySlide:{tap:"onPlaySlide"},doneButton:{tap:"onTapDoneButton"}},isFullscreen:!1},launch:function(){this.callParent(arguments);var a=this.getOverlayContainer();a&&(a.element.on("singletap",this.onSingleTapDocument,this),a.element.on("touchstart",this.onTouchStartDocument,this),a.element.on("touchend",this.onTouchEndDocument,this)),Common.Gateway.on("init",Ext.bind(this.loadConfig,this))},initControl:function(){this._startX=0,this.callParent(arguments)},initApi:function(){},setApi:function(a){this.api=a,this.api&&(this.api.asc_registerCallback("asc_onEndDemonstration",Ext.bind(this.onApiEndDemonstration,this)),this.api.asc_registerCallback("asc_onDemonstrationSlideChanged",Ext.bind(this.onApiDemonstrationSlideChanged,this)),this.api.DemonstrationEndShowMessage(this.txtFinalMessage))},loadConfig:function(a){var b=this.getDoneButton();b&&a&&a.config&&a.config.canBackToFolder!==!1&&a.config.customization&&a.config.customization.goback&&a.config.customization.goback.url&&(this.gobackUrl=a.config.customization.goback.url,b.show())},onTapDoneButton:function(){this.gobackUrl&&(window.parent.location.href=this.gobackUrl)},onTapFullscreenButton:function(a){var b=this.getViewToolbar();b&&(this.setIsFullscreen(!this.getIsFullscreen()),this.getIsFullscreen()?(a.addCls("x-button-pressing"),b.setStyle({position:"absolute",left:0,top:0,right:0,opacity:.9,"z-index":7}),this.onSingleTapDocument()):(b.setStyle({position:"initial",opacity:1}),b.setDocked("top")))},onTapShareButton:function(){this.api&&this.api.asc_Print(),Common.component.Analytics.trackEvent("ToolBar View","Share")},onSingleTapDocument:function(){if(this.getIsFullscreen()){var a=this.getViewToolbar();a&&(a.isHidden()?a.show({preserveEndState:!0,easing:"ease-in",from:{opacity:0},to:{opacity:.9}}):a.hide({easing:"ease-out",from:{opacity:.9},to:{opacity:0}}))}},onTouchStartDocument:function(a){this._startX=a.pageX},onTouchEndDocument:function(a){a.pageX-this._startX<-50?this.api.DemonstrationNextSlide():a.pageX-this._startX>50&&this.api.DemonstrationPrevSlide()},onPrevSlide:function(){this.api&&this.api.DemonstrationPrevSlide()},onNextSlide:function(){this.api&&this.api.DemonstrationNextSlide()},onPlaySlide:function(){var a=this.getBtnPlaySlide();this.api&&a&&("play"==a.getIconCls()?(this.api.DemonstrationPlay(),a.setIconCls("pause")):(this.api.DemonstrationPause(),a.setIconCls("play")))},onApiEndDemonstration:function(){this.api&&this.api.StartDemonstration("id-presentation-preview",0)},onApiDemonstrationSlideChanged:function(a){if(this.api&&Ext.isNumber(a)){var b=this.api.getCountPages(),c=this.getBtnNextSlide(),d=this.getBtnPrevSlide();d&&d.setDisabled(0>=a),c&&c.setDisabled(a>=b-1)}},txtFinalMessage:"The end of slide preview"}),Ext.define("PE.profile.Phone",{extend:"Ext.app.Profile",config:{name:"phone",namespace:"phone",controllers:["Main","PE.controller.Presentation","PE.controller.toolbar.View"],views:["Main"]},isActive:function(){return Ext.os.is.Phone&&(Ext.os.is.iOS||Ext.os.is.Android)},launch:function(){Ext.widget("pephonemain")}}),Ext.define("PE.profile.Tablet",{extend:"Ext.app.Profile",config:{name:"tablet",namespace:"tablet",controllers:["Main","PE.controller.Presentation","PE.controller.toolbar.View"],views:["Main"]},isActive:function(){return Ext.browser.is.WebKit&&(Ext.os.is.Tablet&&(Ext.os.is.iOS||Ext.os.is.Android)||Ext.os.is.Desktop)},launch:function(){Ext.widget("petabletmain")}}),void 0===Common)var Common={};Common.Locale=new function(){var l10n={},_createXMLHTTPObject=function(){var a;try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(c){a=!1}}return a||"undefined"==typeof XMLHttpRequest||(a=new XMLHttpRequest),a},_applyLocalization=function(){try{for(var a in l10n){var b=a.split(".");if(b&&b.length>2){for(var c=window,d=0;d<b.length-1;++d)void 0===c[b[d]]&&(c[b[d]]=new Object),c=c[b[d]];c&&(c[b[b.length-1]]=l10n[a])}}}catch(e){}},_get=function(prop,scope){var res="";return scope&&scope.name&&(res=l10n[scope.name+"."+prop]),res||(scope?eval(scope.name).prototype[prop]:"")},_getUrlParameterByName=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null==c?"":decodeURIComponent(c[1].replace(/\+/g," "))};try{var langParam=_getUrlParameterByName("lang"),xhrObj=_createXMLHTTPObject();if(xhrObj&&langParam){var lang=langParam.split("-")[0];xhrObj.open("GET","locale/"+lang+".json",!1),xhrObj.send(""),l10n=eval("("+xhrObj.responseText+")")}}catch(e){}return{apply:_applyLocalization,get:_get}},Ext.application({name:"PE",icon:"resources/img/icon.png",tabletStartupScreen:"resources/img/tablet_startup.png",phoneStartupScreen:"resources/img/phone_startup.png",viewport:{autoMaximize:!1},profiles:["Tablet","Phone"]});