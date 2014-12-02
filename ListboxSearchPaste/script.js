/*
Created by Ralf Becher & Sven Uhlig
Contact: ralf.becher@tiq-solutions.de
TIQ Solutions, Leipzig, Germany
Tested on QV 11.2 SR5

TIQ Solutions takes no responsibility for any code.
Use at your own risk. 
*/
(function($){
	Qva.AddDocumentExtension('ListboxSearchPaste', function() {
		$( document ).on('paste', '.PopupSearch input', function(event){
		if (window.clipboardData) {
			try{
				// works like wildcard search: XXXX* YYYY*
				event.target.value = window.clipboardData.getData('Text').replace(/[\r\n]+/g, ' ').trim();
				// works for exact search: (XXXX|YYYY)
				//event.target.value = '(' + window.clipboardData.getData('Text').trim().replace(/[\r\n]+/g, '|') + ')';
				event.preventDefault();
				return false;
			} catch(e){
				//it was just a try
			}
											   }
		});
	});
})(jQuery);