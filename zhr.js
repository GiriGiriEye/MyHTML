var cssInnerHTML = "<link rel='stylesheet' href='https://github.com/GiriGiriEye/MyHTML/raw/master/zhr.css'></link>";
$("head").append(cssInnerHTML);
$(function(){
	var buttons = $(".collapse_btn");
	var divs = $(".collapse_div");

	for(var i = 0; i < buttons.length; i++){
		$(divs[i]).hide();
		$(buttons[i]).text("+");
		$(buttons[i]).attr("myAttr","isHiding");
		//
		let j = i;
		$(buttons[i]).click(
			function(){
				if($(buttons[j]).attr("myAttr") == "isShowing"){
					$(buttons[j]).text("+");
					$(divs[j]).hide();
					$(buttons[j]).attr("myAttr", "isHiding");
				}
				else if($(buttons[j]).attr("myAttr") == "isHiding"){
					$(buttons[j]).text("-");
					$(divs[j]).show();
					$(buttons[j]).attr("myAttr", "isShowing");
				}
			}
		);
	}
});
