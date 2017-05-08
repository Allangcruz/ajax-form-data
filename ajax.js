var contato = (function($) {

	function enviar(form) {
		var formData = new FormData(form);
		var url = $(form).attr("action");

		$.ajax({
			type :'post',
			url : url,
			data : formData,
			dataType : 'json',
			contentType : false,
			processData : false,
			error : function(response) {
				console.log(response);
			},
			success: function(response) {
                console.log(response);
            }
        });
	}

	return {
		enviar : enviar
	}
})(jQuery);