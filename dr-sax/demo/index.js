'use strict';
var DrSax = require('dr-sax');
var MediumEditor = require('medium-editor');
var marked = require('marked');

var markdownEditor = require('./markdown-editor');
var htmlEditor = require('./html-editor');

var wyswygEditor = new MediumEditor('#editor', {firstHeader: 'h1', secondHeader: 'h2', cleanPastedHTML: true, forcePlainText: false});
var drsax = new DrSax();

var editorDiv = document.getElementById('editor');
editorDiv.addEventListener('input', function(){
  var contents = wyswygEditor.serialize().editor.value;
  var markdown = drsax.write(contents);
  markdownEditor.setValue(markdown);
  htmlEditor.setValue(contents);
});

var converter = document.getElementById('replaceHTML');
converter.addEventListener('click', function(){
  var markdown = markdownEditor.getValue();
  (document.getElementById('editor')).innerText = '';
  wyswygEditor.pasteHTML(marked(markdown));
});

window.markdownEditor = markdownEditor;
window.htmlEditor = htmlEditor;
window.wyswygEditor = wyswygEditor;