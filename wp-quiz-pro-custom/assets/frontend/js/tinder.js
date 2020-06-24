"use strict";var _createClass=function(){function a(t,s){for(var i=0;i<s.length;i++){var a=s[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,s,i){return s&&a(t.prototype,s),i&&a(t,i),t}}();function _classCallCheck(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}!function(e){var n=(_createClass(i,[{key:"init",value:function(){var t=this;this.container.classList.add(this.options.containerClass),this.initCards(),this.initHammer(),this.likeBtn.addEventListener("click",this.createButtonListener(!0)),this.dislikeBtn.addEventListener("click",this.createButtonListener(!1)),window.addEventListener("resize",function(){return t.initHeight()})}},{key:"initHeight",value:function(){1===parseInt(this.options.autoHeight)&&(this.cardsList.style.height=Math.floor(this.cards[0].offsetHeight)+40+"px")}},{key:"initCards",value:function(){var i=this,t=this.container.querySelectorAll("."+this.options.cardClass+":not(."+this.options.removedClass+")");t.length||this.callEndCallback(),t.forEach(function(t,s){t.classList.remove(i.options.activeClass),0===s&&(t.classList.add(i.options.activeClass),1===parseInt(i.options.autoHeight)&&(i.cardsList.style.height=Math.floor(t.offsetHeight)+40+"px")),t.style.display="block",s>=i.options.visibleCards&&(t.style.display="none"),t.style.zIndex=i.cards.length-s,t.style.transform="scale("+(20-s)/20+") translateY(-"+20*s+"px)"}),this.container.classList.add(this.options.loadedClass)}},{key:"initHammer",value:function(){var a=this;this.cards.forEach(function(s,t){s.dataset.index=t;var i=new Hammer(s);i.on("panstart",function(t){s.classList.contains(a.options.activeClass)&&a.handlePanstart(s,t)}),i.on("pan",function(t){s.classList.contains(a.options.activeClass)&&!s.classList.contains(a.options.scrollingClass)&&a.handlePan(s,t)}),i.on("panend",function(t){s.classList.contains(a.options.activeClass)&&a.handlePanend(s,t)})})}},{key:"handlePanstart",value:function(t,s){45<Math.abs(s.angle)&&Math.abs(s.angle)<135&&t.classList.add(this.options.scrollingClass)}},{key:"handlePan",value:function(t,s){if(!(0===s.deltaX||45<Math.abs(s.angle)&&Math.abs(s.angle)<135||0===s.center.x&&0===s.center.y)){t.classList.add(this.options.movingClass),t.classList.toggle(this.options.likedClass,"rtl"===this.options.direction?s.deltaX<0:0<s.deltaX),t.classList.toggle(this.options.dislikedClass,"rtl"===this.options.direction?0<s.deltaX:s.deltaX<0);var i=.03*s.deltaX*(s.deltaY/80);t.style.transform="translate("+s.deltaX+"px, "+s.deltaY+"px) rotate("+i+"deg)"}}},{key:"handlePanend",value:function(t,s){if(t.classList.contains(this.options.scrollingClass))t.classList.remove(this.options.scrollingClass);else{t.classList.remove(this.options.movingClass),t.classList.remove(this.options.likedClass),t.classList.remove(this.options.dislikedClass);var i=document.body.clientWidth,a=Math.abs(s.deltaX)<80||Math.abs(s.velocityX)<.5;if(t.classList.toggle(this.options.removedClass,!a),a)t.style.transform="";else{var e=Math.max(Math.abs(s.velocityX)*i,i),n=0<s.deltaX?e:-e,l=Math.abs(s.velocityY)*i,o=0<s.deltaY?l:-l,r=.03*s.deltaX*(s.deltaY/80);t.style.transform="translate("+n+"px, "+(o+s.deltaY)+"px) rotate("+r+"deg)",0<s.deltaX?"rtl"===this.options.direction?this.callDislikeCallback(t):this.callLikeCallback(t):"rtl"===this.options.direction?this.callLikeCallback(t):this.callDislikeCallback(t),this.initCards()}}}},{key:"createButtonListener",value:function(n){var l=this;return function(t){t.preventDefault();var s=l.container.querySelectorAll("."+l.options.cardClass+":not(."+l.options.removedClass+")"),i=1.5*document.body.clientWidth;if(!s.length)return!1;var a=s[0],e=a.style.transitionDuration;a.style.transitionDuration="0.8s",n?(a.classList.add(l.options.likedClass),"rtl"===l.options.direction?a.style.transform="translate(-"+i+"px, 100px) rotate(-30deg)":a.style.transform="translate("+i+"px, 100px) rotate(30deg)",l.callLikeCallback(a)):(a.classList.add(l.options.dislikedClass),"rtl"===l.options.direction?a.style.transform="translate("+i+"px, 100px) rotate(30deg)":a.style.transform="translate(-"+i+"px, 100px) rotate(-30deg)",l.callDislikeCallback(a)),setTimeout(function(){a.classList.add(l.options.removedClass),a.classList.remove(l.options.activeClass),a.style.transitionDuration=e,l.initCards()},200)}}},{key:"callLikeCallback",value:function(t){"function"==typeof this.options.onLike&&this.options.onLike.call(this,t)}},{key:"callDislikeCallback",value:function(t){"function"==typeof this.options.onDislike&&this.options.onDislike.call(this,t)}},{key:"callEndCallback",value:function(){"function"==typeof this.options.onEnd&&this.options.onEnd.call(this,this.container)}},{key:"reset",value:function(){var s=this;this.cards.forEach(function(t){t.classList.remove(s.options.removedClass),t.classList.remove(s.options.likedClass),t.classList.remove(s.options.dislikedClass),t.style.transform=""}),this.initCards(),this.initHeight()}}]),i);function i(t,s){_classCallCheck(this,i),this.container=t,this.options=s,this.cardsList=t.querySelector("."+s.cardsClass),this.cards=t.querySelectorAll("."+s.cardClass),this.likeBtn=t.querySelector("."+s.likeButtonClass),this.dislikeBtn=t.querySelector("."+s.dislikeButtonClass),1!==parseInt(s.autoHeight)&&(this.cardsList.height="100%",this.cards.forEach(function(t){t.style.height="calc(100% - 5px)"}))}e.fn.extend({wqTinder:function(t){var s=e(this)[0],i=e.extend({containerClass:"tinder",cardsClass:"cards",cardClass:"card",likeButtonClass:"like-btn",dislikeButtonClass:"dislike-btn",likedClass:"liked",dislikedClass:"disliked",loadedClass:"loaded",activeClass:"active",movingClass:"moving",removedClass:"removed",scrollingClass:"is-scrolling",visibleCards:3,onLike:null,onDislike:null,onEnd:null},s.dataset,t),a=new n(s,i);return"reset"===t?a.reset():a.init(),this}})}(jQuery);