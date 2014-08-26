'use strict';

var ace = require('brace');
var DrSax = require('dr-sax');
var marked = require('marked');
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
	var md = document.getElementById('markdown');
	var html = marked(converted)
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/<\/?em>/g, '_');
	md.innerHTML = converted.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	editor.setValue(html);
});