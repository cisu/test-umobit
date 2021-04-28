$(function() {

	SetUpGridCols();
    SetUpGridCols2();
    SetUpGridCols3();
    SetUpGridCols4();
    SetUpGridCols5();
    SetUpGridCols6();
    SetUpGridCols7();
    SetUpGridCols8();

    swiper();
    menu();
    rewardBox();
    count($(".share"),$("span.share-counter"),2);
    share();
    lineChart();
    programs();
    parallax();
    nyxterini();
    billAnalysis();
    rewardsMargin();
    remodal();
    click2Call();
    header();
    ds();
    companyProfile();
    scrollDown();
    sharedSection();
    capitalShareShip();
    customSelect();
    activities();
    syncCharts();
    iframeContainer();
    upRewards();
    introModal();
    
})

$(window).resize(function() {

    SetUpGridCols();
    SetUpGridCols2();
    SetUpGridCols3();
    SetUpGridCols4();
    SetUpGridCols5();
    SetUpGridCols6();
    rewardsMargin();
    
})

$(window).scroll(function() {

    rewardBox();
    header();

}) 

$(window).on("load",function(){
    gridCounter();

    $(".loader").fadeOut(function() {        
        energyAnimations();
    });

});

function iframeContainer() {
    $(".plain_content").find("iframe").each(function() {
        $(this).removeAttr("height width").addClass("embed-responsive-item").wrap("<div class='embed-responsive embed-responsive-16by9'></div>");
    });
}

function gridCounter() {
    if($(".grid-counter").length) {
        $('.grid-counter').counterUp({
            delay: 10,
            time: 800,
            offset: 100,
            beginAt: 0,
        });     
    } 
}

function mScrollbar(element) {
    $(element).unbind("mousewheel");
    $(element).mCustomScrollbar({
        mouseWheel:{ 
            enable: true,
            preventDefault: true,
        },
        theme: "inset",
    });
}

function syncCharts() {
    
    $('#stock-chart-small').bind('mousemove touchmove touchstart', function (e) {
        var chart,
            point,
            i,
            event;

        for (i = 0; i < Highcharts.charts.length; i = i + 1) {
            chart = Highcharts.charts[i];
            event = chart.pointer.normalize(e.originalEvent); 
            point = chart.series[0].searchPoint(event, true); 

            if (point) {
                point.highlight(e);
            }
        }
    });
    
    Highcharts.Pointer.prototype.reset = function () {
        return undefined;
    };

    
    Highcharts.Point.prototype.highlight = function (event) {
        this.onMouseOver(); 
        this.series.chart.tooltip.refresh(this); 
        this.series.chart.xAxis[0].drawCrosshair(event, this); 
    };

    
     
    function syncExtremes(e) {
        var thisChart = this.chart;

        if (e.trigger !== 'syncExtremes') { 
            Highcharts.each(Highcharts.charts, function (chart) {
                if (chart !== thisChart) {
                    if (chart.xAxis[0].setExtremes) { 
                        chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, { trigger: 'syncExtremes' });
                    }
                }
            });
        }
    }

    var syncChart = "#stock-chart-small";
    var data;

    if (syncChart.length && typeof rawData !== 'undefined') {

        var prices = [],
        volume = [],
        dataLength = rawData.length;

        for (var i = 0; i < dataLength; i += 1) {
            prices.push([
                parseInt(rawData[i].date), 
                parseFloat(rawData[i].a), 
            ]);

            volume.push([
                parseInt(rawData[i].date), 
                parseInt(rawData[i].b), 
            ]);
        }

        $('<div class="chart1">')
        .appendTo('#stock-chart-small')
        .highcharts({
            chart: {
                marginLeft: 40, 
                spacingTop: 20,
                spacingBottom: 20,
                zoomType: 'x',
                height: '210px'
            },
            title: {
                text: lblClosurePrice,
                align: 'left',
                margin: 40,
                style: {
                    color: '#004e96',
                    fontWeight: 600,
                    fontFamily: 'PFFuturaNeu'
                }                    
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { 
                    month: '%e. %b %y',
                    year: '%b %Y'
                },
                crosshair: true,
                events: {
                    setExtremes: syncExtremes
                },
                tickWidth: 0,
            },
            yAxis: {
                tickLength: 40,
                tickWidth: 1,
                tickColor: "#dedede",
                gridLineColor: "#dedede",
                lineColor: "#dedede",
                title: {
                    text: null
                },
                labels: {
                    y: -10,
                    x: -40,
                    align: "left"
                }
            },
            series: [{
                data: prices,
                name: lblClosurePrice,
                type: "line",
                color: "#0bb1e3",
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' '
                }
            }]
        });

        $('<div class="chart2">')
        .appendTo('#stock-chart-small')
        .highcharts({
            chart: {
                marginLeft: 40, 
                spacingTop: 20,
                spacingBottom: 20,
                zoomType: 'x',
                height: '210px'
            },
            title: {
                text: lblVolume,
                align: 'left',
                margin: 40,
                style: {
                    color: '#004e96',
                    fontWeight: 600,
                    fontFamily: 'PFFuturaNeu'
                }                    
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { 
                    month: '%e. %b %y',
                    year: '%b %Y'
                },
                crosshair: true,
                events: {
                    setExtremes: syncExtremes
                },
                tickWidth: 0,
            },
            yAxis: {
                tickLength: 40,
                tickWidth: 1,
                tickColor: "#dedede",
                gridLineColor: "#dedede",
                lineColor: "#dedede",
                title: {
                    text: null
                },
                labels: {
                    y: -10,
                    x: -40,
                    align: "left"
                }
            },
            series: [{
                data: volume,
                name: lblVolume,
                type: "column",
                color: "#0bb1e3",
                pointWidth: 8,
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' '
                }
            }]
        });
    }
}

function activities() {
    anime({
        targets: '.lamp-line',
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [0, 1],
        easing: 'steps(5)',
        duration: 1200,
        loop: true,
        direction: 'alternate',
    });

    var tl = anime.timeline({
        loop: true
    });

    tl
    .add({
        targets: '#drop',
        opacity: [0, 1],
        translateY: [-250, 0],
        easing: 'easeInOutSine',
        duration: 3000
    })
    .add({
        targets: '.drop-shadow',
        opacity: [0, 1],
        easing: 'easeInOutSine',
        delay: anime.stagger(300),
        duration: 3000
    }, '-=400')
    .add({
        targets: '#drop',
        opacity: [1, 0],
        easing: 'easeInOutSine',
        duration: 900
    }, '-=1000')
    .add({
        targets: '.drop-shadow',
        opacity: [1, 0],
        easing: 'easeOutSine',
        delay: anime.stagger(300),
        duration: 700
    }, '-=100');

    var tl2 = anime.timeline({
        loop: true
    });

    tl2
    .add({
        targets: '#syrmatosxoina, .activity-box-6 #container',
        translateX: [400, 0],
        easing: 'easeInOutSine',
        duration: 3000
    })
    .add({
        targets: '#syrmatosxoina line',
        y1: 871,
        easing: 'easeOutSine',
        duration: 2000   
    })
    .add({
        targets: '.activity-box-6 #container',
        translateY: 501,
        easing: 'easeOutSine',
        duration: 2000   
    },'-=2000')
    .add({
        targets: '#syrmatosxoina line',
        y1: 371.5,
        easing: 'easeOutSine',
        duration: 2000   
    },'+=2000')
    .add({
        targets: '.activity-box-6 #container',
        translateY: 0,
        easing: 'easeOutSine',
        duration: 2000   
    },'-=2000')
    .add({
        targets: '#syrmatosxoina, .activity-box-6 #container',
        translateX: [0, 400],
        easing: 'easeInOutSine',
        duration: 3000
    },'+=1000');

    anime({
        targets: '#trypani',
        translateX: [-1, 1],
        translateY: [1, -1],
        easing: 'easeInOutSine',
        duration: 100,
        loop: true
    });

    anime({
        targets: '#trypani #XMLID_8_',
        translateX: [-3.5, 1],
        easing: 'easeInOutSine',
        duration: 100,
        loop: true
    });

    anime({
      targets: '#Layer_1 .trypani0',
      opacity: [0, 1],
      keyframes: [
        {translateY: -5},
        {translateY: 10},
      ],
      duration: 100,
      delay: anime.stagger(50),
      loop: true
    });

    var tl3 = anime.timeline({
        loop: true,
        easing: 'easeInOutSine',
    });

    tl3
    .add({
      targets: '#drop_3',
      translateY: [-40, 20],
      opacity: [1, 0],
      duration: 2000   
    })
    .add({
      targets: '#drop_2',
      translateY: [-30,20],
      opacity: [0, 1, 0],
      duration: 2000,
    }, '-=1500')
    .add({
      targets: '#drop_1',
      translateY: [-10, 20],
      opacity: [0, 1, 0],
      duration: 2000,
    }, '-=1500');

    var tl4 = anime.timeline({
        loop: true,
        easing: 'easeOutQuint',
    });

    tl4
    .add({
      targets: '#cloud',
      translateY: [0, -50],
      translateX: [0, 25],
      scale: [.5, 1],
      duration: 3000,  
    })
    .add({
        targets: '#cloud',
        opacity: [1, 0],
        duration: 3000,  
    }, '-=1000');

    if($('.activity-counter').length) {
    	$('.activity-counter').counterUp({
	        delay: 10,
	        time: 800,
	        offset: 100,
	        beginAt: 100,
	        formatter: function (n) {
	          return n.replace(/,/g, '.');
	        }
	    });
    }  
}

function customSelect() {
    $('.js-example-basic-single').select2({
        minimumResultsForSearch: -1,
        width : "100%"
    });

    $(".select2").addClass("fire");
}

$('.js-example-basic-single').on('select2:open', function (e) {
    $(".select2-results__options").unbind("mousewheel");
    $(".select2-dropdown").mCustomScrollbar({
        mouseWheel:{ 
            enable: true,
            preventDefault: true,
        },
        theme: "inset",
    });
});

function capitalShareShip() {
    $(".capital_share,.ship").find(".from-left,.from-right").waypoint(function() {
        $(this.element).addClass("fire").removeClass("opacity-0");
    },{offset: "65%"});
}

function sharedSection() {
    $(".shared_section .shared_section_content,.industry_contact .industry_section_contact").waypoint(function() {
        $(this.element).addClass("fire").removeClass("opacity-0");
    },{offset: "65%"});
}

function scrollDown() {
    $(".scroll-btn").click(function() {
        var section = $(this).parent("main").next();
        var header;
        $("html,body").stop().animate({scrollTop: section.offset().top - 63.75}, 500);
    });
}

function ds() {
    $(".ds button").each(function() {
        $(this).waypoint(function() {
            $(this.element).removeClass("opacity-0").addClass("fire");
        }, {offset: "75%"});
    });

    $(".ds button").click(function() {
        $(this).find(".circle-plus-wrapper").toggleClass("opened");
    });
}

function click2Call() {
    if($(".click2call-btn").length) {
        $(".click2call-btn").click(function(e) {
            e.preventDefault();

            var inst = $('[data-remodal-id=click2call]').remodal();
            inst.open();
        })
    }  

    $(document).on('opening', '[data-remodal-id=click2call]', function () {
        $("<div>",{class:"resp-container"}).appendTo($("[data-remodal-id=click2call]"));
        $("<iframe>",{src:$('[data-remodal-id=click2call]').data('remodal-id'),class:"resp-iframe"}).appendTo($(".resp-container"));
    });

    $(document).on('closed', '[data-remodal-id=click2call]', function (e) {
        $("[data-remodal-id=click2call]").find(".resp-container").remove();
    });
}

function rewardMaxHeight() {
     $(".max-height-para").mCustomScrollbar({
        mouseWheel:{ enable: true },
        theme: "rounded-dots-dark"
    });
}

function swiper() {

    var mySwiper = new Swiper ('.swiper-container', {
        loop: false,
        zoom: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    })
    
    $(".swiper-container").each(function() {

        if($(this).find(".swiper-slide").length == 1) {
            $(this).find(".swiper-pagination").hide();
        }
    })
  
}

function SetUpGridCols() {
    var viewportWidth = $(window).width() + getScrollBarWidth();

    if($(".grid_col").length) {
        if (viewportWidth > 767) {
            $('.grid_col').matchHeight
            ({
                byRow: false,
                property: 'height',
                target: null,
                remove: false
            });
        } else {
            $('.grid_col').matchHeight({ remove: true });

        }
    }
}

function SetUpGridCols2() {
    var viewportWidth = $(window).width() + getScrollBarWidth();

    if($(".grid_col2").length) {
        if (viewportWidth > 767) {
            $('.grid_col2').matchHeight
            ({
                byRow: false,
                property: 'height',
                target: null,
                remove: false
            });
        } else {
            $('.grid_col2').matchHeight({ remove: true });

        }
    }
}

function SetUpGridCols3() {
    var viewportWidth = $(window).width() + getScrollBarWidth();

    if($(".grid_col3").length) {
        if (viewportWidth > 767) {
            $('.grid_col3').matchHeight
            ({
                byRow: false,
                property: 'height',
                target: $(".right-img"),
                remove: false
            });
        } else {
            $('.grid_col3').matchHeight({ remove: true });

        }
    }
}

function SetUpGridCols4() {
    var viewportWidth = $(window).width() + getScrollBarWidth();

    if($(".grid_col4").length) {
        if (viewportWidth > 767) {
            $('.grid_col4').matchHeight
            ({
                byRow: false,
                property: 'height',
                target: null,
                remove: false
            });
        } else {
            $('.grid_col4').matchHeight({ remove: true });

        }
    }
}

function SetUpGridCols5() {
    var viewportWidth = $(window).width() + getScrollBarWidth();

    if($(".grid_col5").length) {
        if (viewportWidth > 767) {
            $('.grid_col5').matchHeight
            ({
                byRow: false,
                property: 'height',
                target: null,
                remove: false
            });
        } else {
            $('.grid_col5').matchHeight({ remove: true });

        }
    }
}

function SetUpGridCols6() {
    var viewportWidth = $(window).width() + getScrollBarWidth();

    if($(".grid_col6").length) {
        if (viewportWidth > 767) {
            $('.grid_col6').matchHeight
            ({
                byRow: false,
                property: 'height',
                target: null,
                remove: false
            });
        } else {
            $('.grid_col6').matchHeight({ remove: true });

        }
    }
}

function SetUpGridCols7() {
    if($(".grid_col7").length) {
        $('.grid_col7').matchHeight
        ({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
    }
}

function SetUpGridCols8() {
    if($(".grid_col8").length) {
        $('.grid_col8').matchHeight
        ({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
    }
}

function companyProfile() {

	if($('.infrastructure-counter').length) {
		$('.infrastructure-counter').counterUp({
	        delay: 10,
	        time: 800,
	        offset: 100,
	        beginAt: 0,
	        formatter: function (n) {
	          return n.replace(/,/g, '.');
	        }
	    });
	}

    var smokeAnimation = anime({
        targets: '#Smoke',
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [1, 0],
        easing: 'easeOutCubic',
        duration: 3000,
        loop: true
    });

    var wheelsAnimation = anime({
        targets: '#Front_Wheel,#Back_Wheel, #Middle_Wheel',
        keyframes: [
            {translateY: 0},
            {translateY: 2},
        ],
        duration: 300,
        easing: 'easeInOutBounce',
        loop: true
    });

    var wavesAnimation = anime({
        targets: '#Waves',
        strokeDashoffset: [0, anime.setDashoffset],
        easing: 'linear',
        duration: 30000,
        loop: true,
    });
    
}    

function menu() {

    var delay = 0;
    var counter = 0;

    mScrollbar(".main-menu .mycontainer,.sub-menu .mycontainer");

    counterDelay($(".main-menu .nav"),counter,delay,0.1); 

    counterDelay($(".main-menu h5"),counter,delay,0.1);    

    $(".sub-menu,#energy-menu").each(function() {
        counterDelay($(this).find(".col-sm-6 > .nav"),counter,delay,0.1); 

        counterDelay($(this).find("h5"),counter,delay,0.1);  

        counterDelay($(this).find("h6"),counter,delay,0.1);  
    })

    $("header .hamburger").click(function() {
        $(this).toggleClass("is-active");
        $("body").toggleClass("overflow-hidden");
        if($("header").hasClass("sticky-header")) {
            $("header").toggleClass("remove-sticky-header");
        }
        $(".main-menu").toggle("slide", { direction: "right" }, function() {
            $(".main-menu .menu-box").toggleClass("fire opacity-0");
            $(".main-menu:not(#energy-menu) .border-left,.main-menu:not(#energy-menu) .border-top").toggleClass("animate-line");
            $(".main-menu:not(#energy-menu) h5,.main-menu:not(#energy-menu) .nav").toggleClass("fire opacity-0");
            $("#energy-menu").find(".col-sm-6 > .nav,h3,h5,h6").toggleClass("fire opacity-0");
            $("#energy-menu").find(".border-left,.border-bottom").toggleClass("animate-line");
        });
        if($(".map .filters-box").hasClass("toggle-filters")) {
            $(".map .filters-box").removeClass("toggle-filters")
        }
    })

    $("header .fixed-btn").click(function() {
        $(this).find(".hamburger-inner").toggleClass("top-0");
    })

    $(".main-menu a.open-sub-menu").click(function(e) {
        e.preventDefault();
        var menuId = $(this).data("id");
        $(".sub-menu[id='"+menuId+"']").toggle("slide", { direction: "left" }, 500, function() {
            $(this).find(".back-menu").addClass("slideInRight").removeClass("opacity-0");
            $(this).find(".menu-overlay").toggle("slide", {direction: "right"}, 300);
            $(this).find(".col-sm-6 > .nav,h3,h5,h6").addClass("fire").removeClass("opacity-0");
            $(this).find(".border-left,.border-bottom").addClass("animate-line");
            $(".main-menu").fadeOut();
        });
    })

    $(".sub-menu .back-menu").click(function() {
        $(this).addClass("rotate180");
        $(".main-menu").show();
        $(".sub-menu:visible").toggle("slide", { direction: "right" }, 500, function() {
            $(this).find(".back-menu").removeClass("slideInRight rotate180").addClass("opacity-0");
            $(this).find(".menu-overlay").toggle("slide", {direction: "left"});
            $(this).find(".col-sm-6 > .nav,h3,h5,h6").removeClass("fire").addClass("opacity-0");
            $(this).find(".border-left,.border-bottom").removeClass("animate-line");
        })   
    })

    $(".search-btn").click(function(e) {
        e.preventDefault();

        $(".search-menu").slideDown();
    })

    $(".search-menu .close-btn").click(function(e) {
        e.preventDefault();

        $(".search-menu").slideUp();
    })

}

function header() {
    var headerHeight = $("header").outerHeight();
    var scrollTop = $(window).scrollTop();

    if(scrollTop > headerHeight) {
        $("header a.btn.border-effect,header .burger-btn .hamburger .circle,header .search .search-btn .circle").removeClass("opacity-0");
        $("header .search").removeClass("mr-4").addClass("mr-5");
        $("header .burger-btn.static-btn").addClass("d-none"); 
        $("header .burger-btn.fixed-btn").removeClass("d-none");  
        $("header").addClass("sticky-header");     
        if($(".map .filters-box").hasClass("toggle-filters")) {
            $(".map .filters-box").removeClass("toggle-filters")
        }
    } else {   
        $("header a.btn.border-effect,header .burger-btn .hamburger .circle,header .search .search-btn .circle").addClass("opacity-0");
        $("header .search").addClass("mr-4").removeClass("mr-5");
        $("header .burger-btn.static-btn").removeClass("d-none"); 
        $("header .burger-btn.fixed-btn").addClass("d-none");  
        $("header").removeClass("sticky-header");         
    }

}

function counterDelay(element,counter,delay,delayTime) {
    element.each(function() {

        if (counter == 0) {
            delay = 0;
        } else {
            delay += delayTime;
        }

        $(this).css("transition-delay", delay + "s");

        counter++;
    })
}

function rewardBox() {
    if($(".reward:not(.payment-reward)").length) {
        var windowBottom = $(window).height() + $(window).scrollTop();
        var flag = false;
        var count = 0;

        if(flag == false) {
            $(".reward:not(.payment-reward)").each(function() {
                var objectBottom;

                if($(this).find(".reward-box").hasClass("top")) {
                    objectBottom = ($(this).offset().top - 800) + $(this).outerHeight();
                } else {
                    objectBottom = ($(this).offset().top - 300)  + $(this).outerHeight();
                }

                if(windowBottom > objectBottom) {
                    $(this).find(".reward-box").slideDown(500, function() {
                        $(this).find(".from-bottom,.from-right,.from-top,.from-left").addClass("fire").removeClass("opacity-0");
                        $(this).find("hr").addClass("width-40");
                    });
                }
            })
        }

        if($(".reward:not(.payment-reward) .reward-box").last().is(":visible")) {
            flag = true;
        }
    } 

    if($(".reward.payment-reward").length) {
        var windowBottom = $(window).height() + $(window).scrollTop();
        var flag = false;
        var count = 0;

        if(flag == false) {
            $(".reward.payment-reward").each(function() {
                var objectBottom;

                if($(this).find(".reward-box").hasClass("top")) {
                    objectBottom = ($(this).offset().top - 300) + $(this).outerHeight();
                } else {
                    objectBottom = ($(this).offset().top - 100)  + $(this).outerHeight();
                }

                if(windowBottom > objectBottom) {
                    $(this).find(".reward-box").slideDown(300);
                }
            })
        }

        if($(".reward.payment-reward .reward-box").last().is(":visible")) {
            flag = true;
        }
    } 
}

function rewardsMargin() {  
    var width = $(window).width() + getScrollBarWidth();

    if(width > 767) {
        $(".rewards").each(function() {
            if ($(this).siblings('.energy-info').length) {
                $(this).find(".reward").last().addClass("no-margin-bottom");
                $(this).find(".reward").last().children(".position-relative").addClass("no-margin-bottom");
                $(this).find(".reward").eq(-2).addClass("no-margin-bottom");
                $(this).find(".reward").eq(-2).children(".position-relative").addClass("no-margin-bottom");
            }
        })
    } else {
        $(".rewards").each(function() {
            if ($(this).siblings('.energy-info').length) {
                $(this).find(".reward").last().removeClass("no-margin-bottom");
                $(this).find(".reward").last().children(".position-relative").removeClass("no-margin-bottom");
                $(this).find(".reward").eq(-2).removeClass("no-margin-bottom");
                $(this).find(".reward").eq(-2).children(".position-relative").removeClass("no-margin-bottom");
            }
        })
    }

}



function count(el1,el2,dec) {
    var share = el1;
    var $count = el2;

    if(share.length) {
        share.waypoint(function() {
            $count.each(function () {

                var $attr = $(this).attr('data-duration'),
                    $duration = (typeof $attr === typeof undefined && $attr !== false) ? 3500 : parseInt($attr),
                    counter,dataCounter, decimals = 0;


                if ($(this).data('value') % 1 === 0) {
                    counter = parseInt($(this).text());
                    dataCounter = parseInt($(this).attr('data-value'));
                } else {
                    counter = parseFloat($(this).text());
                    dataCounter =  parseFloat($(this).attr('data-value'));
                    decimals = dec;
                }

                $(this).prop('Counter', 0).animate({
                    Counter: counter, Counter: dataCounter
                }, {
                    duration: $duration,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Number(now).toFixed(decimals));
                    }
                });

            });

            if (!$count.length)
                return;

        }, {offset: "60%"})
    }
}

function share() {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
      triggerElement: ".share-img",
      duration: "80%",
      triggerHook: 1
    })
    .setTween(TweenMax.from(".share-img",6,{y:"150px",ease:Power0.easeOut}))
    .addTo(controller);
}

function lineChart() {
    var $pricesChart = $('div.prices-chart-init'),
        $data = [];

    if ($pricesChart.length) {

        var prices = [],
            prices2 = [],
            volume = [],
            groupingUnits = [["day", [1]]],
            max = min = data[0][1],
            dataLength = data.length;

        for (var i = 0; i < dataLength; i += 1) {
            prices.push([
                data[i][0], 
                data[i][1], 
            ]);

           
            volume.push([
                data[i][0], 
                data[i][2], 
            ]);

            if (max < data[i][1]) {
                max = data[i][1];
            }

            if (min > data[i][1]) {
                min = data[i][1];
            }


        }

        // create the chart
        $pricesChart.highcharts("StockChart", {
            chart: {
                spacingTop: 0,
                spacingRight: 60,
                spacingBottom: 25,
                height: '60%',
                style: {
                    fontFamily: 'Roboto Condensed'
                },
                zoomType: 'x'
            },
            rangeSelector: {
                enabled: false
            },
            xAxis: {
                tickPixelInterval: 60,
                tickWidth: 2,
                lineWidth: 1,
                lineColor: '#d9dadb',
                gridLineWidth: 2,
                gridlineColor: '#d9dadb',
                labels: {
                    y: 25,
                    style: {
                        fontSize: '10px',
                        color: '#666666',
                        fontWeight: '300'
                    }
                },
                dateTimeLabelFormats: { 
                    month: '%e. %b %y',
                    year: '%b %Y'
                },
            },
            yAxis: [
                {
                    labels: {
                        align: "right",
                        x: 35, 
                        format: "{value:.2f}",
                        style: {
                            fontSize: '10px',
                            color: '#666666',
                            fontWeight: '300'
                        }
                    },
                    title: {
                        text: '',
                    },
                    height: "100%",
                    lineWidth: 1,
                    lineColor: '#d9dadb',
                    gridLineWidth: 2,
                    gridlineColor: '#d9dadb',
                    min: min,
                    max: max,
                    tickAmount: 4,
                    tickInterval: 2.5
                },
                {
                    top: '50%',
                    height: '50%',
                    offset: 0,
                }
            ],
            scrollbar: {
                enabled: false
            },
            navigator: {
                enabled: false
            },
            series: [
                {
                    type: "line",
                    color: '#ed1c24',
                    name: txtClosure,
                    data: prices,
                    dataGrouping: {
                        units: groupingUnits
                    },
                    threshold: null,
                    marker: {
                        fillColor: '#80a5c4',
                    },
                    tooltip: {
                        valueDecimals: 2
                    }
                },
            ]
        });

    }
}

function energyAnimations() {

    $(".main-img-container .slider-box").find(".from-top,.from-bottom,.from-right,.from-left").addClass("fire").removeClass("opacity-0");

    if($(".energy-tips").length) {
         $(".energy-tips h2,.energy-tips h3").waypoint(function() {
            $(this.element).addClass("zoomIn").removeClass("opacity-0");
        },{offset: "85%"});

        $(".energy-tips .from-right,.energy-tips .from-bottom").waypoint(function() {
            $(this.element).addClass("fire").removeClass("opacity-0");
        },{offset: "85%"});

        $(".energy-tips a").waypoint(function() {
            $(this.element).addClass("fadeInUp").removeClass("opacity-0");
        },{offset: "85%"});

    }

    var boxCounter = 0;
    var boxDelay = 0; 

    $(".energy-tips .from-right").each(function() {      

        if(boxCounter == 6) {
            boxCounter = 0;
        }

        if(boxCounter == 0) {
            boxDelay = 0;
        } else {
            boxDelay += 0.2;
        }

        boxCounter++;

        $(this).css("transition-delay", boxDelay + "s");
        
    });  
}

function programs() {
    $(".portrait").each(function() {
        var controller = new ScrollMagic.Controller();

        var scene = new ScrollMagic.Scene({
          triggerElement: this,
          duration: "100%",
          triggerHook: 1
        })

        var timeline = new TimelineMax();

        var tween1 = TweenMax.to(this.querySelectorAll(".portrait-top,.portrait-bottom"),10,{width:"100%",ease:SlowMo.easeIn});
        var tween2 = TweenMax.to(this.querySelectorAll(".portrait-left,.portrait-right"),10,{height:"100%",ease:SlowMo.easeIn});

        timeline.add(tween1).add(tween2);
        scene.setTween(timeline)
        scene.addTo(controller);
    })

    $(".portrait-content").each(function() {
        var controller = new ScrollMagic.Controller();

        var scene = new ScrollMagic.Scene({
          triggerElement: this,
          duration: "70%",
          triggerHook: 1
        })

        var timeline = new TimelineMax();

        var tween1 = TweenMax.from(this.querySelectorAll("h3"),10,{x:"-40px",opacity: 0,ease:SlowMo.easeOut});
        var tween2 = TweenMax.from(this.querySelectorAll("h2"),10,{x:"40px",opacity: 0,ease:SlowMo.easeOut});

        timeline.add(tween1).add(tween2);
        scene.setTween(timeline)
        scene.addTo(controller);
    })

    $(".portrait-content hr").each(function() {
        var controller = new ScrollMagic.Controller();

        var scene = new ScrollMagic.Scene({
          triggerElement: this,
          duration: "60%",
          triggerHook: 1
        })
        .setTween(TweenMax.from(this,6,{width:"0",ease:SlowMo.easeOut}))
        .addTo(controller);
    })
    
}

function parallax() {
    $('div[data-parallax]').parallax({
        speed: 0.1,
        iosFix: true,
        androidFix: true,
        bleed: 250
    });
}

function nyxterini() {
    if($(".ti-kerdizo").length) {
        $(".ti-kerdizo").waypoint(function() {
            $(this.element).find(".ti-kerdizo-content").addClass("after");
        }, {offset: "65%"})
    }

    $(".ti-kerdizo").each(function() {
        var controller = new ScrollMagic.Controller();

        var scene = new ScrollMagic.Scene({
          triggerElement: this,
          duration: "65%",
          triggerHook: 1
        })

        var timeline = new TimelineMax();

        var tween1 = TweenMax.from(this.querySelectorAll(".ti-kerdizo-img > .position-absolute"),1,{y:"75px",x:"75px",ease:SlowMo.easeOut});

        timeline.add(tween1);
        scene.setTween(timeline)
        scene.addTo(controller);
        scene.on("end", function(target){ 
            scene.destroy();
        });
    })

    var delay = 0;
    var counter = 0;

    counterDelay($(".nyxterino_exohiko_content .my-grid .row div"),counter,delay,0.1); 

    if($(".steps").length) {
        $(".steps").find(".from-right,hr,.step").waypoint(function() {
            $(this.element).addClass("fire").removeClass("opacity-0");
        }, {offset: "100%"})
    }

    counterDelay($(".steps .from-right,.steps hr,.steps .step"),counter,delay,0.1); 

    if($(".nyxterino_exohiko").length) {
        $(".nyxterino_exohiko").waypoint(function() {
            $(this.element).find(".nyxterino_exohiko_content .my-grid .row div").addClass("fire");
        }, {offset: "40%"})
    }

    $(".nyxterino_exohiko").each(function() {
        var controller = new ScrollMagic.Controller();

        var scene = new ScrollMagic.Scene({
          triggerElement: this,
          duration: "100%",
          triggerHook: 1
        })

        var timeline = new TimelineMax();

        var tween1 = TweenMax.from(this.querySelectorAll(".mycontainer .col"),1,{x:"-100px",ease:SlowMo.easeOut});

        timeline.add(tween1);
        scene.setTween(timeline)
        scene.addTo(controller);
        scene.on("end", function(target){ 
            scene.destroy();
        });
    })
}

function complaintsForm() {
    $("#complaints_form button[type='submit']").click(function () {

        if ($('#complaints_form').valid()) {
            $('#complaints_form').submit(function (e) {
                e.preventDefault();
                var email = $("#complaintsEmail").val();
                var name = $("#complaintsName").val();
                var department = $("#department option:selected").val();
                var message = $("#complaintsMessage").val();

                alert("Form Submitted");
                console.log(message);

                $.ajax({
                    type: "POST",
                    url: "",
                    data: {
                        email: email,
                        name: name, 
                        department: department,
                        message: message
                    },
                    dataType: 'json',
                    success: function (data) {

                    }
                    , error: function () {
                        
                    }

                });
            });
        }

    });


    $("#complaints_form").validate({
        errorElement: "span",
        errorElementClass: 'input-validation-error',
        errorClass: 'field-validation-error',
        errorPlacement: function (error, element) {
            if(element[0].type == "checkbox") {
                error.insertAfter(element.parent());
            } else {
                error.appendTo(element.parent());
            }    
        },
        rules: {
            complaintsEmail: {
                required: true,
                email: true
            },
            complaintsName: "required",
            department: "required",
            complaintsMessage: "required",
            "complaints_gdpr_checkbox[]": { 
                required: true, 
                minlength: 1 
            }
        },
        messages: {
            complaintsEmail: $("#complaintsEmail").data("error"),
            complaintsName: $("#complaintsName").data("error"),
            department: $("#department").data("error"),
            complaintsMessage: $("#complaintsMessage").data("error"),
            "complaints_gdpr_checkbox[]": $("input[name='complaints_gdpr_checkbox[]']").data("error")
        }
    })
}

function customerForm () {
    $("#customer_form button[type='submit']").click(function () {

        if ($('#customer_form').valid()) {
            $('#customer_form').submit(function (e) {
                e.preventDefault();
                var name = $("#customerName").val();
                var lastname = $("#customerLastname").val();
                var telephone = $("#customerTelephone").val();
                var email = $("#customerEmail").val();
                var city = $("#customerCity").val();
                var intererst = $("#interest option:selected").val();

                alert("Form Submitted");

                $.ajax({
                    type: "POST",
                    url: "",
                    data: {
                        name: name, 
                        lastname: lastname,
                        telephone: telephone,
                        email: email,    
                        city: city,
                        interest: interest                        
                    },
                    dataType: 'json',
                    success: function (data) {

                    }
                    , error: function () {
                        
                    }

                });
            });
        }

    });


    $("#customer_form").validate({
        errorElement: "span",
        errorElementClass: 'input-validation-error',
        errorClass: 'field-validation-error',
        errorPlacement: function (error, element) {
            if(element[0].type == "checkbox") {
                error.insertAfter(element.parent());
            } else {
                 error.appendTo(element.parent());
            }    
        },
        rules: {
            customerName: "required",
            customerLastname: "required",
            customerTelephone: {
              required: true,
              minlength: 10,
              maxlength: 10
            },
            customerEmail: {
                required: true,
                email: true
            },
            customerCity: "required",
            "customer_gdpr_checkbox[]": { 
                required: true, 
                minlength: 1 
            },
            interest: "required"

        },
        messages: {
            customerName: $("#customerName").data("error"),
            customerTelephone: $("#customerTelephone").data("error"),
            customerLastname: $("#customerLastname").data("error"),
            customerEmail: $("#customerEmail").data("error"),
            customerCity: $("#customerCity").data("error"),
            "customer_gdpr_checkbox[]": $("input[name='customer_gdpr_checkbox[]']").data("error"),
            intererst: $("#interest").data("error")
            
        }
    })

    $("#telephone").inputFilter(function(value) {
        return /^-?\d*$/.test(value); 
    });
}

function customerSupportForm() {
    $("#customer_support_form button[type='submit']").click(function () {

        if ($('#customer_support_form').valid()) {
            $('#customer_support_form').submit(function (e) {
                e.preventDefault();
                var name = $("#customerSupportName").val();
                var email = $("#customerSupportEmail").val();
                var message = $("#customerSupportMessage").val();

                alert("Form Submitted");
                
                $.ajax({
                    type: "POST",
                    url: "",
                    data: {                    
                        name: name, 
                        email: email,
                        message: message
                    },
                    dataType: 'json',
                    success: function (data) {

                    }
                    , error: function () {
                        
                    }

                });
            });
        }

    });


    $("#customer_support_form").validate({
        errorElement: "span",
        errorElementClass: 'input-validation-error',
        errorClass: 'field-validation-error',
        errorPlacement: function (error, element) {
            if(element[0].type == "checkbox") {
                error.insertAfter(element.parent());
            } else {
                 error.appendTo(element.parent());
            }    
        },
        rules: {
            supportName: "required",
            customerSupportEmail: {
                required: true,
                email: true
            },
            customerSupportMessage: "required",
            "customer_support_gdpr_checkbox[]": { 
                required: true, 
                minlength: 1 
            }
        },
        messages: {
            supportName: $("#supportName").data("error"),
            customerSupportEmail: $("#customerSupportEmail").data("error"),    
            customerSupportMessage: $("#customerSupportMessage").data("error"),
            "customer_support_gdpr_checkbox[]": $("input[name='customer_support_gdpr_checkbox[]']").data("error")
        }
    })
}

function billAnalysis() {

    var delay = 0;
    var counter = 0;

    $(".bill_analysis button").each(function() {

        $(this).find(".bill-analysis-info").each(function() {

            if (counter == 0) {
                delay = 0;
            } else {
                delay += 0.1;
            }

            $(this).css("transition-delay", delay + "s");

            counter++;

        })

        counter %= $(this).find(".bill-analysis-info").length;

        
    })

    $(".bill_analysis .collapse").on('shown.bs.collapse', function(){
        $(this).find(".bill-analysis-info").removeClass("opacity-0").addClass("fire");
    });

    $(".bill_analysis .collapse").on('hide.bs.collapse', function(){
        $(this).find(".bill-analysis-info").addClass("opacity-0").removeClass("fire");
    });

    $(".bill_analysis").first().addClass("pt-5");

    $(".bill_analysis button").click(function() {
        $(this).find("i").toggleClass("rotate180");
    })

}

function remodal() {

    if($(".remodal-btn").length) {
        $(".remodal-btn").click(function(e) {
            e.preventDefault();

            var inst = $('[data-remodal-id=modal]').remodal();
            inst.open();
        })
    }   

}

function upRewards() {
    if($('[data-remodal-id=video]').length) {
        $(".play_video").click(function(e) {
            e.preventDefault();
            var video = $(this).data("video");
            $('[data-remodal-id=video] iframe').attr("src", video);

            if($('[data-remodal-id=video] iframe').attr("src") !== "" || $('[data-remodal-id=video] iframe').attr("src") !== undefined) {
            	var inst = $('[data-remodal-id=video]').remodal();
            	inst.open(); 
            }    
        });

        $(document).on('closing', '#video', function (e) {
            $('[data-remodal-id=video] iframe').removeAttr("src");
        });
    }   

    $(".elin-grid .main-content.up_rewards .move_to").click(function(e) {
        e.preventDefault();
        $("html,body").animate({scrollTop: $(".elin-grid .download").offset().top - 63.75}, 800);
    });
}

function introModal() {

    if($('#introModal').length && (!$('.up_rewards').length)) {

        var modal = $('[data-remodal-id=intro-modal]').remodal();
        var session = window.sessionStorage.getItem("intro-modal");

        if (!session) {

            setTimeout(function () {
                modal.open();
            }, 2000);

        }

        $(document).on('closed', '#introModal', function (e) {
            window.sessionStorage.setItem('intro-modal', true);
        });

    }

    $(".elin-grid .main-content.up_rewards .move_to").click(function(e) {
        e.preventDefault();
        $("html,body").animate({scrollTop: $(".elin-grid .download").offset().top - 63.75}, 800);
    });
}


$.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
};

function getScrollBarWidth() {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);

    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return (w1 - w2);
};
