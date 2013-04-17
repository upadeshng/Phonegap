$(document).bind('deviceready', function(){
   
   			var sessionId = localStorage.getItem("userId");
			if(sessionId){
				//$('#loginForm').form('refresh');
				//alert(sessionId);
				window.location="pages/joblist.html";
			}
			
    $(function(){
					$('form').submit(function(){
									
									//////////////////////////////
									var form = $("#loginForm");    
									//disable the button so we can't resubmit while we wait
									$("#submitButton",form).attr("disabled","disabled");
									var u = $("#username", form).val();
									var p = $("#password", form).val();
									
									
									//console.log("click");
									if(u != '' && p !='' ) {
											$.ajax({
													//type : 'POST',
													//url : 'http://localhost/ams_live/phonegap/connect.php',
													url : 'http://myams.com.au/ams/phonegap/connect.php',
													dataType : 'json',
													data : 'username='+u+'&password='+p,
													success : function(data) {
														alert(data[2]);
														
														localStorage.setItem("userId",data[2]);
														window.location="pages/joblist.html";
													},
													error : function() {
														navigator.notification.alert("Your login failed", function() {});
													}
											});
										
									} else {
										//Thanks Igor!
										navigator.notification.alert("You must enter a username and password", function() {});
										$("#submitButton").removeAttr("disabled");
									}
									return false;
									//////////////////////////////
				});
    });
	
	
	
});