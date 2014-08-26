'use strict';

var ace = require('brace');
var DrSax = require('dr-sax');
require('brace/mode/html');
require('brace/theme/monokai');

var editor = ace.edit('editor');
editor.getSession().setMode('ace/mode/html');
editor.setTheme('ace/theme/monokai');
var drsax = new DrSax();

var converter = document.getElementById('saxify');
converter.addEventListener('click', function(){
	var contents = editor.getValue();
	var converted = drsax.write(contents);
	editor.getSession().setMode('ace/mode/markdown');
	editor.setValue(converted);
});