$(document).ready(function(){

	playKungfu();

	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
		$(".ryu-cool").hide();
	})
	.mouseleave(function(){
		$(".ryu-ready").hide();
		$(".ryu-still").show();
		$(".ryu-cool").hide();
	})



	.mousedown(function() {
	     playHadouken();
	     $(".ryu-still").hide();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
		.animate(
			{"left":"300px"},
			500,
			function(){
			
				$(this).hide();
				$(this).css("left","-212px");

			}
		);
		
	})

	.mouseup(function() {
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
		$("ryu-cool").hide();
	})

	$(".instructions").ready(function(){
		$(".name").fadeIn("3000",function(){
			$(this).delay(2000).fadeOut("3000", function(){
			$(".part-one").fadeIn("slow", function(){
				$(".part-two").fadeIn("slow",function(){
			
				});

				});
			});

		});
	});
	
$(document).keydown(function(e){
	if(e.keyCode==88){
		$(".ryu-ready").hide();
		$(".ryu-still").hide();
		$(".ryu-cool").show();
	}
})
.keyup(function(e){
	if(e.keyCode==88){
		$(".ryu-cool").hide();
		$(".ryu-still").show();
		$(".ryu-ready").hide();
	}
});

})



function playKungfu(){
<<<<<<< HEAD
	$("#kungfu")[0].volume = 0.5;
=======
		$("#kungfu")[0].volume =.5;
>>>>>>> FETCH_HEAD
		$("#kungfu")[0].load();
		$("#kungfu")[0].play();

}

function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

