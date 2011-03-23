/* jqml - jQuery JSONML Plugin
 * Author: Trevor Norris
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php */

(function($, document) {
	function createObj(elem) {
		var fragment = document.createDocumentFragment(),
			i = 0, selector;

		if (typeof elem[0] == 'string') {
			selector = document.createElement(elem[0]);
			i = 1;
		};

		for (; i < elem.length; i++) {
			if ($.isArray(elem[i])) {
				fragment.appendChild(createObj(elem[i]));
			} else if ($.isPlainObject(elem[i])) {
				$.fn.attr.call([selector], elem[i], true );
			} else if (typeof elem[i] == 'number' || typeof elem[i] == 'string') {
				fragment.appendChild(document.createTextNode(elem[i]));
			} else if (elem[i].nodeType) {
				fragment.appendChild(elem[i]);
			};
		};

		if (selector) {
			selector.appendChild(fragment);
			return selector;
		};

		return fragment.childNodes;
	};

	$.jqml = function(arg) {
		return $(createObj(arg));
	};
})(jQuery, document);
