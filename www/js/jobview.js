$(document).bind('deviceready', function(){
   
			// LOGOUT
			$('#logout').click(function(e) {
				localStorage.clear();		
			});
	
				$.ajax({
					type : 'POST',
					url:'http://localhost/ams_live/ams/index.php?r=jobs/reqss',
					dataType : 'json',
					data : 'userId='+userId,
					success : function(data) {
						
						$('#info').replaceWith(data[0]);
						$('ul#mylist').listview('refresh');
						$("#ul#mylist").page();
						
					},
					error : function() {
						navigator.notification.alert("No Data Found", function() {});
					}
				});
						
						
						
						
});


