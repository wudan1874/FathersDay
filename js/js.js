$('body').bind('touchstart',function(event){
	event.preventDefault;
	return false
});
/* loading 动画 */

//获取除loading动画外所有图片
var imgList = $(document).find('img')
var imgNub = 0;
var loadingBox = $('.loadingBox').get(0);
var lbW = $(loadingBox).width();

imgList.each(function(i,item){
	imgList[i].src = imgList[i].getAttribute("_src");
	imgList[i].onload = function(){
	    imgNub++;
	    $('.loadingBox .du').css('-webkit-transform','translateX('+imgNub/imgList.length*lbW+'px')
	    $('.loadingBox .ke').css('-webkit-transform','translateX('+imgNub/imgList.length*lbW+'px')
	    if(imgNub==imgList.length){
	    	setTimeout(function(){
	    		$('#loading').hide();
	    		$('.hint').fadeIn();
	    		init()
	    	},1200)
	    }
	}
	imgList[i].onerror = function(){
		imgNub++;
	    $('.loadingBox .du').css('-webkit-transform','translateX('+imgNub/imgList.length*lbW+'px')
	    $('.loadingBox .ke').css('-webkit-transform','translateX('+imgNub/imgList.length*lbW+'px')
	    if(imgNub==imgList.length){
	    	setTimeout(function(){
	    		$('#loading').hide();
	    		$('.hint').fadeIn();
	    		init()
	    	},1200)
	    }
	}

})


//函数1 手指按下函数
var wrap = $('#wrap').get(0);
var audio = $('#audio').get(0);
var audio2 = $('#audio2').get(0);
var upNub = 0;
var ishint = true;

var nub1 = 0;
var nub2 = 0;
wrap.timer1 = null;
wrap.timer2 = null;
function init(){
	wrap.addEventListener('touchstart',start,false)
	wrap.addEventListener('touchend',end,false)
}



var cW = document.body.clientWidth;
var cH = document.body.clientHeight;

var babyIcon = $('.baby .icon div')
var loveIcon = $('.love .icon div')
var trainIcon = $('.train .icon div')
var collegeIcon = $('.college .icon div')
var graduateIcon = $('.graduate .icon div')
var jobIcon = $('.job .icon div')
var workIcon = $('.work .icon div')
var b = [];
var bH = 0;


var zheng = true;

function start(ev){
	if(ev.touches.length==1){
		wrap.timer1 = setInterval(function(){
			if(zheng){
				nub1+=20
				zhengxu()
			}else{
				nub1-=20
				fanxu()
			}
		},20)
			//-----------------------------------------------------

		if(ishint){
			$('.hint').fadeOut(200)
			ishint = false;
		}
		$('#drag').fadeOut(200,function(){
			if(upNub==1){
				$('.drag1').addClass('drag1Move')
			}else if(upNub==2){
				$('.drag2').addClass('drag2Move')
			}else if(upNub==3){
				$('.drag3').addClass('drag3Move')
			}else{
				$('.drag4').addClass('drag4Move')
			}
		})
		audio.play()
	}
}

function end(ev){

	if(ev.touches.length==0){
		wrap.removeEventListener('touchstart',start)
		clearInterval(wrap.timer1)
		upNub++
		$('#drag').fadeIn(200,function(){
			if(upNub==1){
				$('.drag1').removeClass('drag1Move')
			}else if(upNub==2){
				$('.drag2').removeClass('drag2Move')
				$('#drag .text p').html('嘛呢小子，<br>别松开呀!精彩的还在后面呢！')
			}else if(upNub==3){
				$('.drag3').removeClass('drag3Move')
				$('#drag .text p').html('别松手，<br>老司机开车带你走！')
			}else if(upNub==4){
				$('.drag4').removeClass('drag4Move')
				$('#drag .text p').html('哎呦我去！<br>麻溜把你的小手放上来！')
			}else{
				$('#drag .text p').html('再松手我们的小船就要翻啦！')
				$('.drag4').removeClass('drag4Move')
			}
			wrap.addEventListener('touchstart',start,false)
		});
		audio.pause()
	}
}


var tishi = $('#tishi').get(0);
tishi.timer = null
tishiNub = 0;



//正序
function zhengxu(){
	if(nub1>0&&nub1<2000){
		if(nub1==20){
			$('.yuan').addClass('kedoushang');
			$('.tadpole').addClass('kedoushang');
		}
		if(nub1==1520){
			$('.say1 img').addClass('bounceIn')
			$('.say1 img').removeClass('bounceOut')
		}
	}
	if(nub1>1000&&nub1<7000){
		if(nub1==3020){
			$('.say1 img').addClass('bounceOut')
			$('.say1 img').removeClass('bounceIn')
			$('#wrap').css('background','#94bce0')
			$('.tadpoleImg2').removeClass('tadpoleImg02');
			$('.babyImg1').addClass('babyImg01')
		}else if(nub1==3500){
			$('.tadpoleImg5').removeClass('tadpoleImg05');
			$('.babyImg2').addClass('babyImg02')
		}else if(nub1==4000){
			$('.tadpoleImg6').removeClass('tadpoleImg06');
			$('.babyImg3').addClass('babyImg03')
		}else if(nub1==4500){
			$('.tadpoleImg4').removeClass('tadpoleImg04');
			$('.babyImg4').addClass('babyImg04')
		}else if(nub1==4980){
			$('.tadpoleImg3').removeClass('tadpoleImg03');
			$('.babyImg6').addClass('babyImg06')
			$('.babyImg5').addClass('babyImg05')

			$('.say2 img').addClass('bounceIn')
			$('.say2 img').removeClass('bounceOut')
		}
	}
	if(nub1>6000){
		$('.say2 img').addClass('bounceOut')
		$('.say2 img').removeClass('bounceIn')
	}
	// ----------------------------------------------
	if(nub1>7000&&nub1<11000){
		$('#wrap').css('background','#ec8282')
		if(nub1==7020){
			$('.babyImg1').removeClass('babyImg01');
			$('.babyImg3').removeClass('babyImg03');

			$('.loveImg1').addClass('loveImg01')
			$('.loveImg2').addClass('loveImg02')
		}else if(nub1==7500){
			$('.babyImg4').removeClass('babyImg04');

			$('.loveImg3').addClass('loveImg03')
		}else if(nub1==8000){
			$('.babyImg6').removeClass('babyImg06');

			$('.loveImg4').addClass('loveImg04')
			$('.loveImg5').addClass('loveImg05')
		}else if(nub1==8500){
			$('.babyImg2').removeClass('babyImg02');

			$('.loveImg6').addClass('loveImg06')
		}else if(nub1==8980){
			$('.babyImg5').removeClass('babyImg05');
			$('.loveImg7').addClass('loveImg07');

			$('.say3 img').addClass('bounceIn')
			$('.say3 img').removeClass('bounceOut')
		}
	}

	if(nub1>10000){
		$('.say3 img').addClass('bounceOut')
		$('.say3 img').removeClass('bounceIn')
	}
	// --------------------------------------
	if(nub1>11000&&nub1<15000){
		$('#wrap').css('background','#73ca85')
		if(nub1==11020){
			$('.loveImg1').removeClass('loveImg01')
			$('.loveImg2').removeClass('loveImg02')

			$('.trainImg2').addClass('trainImg02')
		}else if(nub1==11500){
			$('.loveImg3').removeClass('loveImg03')

			$('.trainImg3').addClass('trainImg03')
		}else if(nub1==12000){
			$('.loveImg4').removeClass('loveImg04')
			$('.loveImg5').removeClass('loveImg05')


			$('.trainImg4').addClass('trainImg04')
		}else if(nub1==12500){
			$('.loveImg6').removeClass('loveImg06')

			$('.trainImg5').addClass('trainImg05')
		}else if(nub1==12980){
			$('.loveImg7').removeClass('loveImg07')

			$('.trainImg1').addClass('trainImg01')

			$('.say4 img').addClass('bounceIn')
			$('.say4 img').removeClass('bounceOut')
		}
	}
	if(nub1>14000){
		$('.say4 img').addClass('bounceOut')
		$('.say4 img').removeClass('bounceIn')
	}
	//------------------------------

	
	if(nub1>15000&&nub1<19000){
		$('#wrap').css('background','#7dd5d4')
		if(nub1==15020){
			$('.trainImg1').removeClass('trainImg01').addClass('trainImg001')
		}else if(nub1==15500){
			$('.trainImg5').removeClass('trainImg05')
			$('.collegeImg1').addClass('collegeImg01')
		}else if(nub1==16000){
			$('.trainImg4').removeClass('trainImg04')
			$('.collegeImg2').addClass('collegeImg02')
		}else if(nub1==16500){
			$('.trainImg3').removeClass('trainImg03')
			$('.collegeImg3').addClass('collegeImg03')
		}else if(nub1==16980){
			$('.trainImg2').removeClass('trainImg02')
			$('.collegeImg4').addClass('collegeImg04')
			$('.collegeImg5').addClass('collegeImg05')

			$('.say5 img').addClass('bounceIn')
			$('.say5 img').removeClass('bounceOut')
		}

	}
	if(nub1>18000){

		$('.say5 img').addClass('bounceOut')
		$('.say5 img').removeClass('bounceIn')
	}
	
	//------------------------------------------------
	if(nub1>19000&&nub1<23000){
		$('#wrap').css('background','#e5de8d')

		if(nub1==19020){
			$('.collegeImg5').removeClass('collegeImg05')
			$('.graduateImg5').addClass('graduateImg05')
		}else if(nub1==19500){
			$('.collegeImg2').removeClass('collegeImg02')
			$('.graduateImg3').addClass('graduateImg03')
		}else if(nub1==20000){
			$('.collegeImg3').removeClass('collegeImg03')
			$('.graduateImg4').addClass('graduateImg04')
		}else if(nub1==20500){
			$('.collegeImg4').removeClass('collegeImg04')
			$('.graduateImg2').addClass('graduateImg02')
		}else if(nub1==20980){
			$('.collegeImg1').removeClass('collegeImg01')
			$('.graduateImg1').addClass('graduateImg01')

			$('.say6 img').addClass('bounceIn')
			$('.say6 img').removeClass('bounceOut')
		}

	}
	if(nub1>22000){
		$('.say6 img').addClass('bounceOut')
		$('.say6 img').removeClass('bounceIn')
	}
    //---------------------------------------------------
	
	if(nub1>23000&&nub1<27000){
		$('#wrap').css('background','#c1b6de')
        if(nub1==23020){
			$('.graduateImg5').removeClass('graduateImg05')

		}else if(nub1==23500){
			$('.graduateImg3').removeClass('graduateImg03')
		}else if(nub1==24000){
			$('.graduateImg4').removeClass('graduateImg04')
		}else if(nub1==24500){
			$('.graduateImg2').removeClass('graduateImg02')
		}else if(nub1==24980){
			$('.graduateImg1').removeClass('graduateImg01')
			$('.jobImg1').addClass('jobImg01')

			$('.say7 img').addClass('bounceIn')
			$('.say7 img').removeClass('bounceOut')
		}

	}
	if(nub1>26000){
		$('.say7 img').addClass('bounceOut')
		$('.say7 img').removeClass('bounceIn')
	}
	//-----------------------------------------------------
	if(nub1>27000&&nub1<31000){
		$('#wrap').css('background','#ffffff')
		if(nub1==27020){
			$('.jobImg1').removeClass('jobImg01')
			$('.workImg5').addClass('workImg05')
		}else if(nub1==27500){
			$('.workImg2').addClass('workImg02')
		}else if(nub1==28000){
			$('.workImg3').addClass('workImg03')
		}else if(nub1==28500){
			$('.workImg4').addClass('workImg04')
			$('.workImg1').addClass('workImg01')
		}else if(nub1==28980){
			$('.workImg6').addClass('workImg06')

			$('.say8 img').addClass('bounceIn')
			$('.say8 img').removeClass('bounceOut')
		}

	}
	if(nub1>31000){
		$('.say8 img').addClass('bounceOut')
		$('.say8 img').removeClass('bounceIn')

		if(nub1==31020){
			$('.workImg5').removeClass('workImg05')
		}else if(nub1==31500){
			$('.workImg2').removeClass('workImg02')
		}else if(nub1==32000){
			$('.workImg3').removeClass('workImg03')
		}else if(nub1==32500){
			$('.workImg4').removeClass('workImg04')
			$('.workImg1').removeClass('workImg01')
		}else if(nub1==32980){
			$('.workImg6').removeClass('workImg06')
			$('.yuanImg').addClass('yuanImg01')
		}else if(nub1==33500){
			wrap.removeEventListener('touchstart',start)
			wrap.removeEventListener('touchend',end)
			wrap.addEventListener('touchend',daoxu,false)
		}else if(nub1==33520){
			ptishi()
		}
	}
}



var backNub = 0;
var backlist = $('#back .list').get(0);
backlist.timer = null;

function ptishi(){
	clearInterval(wrap.timer1)
	$('#tishi').show();
	tishi.timer = setInterval(function(){
		tishiNub+=20
		if(tishiNub==20){
			$('.tishilist').css({
				'transform':'translateY('+(1*cH)+'px)'
			})
		}
		if(tishiNub==3000){
			$('.tishilist').css({
				'transform':'translateY('+(2*cH)+'px)'
			})
		}
		if(tishiNub==6000){
			$('.tishilist').css({
				'transform':'translateY('+(3*cH)+'px)'
			})
		}
		if(tishiNub==9000){
			$('.tishilist').css({
				'transform':'translateY('+(4*cH)+'px)'
			})
		}
		if(tishiNub==12000){
			$('.tishilist').css({
				'transform':'translateY('+(5*cH)+'px)'
			})
			clearInterval(tishi.timer)
		}
	},20)
}


function daoxu(){
	wrap.removeEventListener('touchend',daoxu)
	audio.pause()
	$('#tishi').fadeOut();
	backlist.timer=setInterval(function(){
		backNub+=20;
		if(backNub==500){
			audio.src = 'music2.mp3';
			audio.autoplay = 'autoplay'
			$(backlist).css({
				'transform':'translateY('+(1*cH)+'px)'
			})
		}
			if(backNub==520){
				$(".danmu81").addClass('danmuDong')
			}
			if(backNub==820){
				$(".danmu82").addClass('danmuDong')
				$(".danmu84").addClass('danmuDong')
			}
			if(backNub==1020){
				$(".danmu83").addClass('danmuDong')
			}

		if(backNub==4520){
			
			$(backlist).css({
				'transform':'translateY('+(2*cH)+'px)'
			})
		}
			if(backNub==4820){
				$(".danmu71").addClass('danmuDong')
			}
			if(backNub==5120){
				$(".danmu72").addClass('danmuDong')
			}
			if(backNub==5420){
				$(".danmu73").addClass('danmuDong')
			}


		if(backNub==8520){
			$(backlist).css({
				'transform':'translateY('+(3*cH)+'px)'
			})
		}
			if(backNub==8820){
				$(".danmu61").addClass('danmuDong')
			}
			if(backNub==9120){
				$(".danmu62").addClass('danmuDong')
			}
			if(backNub==9420){
				$(".danmu63").addClass('danmuDong')
			}
		

		if(backNub==12500){
			$(backlist).css({
				'transform':'translateY('+(4*cH)+'px)'
			})
		}
			if(backNub==12820){
				$(".danmu51").addClass('danmuDong')
			}
			if(backNub==13120){
				$(".danmu52").addClass('danmuDong')
			}
			if(backNub==13420){
				$(".danmu53").addClass('danmuDong')
			}


		if(backNub==16500){
			$(backlist).css({
				'transform':'translateY('+(5*cH)+'px)'
			})
		}
			if(backNub==16820){
				$(".danmu41").addClass('danmuDong')
				$(".danmu45").addClass('danmuDong')
			}
			if(backNub==17120){
				$(".danmu42").addClass('danmuDong')
				$(".danmu44").addClass('danmuDong')
			}
			if(backNub==17120){
				$(".danmu43").addClass('danmuDong')
			}
	

		if(backNub==20500){
			$(backlist).css({
				'transform':'translateY('+(6*cH)+'px)'
			})
		}
			if(backNub==20820){
				$(".danmu31").addClass('danmuDong')
			}
			if(backNub==21120){
				$(".danmu32").addClass('danmuDong')
			}
			if(backNub==21420){
				$(".danmu33").addClass('danmuDong')
			}


		if(backNub==24500){
			$(backlist).css({
				'transform':'translateY('+(7*cH)+'px)'
			})
		}
			if(backNub==24820){
				$(".danmu21").addClass('danmuDong')
				$(".danmu23").addClass('danmuDong')
			}
			if(backNub==25120){
				$(".danmu22").addClass('danmuDong')
			}

		if(backNub==28500){
			$(backlist).css({
				'transform':'translateY('+(8*cH)+'px)'
			})
		}

		if(backNub==31500){
			$('#wrap').fadeOut(1500,function(){
				$('#endPage').fadeIn(2500);
				$('body').unbind('touchstart');
			});

		}

		if(backNub==39500){
			audio.pause();
			clearInterval(backlist.timer)
		}
	},20)
}


