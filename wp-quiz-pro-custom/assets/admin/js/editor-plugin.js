"use strict";!function(){if("undefined"!=typeof tinymce){var o=function(t,n){var i="["+t;for(var o in n)n[o]&&(i+=" "+o+'="'+n[o]+'"');return i+="]"};tinymce.create("tinymce.plugins.WP_Quiz_Pro",{init:function(t){var n,i;t.addButton("wp_quiz_pro",{type:"menubutton",icon:"dashicons dashicons-before dashicons-editor-help",menu:[(i=t,{text:WP_Quiz_Pro_Buttons.i18n.quizShortcode,onclick:function(){var t=i.windowManager.open({title:WP_Quiz_Pro_Buttons.i18n.quizShortcode,body:[{type:"listbox",name:"id",label:WP_Quiz_Pro_Buttons.i18n.selectQuiz,values:WP_Quiz_Pro_Buttons.quizChoices},{type:"textbox",name:"question",label:WP_Quiz_Pro_Buttons.i18n.showQuestions,tooltip:WP_Quiz_Pro_Buttons.i18n.showQuestionsDesc}],buttons:[{id:"wp-quiz-insert-shortcode",classes:"widget btn primary first abs-layout-item",text:WP_Quiz_Pro_Buttons.i18n.insert,onclick:function(){t.submit()}},{id:"wp-quiz-cancel-shortcode",text:WP_Quiz_Pro_Buttons.i18n.cancel,onclick:function(){t.close()}}],onsubmit:function(t){i.insertContent(o("wp_quiz_pro",t.data))}})}}),(n=t,{text:WP_Quiz_Pro_Buttons.i18n.quizzesShortcode,onclick:function(){var t=n.windowManager.open({title:WP_Quiz_Pro_Buttons.i18n.quizzesShortcode,body:[{type:"textbox",name:"num",label:WP_Quiz_Pro_Buttons.i18n.numberOfQuizzes}],buttons:[{id:"wp-quiz-insert-shortcode",classes:"widget btn primary first abs-layout-item",text:WP_Quiz_Pro_Buttons.i18n.insert,onclick:function(){t.submit()}},{id:"wp-quiz-cancel-shortcode",text:WP_Quiz_Pro_Buttons.i18n.cancel,onclick:function(){t.close()}}],onsubmit:function(t){n.insertContent(o("wp_quiz_listing",t.data))}})}})]})},createControl:function(){return null},getInfo:function(){return{longname:"WP Quiz Pro Shortcodes",author:"MTS",authorurl:"https://mythemeshop.com",version:"2.0.0"}}}),tinymce.PluginManager.add("wp_quiz_pro",tinymce.plugins.WP_Quiz_Pro)}}(jQuery);