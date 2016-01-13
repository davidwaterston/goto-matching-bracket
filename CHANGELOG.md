# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][unreleased]


## [2.2.1] - 2016-01-13

### Changed
-
Updated the [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md) to fix the instructions for changing the hotkey used to invoke this extension. This had referenced "davidwaterston.goto-matching-bracket.findMatch" when it should be "davidwaterston.goToMatchingBracket.findMatch".


## [2.2.0] - 2015-10-18
### Added
- This CHANGELOG.md file, formatted in the convention detailed in [Keep a CHANGELOG](http://keepachangelog.com).
- Proposed features/changes can be now be suggested/voted for at [FeatHub](http://feathub.com/davidwaterston/goto-matching-bracket). The [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md) now has a new section - [_Missing a feature?_](https://github.com/davidwaterston/goto-matching-bracket#missing-a-feature) - which links directly to this project in [FeatHub](http://feathub.com/davidwaterston/goto-matching-bracket) and includes a dynamic list of the features suggested / votes cast so far.
- Added badge and new text section - [_Future Plans_](https://github.com/davidwaterston/goto-matching-bracket#future-plans) - in [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md) that links to this project in [Waffle.io](https://waffle.io/davidwaterston/goto-matching-bracket).

### Changed
- Removed the _enabled_ user preference. As Brackets 1.4+ has the built-in ability to temporarily disable an extension, this feature is no longer required.
- Removed the _Release History_ section of the [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md) as it is now replaced by this CHANGELOG file.
- Replaced hardcoded version number badge in [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md) with one that gets latest version number from GitHub.
- Replaced remaining HTML badges in [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md) with Markdown equivalents.
- Cosmetic change to the waffle.io badge in [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md); label is now 'in progress' rather than 'In Progress' to make it more consistent with the other badges
- Added link to my [Keybase](https://keybase.io/davidwaterston) profile from [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md) so that my GPG key can more easily be confirmed.


## [2.1.0] - 2015-04-24
### Added
- French translation added, thanks to [@PhiLhoSoft](https://github.com/PhiLhoSoft)

![goto-matching-bracket_v2 1 0](https://cloud.githubusercontent.com/assets/876545/7787797/9c254ae0-0216-11e5-8ea1-ac51d4da5752.png)

### Changed
- The 'charsToMatch' object was tidied up as it could be confusing to anyone reading the code.


## [2.0.1] - 2015-04-23

### Fixed
- Restored a comma that was inadvertantly removed in the previous release, rendering the [package.json](https://github.com/davidwaterston/goto-matching-bracket/blob/master/package.json) file invalid.


## [2.0.0] - 2015-04-23

### Changed
- __Breaking change__: With the release of Brackets 1.3 the original keyboard shortcut used by this extension - Cmd-Alt-] (Mac) or Ctrl-Alt-] (Windows) - has been taken by the Brackets Expand Current command. This release changes the default shortcut to be Cmd-Alt-RightArrow (Mac) or Ctrl-Alt-RightArrow (Windows) and confirms that the extension continues to work in v1.3.
- [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md) updated to reflect new hotkeys

### Fixed
- [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md) updated to fix the explanation for how to change the hotkey as this was previously incorrect


## [1.7.0] - 2015-04-06

### Added
- Added a new user preference, _enabled_, which allows the extension to be temporarily turned off. This can be useful if you suspect the extension is causing a problem with Brackets or another extension. The default for this setting is _true_ (the extension is enabled).

- Added details of the new _enabled_ user preference to the [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md).

### Changed
- Added more detail to the [_Install_](https://github.com/davidwaterston/goto-matching-bracket#install) section of the [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md).


## [1.6.0] - 2015-03-31

### Added
- Added an .editorconfig file as specified in [EditorConfig](http://editorconfig.org).
This file helps developers define and maintain consistent coding styles between different editors and IDEs. It has no impact on the functionality of this extension but is intended for use by developers who might work on the source code.

## [1.5.0] - 2015-03-29

### Added
- Added a [License](https://github.com/davidwaterston/goto-matching-bracket/blob/master/LICENSE) file. This replaces a large part of the _License_ section of the [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md). The license itself is unchanged.
- Added badges to the [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md) to indicate the version number of the current release, the license type and an indicator that the releases are signed using Gnu Privacy Guard (GPG).
- Added a new section to the [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md), [_Verifying Releases_](https://github.com/davidwaterston/goto-matching-bracket#verifying-releases), which details how release tags are signed and how they can be verified to ensure the integrity of the repo.

### Changed
- In previous releases I have only increased the version number when there has been functional (non-documentation) changes made to the repo but from this version on I will bump the version up even if only documentation has changed.

## [1.4.0] - 2015-03-23

### Changed
- Updated the Command Id of the extension to be a more standards-compliant 'davidwaterston.goToMatchingBracket.findMatch' (notice the addition of the 'findMatch'). The main reason for this was to ensure that the extension name would appear when displayed in [Randy Edmunds](https://github.com/redmunds) [Display Shortcuts](https://github.com/redmunds/brackets-display-shortcuts) extension which adds a _Show Shortcuts_ item to the Brackets Help menu. ![Show Shortcuts](https://dvolvr.files.wordpress.com/2015/03/users_davidwaterston_library_application_support_brackets_extensions_user_davidwaterston_goto-matching-bracket_main_js__test2__e28094_brackets1.png "Show Shortcuts")

### Fixed
- Rewrote the text in the [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md) for the _maxScanLineLength_ preference as my understanding of how this works was completely wrong.


## [1.3.0] - 2015-03-19

### Added
- The menu item is now translated into 7 languages; Czech, English, German, Italian, Polish, Portuguese and Russian.
- A _Frequently Asked Questions_ section to the [README.md](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md#frequently-asked-questions).
- An animated .gif showing the extension in action to the [README.m](https://github.com/davidwaterston/goto-matching-bracket/blob/master/README.md)


## [1.2.0] - 2015-03-18

### Added
- Two new user-definable preferences added: _maxScanLineLength_ and _maxScanLines_.
  - _maxScanLines_
The maximum number of lines that will be scanned (searched) to find a match. If, after scanning this number of lines, no match is found then the search will give up even if a matching bracket exists in the file. Unless you are working on very large files you are unlikely to want to change this value.

  - _maxScanLineLength_
The maximum length that a line may be to be considered for scanning. Lines that are longer than this length will be skipped (the scan will continue on to the next line, if we have not reached the start/end of the file). For example, if this value is set to 10 then any line whose length is greater than 10 will be ignored when looking for a matching bracket. This, of course, means that it would be possible to miss a match if this value is set too low.


## [1.1.0] - 2015-03-17

### Added
- Add internationalisation support. Currently only the English language is supported but this release opens up the possibility of supporting multiple languages in future.


## [1.0.0] - 2015-05-16

### Added
- Initial release.
