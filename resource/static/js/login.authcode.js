/* user-passport/1.0.0 login.authcode.js md5:c2da40b26074ce7aafab1967e7d2813c */
define("js2/login.authcode.js",["js2/login.reg.js","js2/login.status.js","js2/login.pubSub.js"],function(require){var c=require("js2/login.reg.js");var d=require("js2/login.status.js");var e=require("js2/login.pubSub.js");var f={"authcode.focus":function(){e.subscribe("authcode.focus",function(){d.onEvent({ele:h.ele.parent(),addClass:"item-focus",callback:function(){var a=h.ele.val();c.isEmpty(a)||h.ele.siblings(".clear-btn").show()}})})},"authcode.blur":function(){e.subscribe("authcode.blur",function(){d.onEvent({ele:h.ele.parent(),removeClass:"item-focus"})})},"authcode.keyup":function(){e.subscribe("authcode.keyup",function(){d.onEvent({callback:function(){var a=h.ele.val();c.isEmpty(a)?h.ele.siblings(".clear-btn").hide():h.ele.siblings(".clear-btn").show()}})})},"authcode.disable":function(){e.subscribe("authcode.disable",function(){h.ele.css("ime-mode","disabled")})}};for(var g in f)f[g]();var h={ele:$("#authcode"),init:function(){this.ele.bind("focus",function(){e.publish("authcode.focus")}),this.ele.bind("blur",function(){e.publish("authcode.blur")}),this.ele.bind("keyup",function(){e.publish("authcode.keyup")}),e.publish("authcode.disable")}};return h});