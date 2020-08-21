var live2dInnerHTML = "<div id='live2d-widget'><canvas id='live2dcanvas'></canvas></div>";
var live2dInnerHTML_JS = "<script src='https://l2dwidget.js.org/lib/L2Dwidget.min.js' />";
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