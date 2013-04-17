$(document).bind('deviceready', function(){
   
   			// LOGOUT
			$('#logout').click(function(e) {
				localStorage.clear();		
			});
   			
			
   
   
    var userId = localStorage.getItem("userId");	
			$.ajax({
					type : 'POST',
					//url:'http://localhost/ams_live/ams/index.php?r=jobs/req',
					url : 'http://ebs.myams.com.au/index.php?r=jobs/req',
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