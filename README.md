## 'Go to Matching Bracket' in Brackets editor
version 1.4.0
  
A [Brackets](http://brackets.io/) extension to instantly locate and place the cursor on the matching bracket to the one under the cursor. Adds an entry called 'Go to Matching Bracket' to the 'Navigate' menu. with a shortcut of Command-Alt-] (or Ctrl-Alt-] on Windows).

The 'brackets' characters that are matched are (, ), {, }, [ and ].
  
<img src="https://dvolvr.files.wordpress.com/2015/03/matchingbrackets1.gif" width="800" alt="Brackets Goto Matching Bracket in action" />
  
  
## Install

The best way to install this extension is via the Brackets Extension Manager.


If that's too easy for you then an alternative is to:

Open Brackets and click Help > Show Extensions Folder.  
Clone the extension into the user subdirectory:

```
git clone git://github.com/davidwaterston/goto-matching-bracket.git user/davidwaterston.goto-matching-bracket
```
  
  
##Languages
'Go to Matching Bracket' is currently available in:
 - Czech
 - English
 - German
 - Italian
 - Polish
 - Portuguese
 - Russian
  
If your preferred language is not included the extension will still work but the (single) menu item will appear in English.  
Should you wish to see it translated into your own language (or you think one of the existing translations is wrong) please let me know by commenting in [_Issues_](https://github.com/davidwaterston/goto-matching-bracket/issues).
  
  
## Preferences
There are two preferences which can be set in your Brackets Preferences File to override the default behaviour of this extension:  

| Preference | Description | Default Value |  
| :--------- | :---------- | :------------ |  
| maxScanLines | The maximum number of lines that will be scanned (searched) to find a match. If, after scanning this number of lines, no match is found then the search will give up _even if a matching bracket exists in the file_. Unless you are working on very large files you are unlikely to want to change this value. | 5000 |  
| maxScanLineLength | The maximum length that a line may be to be considered for scanning. Lines that are longer than this length will be skipped (the scan will continue on to the next line, if we have not reached the start/end of the file). For example, if this value is set to 10 then any line whose length is greater than 10 will be ignored when looking for a matching bracket. This, of course, means that it would be possible to miss a match if this value is set too low. | 10000 |  
  
Should you find that you need to override either of the default values this can be done by editing your preference file using the Brackets _Debug_... _Open Preferences File_ menu item and adding either, or both of the following to it: 
  
```
"com.github.davidwaterston.gotoMatchingBracket.maxScanLines": 20000,
"com.github.davidwaterston.gotoMatchingBracket.maxScanLineLength": 1000,
```
  
You should, of course, alter the values (after the ':') to the required amount.
  
  
## Compatibility
This extension has been tested and confirmed to work on Brackets versions 1.2 and later. 
  
  
## Frequently Asked Questions
**Q: Why doesn't it do anything?**  
A: There are a few reasons the extension might not appear to be working. If you are working on a very large file (> 5000 lines) and the opening and closing brackets are far apart then the search is probably giving up before a match is found. You can increase the number of lines searched by changing the _maxScanLines_ preference - see the notes above for details. The other likely reason for not finding a match is that there isn't one because (a) it doesn't physically exist in the file or (b) the brackets are mismatched. Consider this example:  
  
```
 (  {     ( )   ) }  
```
   
The first opening bracket is closed too soon so Brackets considers that it does not have a matching closing bracket and no match will be found.  
Failure to find a match is a good indication that the logic of your code is broken.  
Lastly, if the _maxScanLineLength_ preference is set too low then some lines in your file may not be getting included in the search. See _Preferences_ above for more details.  
  
**Q: How can I change the hotkey your extension uses?**  
A: It can be difficult to choose a hotkey for an extension. While it's easy enough to avoid the keys assigned by Brackets itself, it's impossible to know what other extensions may be using (or even what external apps might be listening for). If you find that the default key combination (CMD-ALT-] / CTRL-ALT-]) is not suitable you can override my choice by editing your _User Key Map_ file. This is done using the _Debug_... _Open User Key Map_ menu item and adding in a new entry like this in the _overrides_ section:  
  
```
"Cmd-Shift-Z": "davidwaterston.goto-matching-bracket"
```
  
where you would replace the _Cmd-Shift-Z_ with your preferred key combination.  
You can find more details about the User Key Map file and the available key combinations at [https://github.com/adobe/brackets/wiki/User-Key-Bindings](https://github.com/adobe/brackets/wiki/User-Key-Bindings)  
  
**Q: When will the extension be available in "my language"?**  
A: I'm aware that the appearance of the English text for the menu item I add can be very jarring if you're using Brackets in another language. I'm adding translations whenever I can but I rely on finding a native speaker who can translate the text. If you're able to translate the text for me please let me know by commenting in [_Issues_](https://github.com/davidwaterston/goto-matching-bracket/issues).  
  
**Q: The translation you have for "my language" is totally wrong!**    
A: That's not really a question but, if you think one of the translations is wrong or could be improved, please let me know by commenting in [_Issues_](https://github.com/davidwaterston/goto-matching-bracket/issues).  
  
  
## Release History
| Date | Version | Summary of Change |  
| :--- | :------ | :---------------- | 
| 2015/03/23 | v1.4.0 | Updated the Command Id of the extension to be a more standards-compliant "davidwaterston.goToMatchingBracket.findMatch" (notice the addition of the 'findMatch'). The main reason for this was to ensure that the extension name would appear when displayed in redmunds's [Display Shortcuts](https://github.com/redmunds/brackets-display-shortcuts) extension which adds a _Show Shortcuts_ item to the Brackets _Help_ menu. <img src="https://dvolvr.files.wordpress.com/2015/03/users_davidwaterston_library_application_support_brackets_extensions_user_davidwaterston_goto-matching-bracket_main_js__test2__e28094_brackets1.png" /> |
| 2015/03/19 | v1.3.0 | Added translated text in Czech, German, Italian, Polish, Portuguese and Russian. |  
| 2015/03/18 | v1.2.0 | Added two user-definable preferences: maxScanLineLength and maxScanLines.  See above for more details. |  
| 2015/03/17 | v1.1.0 | Added internationalisation support. Currently only English is available. |    
| 2015/03/16 | v1.0.0 | Initial release. |  
  
  
## License

Copyright (c) 2015 David Waterston. All rights reserved.
Distributed under an MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.