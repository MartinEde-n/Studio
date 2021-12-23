$(function(){
  $('.clients__inner').slick({
		slidesToShow:5,
		slidesToScroll:5,
		arrows:false,
		variableWidth: true,
		autoplay:true,
		autoplaySpeed:0,
    speed: 5000,
    pauseOnDotsHover: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,

				}
			},
		]
  });
});