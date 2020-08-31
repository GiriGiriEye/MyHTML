const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";

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

function initSimpleWidget(){
	var live2dInnerHTML = "<div id='live2d-widget'><canvas id='live2dcanvas'></canvas></div>";
	var live2dInnerHTML_JS = "<script src='https://l2dwidget.js.org/lib/L2Dwidget.min.js' />"
	$("body").append(live2dInnerHTML);
	$("body").append(live2dInnerHTML_JS);
	L2Dwidget.init({
		"model":{
			"scale": 1,
			"hHeadPos": 0.5,
			"vHeadPos": 0.618,
			jsonPath: "https://unpkg.com/live2d-widget-model-isuzu@1.0.4/assets/model.json"
		},
		"display":{
			"superSample":2,
			"width": 400,
	    	"height": 800,
	    	"position": "right",
	    	"hOffset": 0,
	    	"vOffset": -20,
		}
	});
}

function initSimpleWidget(path){
	var live2dInnerHTML = "<div id='live2d-widget'><canvas id='live2dcanvas'></canvas></div>";
	var live2dInnerHTML_JS = "<script src='https://l2dwidget.js.org/lib/L2Dwidget.min.js' />"
	$("body").append(live2dInnerHTML);
	$("body").append(live2dInnerHTML_JS);
	L2Dwidget.init({
		"model":{
			"scale": 1,
			"hHeadPos": 0.5,
			"vHeadPos": 0.618,
			jsonPath: path
		},
		"display":{
			"superSample":2,
			"width": 400,
	    	"height": 800,
	    	"position": "right",
	    	"hOffset": 0,
	    	"vOffset": -20,
		}
	});
}

function initHighLevelWidget(){
	// 加载 waifu.css live2d.min.js waifu-tips.js
	if (screen.width >= 768) {
		Promise.all([
			loadExternalResource("https://confluence.xindong.com/download/attachments/49266925/zhr.css?version=2&modificationDate=1598863587854&api=v2", "css"),
			loadExternalResource("https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css", "css"),
			loadExternalResource(live2d_path + "live2d.min.js", "js"),
			loadExternalResource(live2d_path + "waifu-tips.js", "js")
			
		]).then(() => {
			initWidget({
				waifuPath: live2d_path + "waifu-tips.json",
				//apiPath: "https://live2d.fghrsh.net/api/",
				cdnPath: "https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"
			});
		});
	}
}

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}
