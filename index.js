var $j = 0;
function slides(homie){
	let $yetty = document.querySelectorAll('#sec1-wrap > div').length;
	if(homie && $j < $yetty - 1){
		$j++;
		document.querySelector('#sec1-wrap').style.transform = "translateX(" + (-100 * $j) + "%)";
		document.querySelector('#ikon2').style.display = "flex";
		if($j == $yetty - 1){
			document.querySelector('#ikon1').style.display = "none";
		}
	}
	else if(!homie && $j > 0){
		$j--;
		document.querySelector('#sec1-wrap').style.transform = "translateX(" + (-100 * $j) + "%)";
		document.querySelector('#ikon1').style.display = "flex";
		if($j == 0){
			document.querySelector('#ikon2').style.display = "none";
		}
	}
}

// window.onscroll = () =>{
// 	if(window.scrollY >= 150){
// 		document.querySelector('#sec1-links').style.width = "100%";
// 		document.querySelector('#sec1-links').style.position = "fixed";
// 		document.querySelector('#sec1-links').style.background = "rgba(0,0,0,0.65)";
// 		document.querySelector('#sec1-links').style.padding = "2%";
// 	}
// 	else{
// 		document.querySelector('#sec1-links').style.position = "relative";
// 		document.querySelector('#sec1-links').style.background = "none";
// 	}
// }



window.onscroll = () =>{
	if(window.scrollY >= 150){
		document.querySelector('#fix').style.display = "flex";
		document.querySelector('#fix').style.width = "100%";
	}
	else{
		document.querySelector('#fix').style.display = "none";
	}
}