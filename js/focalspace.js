// Basic Slider
$("#focalspace-layout-slider").bjqs({
	'height': 368,
	'width': 600,
	responsive: true
});

$("#focalspace-implementation-slider").bjqs({
	'height': 244,
	'width': 800,
	responsive: true
})


// Blur animation
var controller = new ScrollMagic();
var elementsToBlur = [$(".project-brief"), $(".project-process")];

var tweenBlur1 = TweenMax.allTo(elementsToBlur, 1, 
	{
		className: '+= blurred-15',
		onComplete: function() {
			$(".project-brief").removeClass("blurred-15");
			$(".project-process").removeClass("blurred-15");
		}
	}
);

// var tweenBlur2 = TweenMax.to(".project-process", 1,
// 	{
// 		className: '+= blurred-15'
// 	}
// );


var scenePicked = new ScrollScene({
	triggerElement: "#focalspace-figures",
	duration: 300
})
.setTween(tweenBlur1)
.addTo(controller);