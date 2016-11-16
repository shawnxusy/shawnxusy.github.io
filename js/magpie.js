// Scenario animation
var controller = new ScrollMagic();

var tweenRoland = TweenMax.staggerTo(".roland-persona-item", 3, 
	{
		backgroundColor: "#F49E85"
	},
	0.5
);

var sceneRoland = new ScrollScene({
	triggerElement: "#roland-trigger",
	offset: -100
})
.setTween(tweenRoland)
.addTo(controller);

var tweenSharon = TweenMax.staggerTo(".sharon-persona-item", 3, 
	{
		backgroundColor: "#6A8FC7"
	},
	0.5
);

var sceneSharon = new ScrollScene({
	triggerElement: "#sharon-trigger",
	offset: -100
})
.setTween(tweenSharon)
.addTo(controller);

// Basic Slider
$("#magpie-ideation-slider").bjqs({
	'height': 472,
	'width': 800,
	responsive: true
})

$("#magpie-flow-slider").bjqs({
	'height': 472,
	'width': 800,
	responsive: true
})

// Digital animation
var tweenDigital1 = TweenMax.staggerTo(".magpie-digital-1", 3, 
	{
		opacity: 1
	},
	1
);
var sceneDigital1 = new ScrollScene({
	triggerElement: ".magpie-digital-content-panel-1",
	offset: -100
})
.setTween(tweenDigital1)
.addTo(controller);


var tweenDigital2 = TweenMax.staggerTo(".magpie-digital-2", 3, 
	{
		opacity: 1
	},
	1
);
var sceneDigital2 = new ScrollScene({
	triggerElement: ".magpie-digital-content-panel-2",
	offset: -100
})
.setTween(tweenDigital2)
.addTo(controller);



