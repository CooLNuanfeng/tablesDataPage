define(['jquery'],function($){
	
	function mytable(){

	}

	mytable.prototype = {
		alert : function(){
			$('#btn').click(function(event) {
				alert('a');
			});
			
		}
	}

	return {
		mytable : mytable
	}
});