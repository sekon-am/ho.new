(function($){

	$.fn.ammo = function(options){
		
		var $this = $(this);
		var clientWidth = parseInt(GetClientDim('width'));
	
		// -- GET CLIENT DIMENSIONS
		function GetClientDim(param){
			if (param == 'width'){
				return parseInt($(window).width());	
			} else if (param == 'height'){
				return parseInt($(window).height());	
			}  
		}
		
		// -- SET DEFAULTS
		function SetDefault(val){ 
			if ((val == '') || (val == null) || (val == 'UNDEFINED')){ 
				return null; 
			} else { 
				return val; 
			}
		}
	
		// -- ANIMATION FRAME
		if (!window.requestAnimationFrame){
		  window.requestAnimationFrame = (function(){
		    return window.webkitRequestAnimationFrame ||
		    window.mozRequestAnimationFrame ||
		    window.oRequestAnimationFrame ||
		    window.msRequestAnimationFrame ||
		    function(callback, element ){ window.setTimeout( callback, 1000 / 60 ); };
		  })();
		}
		
		// -- SET DEFAULT VALUES
		var speed = SetDefault(options.speed);
			if (speed == null){
				speed = 50; 
			}
			
		var screenEdges = SetDefault(options.screenEdges);
			if (screenEdges == null){
				screenEdges = 150; 
			}
		/*	
		var delay = SetDefault(options.delay);
			if (delay == null){
				delay = 0;
			}
		*/	
		
		var destination = SetDefault(options.destination);
			if (destination == null){
				destination = 'toRight';
			}
		
		var curDestState = null;
			if (destination == 'toRight'){
				curDestState = 'right';
			} else if (destination == 'toLeft'){
				curDestState = 'left';
			}
			
		var rightEdge = Math.round((clientWidth/2)+screenEdges);
		var leftEdge = Math.round(0-clientWidth-screenEdges);
		var StartPosPX = Math.round(0-clientWidth);
		var counter = 0;
		var curPosX = 0;

		// SET START POSITION
    	function SetPosition(posX, scale){
    		var crossBrowsePrefix = [/* Chrome, Safari 3.1+ */'-webkit-', /* Firefox 3.5-15 */'-moz-', /* IE 9 */'-ms-', /* Opera 10.50-12.00 */'-o-'];
    		var prefixCounter = 0;
	    	while (prefixCounter <= (crossBrowsePrefix.length-1)){
	    		$this.css((crossBrowsePrefix[prefixCounter]+'transform'),'translateX('+posX+'px) scaleX('+scale+')');
	    		prefixCounter++;
	    	}
    	}
    	
		function animate(){
			
		    requestAnimationFrame(animate);
		    
		    if (destination == 'toRight'){
				if (curDestState == 'right'){
					
					if (curPosX <= rightEdge){
						curPosX = StartPosPX+(counter*(speed/10));
						SetPosition(curPosX, 1);
						counter++;
					} else if (curPosX > rightEdge){
						counter--;
						SetPosition(curPosX, -1);
						curDestState = 'left';
					}
					
				} else if (curDestState == 'left'){
					
					if (leftEdge <= curPosX){
						curPosX = StartPosPX+(counter*(speed/10));
						SetPosition(curPosX, -1);
						counter--;
					} else if (leftEdge > curPosX){
						counter++;
						SetPosition(curPosX, 1);
						curDestState = 'right';
					}
					
				}
				
			} else if (destination == 'toLeft'){
				
				if (curDestState == 'right'){
					
					if (curPosX <= rightEdge){
						curPosX = Math.abs(StartPosPX)+(counter*(speed/10));
						SetPosition(curPosX, -1);
						counter++;
					} else if (curPosX > rightEdge){
						counter--;
						SetPosition(curPosX, 1);
						curDestState = 'left';
					}
					
				} else if (curDestState == 'left'){
					
					if (leftEdge <= curPosX){
						curPosX = Math.abs(StartPosPX)+(counter*(speed/10));
						SetPosition(curPosX, 1);
						counter--;
					} else if (leftEdge > curPosX){
						counter++;
						SetPosition(curPosX, -1);
						curDestState = 'right';
					}
					
				}
				
			}
			
		}

		animate();

	};
	
})(jQuery);