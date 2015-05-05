'use strict';

var ace = require('brace');
require('brace/theme/twilight');
require('brace/mode/markdown');

var markdownEditor = ace.edit('markdown');
markdownEditor.getSession().setMode('ace/mode/markdown');
markdownEditor.setTheme('ace/theme/twilight');

module.exports = markdownEditor;