/*
Created by Ralf Becher & Sven Uhlig
Contact: ralf.becher@tiq-solutions.de
TIQ Solutions, Leipzig, Germany
Tested on QV 11.2 SR5

TIQ Solutions takes no responsibility for any code.
Use at your own risk. 
*/
(function($){
	var exactSearch = false; // normal mode
	var searchModeVariable = "vListboxSearchPasteMode",
		searchModeExact = "exact";
	Qva.AddDocumentExtension('ListboxSearchPaste', function() {
		Qv.GetCurrentDocument().GetAllVariables(function(vars) {
			var searchVar = $.grep(vars, function(e, i) {
								return e.name === searchModeVariable;
							});
			if (searchVar.length > 0) {
				if (searchVar[0].value === searchModeExact) {
					exactSearch = true;
				}
			}
			$( document ).on('paste', '.PopupSearch input', function(event){
				// non IE browser
				if (exactSearch && event.originalEvent.clipboardData) {
					if (event.originalEvent.clipboardData.types.length > 0) {
						try {
							event.target.value = '(' + event.originalEvent.clipboardData.getData(event.originalEvent.clipboardData.types[0]).trim().replace(/[\r\n]+/g, '|') + ')';
							event.preventDefault();
							return false;
						} catch(e){
							//it was just a try
						}	
					}			
				} else {
					// IE
					if (window.clipboardData) {
						try {
							if (exactSearch) {
								event.target.value = '(' + window.clipboardData.getData('Text').trim().replace(/[\r\n]+/g, '|') + ')';
							} else {
								event.target.value = window.clipboardData.getData('Text').replace(/[\r\n]+/g, ' ').trim();
							}
							event.preventDefault();
							return false;
						} catch(e){
							//it was just a try
						}
					}
				}
			});
		});	
	});
})(jQuery);