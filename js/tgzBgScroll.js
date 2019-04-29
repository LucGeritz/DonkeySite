"use strict";
var bgScroll = {
	scrollables : []	
};

document.addEventListener("DOMContentLoaded",
function() {
	 	
	 	var i,
	 		imagewidth,
	 		interval,
	 		speed,
	 		styles,
	 		scrollElems = document.getElementsByClassName("tgz-scrollable");

        for (i = 0; i < scrollElems.length; i++) {	
    
        	speed = getAttr(scrollElems[i], 'data-tgz-speed', "1");
			interval = getAttr(scrollElems[i], 'data-tgz-interval', "10");
		
			bgScroll.scrollables.push({
				    x : 0,
					elem  :scrollElems[i],
					speed :parseInt(speed, 10),
					interval : parseInt(interval, 10)
				});      	
			
			setInterval(startScrolling(i), bgScroll.scrollables[i].interval);
        }
        
        function getAttr(elem,name,dft){
			var attrVal = elem.getAttribute(name);
			if(!attrVal) attrVal=dft;
			return attrVal;
			
		}
		
    	function startScrolling(i){
			return function(){
				bgScroll.scrollables[i].x+=bgScroll.scrollables[i].speed;
				bgScroll.scrollables[i].elem.style.backgroundPosition =  bgScroll.scrollables[i].x + "px 0";
			}
		}
}
);