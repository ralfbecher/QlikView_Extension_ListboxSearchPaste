QlikView Extension ListboxSearchPaste
=====================================

This document extension changes the behavior of pasting multi-line multiple values (a list with line breaks) into the listbox search popup input field. 
For IE and QlikView Desktop it is not possible by default to paste in a list of multi-line multiple values (eg. from Excel sheet). Only the first value will be selected.
This extension replaces the line breaks in the pasted string with spaces so multiple values can easily be selected.

**A list of values like this:**

Aaaa

Bb

Cccc

Ddd

will be pasted as a one-line string. There are two modes:

**Normal Search Mode (default):**

Values pasted as: "Aaaa Bb Cccc Ddd"

This will also select values in Listbox like a wildcard search "Aaaa*" and so on.

**Exact Search Mode:**

Values pasted as: "(Aaaa|Bb|Cccc|Ddd)"

The search mode can be switched via QlikView variable "vListboxSearchPasteMode" with possible values "normal", "exact". The variable name and used values can be changed in script.js file. After changing the variable value in QlikView you need to press F5 to re-render the extension and change the search mode.

![QlikView Extension ListboxSearchPaste](screenshot.PNG)

![QlikView Extension ListboxSearchPaste](screenshot2.PNG)

![QlikView Extensions ListboxSearchPaste](screenshot3.PNG)

![QlikView Extensions ListboxSearchPaste](screenshot4.PNG)
