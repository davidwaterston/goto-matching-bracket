/*
 * Brackets 'go to matching bracket' extension.
 *
 * Copyright (c) 2015 David Waterston. All rights reserved.
 * Distributed under an MIT license:
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, regexp: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

define(function (require, exports, module) {

    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager");
    var EditorManager = brackets.getModule("editor/EditorManager");
    var Menus = brackets.getModule("command/Menus");

    var SEARCH_CONFIG = {
        maxScanLineLength: 10000,
        maxScanLines: 5000
    };

    var charsToMatch = {
        "(": ")",
        ")": ")",
        "[": "[",
        "]": "]",
        "{": "{}",
        "}": "}"
    };


    function gotoMatchingBracket() {

        var editor = EditorManager.getActiveEditor();
        var cursorPos = editor.getCursorPos();
        var line = editor.document.getLine(cursorPos.line);
        var validChar = (charsToMatch[line.charAt(cursorPos.ch)]) || (cursorPos.ch >= 0 && charsToMatch[line.charAt(cursorPos.ch - 1)]);

        if (validChar) {
            var matchingBrace = editor._codeMirror.findMatchingBracket(editor.getCursorPos(), false, SEARCH_CONFIG);
            if (matchingBrace.match) {
                editor.setCursorPos(matchingBrace.to.line, matchingBrace.to.ch + 1);
            }
        }
    }

    var COMMAND_ID = "davidwaterston.goto-matching-bracket";
    CommandManager.register("Go to Matching Bracket", COMMAND_ID, gotoMatchingBracket);

    var menu = Menus.getMenu(Menus.AppMenuBar.NAVIGATE_MENU);
    menu.addMenuItem(
        COMMAND_ID,
        "Ctrl-Alt-]",
        Menus.LAST_IN_SECTION,
        Menus.MenuSection.NAVIGATE_GOTO_COMMANDS
    );
});
