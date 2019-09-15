(function framework7ComponentLoader(t,e){void 0===e&&(e=!0);document,window;var a=t.$,n=(t.Template7,t.utils),i=(t.device,t.support,t.Class),r=(t.Modal,t.ConstructorMethods),s=(t.ModalMethods,function(t){function e(e,i){t.call(this,i,[e]);var r=this,s={el:null,inputEl:null,valueEl:null,value:0,formatValue:null,step:1,min:0,max:100,watchInput:!0,autorepeat:!1,autorepeatDynamic:!1,wraps:!1,manualInputMode:!1,decimalPoint:4,buttonsEndInputMode:!0};r.useModulesParams(s),r.params=n.extend(s,i),r.params.value<r.params.min&&(r.params.value=r.params.min),r.params.value>r.params.max&&(r.params.value=r.params.max);var p=r.params.el;if(!p)return r;var u,l,o=a(p);if(0===o.length)return r;if(o[0].f7Stepper)return o[0].f7Stepper;if(r.params.inputEl?u=a(r.params.inputEl):o.find(".stepper-input-wrap").find("input, textarea").length&&(u=o.find(".stepper-input-wrap").find("input, textarea").eq(0)),u&&u.length){"step min max".split(" ").forEach((function(t){!i[t]&&u.attr(t)&&(r.params[t]=parseFloat(u.attr(t)))}));var h=parseInt(r.params.decimalPoint,10);Number.isNaN(h)?r.params.decimalPoint=0:r.params.decimalPoint=h;var c=parseFloat(u.val());void 0!==i.value||Number.isNaN(c)||!c&&0!==c||(r.params.value=c)}r.params.valueEl?l=a(r.params.valueEl):o.find(".stepper-value").length&&(l=o.find(".stepper-value").eq(0));var f=o.find(".stepper-button-plus"),m=o.find(".stepper-button-minus"),v=r.params,d=v.step,g=v.min,y=v.max,E=v.value,$=v.decimalPoint;n.extend(r,{app:e,$el:o,el:o[0],$buttonPlusEl:f,buttonPlusEl:f[0],$buttonMinusEl:m,buttonMinusEl:m[0],$inputEl:u,inputEl:u?u[0]:void 0,$valueEl:l,valueEl:l?l[0]:void 0,step:d,min:g,max:y,value:E,decimalPoint:$,typeModeChanged:!1}),o[0].f7Stepper=r;var M,x,b,S,I,V={},w=null,N=!1,P=!1;function T(t){M||(P||(a(t.target).closest(f).length?w="increment":a(t.target).closest(m).length&&(w="decrement"),w&&(V.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,V.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY,M=!0,x=void 0,function t(e,a,n,i,r,s){clearTimeout(I),I=setTimeout((function(){1===e&&(b=!0,N=!0),clearInterval(S),s(),S=setInterval((function(){s()}),r),e<a&&t(e+1,a,n,i,r/2,s)}),1===e?n:i)}(1,r.params.autorepeatDynamic?4:1,500,1e3,300,(function(){r[w]()})))))}function k(t){if(M&&!P){var e="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,a="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY;void 0!==x||N||(x=!!(x||Math.abs(a-V.y)>Math.abs(e-V.x)));var n=Math.pow(Math.pow(e-V.x,2)+Math.pow(a-V.y,2),.5);(x||n>20)&&(M=!1,clearTimeout(I),clearInterval(S))}}function C(){clearTimeout(I),clearInterval(S),w=null,N=!1,M=!1}function F(){P?r.params.buttonsEndInputMode&&(P=!1,r.endTypeMode(!0)):b?b=!1:r.decrement(!0)}function O(){P?r.params.buttonsEndInputMode&&(P=!1,r.endTypeMode(!0)):b?b=!1:r.increment(!0)}function B(t){!t.target.readOnly&&r.params.manualInputMode&&(P=!0,"number"==typeof t.target.selectionStart&&(t.target.selectionStart=t.target.value.length,t.target.selectionEnd=t.target.value.length))}function D(t){13!==t.keyCode&&13!==t.which||(t.preventDefault(),P=!1,r.endTypeMode())}function X(){P=!1,r.endTypeMode(!0)}function Y(t){P?r.typeValue(t.target.value):t.detail&&t.detail.sentByF7Stepper||r.setValue(t.target.value,!0)}return r.attachEvents=function(){m.on("click",F),f.on("click",O),r.params.watchInput&&u&&u.length&&(u.on("input",Y),u.on("click",B),u.on("blur",X),u.on("keyup",D)),r.params.autorepeat&&(e.on("touchstart:passive",T),e.on("touchmove:active",k),e.on("touchend:passive",C))},r.detachEvents=function(){m.off("click",F),f.off("click",O),r.params.watchInput&&u&&u.length&&(u.off("input",Y),u.off("click",B),u.off("blur",X),u.off("keyup",D))},r.useModules(),r.init(),r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.minus=function(){return this.decrement()},e.prototype.plus=function(){return this.increment()},e.prototype.decrement=function(){return this.setValue(this.value-this.step,!1,!0)},e.prototype.increment=function(){return this.setValue(this.value+this.step,!1,!0)},e.prototype.setValue=function(t,e,a){var n=this.step,i=this.min,r=this.max,s=this.value,p=Math.round(t/n)*n;if(this.params.wraps&&a?(p>r&&(p=i),p<i&&(p=r)):p=Math.max(Math.min(p,r),i),Number.isNaN(p)&&(p=s),this.value=p,!(s!==p)&&!e)return this;this.$el.trigger("stepper:change",this,this.value);var u=this.formatValue(this.value);return this.$inputEl&&this.$inputEl.length&&(this.$inputEl.val(u),this.$inputEl.trigger("input change",{sentByF7Stepper:!0})),this.$valueEl&&this.$valueEl.length&&this.$valueEl.html(u),this.emit("local::change stepperChange",this,this.value),this},e.prototype.endTypeMode=function(t){var e=this.min,a=this.max,n=parseFloat(this.value);if(Number.isNaN(n)&&(n=0),n=Math.max(Math.min(n,a),e),this.value=n,!this.typeModeChanged)return this.$inputEl&&this.$inputEl.length&&!t&&this.$inputEl.blur(),this;this.typeModeChanged=!1,this.$el.trigger("stepper:change",this,this.value);var i=this.formatValue(this.value);return this.$inputEl&&this.$inputEl.length&&(this.$inputEl.val(i),this.$inputEl.trigger("input change",{sentByF7Stepper:!0}),t||this.$inputEl.blur()),this.$valueEl&&this.$valueEl.length&&this.$valueEl.html(i),this.emit("local::change stepperChange",this,this.value),this},e.prototype.typeValue=function(t){this.typeModeChanged=!0;var e=String(t);if(e.lastIndexOf(".")+1!==e.length&&e.lastIndexOf(",")+1!==e.length){var a=parseFloat(e.replace(",","."));if(0===a)return this.value=e.replace(",","."),this.$inputEl.val(this.value),this;if(Number.isNaN(a))return this.value=0,this.$inputEl.val(this.value),this;var n=Math.pow(10,this.params.decimalPoint);return a=Math.round(a*n).toFixed(this.params.decimalPoint+1)/n,this.value=parseFloat(String(a).replace(",",".")),this.$inputEl.val(this.value),this}return e.lastIndexOf(".")!==e.indexOf(".")||e.lastIndexOf(",")!==e.indexOf(",")?(e=e.slice(0,-1),this.value=e,this.$inputEl.val(this.value),this):(this.value=e,this.$inputEl.val(e),this)},e.prototype.getValue=function(){return this.value},e.prototype.formatValue=function(t){return this.params.formatValue?this.params.formatValue.call(this,t):t},e.prototype.init=function(){if(this.attachEvents(),this.$valueEl&&this.$valueEl.length){var t=this.formatValue(this.value);this.$valueEl.html(t)}return this},e.prototype.destroy=function(){var t=this;t.$el.trigger("stepper:beforedestroy",t),t.emit("local::beforeDestroy stepperBeforeDestroy",t),delete t.$el[0].f7Stepper,t.detachEvents(),n.deleteProps(t),t=null},e}(i)),p={name:"stepper",create:function(){var t=this;t.stepper=n.extend(r({defaultSelector:".stepper",constructor:s,app:t,domProp:"f7Stepper"}),{getValue:function(e){void 0===e&&(e=".stepper");var a=t.stepper.get(e);if(a)return a.getValue()},setValue:function(e,a){void 0===e&&(e=".stepper");var n=t.stepper.get(e);if(n)return n.setValue(a)}})},static:{Stepper:s},on:{tabMounted:function(t){var e=this;a(t).find(".stepper-init").each((function(t,i){var r=a(i).dataset();e.stepper.create(n.extend({el:i},r||{}))}))},tabBeforeRemove:function(t){a(t).find(".stepper-init").each((function(t,e){e.f7Stepper&&e.f7Stepper.destroy()}))},pageInit:function(t){var e=this;t.$el.find(".stepper-init").each((function(t,i){var r=a(i).dataset();e.stepper.create(n.extend({el:i},r||{}))}))},pageBeforeRemove:function(t){t.$el.find(".stepper-init").each((function(t,e){e.f7Stepper&&e.f7Stepper.destroy()}))}},vnode:{"stepper-init":{insert:function(t){var e=t.elm,i=a(e).dataset();this.stepper.create(n.extend({el:e},i||{}))},destroy:function(t){var e=t.elm;e.f7Stepper&&e.f7Stepper.destroy()}}}};if(e){if(t.prototype.modules&&t.prototype.modules[p.name])return;t.use(p),t.instance&&(t.instance.useModuleParams(p,t.instance.params),t.instance.useModule(p))}return p}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
