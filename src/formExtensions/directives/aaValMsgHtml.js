/**
 * @ngdoc directive
 * @name aaValMsgHtml
 *
 * @description
 * Description place holder.
 **/
(function () {
  'use strict';

  angular.module('aa.formExtensions')
    //place on an element with ngModel to generate validation messages containing html tags and javascript
    .directive('aaValMsgHtml', ['$compile', function ($compile) {
    	return {
    		restrict: 'A',
    		replace: true,
    		link: function (scope, element, attrs) {
    			element.html(attrs.aaValMsgHtml);
    			element.removeAttr('aa-val-msg-html');
    			$compile(element)(scope);
    		}
    	};
    }]);
})();
