## 'Go to Matching Bracket' in Brackets editor

<a href="http://semver.org" target="_blank" alt="Semantic Versioning"><img src="https://img.shields.io/badge/semver-2.0.1-lightgrey.svg?style=flat-square"></a>
<a href="https://github.com/davidwaterston/goto-matching-bracket/blob/master/LICENSE" target="_blank" alt="MIT License"><img src="http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"></a>
<a href="#verifying-releases" alt="Releases signed with Gnu Privacy Guard"><img src="https://img.shields.io/badge/gpg-signed-green.svg?style=flat-square"></a>
<a href="https://gitter.im/davidwaterston/goto-matching-bracket" target="_blank" alt="Join the chat at https://gitter.im/davidwaterston/goto-matching-bracket"><img src="https://badges.gitter.im/Join%20Chat.svg"></a>
  
A [Brackets](http://brackets.io/) extension to instantly locate and place the cursor on the matching bracket to the one under the cursor. Adds an entry called _Go to Matching Bracket_ to the _Navigate_ menu with a shortcut of Command-Alt-&#8594; (Mac) or Ctrl-Alt-&#8594; (Windows). **Note that this shortcut was changed in version 2.0.0 as release 1.3 of Brackets now uses the original shortcut for _Expand Current_**.

The 'brackets' characters that are matched are (, ), {, }, [ and ].
  
<img src="https://dvolvr.files.wordpress.com/2015/04/goto-matching-bracket-v2.gif" width="800" alt="Brackets Goto Matching Bracket in action" />
  
  
## Install

The best way to install this extension is via the Brackets Extension Manager using the _File > Extension Manager..._ menu item. When the dialog opens you can search for the extension or, alternatively, click on the _Install from URL_ button and enter:   
```
https://github.com/davidwaterston/goto-matching-bracket
```
If you prefer to install using Git then you can pull directly from this repo:  

Open Brackets and click _Help > Show Extensions Folder_.  
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
There are three preferences which can be set in your Brackets Preferences File to override the default behaviour of this extension:  

| Preference | Description | Default Value |  
| :--------- | :---------- | :------------ |  
| enabled | Is the extension enabled (active) or not. If you believe the extension is causing a problem in Brackets or conflicting with another extension, this setting allows you to temporarily turn it off rather than uninstalling it. | true |  
| maxScanLines | The maximum number of lines that will be scanned (searched) to find a match. If, after scanning this number of lines, no match is found then the search will give up _even if a matching bracket exists in the file_. Unless you are working on very large files you are unlikely to want to change this value. | 5000 |  
| maxScanLineLength | The maximum length that a line may be to be considered for scanning. Lines that are longer than this length will be skipped (the scan will continue on to the next line, if we have not reached the start/end of the file). For example, if this value is set to 10 then any line whose length is greater than 10 will be ignored when looking for a matching bracket. This, of course, means that it would be possible to miss a match if this value is set too low. | 10000 |  
  
Should you find that you need to override any of the default values this can be done by editing your preference file using the Brackets _Debug > Open Preferences File_ menu item and adding one, or more, of the following to it: 
  
```
"com.github.davidwaterston.gotoMatchingBracket.enabled": true,
"com.github.davidwaterston.gotoMatchingBracket.maxScanLines": 20000,
"com.github.davidwaterston.gotoMatchingBracket.maxScanLineLength": 1000,
```
  
You should, of course, alter the values (after the ':') to the required value.
  
  
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
"Cmd-Shift-Z": "davidwaterston.goto-matching-bracket.findMatch"
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
| 2015/04/23 | v2.0.1 | Bug fix: a comma went astray in the package.json, rendering it invalid |
| 2015/04/23 | v2.0.0 | Breaking change: With the release of Brackets 1.3 the original keyboard shortcut used by this extension - Command-Alt-] (Mac) or Ctrl-Alt-] (Windows) - has been taken by the Brackets _Expand Current_ command. This release changes the default shortcut and confirms the extension continues to work in v1.3 |
| 2015/04/06 | v1.7.0 | Added new preference setting, _enabled_, which allows the extension to temporarily be turned off. |
| 2015/03/31 | v1.6.0 | Added .editorconfig, to ensure consistency of whitespace across different editors and IDEs. |  
| 2015/03/29 | v1.5.0 | Documentation update. Added a License file and badges to the README.md to indicate the version number, the license type and that the releases are signed using Gnu Privacy Guard (GPG). I also added info about how to verify the signatures on releases/tags. In previous releases I have only increased the version number when there has been functional (no-documentation) changes made to the repo but from now on I will bump the version up even if only documentation has changed. |
| 2015/03/23 | v1.4.0 | Updated the Command Id of the extension to be a more standards-compliant "davidwaterston.goToMatchingBracket.findMatch" (notice the addition of the 'findMatch'). The main reason for this was to ensure that the extension name would appear when displayed in redmunds's [Display Shortcuts](https://github.com/redmunds/brackets-display-shortcuts) extension which adds a _Show Shortcuts_ item to the Brackets _Help_ menu. <img src="https://dvolvr.files.wordpress.com/2015/03/users_davidwaterston_library_application_support_brackets_extensions_user_davidwaterston_goto-matching-bracket_main_js__test2__e28094_brackets1.png" /> |
| 2015/03/19 | v1.3.0 | Added translated text in Czech, German, Italian, Polish, Portuguese and Russian. |  
| 2015/03/18 | v1.2.0 | Added two user-definable preferences: maxScanLineLength and maxScanLines.  See above for more details. |  
| 2015/03/17 | v1.1.0 | Added internationalisation support. Currently only English is available. |    
| 2015/03/16 | v1.0.0 | Initial release. |  
  
  
## Verifying Releases
I use <a href="http://semver.org" target="_blank" alt="Semantic Versioning">Semantic Versioning</a> to number releases. Each release is tagged with the appropriate version number and signed using <a href="https://www.gnupg.org" target="_blank" alt="Gnu Privacy Guard (GPG)">Gnu Privacy Guard (GPG)</a>. The public key used to sign releases is  
```
Name: David Waterston  
Email: david@davidwaterston.com  
Key ID: A7AD9C85  
Signature: 71A9 DC13 447A 1E4F C6EB  5D64 DE08 A991 A7AD 9C85  
```
This public key is included in the repository with a SHA1 of 16d013451476fa4a1a67d6ad4b90583e205b53b1.  
After cloning the repo, and assuming you have GPG installed correctly, you can import this key into your keychain
```
git cat-file blob pubkey | gpg --import
```
When this public key is successfully imported, you can use it to verify the integrity of any of the tagged releases of this repo
```
git tag -v v1.7.0
```
which should produce output similar to:
```
object 04f37a55784c1f3abc2cf927a935a488aa954035  
type commit  
tag v1.4.0  
tagger David Waterston <david@davidwaterston.com> 1427387056 +0000  
  
Updated the Command Id of the extension to be a more standards-compliant.  
  
Updated the Command Id of the extension to be a more standards-compliant 'davidwaterston.goToMatchingBracket.findMatch' (notice the addition of the 'findMatch'). The main reason for this was to ensure that the extension name would appear when displayed in redmunds Display Shortcuts extension which adds a Show Shortcuts item to the Brackets Help menu.
Also rewrote the text in the README.md for the maxScanLineLength preference as my understanding of this was completely wrong.
gpg: Signature made Thu 26 Mar 16:24:16 2015 GMT using RSA key ID A7AD9C85
gpg: Good signature from "David Waterston <david@davidwaterston.com>" [ultimate]
```
The important thing to notice here is that the RSA key ID matches mine (A7AD9C85) and the line that says that this is a good signature.  
  
  The public key can further be verified by checking the details held on <a href="http://pgp.mit.edu/pks/lookup?search=david%40davidwaterston.com&op=index&fingerprint=on&exact=on" target="_blank" alt="pgp.mit.edu">pgp.mit.edu</a>.
  
  
## License
Copyright (c) 2015 David Waterston. All rights reserved.  
Distributed under an MIT license. See the [LICENSE](https://github.com/davidwaterston/goto-matching-bracket/blob/master/LICENSE) file for more details.
