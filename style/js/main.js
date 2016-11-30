$(".school-btn input").blur(function() {
	if(this.placeholder == '') {
		this.placeholder = '请输入学校名称'
	}
});
$(".school-btn input").focus(function() {
	if(this.placeholder == '请输入学校名称') {
		this.placeholder = '';
		this.style.color = '#737e73';
	}
});

$(".style-change").click(function() {
	$(this).siblings().removeClass("blue");
	$(this).addClass("blue")
})

$(".icon li img").click(function() {
	window.location.href = "schoolDetail.html"
});

//		遮罩层
$(".proce-bind").click(function() {
	$(".school-black").show();
	$(".school-white").show();
});

$(".proce-bind").click(function() {
	$(".school-white input").trigger("click");
})
$(".close").click(function() {
	$(".school-black").hide();
	$(".school-white").hide();
	$("body").css("overflow", "")
})
$(".school-white input").click(function() {
	var a = $(this).attr("placeholder");
	$(this).blur(function() {
		if(this.placeholder == '') {
			this.placeholder = a
		}
	})
	$(this).focus(function() {
		if(this.placeholder == a) {
			this.placeholder = '';
			this.style.color = '#737e73';
		}
	})
})

$("textarea").blur(function() {
	if(this.placeholder == '') {
		this.placeholder = '不超过500字'
	}
});
$("textarea").focus(function() {
	if(this.placeholder == '不超过500字') {
		this.placeholder = '';
		this.style.color = '#737e73';
	}
});

//首页
$(".customization-box li").click(function() {
	window.location.href = 'mobilLook.html'
})

$(".top-btn-1").click(function() {
	$(this).hide()
	$(".top-btn-2").show();
});

$(".top-btn-2").click(function() {
	window.location.href = 'backStage.html'
});
$(".nav-btn").click(function() {
	$(".school-black").show();
	$(".school-white").show();
});
$(".name-btn").click(function() {
		window.location.href = "schoolDetail.html"
	})
	//下拉菜单
$(".menu-down").click(function() {
	$(this).hide();
	$(this).siblings(".menu-up").show();
	$(this).siblings(".menu ul").show()
});
$(".menu-up").click(function() {
	$(this).hide();
	$(this).siblings(".menu-down").show();
	$(this).siblings(".menu ul").hide();
});

$(".menu ul li").click(function() {
	$(this).parent().siblings(".menu-down").show();
	$(this).parent().siblings(".menu-up").hide()
	$(this).parent(".menu ul").hide()
	var a = $(this).text();
	$(this).parent().siblings(".menu-choose").text(a);
})