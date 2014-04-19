// $(document).ready(function(){
//    $('.curtains').curtain();
   
// });

$(window).scroll(function () {
    check();
});

var childCount = 0;

var myVar=setInterval(function(){addToCounter()},20000);

function check(){
    var height = $(window).height();

    $("#intro").css('height',height);
    $("#uses").css('height',height);
    $("#current-1").css('height',height);
    $("#current-2").css('height',height);
    $("#current-3").css('height',height);
    $("#progress").css('height',height);
    $("#map").css('height',height);
}

$(window).bind('resize', function() {
    check();
    location.reload();
});

function addToCounter () {
    childCount++;
    document.getElementById("childNum").innerHTML = childCount;
}

$(document).ready(function(){
    check();
   // $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.scrollblock'
	});

	scrollorama.animate('#intro h2',{
		duration:200, property:'top', end:-400
    });
    scrollorama.animate('#intro h1',{
		duration:400, property:'top', end:-400
    });
    scrollorama.animate('#scroll-arrow',{
        duration:520, property:'top', end:-400
    });
    scrollorama.animate('#scroll-text',{
        duration:500, property:'top', end:-400
    });
    
    scrollorama.animate('#globe-1',{
		delay:200, duration:200, property:'opacity', end:1
    });
    scrollorama.animate('#globe-border',{
        delay:200, duration:0, property:'opacity', end:1
    });
    scrollorama.animate('#globe-water-1',{
        delay:800, duration:400, property:'height', end:358
    });
    scrollorama.animate('#globe-water-2',{
        delay:1400, duration:400, property:'height', end:18
    });
    scrollorama.animate('#globe-water-3',{
        delay:2000, duration:400, property:'height', end:6
    });
  //   scrollorama.animate('#globe-2',{
		// delay:800, duration:200, property:'opacity', end:1
  //   });
  //   scrollorama.animate('#globe-3',{
		// delay:1400, duration:200, property:'opacity', end:1
  //   })
  //   scrollorama.animate('#globe-4',{
		// delay:2000, duration:200, property:'opacity', end:1
  //   });

    scrollorama.animate('#intro-fact-1',{
		delay:800, duration:200, property:'opacity', end:1
    });
    scrollorama.animate('#intro-fact-2',{
		delay:1400, duration:200, property:'opacity', end:1
    });
    scrollorama.animate('#intro-fact-3',{
		delay:2000, duration:200, property:'opacity', end:1
    });

    scrollorama.animate('#arrow',{
		delay:2200, duration:200, property:'opacity', end:1, pin:true
    });

    scrollorama.animate('#uses h3',{
		duration:800, property:'top', end:150
    });
    scrollorama.animate('#uses p',{
		delay: 700, duration:400, property:'left', end:0
    });

    scrollorama.animate('#uses-1',{
		delay:1500, duration:400, property:'height', end:65
    });
    scrollorama.animate('#uses-2',{
		delay:2200, duration:400, property:'height', end:134
    });  
    scrollorama.animate('#uses-3',{
		delay:2900, duration:400, property:'height', end:423
    }); 

    scrollorama.animate('#uses-percent-1',{
		delay:1700, duration:200, property:'opacity', end:1
    });
    scrollorama.animate('#uses-percent-2',{
		delay:2400, duration:200, property:'opacity', end:1
    });  
    scrollorama.animate('#uses-percent-3',{
		delay:3100, duration:200, property:'opacity', end:1
	});

	scrollorama.animate('#uses-label-1',{
		delay:2000, duration:200, property:'opacity', end:1
    });
    scrollorama.animate('#uses-label-2',{
		delay:2700, duration:200, property:'opacity', end:1
    });  
    scrollorama.animate('#uses-label-3',{
		delay:2600, duration:200, property:'opacity', end:1, pin:true
    });

    scrollorama.animate('#current-1 h2',{
		duration:800, property:'top', end:0
    });  
    scrollorama.animate('#cup-water',{
		delay:1200, duration:200, property:'height', end:68
    });
    scrollorama.animate('#current-1 h4',{
		delay:1400, duration:200, property:'opacity', end:1
    });  
    scrollorama.animate('#current-1 h5',{
		delay:1700, duration:200, property:'opacity', end:1
    });  
	scrollorama.animate('#current-1 p',{
		delay:1400, duration:200, property:'opacity', end:1, pin:true
    }); 

    scrollorama.animate('#current-2 h2',{
		duration:800, property:'top', end:0
    });
    scrollorama.animate('#current-2 p',{
		delay:1200, duration:200, property:'opacity', end:1
    });
    scrollorama.animate('#tower-cover-1',{
		delay:1200, duration:400, property:'height', end:0
    });
    scrollorama.animate('#tower-cover-2',{
		delay:900, duration:400, property:'height', end:0, pin: true
    }); 

    scrollorama.animate('#current-3 h2',{
        duration:800, property:'top', end:0
    });
    scrollorama.animate('#child-label-1',{
        delay:1200, duration:200, property:'opacity', end:1
    });
    scrollorama.animate('#child-label-2',{
        delay:1000, duration:200, property:'opacity', end:1, pin: true
    });

    scrollorama.animate('#progress h2',{
        duration:800, property:'top', end:0
    });
    scrollorama.animate('#year-percent-1',{
        delay:1000, duration:400, property:'margin-left', end:-65
    });
    scrollorama.animate('#year-desc-1',{
        delay:1000, duration:400, property:'margin-left', end:-471
    });
    scrollorama.animate('#in-label',{
        delay:1000, duration:400, property:'top', end:130
    });
    scrollorama.animate('#year-state-1',{
        delay:1400, duration:0, property:'opacity', end:1
    });

    scrollorama.animate('#in-label',{
        delay:2000, duration:400, property:'margin-top', end:60
    });
    scrollorama.animate('#year-percent-1',{
        delay:2000, duration:400, property:'left', end:2000
    });
    scrollorama.animate('#year-desc-1',{
        delay:2000, duration:400, property:'left', end:2500
    });

    scrollorama.animate('#year-percent-2',{
        delay:2200, duration:400, property:'margin-left', end:-81
    });
    scrollorama.animate('#year-desc-2',{
        delay:2200, duration:400, property:'margin-left', end:-527
    });
    scrollorama.animate('#by-label-1',{
        delay:2200, duration:400, property:'top', end:130
    });
    scrollorama.animate('#bar-color-1',{
        delay:2200, duration:400, property:'width', end:115
    });
    scrollorama.animate('#year-state-2',{
        delay:2600, duration:0, property:'opacity', end:1
    });

    scrollorama.animate('#by-label-1',{
        delay:3200, duration:400, property:'margin-top', end:60
    });
    scrollorama.animate('#year-percent-2',{
        delay:3200, duration:400, property:'left', end:2000
    });

    scrollorama.animate('#year-percent-3',{
        delay:3400, duration:400, property:'margin-left', end:-81
    });
    scrollorama.animate('#by-label-2',{
        delay:3400, duration:400, property:'top', end:130
    });
    scrollorama.animate('#bar-color-2',{
        delay:3400, duration:400, property:'width', end:115
    });
    scrollorama.animate('#year-state-3',{
        delay:3800, duration:0, property:'opacity', end:1
    });

    scrollorama.animate('#by-label-2',{
        delay:4400, duration:400, property:'margin-top', end:60
    });
    scrollorama.animate('#year-percent-3',{
        delay:4400, duration:400, property:'left', end:2000
    });

    scrollorama.animate('#year-percent-4',{
        delay:4600, duration:400, property:'margin-left', end:-81
    });
    scrollorama.animate('#by-label-3',{
        delay:4600, duration:400, property:'top', end:130
    });
    scrollorama.animate('#bar-color-3',{
        delay:4600, duration:400, property:'width', end:115
    });
    scrollorama.animate('#year-state-4',{
        delay:4175, duration:0, property:'opacity', end:1, pin: true
    });

    // scrollorama.animate('#by-label-3',{
    //     delay:4400, duration:400, property:'margin-top', end:60
    // });
    // scrollorama.animate('#year-percent-4',{
    //     delay:4400, duration:400, property:'left', end:2000, pin: true
    // });

    scrollorama.animate('#map-label-1',{
        delay:800, duration:400, property:'opacity', end:1
    });
    scrollorama.animate('#map-2',{
        delay:1400, duration:200, property:'opacity', end:1
    });
    scrollorama.animate('#map-label-change',{
        delay:1800, duration:400, property:'opacity', end:0
    });
    scrollorama.animate('#map-label-2',{
        delay:1800, duration:400, property:'opacity', end:1
    });
    scrollorama.animate('#map-3',{
        delay:2000, duration:200, property:'opacity', end:1, pin: true
    });

});