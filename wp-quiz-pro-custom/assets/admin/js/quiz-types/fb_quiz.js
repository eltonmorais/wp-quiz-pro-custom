"use strict";var _createClass=function(){function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}}(),_get=function e(t,i,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,i);if(void 0===n){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,i,r)}if("value"in n)return n.value;var p=n.get;return void 0!==p?p.call(r):void 0};function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(t,w){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}t.FBQuiz=(_inherits(r,t.Quiz),_createClass(r,[{key:"loadEvents",value:function(){var t=this;_get(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"loadEvents",this).call(this),this.$wrapper.on("click",".wp-quiz-result-edit-button",function(e){return t.handleEditResult(e)}),this.$wrapper.on("click",".wp-quiz-result-popup",function(e){return t.closePopup()}),this.$wrapper.on("click",".wp-quiz-result-popup-content",function(e){return e.stopPropagation()}),this.$wrapper.on("click",".wp-quiz-result-close-popup-button",function(e){return t.closePopup()}),this.$wrapper.on("change","#wp-quiz-question-profile",function(e){return t.handleChangeProfileSelect(e)}),this.$wrapper.on("click",".wp-quiz-add-profile-button",function(e){return t.handleClickAddProfileButton(e)}),this.$wrapper.on("click",".wp-quiz-remove-profile-btn",function(e){return t.handleClickRemoveProfileButton(e)})}},{key:"handleEditResult",value:function(e){e.stopPropagation(),this.openPopup(w(e.currentTarget).closest(".wp-quiz-result"))}},{key:"openPopup",value:function(e){e.find(".wp-quiz-result-popup").fadeIn(),w("body").addClass("wp-quiz-has-popup")}},{key:"closePopup",value:function(){var e=this.$wrapper.find(".wp-quiz-result-popup:visible"),t=e.closest(".wp-quiz-result");if(e.find(".wp-quiz-image-upload-preview img").length){var i=e.find(".wp-quiz-image-upload-preview img").attr("src");t.find(".wp-quiz-result-preview-image").length?t.find(".wp-quiz-result-preview-image").attr("src",i).show():t.find(".wp-quiz-result-preview").prepend('<img class="wp-quiz-result-preview-image" src="'+i+'">')}else t.find(".wp-quiz-result-preview-image").hide();var r=e.find(".wp-quiz-result-title").val();r?t.find(".wp-quiz-result-title-text").text(r).closest("p").show():t.find(".wp-quiz-result-title-text").closest("p").hide();var n=e.find(".wp-quiz-result-desc").val();n?t.find(".wp-quiz-result-desc-text").text(n).closest("p").show():t.find(".wp-quiz-result-desc-text").closest("p").hide(),e.fadeOut(),w("body").removeClass("wp-quiz-has-popup")}},{key:"getResultTmplData",value:function(e,t){var i=_get(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"getResultTmplData",this).call(this,e,t);return i.question=Object.values(this.store.questions)[0],i}},{key:"handleClickAddResult",value:function(e){e.stopPropagation();var t=this.resultsEl.find(".wp-quiz-result").length;this.addResult({isAdding:!0},t)}},{key:"addedResult",value:function(t,e){var n=this;e.isAdding&&this.openPopup(t);var i=t.find(".wp-quiz-profile-avatar"),r=t.find(".wp-quiz-profile-title"),a=t.find(".wp-quiz-profile-border-radius-control"),p=t.find(".wp-quiz-profile-border-radius-text"),o=t.find(".wp-quiz-profile-border-radius-input"),u=t.find(".wp-quiz-profile-image-width-input"),l=t.find(".wp-quiz-profile-image-height-input"),s=t.find(".wp-quiz-profile-image-pos-x-input"),f=t.find(".wp-quiz-profile-image-pos-y-input"),d=t.find(".wp-quiz-profile-title-width-input"),c=t.find(".wp-quiz-profile-title-pos-x-input"),w=t.find(".wp-quiz-profile-title-pos-y-input");i.resizable({aspectRatio:1,minWidth:60,maxWidth:1e3,handles:"se",stop:function(e,t){if(e.target.classList.contains("wp-quiz-extra-profile-avatar")){var i=e.target.nextElementSibling.nextElementSibling,r=i.value;r=n.updateValueString(r,"w",t.size.width),r=n.updateValueString(r,"h",t.size.height),i.value=r}else u.val(t.size.width),l.val(t.size.height)}}).draggable({containment:"parent",stop:function(e,t){if(e.target.classList.contains("wp-quiz-extra-profile-avatar")){var i=e.target.nextElementSibling.nextElementSibling,r=i.value;r=n.updateValueString(r,"x",t.position.left),r=n.updateValueString(r,"y",t.position.top),i.value=r}else s.val(t.position.left),f.val(t.position.top)}}),r.resizable({minWidth:40,maxWidth:1e3,handles:"e",stop:function(e,t){if(e.target.classList.contains("wp-quiz-extra-profile-title")){var i=e.target.nextElementSibling,r=i.value;r=n.updateValueString(r,"tw",t.size.width),i.value=r}else d.val(t.size.width)}}).draggable({containment:"parent",stop:function(e,t){if(e.target.classList.contains("wp-quiz-extra-profile-title")){var i=e.target.nextElementSibling,r=i.value;r=n.updateValueString(r,"tx",t.position.left),r=n.updateValueString(r,"ty",t.position.top),i.value=r}else c.val(t.position.left),w.val(t.position.top)}}),a.slider({orientation:"vertical",range:"min",min:0,max:500,value:o.val(),slide:function(e,r){t.find(".wp-quiz-profile-avatar").each(function(e,t){return t.style.setProperty("--image-radius",r.value+"px")}),t.find(".wp-quiz-extra-profile-value").each(function(e,t){var i=t.value;i=n.updateValueString(i,"r",r.value),t.value=i}),p.text(r.value+"px"),o.val(r.value)}})}},{key:"handleChangeProfileSelect",value:function(e){"friend"===e.currentTarget.value?(this.$wrapper.find(".wp-quiz-add-profile-button").show(),this.$wrapper.find(".wp-quiz-extra-profile-avatar").show(),this.$wrapper.find(".wp-quiz-extra-profile-title").show(),this.$wrapper.find("#wp-quiz-question-profile-notice").show()):(this.$wrapper.find(".wp-quiz-add-profile-button").hide(),this.$wrapper.find(".wp-quiz-extra-profile-avatar").hide(),this.$wrapper.find(".wp-quiz-extra-profile-title").hide(),this.$wrapper.find("#wp-quiz-question-profile-notice").hide())}},{key:"handleClickAddProfileButton",value:function(e){var r=this,t=w(e.currentTarget),i=t.closest(".wp-quiz-result"),n=t.attr("data-base-name"),a=t.attr("data-profile-image-url"),p=t.attr("data-profile-title"),o=t.closest(".wp-quiz-result-popup").find(".wp-quiz-fb-quiz-canvas"),u=o.find(".wp-quiz-profile-avatar:not(.wp-quiz-extra-profile-avatar) img"),l=o.find(".wp-quiz-profile-title:not(.wp-quiz-extra-profile-title)"),s=i.find(".wp-quiz-profile-border-radius-input").val(),f=w('<div class="wp-quiz-profile-avatar wp-quiz-extra-profile-avatar"><img src="'+a+'" alt=""><button type="button" class="wp-quiz-remove-profile-btn">&times;</button></div>'),d=w('<div class="wp-quiz-profile-title wp-quiz-extra-profile-title">'+p+"</div>"),c=w('<input type="hidden" class="wp-quiz-extra-profile-value" name="'+n+'[extra_profiles][]" value="'+u.width()+","+u.height()+","+s+",0,0,"+l.width()+',0,0">');o.append(f),o.append(d),o.append(c),f.resizable({aspectRatio:1,minWidth:60,maxWidth:1e3,handles:"se",stop:function(e,t){var i=c.val();i=r.updateValueString(i,"w",t.size.width),i=r.updateValueString(i,"h",t.size.height),c.val(i)}}).draggable({containment:"parent",stop:function(e,t){var i=c.val();i=r.updateValueString(i,"x",t.position.left),i=r.updateValueString(i,"y",t.position.top),c.val(i)}}),d.resizable({minWidth:40,maxWidth:1e3,handles:"e",stop:function(e,t){var i=c.val();i=r.updateValueString(i,"tw",t.size.width),c.val(i)}}).draggable({containment:"parent",stop:function(e,t){var i=c.val();i=r.updateValueString(i,"tx",t.position.left),i=r.updateValueString(i,"ty",t.position.top),c.val(i)}})}},{key:"handleClickRemoveProfileButton",value:function(e){var t=w(e.currentTarget);t.parent().next(".wp-quiz-extra-profile-title").remove(),t.parent().next(".wp-quiz-extra-profile-value").remove(),t.parent().remove()}},{key:"updateValueString",value:function(e,t,i){var r={w:0,h:1,r:2,x:3,y:4,tw:5,tx:6,ty:7};if(void 0===r[t])return e;var n=e.split(",");return n[r[t]]=i,n.join(",")}},{key:"name",get:function(){return"fb_quiz"}},{key:"answerSortable",get:function(){return!1}},{key:"resultSortable",get:function(){return!1}},{key:"videoUpload",get:function(){return!1}},{key:"questionMediaType",get:function(){return!1}},{key:"answerType",get:function(){return!1}}]),r),w(document).ready(function(){var e=this;w('.wp-quiz-backend[data-type="fb_quiz"]').each(function(){return new t.FBQuiz(w(e))})})}(wpQuizAdmin,jQuery);