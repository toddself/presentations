'use strict';

var ace = require('brace');
require('brace/theme/twilight');
require('brace/mode/html');

var htmlEditor = ace.edit('htmleditor');
htmlEditor.getSession().setMode('ace/mode/html');
htmlEditor.setTheme('ace/theme/twilight');

module.exports = htmlEditor;