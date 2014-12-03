QlikView Extension ListboxSearchPaste
=====================================

This document extension changes the behavior of pasting multi-line multiple values (a list with line breaks) into the listbox search popup input field. 
For IE and QlikView Desktop it is not possible by default to paste in a list of multi-line multiple values (eg. from Excel sheet). Only the first value will be selected.
This extension replaces the line breaks in the pasted string with spaces so multiple values can easily be selected.

A list of values like this:

Aaaa

Bb

Cccc

Ddd

will be pasted as a one-line string. There are two modes:

1. Normal Mode:

Values pasted as: "Aaaa Bb Cccc Ddd"

This will also select values in Listbox like a wildcard search "Aaaa*" and so on.

2. Exact Search Mode:

Values pasted as: "(Aaaa|Bb|Cccc|Ddd)"

The mode can be switched in the script.js file by setting variable exactSearch (true/false).

![QlikView Extension ListboxSearchPaste](screenshot.PNG)

![QlikView Extension ListboxSearchPaste](screenshot2.PNG)

![QlikView Extensions ListboxSearchPaste](screenshot3.PNG)

![QlikView Extensions ListboxSearchPaste](screenshot4.PNG)
