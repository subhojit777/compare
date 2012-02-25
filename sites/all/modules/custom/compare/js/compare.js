(function($)  {
	function comparefunction(context)  {
//		$(document).ready(function(){
//			$("#content").prepend("<div id='compare_block'><img id='image1' height='50px' width='50px' /><img id='image2' height='50px' width='50px' /><img id='image3' height='50px' width='50px' /><img id='image4' height='50px' width='50px' /><a id='aclose'>Close</a><button id='btn_compare'>Compare</button></div>");
//			$("#compare_block").addClass("compare_block_css");
//			$("#image1").addClass("image");
//			$("#image2").addClass("image");
//			$("#image3").addClass("image");
//			$("#image4").addClass("image");
//			$("#aclose").addClass("close_button");
			var flag_item1 = null;
			var flag_item2 = null;
			var flag_item3 = null;
			var flag_item4 = null;
			var checkbox_id;
			var count = 0;
			
			$(".compare").click(function(){
//				alert($(this).attr("id"));
//				if (Drupal.ajax)	{
				var checkbox_id = $(this).attr("id");
				document.getElementById(checkbox_id).disabled = true;
				
//				$("div.div_image").each(function(){
//					if (!($("div.div_image").attr("id")) && (count == 0)){
//						$("div.div_image").attr("id", checkbox_id);
//						count++;
//					}
//					else{
//						return false;
//					}
//					alert(count);
//				});
//				
//				count = 0;
				
				$.ajax({
						type: "GET",
						url: Drupal.settings.basePath + '/get_image',
						dataType: 'json',
						data: "id=" + encodeURI(checkbox_id),
						success: function(result){
//							if (!($("#image1").attr("src"))) {
//								$("#image1").attr("src", Drupal.settings.basePath + "sites/default/files/" + result);
//							}
//							else if (!($("#image2").attr("src"))) {
//								$("#image2").attr("src", Drupal.settings.basePath + "sites/default/files/" + result);
//							}
//							else if (!($("#image3").attr("src"))) {
//								$("#image3").attr("src", Drupal.settings.basePath + "sites/default/files/" + result);
//							}
//							else if (!($("#image4").attr("src"))) {
//								$("#image4").attr("src", Drupal.settings.basePath + "sites/default/files/" + result);
//							}
							if (flag_item1 == null){
//								$("#item1").html("<img id='image1' class='image' height='50px' width='50px' /><img class='remove_item' src='/compare/sites/default/files/close_button.jpg' />");
								
								$("#image1").attr("src", Drupal.settings.basePath + "sites/default/files/" + result);
								document.getElementById("remove_item1").innerHTML = "<img src='/compare/sites/default/files/close_button.jpg' />";
								
								flag_item1 = checkbox_id;
								document.getElementsByName("compare_item").id = checkbox_id;
							}
							else if (flag_item2 == null){
//								$("#item2").html("<img id='image2' class='image' height='50px' width='50px' />");
								
								$("#image2").attr("src", Drupal.settings.basePath + "sites/default/files/" + result);
								document.getElementById("remove_item2").innerHTML = "<img src='/compare/sites/default/files/close_button.jpg' />";
								
								flag_item2 = checkbox_id;
							}
							else if (flag_item3 == null){
//								$("#item3").html("<img id='image3' class='image' height='50px' width='50px' /><img class='remove_item' src='/compare/sites/default/files/close_button.jpg' />");
								
								$("#image3").attr("src", Drupal.settings.basePath + "sites/default/files/" + result);
								document.getElementById("remove_item3").innerHTML = "<img src='/compare/sites/default/files/close_button.jpg' />";
								
								flag_item3 = checkbox_id;
							}
							else if (flag_item4 == null){
//								$("#item4").html("<img id='image4' class='image' height='50px' width='50px' /><img class='remove_item' src='/compare/sites/default/files/close_button.jpg' />");
								
								$("#image4").attr("src", Drupal.settings.basePath + "sites/default/files/" + result);
								document.getElementById("remove_item4").innerHTML = "<img src='/compare/sites/default/files/close_button.jpg' />";
								
								flag_item4 = checkbox_id;
							}
//					document.write(result);
					}
				
				});
//					var frmDrupal = function(data)	{
//						var result = Drupal.parseJson(data);
//						$("#compare_block").html(result);
//					};
//					$.get('/compare/get_image', $(this).attr("id"), frmDrupal);
//					return false;
//				}
//				if (!Drupal.ajax)	{
//					document.write("no ajax called");
//				}
				$("#compare_block").slideDown(500, function(){
					$("#compare_block").css("display", "block");
					$("#compare_block").css("position", "relative");
					$("#compare_block").css("top", "0");
				});
				
				if (flag_item4 == false){
					$(":checkbox").attr("disabled", true);
				}
				
			});
			
			$(".remove_item").click(function(){
				var this_id = $(this).attr("id");
				container_id = this_id.charAt(this_id.length - 1);
				
				var flag_item_id = "flag_item" + container_id;
				
				var item_id = flag_item_id;
				
				alert(item_id);
//				document.getElementById(this_id).innerHTML = "";
//				
//				$(this).prev().attr("src", "/compare/sites/default/files/add_item.jpg");
				
//				$(":disabled").attr("disabled", false);
//				$(":checked").attr("checked", false);
			});
			
			$("#aclose").click(function(){
				$("#item1").html("<img src='/compare/sites/default/files/add_item.jpg' />");
				$("#item2").html("<img src='/compare/sites/default/files/add_item.jpg' />");
				$("#item3").html("<img src='/compare/sites/default/files/add_item.jpg' />");
				$("#item4").html("<img src='/compare/sites/default/files/add_item.jpg' />");
				
				flag_item1 = true;
				flag_item2 = true;
				flag_item3 = true;
				flag_item4 = true;
				
				$(":disabled").attr("disabled", false);
				$(":checked").attr("checked", false);
				$("#compare_block").slideUp(100);
			});
			
//			if (flag_item4 == false){
//				$(":checkbox").attr("checked", false);
//			}
//		});
	}
	
	Drupal.behaviors.compare = {
			attach: function(context)  {
				comparefunction(context);
			}
	};
})(jQuery);