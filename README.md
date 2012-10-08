jqml - jQuery/JavaScript JsonML Translator

In `src/` you will find the following files:

* jqml.js - Create DOM from JsonML, requires no additional libraries.
* jqml.min.js - Minified jqml.js.
* jquery.jqml.js - jqml implementation specific to jQuery.
* jquery.jqml.min.js - Minified jquery.jqml.js.

Below are examples of how to use the two libraries.
The only syntactical difference is that one uses `jQuery.jqml()` and the other uses `jqml()`.

To create a new element just pass in the JsonML.

```javascript
$.jqml([ 'div', {
	'id' : 'mydiv',
	'class' : 'colors borders'
}, [ 'p' ]]);
```

Say you need to create a template that prints table rows based on data received from the server.
Well, just create an immediately executing anonymous function in the JsonML for a quick little template.

```javascript
$.jqml([ 'table', (function( data ) {
	var dataRows = [ 'tbody' ];
	for ( var i = 0; i < data.length; i++ ) {
		dataRows.push([ 'tr', [ 'td', data[ i ]]]);
	}
	return dataRows;
}( data ))]);
```

While passing an array of elements isn't technically correct JsonML, it makes for much easier templating.

```javascript
$.jqml([ 'div', (function( strings ) {
	// notice there is no element in the first array item
	var ptags = [];
	for ( var i = 0; i < strings.length; i++ ) {
		ptags.push([ 'p', strings[i]]);
	}
	// see how ptags is incorrect JsonML, but so much easier:
	// ptags == [[ 'p', 'hi' ],[ 'p', 'yall!' ]]
	return ptags;
}([ 'hi', 'yall!' ]))]);
```

The jQuery plugin also ties into the the jQuery event model.
So you can attach events to the elements as they're being created.

```javascript
$.jqml([ 'nav', [ 'a', {
	'href' : '#link',
	'click' : function( e ) {
		e.preventDefault();
		// do more stuff
	}
}]]).prependTo( 'body' );
```

If you have a problem, post an issue.
The plugins are super light weight, under 1K minified, so troubleshooting shouldn't be too hard.
And let me know if you have any features/improvements you'd like to see.
