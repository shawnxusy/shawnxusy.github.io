$(document).ready(function() {
	// var scrollMagicController = new ScrollMagic();
	
	// var projectsTween = new TimelineMax();
	// var projectsScene = new ScrollScene();

	// makeScriptAnimation($("#projects-subtitle"), "#projectsTrigger", projectsTween);
	
	// // This function takes a some elements and generate a stroke animation, then add it to the scrollMagic Controller
	// function makeScriptAnimation(svgElement, triggerElement, tween) {
	// 	// Get the line length for each path, and set its css accordingly
	// 	for (var i = 0; i < $(svgElement).children().length; i++) {
	// 		var lineLength = $(svgElement).children()[i].getTotalLength();
	// 		$(svgElement).children().eq(i).css("stroke-dasharray", lineLength);
	// 		$(svgElement).children().eq(i).css("stroke-dashoffset", lineLength);
	// 		tween.add(TweenMax.to($(svgElement).children().eq(i), 0.03, {strokeDashoffset: 0, ease: Linear.easeNone}));
	// 	};

	// 	var projectsScene = new ScrollScene({triggerElement: "#projectsTrigger", offset: -100, duration: 200, tweenChanges: true})
	// 							.setTween(tween)
	// 							.addTo(scrollMagicController);

	// 	// show indicators (requires debug extension)
	// 	projectsScene.addIndicators();
	// };
	// 

	// Check agent's platform to decide animation types
	var isMobile, isIE, isSafari, ua = navigator.userAgent,
        checker = {
            iphone: ua.match(/(iPhone|iPod|iPad)/),
            blackberry: ua.match(/BlackBerry/),
            android: ua.match(/Android/)
        };
    isSafari = -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") ? !0 : !1, isIE = navigator.userAgent.match(/Trident\/7\./) ? !0 : !1, isMobile = checker.android || checker.iphone || checker.blackberry ? !0 : !1;

	var shawnJumping = "img/shawn-animations/shawn-animated-jumping.png";
	var shawnWalking = "img/shawn-animations/shawn-animated-walking.png";
	var shawnJumpingBack = "img/shawn-animations/shawn-animated-jumping-back.png";
	var shawnShooting = "img/shawn-animations/shawn-animated-shooting.png";


	var controller = new ScrollMagic;

	// If is mobile, get elements down a bit
	var marioAnim = new TimelineMax;

	if (isMobile) {
		marioAnim.add([TweenMax.to(".ani-element", 0.5, {
			bottom: "-=17"
		})]);
	}

	// Question blocks
	marioAnim.add([TweenMax.to("#shawn-animated", 1, {
            left: "+=18",
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Jump to first block
            left: "+=10",
            bottom: "+=90",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumping), $("#skill-title").text("Design")
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnWalking), $("#skill-title").text("Skills")
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
            left: "+=10",
            bottom: "-=90",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack), $("#illustrator").fadeIn()
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumping), $("#illustrator").hide()
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
            left: "+=20",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnWalking)
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack)
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Jump to second block
            left: "+=34",
            bottom: "+=90",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumping)
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnWalking)
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
            left: "+=10",
            bottom: "-=90",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack), $("#photoshop").fadeIn(), $("#sketch").fadeIn()
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumping), $("#photoshop").hide(), $("#sketch").hide()
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
            left: "+=20",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnWalking)
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack)
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Jump to third block
            left: "+=33",
            bottom: "+=90",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumping)
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnWalking)
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
            left: "+=10",
            bottom: "-=90",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack), $("#indesign").fadeIn()
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumping), $("#indesign").hide()
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
            left: "+=10",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnWalking)
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack)
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
            left: "+=39",
        })]);

        
        // Hitting flowers
        var tubeWithFlower = "img/scene-elements/tube-with-flower.png";
        var tubeWithoutFlower = "img/scene-elements/tube-without-flower.png";

        // If it's mobile, move the playground too
        if (isMobile) {
        	marioAnim.add([TweenMax.to("#mario-playground", 3, {
	            left: "-=315"
	        })]);
        };

        marioAnim.add([TweenMax.to("#shawn-animated", 1, {
        	//Jump first
            left: "+=20",
            bottom: "+=80",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumping), $("#skill-title").text("Web Styling")
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnWalking), $("#skill-title").text("Design")
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Change to shooting position half way
            left: "+=20",
            bottom: "+=35",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnShooting), $("#fireball1").show()
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumping), $("#fireball1").hide()
            }
        })]).add([TweenMax.to("#fireball1", 1, {
        	//Fireball moves
            left: "+=10",
            bottom: "-=10",
            onStart: function() {
            	$("#tflower1").attr("src", tubeWithoutFlower)
            },
            onReverseComplete: function() {
            	$("#tflower1").attr("src", tubeWithFlower)
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Land 
            left: "+=75",
            bottom: "-=50",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack), $("#fireball1").hide()
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnShooting), $("#fireball1").show()
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Jump second time
            left: "+=20",
            bottom: "+=15",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumping), $("#html5").fadeIn()
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack), $("#html5").hide()
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Change to shooting pos
            left: "+=20",
            bottom: "+=35",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnShooting), $("#fireball2").show()
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumping), $("#fireball2").hide()
            }
        })]).add([TweenMax.to("#fireball2", 1, {
        	//Fireball moves
            left: "+=10",
            bottom: "-=10",
            onStart: function() {
            	$("#tflower2").attr("src", tubeWithoutFlower)
            },
            onReverseComplete: function() {
            	$("#tflower2").attr("src", tubeWithFlower)
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Land 
            left: "+=60",
            bottom: "-=50",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack), $("#fireball2").hide()
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnShooting), $("#fireball2").show()
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Jump third time
            left: "+=20",
            bottom: "+=15",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumping), $("#css3").fadeIn()
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack), $("#css3").hide()
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Change to shooting pos
            left: "+=20",
            bottom: "+=35",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnShooting), $("#fireball3").show()
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumping), $("#fireball3").hide()
            }
        })]).add([TweenMax.to("#fireball3", 1, {
        	//Fireball moves
            left: "+=10",
            bottom: "-=10",
            onStart: function() {
            	$("#tflower3").attr("src", tubeWithoutFlower)
            },
            onReverseComplete: function() {
            	$("#tflower3").attr("src", tubeWithFlower)
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Land 
            left: "+=60",
            bottom: "-=50",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack), $("#fireball3").hide()
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnShooting), $("#fireball3").show()
            }
        })]);

        // Climbing the flag
        var shawnClimbing = "img/shawn-animations/shawn-animated-climbing.png"; 
        var shawnAndFlag = [$("#shawn-animated"), $("#flag")];

        // If mobile, move frame again
        if (isMobile) {
        	marioAnim.add([TweenMax.to("#mario-playground", 3, {
	            left: "-=270"
	        })]);
        };
        
        marioAnim.add([TweenMax.to("#shawn-animated", 5, {
        	//Jump up to flagpole
            left: "+=170",
            bottom: "+=190",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumping), $("#jquery").fadeIn()
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack), $("#jquery").hide()
            }
        })]).add([TweenMax.to("#shawn-animated", 0.5, {
        	//Shift icon
            left: "-=8",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnClimbing), $("#skill-title").text("Front-end Development")
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumping), $("#skill-title").text("Web Styling")
            }
        })]);

        // Descend flag to different heights for mobile / desktop
        if (!isMobile) {
        	marioAnim.add([TweenMax.allTo(shawnAndFlag, 1, {
	        	//Start to climb down
	            bottom: "170px"
	        })]);
        } else {
			marioAnim.add([TweenMax.allTo(shawnAndFlag, 1, {
	        	//Start to climb down
	            bottom: "153px"
	        })]);
        }

        marioAnim.add([TweenMax.to("#shawn-animated", 1, {
        	//Flip over
            rotationY: "+=180",
            left: "+=18",
            onStart: function() {
            	$("#angular").fadeIn()
            },
            onReverseComplete: function() {
            	$("#angular").hide()
            }
        })]).add([TweenMax.to("#shawn-animated", 0.5, {
        	//Go right
            left: "+=30",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnWalking), $("#meteor").fadeIn()
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnClimbing), $("#meteor").hide()
            }
        })]).add([TweenMax.to("#shawn-animated", 0.5, {
        	//Go down
            bottom: "-=35",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack), $("#shawn-animated").css("transform", "")
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnWalking)
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Go forward
            left: "+=60",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnWalking)
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnJumpingBack)
            }
        })]);


        // Go to the castle
        var shawnDisappeared = "img/shawn-animations/shawn-animated-disappear.png";
        
        // If mobile, move frame once again
		if (isMobile) {
        	marioAnim.add([TweenMax.to("#mario-playground", 3, {
	            left: "-=205"
	        })]);
        };
		        
        marioAnim.add([TweenMax.to("#shawn-animated", 1, {
        	//Go forward
            left: "+=60",
            onStart: function() {
            	$("#shawn-animated").attr("src", shawnDisappeared)
            },
            onReverseComplete: function() {
            	$("#shawn-animated").attr("src", shawnWalking)
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Bounce back and forth
            left: "+=110",
            onStart: function() {
            },
            onReverseComplete: function() {
            }
        })]).add([TweenMax.to("#shawn-animated", 1, {
        	//Bounce back and forth
            left: "-=80",
            onStart: function() {
            },
            onReverseComplete: function() {
            }
        })]).add([TweenMax.to("#shawn-animated", 1.5, {
        	//Goes up and down
            bottom: "+=100",
            onStart: function() {
                $("#skill-title").text("Back-end Development")
            },
            onReverseComplete: function() {
                $("#skill-title").text("Front-end Development")
            }
        })]).add([TweenMax.to("#shawn-animated", 1.5, {
        	//Goes up and down
            bottom: "-=100",
            onStart: function() {
            },
            onReverseComplete: function() {
            }
        })]).add([TweenMax.to("#shawn-animated", 1.5, {
        	//Goes up and down
            bottom: "+=110",
            onStart: function() {
            	$("#django").fadeIn()
            },
            onReverseComplete: function() {
            	$("#django").hide()
            }
        })]).add([TweenMax.to("#shawn-animated", 1.5, {
        	//Goes up and down
            bottom: "-=110",
            onStart: function() {
            	$("#node").fadeIn()
            },
            onReverseComplete: function() {
            	$("#node").hide()
            }
        })]).add([TweenMax.to("#shawn-animated", 1.5, {
        	//Goes up and down
            bottom: "+=110",
            onStart: function() {
            	$("#flask").fadeIn()
            },
            onReverseComplete: function() {
            	$("#flask").hide()
            }
        })]).add([TweenMax.to("#shawn-animated", 1.5, {
        	//Goes up and down
            bottom: "-=110",
            onStart: function() {
            },
            onReverseComplete: function() {
            }
        })]).add([TweenMax.to("#shawn-animated", 1.5, {
        	//Goes up and down
            bottom: "+=110",
            onStart: function() {
            },
            onReverseComplete: function() {
            }
        })]);

   

    var scene = new ScrollScene({
            triggerElement: ".skills-section",
            duration: 2500,
            offset: 250
        }).setTween(marioAnim).setPin(".skills-section").addTo(controller);

});











