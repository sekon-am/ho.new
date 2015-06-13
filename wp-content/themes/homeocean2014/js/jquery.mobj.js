(function ($) {
	var	parallaxElements = [],
		scrollTopPrev = -1;
	
	function proc2px(proc,fullsize){
		
		return (typeof proc != "string" || proc.charAt(proc.length-1)!='%') ? proc : Math.round(fullsize*parseInt(proc)/100);
	}
	function XOR(v1,v2){
		return (!v1&&v2)||(v1&&!v2);
	}
	/*
	 * MOBJ jQuery plugin
	 * @param speed: {x, y} !required
	 * @param limit: {min:{x,y}, max:{x,y}} optional
	 */
	$.fn.mobj = function( speed, limit ) {
		var $window	= $(window);
		if(!parallaxElements.length){
			$window.scroll(function() {
				var	scrollTop = $window.scrollTop(),
					windowHeight = $window.height(),
					windowWidth = $window.width(),
					delta=scrollTop-scrollTopPrev;
				if(scrollTopPrev==-1)delta=0;
				scrollTopPrev = scrollTop;
				for(var elementIndex=0; elementIndex<parallaxElements.length; elementIndex++){
					var	element = parallaxElements[elementIndex],
						posX = element.offset().left,
						posY = element.offset().top,
						elementWidth = element.width(),
						elementHeight = element.height(),
						speed = element.data('speed'),
						limit = element.data('limit'),
						posStart = element.data('posStart');
					if(element.data('shift')!==null){
						element.data('shift',element.data('shift')+delta);
					}
					if((scrollTop<=posY) && (posY<=scrollTop+windowHeight)){	
						if(element.data('shift')===null && delta!=0 && !XOR(delta>0, speed.y>0)){
							element.data('shift',delta);
						}
						var	shift = element.data('shift'),
							shiftPos = {x:Math.round(speed.x*shift),y:Math.round(speed.y*shift)},
							movingScores={yFrom:0,yTo:windowHeight-elementHeight},
							xLimitation = false;
						if(limit !== undefined){ 
							if(limit.min !== undefined){
								if(limit.min.x !== undefined){
									xLimitation = proc2px(limit.min.x,windowWidth) >= posStart.x+shiftPos.x;
								}
								if(limit.min.y !== undefined){
									movingScores.yFrom=proc2px(limit.min.y,windowHeight);
								}
							}
							if(limit.max !== undefined){
								if(limit.max.x !== undefined){
									xLimitation = xLimitation || posStart.x+shiftPos.x+elementWidth>proc2px(limit.max.x,windowWidth);
								}
								if(limit.max.y !== undefined){
									movingScores.yTo=proc2px(limit.max.y,windowHeight);
								}
							}
						}
						if(movingScores.yFrom<=posStart.y+shiftPos.y && posStart.y+shiftPos.y<=movingScores.yTo && !xLimitation){
							var crossBrowsePrefix = [/* Chrome, Safari 3.1+ */'-webkit-', /* Firefox 3.5-15 */'-moz-', /* IE 9 */'-ms-', /* Opera 10.50-12.00 */'-o-'];
							for (var prefixCounter = 0; prefixCounter <= (crossBrowsePrefix.length-1);prefixCounter++){
								element.css((crossBrowsePrefix[prefixCounter]+'transform'),'translate('+shiftPos.x+'px, '+shiftPos.y+'px)');
							}
						}
					}
				}
			});
		}
		var	posStart =$(this).offset();
		posStart.x=posStart.left;
		posStart.y=posStart.top%$window.height();
		if(speed === undefined || speed.x === undefined) speed.x=0;
		if(speed === undefined || speed.y === undefined) speed.y=0;
		function checkLimit(val,cur){
			return (val=="current")?cur:val;
		}
		if(limit !== undefined){ 
			if(limit.min !== undefined){
				if(limit.min.x !== undefined){
					limit.min.x=checkLimit(limit.min.x,posStart.x);
				}
				if(limit.min.y !== undefined){
					limit.min.y=checkLimit(limit.min.y,posStart.y);
				}
			}
			if(limit.max !== undefined){
				if(limit.max.x !== undefined){
					limit.max.x=checkLimit(limit.max.x,posStart.x);
				}
				if(limit.max.y !== undefined){
					limit.max.y=checkLimit(limit.max.y,posStart.y);
				}
			}
		}
		parallaxElements.push(this.data('posStart',posStart).data('speed',speed).data('limit',limit).data('shift',null));
		return this;
	}
})(jQuery);