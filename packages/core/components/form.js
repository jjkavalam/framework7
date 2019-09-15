(function framework7ComponentLoader(t,e){void 0===e&&(e=!0);var a=document,r=window,o=t.$,i=(t.Template7,t.utils),n=(t.device,t.support,t.Class,t.Modal,t.ConstructorMethods,t.ModalMethods,{store:function(t,e){var a=t,i=o(t);i.length&&i.is("form")&&i.attr("id")&&(a=i.attr("id")),this.form.data["form-"+a]=e;try{r.localStorage["f7form-"+a]=JSON.stringify(e)}catch(t){throw t}},get:function(t){var e=t,a=o(t);a.length&&a.is("form")&&a.attr("id")&&(e=a.attr("id"));try{if(r.localStorage["f7form-"+e])return JSON.parse(r.localStorage["f7form-"+e])}catch(t){throw t}if(this.form.data["form-"+e])return this.form.data["form-"+e]},remove:function(t){var e=t,a=o(t);a.length&&a.is("form")&&a.attr("id")&&(e=a.attr("id")),this.form.data["form-"+e]&&(this.form.data["form-"+e]="",delete this.form.data["form-"+e]);try{r.localStorage["f7form-"+e]&&(r.localStorage["f7form-"+e]="",r.localStorage.removeItem("f7form-"+e))}catch(t){throw t}}}),f={init:function(t){var e=this,a=o(t),r=a.attr("id");if(r){var i=e.form.getFormData(r);i&&e.form.fillFromData(a,i),a.on("change submit",(function(){var t=e.form.convertToData(a);t&&(e.form.storeFormData(r,t),a.trigger("form:storedata",t),e.emit("formStoreData",a[0],t))}))}},destroy:function(t){o(t).off("change submit")}};function s(t){var e=o(t).eq(0);if(0!==e.length){var a={},r=["submit","image","button","file"],i=[];return e.find("input, select, textarea").each((function(t,n){var f=o(n);if(!f.hasClass("ignore-store-data")&&!f.hasClass("no-store-data")){var s=f.attr("name"),c=f.attr("type"),m=n.nodeName.toLowerCase();if(!(r.indexOf(c)>=0)&&!(i.indexOf(s)>=0)&&s)if("select"===m&&f.prop("multiple"))i.push(s),a[s]=[],e.find('select[name="'+s+'"] option').each((function(t,e){e.selected&&a[s].push(e.value)}));else switch(c){case"checkbox":i.push(s),a[s]=[],e.find('input[name="'+s+'"]').each((function(t,e){e.checked&&a[s].push(e.value)}));break;case"radio":i.push(s),e.find('input[name="'+s+'"]').each((function(t,e){e.checked&&(a[s]=e.value)}));break;default:a[s]=f.val()}}})),e.trigger("form:todata",a),this.emit("formToData",e[0],a),a}}function c(t,e){var a=o(t).eq(0);if(a.length){var r=e,i=a.attr("id");if(!r&&i&&(r=this.form.getFormData(i)),r){var n=["submit","image","button","file"],f=[];a.find("input, select, textarea").each((function(t,e){var i=o(e);if(!i.hasClass("ignore-store-data")&&!i.hasClass("no-store-data")){var s=i.attr("name"),c=i.attr("type"),m=e.nodeName.toLowerCase();if(void 0!==r[s]&&null!==r[s]&&!(n.indexOf(c)>=0)&&!(f.indexOf(s)>=0)&&s){if("select"===m&&i.prop("multiple"))f.push(s),a.find('select[name="'+s+'"] option').each((function(t,e){var a=e;r[s].indexOf(e.value)>=0?a.selected=!0:a.selected=!1}));else switch(c){case"checkbox":f.push(s),a.find('input[name="'+s+'"]').each((function(t,e){var a=e;r[s].indexOf(e.value)>=0?a.checked=!0:a.checked=!1}));break;case"radio":f.push(s),a.find('input[name="'+s+'"]').each((function(t,e){var a=e;r[s]===e.value?a.checked=!0:a.checked=!1}));break;default:i.val(r[s])}"select"!==m&&"input"!==m&&"textarea"!==m||i.trigger("change","fromdata")}}})),a.trigger("form:fromdata",r),this.emit("formFromData",a[0],r)}}}function m(){var t=this;o(a).on("submit change","form.form-ajax-submit, form.form-ajax-submit-onchange",(function(e,a){var n=o(this);if(("change"!==e.type||n.hasClass("form-ajax-submit-onchange"))&&("submit"===e.type&&e.preventDefault(),"change"!==e.type||"fromdata"!==a)){var f,s=(n.attr("method")||"GET").toUpperCase(),c=n.prop("enctype")||n.attr("enctype"),m=n.attr("action");if(m)f="POST"===s?"application/x-www-form-urlencoded"===c?t.form.convertToData(n[0]):new r.FormData(n[0]):i.serializeObject(t.form.convertToData(n[0])),t.request({method:s,url:m,contentType:c,data:f,beforeSend:function(e){n.trigger("formajax:beforesend",{data:f,xhr:e}),t.emit("formAjaxBeforeSend",n[0],f,e)},error:function(e){n.trigger("formajax:error",{data:f,xhr:e}),t.emit("formAjaxError",n[0],f,e)},complete:function(e){n.trigger("formajax:complete",{data:f,xhr:e}),t.emit("formAjaxComplete",n[0],f,e)},success:function(e,a,r){n.trigger("formajax:success",{data:f,xhr:r}),t.emit("formAjaxSuccess",n[0],f,r)}})}}))}var d={name:"form",create:function(){i.extend(this,{form:{data:{},storeFormData:n.store.bind(this),getFormData:n.get.bind(this),removeFormData:n.remove.bind(this),convertToData:s.bind(this),fillFromData:c.bind(this),storage:{init:f.init.bind(this),destroy:f.destroy.bind(this)}}})},on:{init:function(){m.call(this)},tabBeforeRemove:function(t){var e=this;o(t).find(".form-store-data").each((function(t,a){e.form.storage.destroy(a)}))},tabMounted:function(t){var e=this;o(t).find(".form-store-data").each((function(t,a){e.form.storage.init(a)}))},pageBeforeRemove:function(t){var e=this;t.$el.find(".form-store-data").each((function(t,a){e.form.storage.destroy(a)}))},pageInit:function(t){var e=this;t.$el.find(".form-store-data").each((function(t,a){e.form.storage.init(a)}))}}};if(e){if(t.prototype.modules&&t.prototype.modules[d.name])return;t.use(d),t.instance&&(t.instance.useModuleParams(d,t.instance.params),t.instance.useModule(d))}return d}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
