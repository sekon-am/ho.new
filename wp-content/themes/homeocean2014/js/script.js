$(window).load(function() {
	$('#loading-screen').delay(300).fadeOut(700);
	// INIT SLIDE HEIGHT
    $(window)
		.resize(
			function (){
				$('.slide').css('height', $(window).height()+'px');
			}
		).resize(
		);

	function transformElement(element,shift){
		var crossBrowsePrefix = [
			/* Chrome, Safari 3.1+ */'-webkit-', 
			/* Firefox 3.5-15 */'-moz-', 
			/* IE 9 */'-ms-', 
			/* Opera 10.50-12.00 */'-o-'
		];
		var trans = (shift=='none')?'none':'translate('+shift.x+'px, '+shift.y+'px)';
		for (
			var prefixCounter = 0; 
			prefixCounter <= (crossBrowsePrefix.length-1);
			prefixCounter++
		){
			element.css((crossBrowsePrefix[prefixCounter]+'transform'),trans);
		}
	}
	
    
    // SCROLL TO SCREEN
	function ScrollPageToURL(){
        
		var num = parseInt(window.location.hash.substr(-1));
        if(num>0){
			var scrollTo = (num-1)*$(window).height();
			transformElement($('#slide-'+(num-1)),'none');
		}
		
	} ScrollPageToURL();
    
    
    function INIT_MAIN_MENU(){
        
        var menu_pointer_start_margin = parseInt($('#menu-poiner').css('margin-top'));
        
        var count_menu_items = $('#menu-items>.menu-item').size();
        
        var menu_item_height = $('#menu-items>.menu-item').height();
        
        var first_item_margin_top = 0;
        
        var pointer_margin_top = 0;
        
        var pointer_end_margin_top = 0;
        
        var pointer_offset = parseInt($('#menu-poiner').css('margin-top'));
        
        // MARKUP MENU ITEMS
        function InitMenuItems(){

            var menu_items_height = $('#menu-container').height()-151;
            
            $('#menu-items').height(menu_items_height+'px');

            first_item_margin_top = Math.round((menu_items_height-(menu_item_height*count_menu_items))/4);
            
            var item_margin_top = Math.round((first_item_margin_top*2)/(count_menu_items-1));
            
            $('#menu-items>.menu-item').css({'margin-top': item_margin_top+'px'});
            
            $('#menu-items>.menu-item:first').css({'margin-top': first_item_margin_top+'px'});

            pointer_margin_top = first_item_margin_top+pointer_offset;            
            
            $('#menu-poiner').css({'margin-top': pointer_margin_top+'px'});
            
            pointer_end_margin_top = (menu_item_height*(count_menu_items-1))+(item_margin_top*(count_menu_items-1));
            
        } InitMenuItems();
        
    
        // MAIN MENU LINK ANIMATIION

		var scrollSpeed = 500;
        $(".menu-item").click(function(){
        	var href = $(this).attr("href");
            
            var ScrollValue = $(href).offset().top;
			$("html, body").animate({scrollTop:ScrollValue}, (scrollSpeed*Math.abs(ScrollValue-$(window).scrollTop())/$(window).height()), 'swing', function() { window.location.hash = href; });
			
  			return false;
            
        });
       
        // MOVE POINTER BY SCROLL

        function MovePointerByScroll(){
            
            var HTMLHeight = $(document).height();
            
            var slide_height = $(window).height();
            
            var end_scroll_pos_persent = (slide_height*($('.slide').size()-1))/(HTMLHeight/100);
            
            var PointerLengthOnePercent = pointer_end_margin_top/end_scroll_pos_persent;
            
            function MoveMenuPointer(){
                
                var pos = $(window).scrollTop();

                var PointerPos = ((pos/(HTMLHeight/100))*PointerLengthOnePercent)+first_item_margin_top+pointer_offset;
                
                $('#menu-poiner').css('margin-top', PointerPos+'px');
  
                function addZeros(n, needLength){
                  needLength = needLength || 3;
                  n = String(n);
                  while (n.length < needLength){
                    n = "0" + n;
                  }
                  return n
                }
                
                var pointer_text = (addZeros((pos/7).toFixed(0))).substring(0,3);
                
                function SetPointerDigits(DIGITS){
                    var dFirst = DIGITS.charAt(0);
                    var dSecond = DIGITS.charAt(1);
                    var dThird = DIGITS.charAt(2);
                    $('#menu-poiner>li').eq(0).find('div').attr('class', 'd'+dFirst);
                    $('#menu-poiner>li').eq(1).find('div').attr('class', 'd'+dSecond);
                    $('#menu-poiner>li').eq(2).find('div').attr('class', 'd'+dThird);
                }
                
                SetPointerDigits(pointer_text);
                
            }MoveMenuPointer();
    
            $(window).bind('scroll', MoveMenuPointer);
            
        }
        MovePointerByScroll(); 


    } 
    INIT_MAIN_MENU();
	
	// SCREEN 1
	$('#fish_yb_small').ammo({speed: 19});
	$('#fish_orange_01').ammo({speed: 25});
	$('#fish_orange_02').ammo({speed: 30});
	$('#fish_orange_03').ammo({speed: 28});
	$('#fish_yb').ammo({speed: 27});
	$('#shark').ammo({speed: 16});
	$('#fish_bw').ammo({speed: 23});
	$('#fish_yellow_01').ammo({speed: 32, destination: 'toLeft'});
	$('#fish_yellow_02').ammo({speed: 38, destination: 'toLeft'});
	

	// SCREEN 3 DESIGN
    
    // Left
    $('#scr3-left-orange-fish-x2').ammo({speed: 38, destination: 'toLeft'});
    $('#scr3-left-big-orange-fish').ammo({speed: 25, destination: 'toLeft'});
    $('#scr3-left-right-blue-fish-1').ammo({speed: 40, destination: 'toLeft'});
    $('#scr3-left-right-blue-fish-2').ammo({speed: 45, destination: 'toLeft'});
    $('#scr3-left-right-blue-fish-3').ammo({speed: 42, destination: 'toLeft'});
    $('#scr3-left-right-blue-fish-4').ammo({speed: 39, destination: 'toLeft'});
    $('#scr3-left-right-blue-fish-5').ammo({speed: 47, destination: 'toLeft'});

    // Right
    $('#scr3-rb-fish-1').ammo({speed: 40});
    $('#scr3-rb-fish-2').ammo({speed: 42});
    $('#scr3-rb-fish-3').ammo({speed: 44});
    $('#scr3-rb-fish-4').ammo({speed: 39});
    $('#scr3-rb-fish-5').ammo({speed: 45});
    $('#scr3-rb-fish-6').ammo({speed: 47});
    $('#scr3-rb-fish-7').ammo({speed: 43});
    $('#scr3-blue-fish-small').ammo({speed: 22});
    $('#scr3-blue-fish').ammo({speed: 26});
    $('#scr3-purple-fish').ammo({speed: 28});
    
    // SEE AQ
	$('#scr3-navigation>.arrow').click(function(){
		$('#scr3-navigation').animate({'margin-top': '-208px'}, 600, 'easeOutBack');
	});
    $('#scr3-navigation>.arrow-left').click(function(){
       
       $('#scr3-navigation>.arrow-left').animate({opacity: 1}, 500);
       $('#scr3-navigation>.arrow-right').animate({opacity: 0.4}, 500);
       
       $('#scr3-navigation>.full-story-left').removeClass('full-story-visible');
       $('#scr3-navigation>.full-story-right').addClass('full-story-visible');
       
       $('#scr3-right-left-corals').fadeOut(500);
       $('#scr3-right-right-corals').fadeOut(500);
       
       $('#scr3-left-left-corals').fadeIn(500);
       $('#scr3-left-right-corals').fadeIn(500);

       $('#scr3-bubles-left').fadeIn(500);
       $('#scr3-bubles-right').fadeOut(500);
       
       $('#scr3-left-big-orange-fish').fadeIn(500);
       $('#scr3-left-orange-fish-x2').fadeIn(500);
       $('#scr3-left-right-blue-fish-1').fadeIn(500);
       $('#scr3-left-right-blue-fish-2').fadeIn(500);
       $('#scr3-left-right-blue-fish-3').fadeIn(500);
       $('#scr3-left-right-blue-fish-4').fadeIn(500);
       $('#scr3-left-right-blue-fish-5').fadeIn(500);
       
       $('#scr3-blue-fish-small').fadeOut(500);
       $('#scr3-rb-fish-1').fadeOut(500);
       $('#scr3-rb-fish-2').fadeOut(500);
       $('#scr3-rb-fish-3').fadeOut(500);
       $('#scr3-rb-fish-4').fadeOut(500);
       $('#scr3-rb-fish-5').fadeOut(500);
       $('#scr3-rb-fish-6').fadeOut(500);
       $('#scr3-rb-fish-7').fadeOut(500);
       $('#scr3-blue-fish').fadeOut(500);
       $('#scr3-purple-fish').fadeOut(500);
        
    });
    
    /// RIVER AQ
    $('#scr3-navigation>.arrow-right').click(function(){
       
        $('#scr3-navigation>.arrow-right').animate({opacity: 1}, 500);
        $('#scr3-navigation>.arrow-left').animate({opacity: 0.4}, 500); 
        
        $('#scr3-navigation>.full-story-left').addClass('full-story-visible');
        $('#scr3-navigation>.full-story-right').removeClass('full-story-visible');

        $('#scr3-left-right-corals').fadeOut(500);
        $('#scr3-left-left-corals').fadeOut(500);
        $('#scr3-right-left-corals').fadeIn(500);
        $('#scr3-right-right-corals').fadeIn(500);
        
        $('#scr3-bubles-right').fadeIn(500);
        $('#scr3-bubles-left').fadeOut(500);
        
       $('#scr3-left-big-orange-fish').fadeOut(500);
       $('#scr3-left-orange-fish-x2').fadeOut(500);
       $('#scr3-left-right-blue-fish-1').fadeOut(500);
       $('#scr3-left-right-blue-fish-2').fadeOut(500);
       $('#scr3-left-right-blue-fish-3').fadeOut(500);
       $('#scr3-left-right-blue-fish-4').fadeOut(500);
       $('#scr3-left-right-blue-fish-5').fadeOut(500);
       
       $('#scr3-blue-fish-small').fadeIn(500);
       $('#scr3-rb-fish-1').fadeIn(500);
       $('#scr3-rb-fish-2').fadeIn(500);
       $('#scr3-rb-fish-3').fadeIn(500);
       $('#scr3-rb-fish-4').fadeIn(500);
       $('#scr3-rb-fish-5').fadeIn(500);
       $('#scr3-rb-fish-6').fadeIn(500);
       $('#scr3-rb-fish-7').fadeIn(500);
       $('#scr3-blue-fish').fadeIn(500);
       $('#scr3-purple-fish').fadeIn(500);
        
    });
    
    

	// SCREEN 4
	
	$('#fish_yellow1').mobj({x:-0.05,y:0.5});
	$('#fish_yellow2').mobj({x:-0.12,y:0.3});
	$('#fish_yellow3').mobj({x:-0.1,y:0.6});
	$('#fish_blue1').mobj({x:0.5,y:0.05});
	$('#fish_blue2').mobj({x:0.1,y:0.4});
	$('#scr3-aq-man').mobj({x:0,y:0.3},{min:{y:'current'}});
	
	// SCREEN 4	WORKS SLIDER
	
	WSC('#wsc-works');

	// SCREEN 5 
	var aqua_id=null,
		aqua={a:0,b:0,c:0,d:0,h:0,e:0,r:0},
		thumb=-1,
		equipment=null,
		decor={f:0,w:0,g:0,facture:0,coralls:0},
		contacts={fio:'',tel:'',email:''},
		tabId=0,
		maxTabId=0,
		aquaViewSpriteShift=[0,392,906,1496,2004,2615],
		lettersToShow=[
						['a','b','h','r',],
						['a','b','h','c',],
						['a','b','h',],
						['a','b','h',],
						['d','h',],
						['a','b','h',],
						['a','b','h','r',],
					],
		imgpth='wp-content/themes/homeocean2014/images/slide-5/',
		errorMsgs={
			wrongA:'',
			wrongB:'',
			wrongD:'',
			wrongH:'',
			wrongE:'',
			wrongThumb:'',
			wrongEquipment:'',
			wrongStep4:'',
			wrongFio:'',
			wrongTel:'',
			wrongEmail:''
		},
		aquaPanels=[2,1,0,2,3,4,2],
		aquaLetters=[['f','w','g',],['f','w','g',],['w',],['w',],['f','w'],];
	function checkTel(tel){
		return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(tel);
	}
	function checkEmail(email){
		return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(email);
	}
	function checkStep4(){
		var res=false;
		for(key in decor){
			res = res || decor[key];
		}
		return res;
	}
	function getErrorsStep(stepNo) {
		if( !aqua_id )return errorMsgs;
		var errors=[];
		if(stepNo<1 || stepNo>5)stepNo=0;
		if((stepNo==0 || stepNo==1) && aqua.a<=0 && lettersToShow[aqua_id-1].indexOf('a')!=-1)errors.push(errorMsgs.wrongA);
		if((stepNo==0 || stepNo==1) && aqua.b<=0 && lettersToShow[aqua_id-1].indexOf('b')!=-1)errors.push(errorMsgs.wrongB);
		if((stepNo==0 || stepNo==1) && aqua.d<=0 && lettersToShow[aqua_id-1].indexOf('d')!=-1)errors.push(errorMsgs.wrongD);
		if((stepNo==0 || stepNo==1) && aqua.h<=0 && lettersToShow[aqua_id-1].indexOf('h')!=-1)errors.push(errorMsgs.wrongH);
		if((stepNo==0 || stepNo==2) && aqua.e<=0)errors.push(errorMsgs.wrongE);
		if((stepNo==0 || stepNo==2) && thumb<0)errors.push(errorMsgs.wrongThumb);
		if((stepNo==0 || stepNo==3) && equipment==0)errors.push(errorMsgs.wrongEquipment);
		if((stepNo==0 || stepNo==4) && !checkStep4())errors.push(errorMsgs.wrongStep4);
		if((stepNo==0 || stepNo==5) && !contacts.fio )errors.push(errorMsgs.wrongFio);
		if((stepNo==0 || stepNo==5) && !checkTel(contacts.tel))errors.push(errorMsgs.wrongTel);
		if((stepNo==0 || stepNo==5) && !checkEmail(contacts.email))errors.push(errorMsgs.wrongEmail);
		return errors;
	}
	function showMsg(msg){
		if(msg instanceof Array){
			msg=msg.join("\n");
		}
		alert(msg);
	}
	function getErrors(stepNo) {
		var errors=getErrorsStep(stepNo);
		if(errors.length>0){
			showMsg(errors);
		}
		return errors.length;
	}
	
	function gotoStep(stepNo){
		tabId=stepNo;
		$('#s5-aqua-view').css({
		    background:"url('"+imgpth+"s5-aqua-6-view.png') -"+(aqua_id-1)*650+"px -"+aquaViewSpriteShift[stepNo-1]+"px no-repeat",
		    height:(aquaViewSpriteShift[stepNo]-aquaViewSpriteShift[stepNo-1])+'px'
	    });
		$('#s5-calc-form').css({background:"url('"+imgpth+"s5-form-bg-sprite.png') 0px -"+stepNo*392+"px no-repeat, url('"+imgpth+"s5-form-bg-sprite.png') 0px 0px no-repeat"});
		$('.s5-form-step').hide();
		$('#s5-form-step'+stepNo).show();
		$('.s5-calc-tab').removeClass('s5-tab-fullfilled s5-tab-current').each(
			function(){
				var $this=$(this),
					code=$this.attr('data-code');
				if(code<=maxTabId){
					if(!getErrorsStep(code).length && stepNo!=code){
						$this.addClass('s5-tab-fullfilled');
					}
				}
			}
		);
		$('#s5-calc-tab'+stepNo).addClass('s5-tab-current');
	}
	function nextStep(escape) {
		if(tabId<5){
			if(escape || !getErrors(tabId)){
				tabId++;
				maxTabId=Math.max(maxTabId,tabId);
				gotoStep(tabId);
				$('#s5-calc-tab'+tabId)
					.addClass('s5-tab-active')
					.click(
						function(){
							gotoStep($(this).attr('data-code'));
						}
					);
			}
		}else{
			if(!getErrors(5)){
				$.ajax({
					type:'POST',
					url:'s5-mail-sender.php',
					data:({
						a:aqua.a,
						b:aqua.b,
						d:aqua.d,
						h:aqua.h,
						e:aqua.e,
						thumb:thumb,
						equipment:equipment,
						f:decor.f,
						w:decor.w,
						g:decor.g,
						facture:decor.facture,
						coralls:decor.coralls,
						fio:contacts.fio,
						tel:contacts.tel,
						email:contacts.email
		 			}),
					success:function(data){
						showMsg('Ваш заказ принят, спасибо!');
						return false;
					}
				}); 
			}
		}
	}
	function checkStepFilling(){
		if(!getErrorsStep(tabId).length){
			$('#s5-form-step'+tabId+' .s5-gonext').attr(
				{class:'s5-button s5-gonext'}
			).unbind('click').click(nextStep);
		}else{
			$('#s5-form-step'+tabId+' .s5-gonext').attr(
				{class:'s5-button-disabled s5-gonext'}
			).unbind('click');
		}
	}
	function setSpinbox($this,obj,fname){
		$this.append('<div class="s5-spinbox-buttons"><div class="s5-spinbox-button s5-spinbox-up"></div><div class="s5-spinbox-button s5-spinbox-down"></div></div><input value="0"/>');
		var input=$this.find('input');
		input.blur(function(){
						obj[fname]=parseInt(input.val());
						if(isNaN(obj[fname]))obj[fname]=0;
						input.val(obj[fname]);
						checkStepFilling();
						return false;
		});
		$this.find('.s5-spinbox-up').click(function(){
						obj[fname]++;
						input.val(obj[fname]);
						checkStepFilling();
						return false;
		});
		$this.find('.s5-spinbox-down').click(function(){
						if(--obj[fname]<0){
							obj[fname]=0;
						}
						input.val(obj[fname]);
						checkStepFilling();
						return false;
		});
	}
	$.fn.setSpinbox = function(obj,fname) {
		var $this=$(this),
			cls=$this.attr('class');
		setSpinbox($this.attr({class:((cls)?(cls+' '):'')+'s5-spinbox'}),obj,fname);
		return this;
	}
	function doAnimation(object,transformation,duration) {
		$(object).animate(
			{transform:transformation},
			duration,
			'swing',
			function(){
				$(this).css(
					{display:'none'}
				);
			}
		);
	}
	function drawSquares() {
		var letterArray = aquaLetters[aquaPanels[aqua_id-1]],
			background = '',
			i=0;
		for(key in letterArray){
			i+=120;
			if(decor[letterArray[key]]){
				background = getPBG(decor[letterArray[key]],i)+',' + background;
			}
		}
		$('#s5-aqua-panels').css({background:getPBG(1,120*(letterArray.length+1))+','+background+getPBG(1,0)});
	}
	function newAqua(newCenterItem) {
		if(aqua_id===null){
			var	$window = $(window),
				windowW = $window.width(),
				windowH = $window.height();
			doAnimation('#s5-sp-pensil','translate(-'+($('#s5-sp-pensil').offset().left+$('#s5-sp-pensil').width())+'px,200px) rotate(-240deg)',2300);
			doAnimation('#s5-sp-robot','translate('+(windowW-$('#s5-sp-robot').offset().left)+'px,-500px) rotate(190deg)',2300);
			doAnimation('#s5-sp-lastic','translate(300px,'+(windowH-$('#s5-sp-lastic').offset().top)+'px) rotate(290deg)',2300);
			$('#s5-sp-descr').effect('puff',{direction:'left'},1500,function(){$(this).hide();});
			$('#s5-sp-label').effect('puff',{direction:'left'},1000,function(){$(this).hide();});
			$('#s5-sp-logo').fadeOut(3000);
			$('#s5-start-page').delay(3000).fadeOut(0);
			$('#s5-calc').delay(3000).fadeIn(500);
		}
		aqua_id = newCenterItem.attr('data-aqua-num');
		$("#s5-form-step1 .s5-form-row").hide();
		for(var i=0;i<lettersToShow[aqua_id-1].length;i++){
			$("#s5-form-step1 .s5-row-"+lettersToShow[aqua_id-1][i]).show();
		}
		gotoStep(1);
		checkStepFilling();

		var aquaNum = aqua_id-1,
			aquaPanelNum = aquaPanels[aquaNum],
			aquaNumLetters = aquaLetters[aquaPanelNum],
			letters = ['f','w','g',];
		for(var i=0;i<letters.length;i++){
			if(aquaNumLetters.indexOf(letters[i])!=-1){
				$('#s5-panell-'+letters[i]).show();
			}else{
				$('#s5-panell-'+letters[i]).hide();
			}
		}
		drawSquares();
	}
	function getPBG(flag,shift) {
		if(flag){
			return "url('"+imgpth+"s5-aqua-panels-sprite.png') -"+158*aquaPanels[aqua_id-1]+"px -"+shift+"px no-repeat";
		}
		return '';
	}
	var slide_5_carousel = $("#s5-carousel").waterwheelCarousel({
			startingItem: 0,
			flankingItems: 3,
			separation: 250, 
			horizonOffset : -20,
			horizonOffsetMultiplier: 1.2,
			speed: 600,
			edgeFadeEnabled:true,
			movedToCenter: function(newCenterItem){newAqua(newCenterItem);}
	});
	$('#s5-carousel img[data-aqua-num=4]').click(function(){newAqua($(this));})
/*STEP 1*/
	nextStep(1);
	$('#s5-spinbox-a').setSpinbox(aqua,'a');
	$('#s5-spinbox-b').setSpinbox(aqua,'b');
	$('#s5-spinbox-c').setSpinbox(aqua,'c');
	$('#s5-spinbox-d').setSpinbox(aqua,'d');
	$('#s5-spinbox-h').setSpinbox(aqua,'h');
	$('#s5-spinbox-r').setSpinbox(aqua,'r');
/*STEP 2*/
		$('#s5-spinbox-e').setSpinbox(aqua,'e');
		function s5_step2_check() {
            $('#s5-thumb-panell').attr({class:'s5-thumb-panell'+((thumb>0)?'-checked':'')});
            $('#s5-thumb-panell-btn').attr({class:'s5-bbl s5-thumb-panell-btn'+((thumb>0)?'-checked':'')});
            $('#s5-thumb-carcas').attr({class:'s5-thumb-carcas'+((thumb==0)?'-checked':'')});
            $('#s5-thumb-carcas-checkbox').attr({class:'s5-bbl s5-checkbox'+((thumb==0)?'-checked':'') });
			if(thumb){
				$('#s5-thumb-texture-selected').show();
			}else{
				$('#s5-thumb-texture-selected').hide();
			}
			checkStepFilling();
		}
        $('#s5-thumb-panell,#s5-thumb-panell-btn').click(function(){
			$('#s5-step2-select').hide();
			$('#s5-step2-gallery').show();
		});
		$('#s5-step2-gallery .s5-gallery-element').click(function(){
		    var $this=$(this);
		    thumb = parseInt($this.attr('data-panel-texture'));
            $('#s5-step2-gallery').hide();
            $('#s5-step2-select').show();
			$('#s5-thumb-texture-selected').css({
				'background':"url('"+imgpth+"s5-texture-perspect-sprite.png') -"+(Math.floor((thumb-1)/4)*129)+"px -"+((thumb-1)%4*67)+"px no-repeat",
			});
			s5_step2_check();
		});
        $('#s5-thumb-carcas,#s5-thumb-carcas-checkbox').click(function(){
            if(thumb!=0){
				thumb=0;
				s5_step2_check();
			}
        });
		$('#s5-form-step2 .s5-escape').click(
			function(){
				aqua.e=0;
				thumb=0;
				$('#s5-spinbox-e input').val(0);
				s5_step2_check();
				checkStepFilling();
				nextStep(1);
			}
		);
/*STEP 3*/
        function setEquipmentChecked(){
            var suffix = '';
            suffix=((equipment==1)?'-checked':'');
            $('#s5-equipment-sea').attr({class:'s5-equipment-sea'+suffix});
            $('#s5-equipment-sea-checkbox').attr({class:'s5-checkbox'+suffix});
            suffix=((equipment==2)?'-checked':'');
            $('#s5-equipment-river').attr({class:'s5-equipment-river'+suffix});
            $('#s5-equipment-river-checkbox').attr({class:'s5-checkbox'+suffix});
			checkStepFilling();
        }
        $('#s5-equipment-sea,#s5-equipment-sea-checkbox').click(function(){
            equipment=1;
            setEquipmentChecked();
        });
        $('#s5-equipment-river,#s5-equipment-river-checkbox').click(function(){
            equipment=2;
            setEquipmentChecked();
        });
		$('#s5-form-step3 .s5-escape').click(
			function(){
				equipment=0;
				setEquipmentChecked();
				checkStepFilling();
				nextStep(1);
			}
		);
/*STEP 4*/
        $('#s5-panell-choise > div').click(function(){
			var $this=$(this),
				letter=$this.attr('data-letter');
			if(decor[letter]){
                decor[letter]=0;
                $this.attr({class:'s5-selector-'+letter});
            }else{
                decor[letter]=1;
                $this.attr({class:'s5-selector-'+letter+'-checked'});
            }
			drawSquares();
			checkStepFilling();
		});
        $('#s5-panell-facture').click(function(){
            $('#s5-step4-panells').hide();
            $('#s5-step4-facture').show();
        });
        $('#s5-step4-facture .s5-gallery-element').click(function(){
            decor.facture=parseInt($(this).attr('data-facture'));
            $('#s5-step4-facture').hide();
            $('#s5-step4-panells').show();
			var img = $(this).find('.s5-img');
			$('#s5-panell-facture-icon').css({
				'background-image':img.css('background-image'),
				'background-position':img.css('background-position'),
				'background-repeat':'no-repeat',
			});
			console.log($(this).find('.s5-img').css('background-image'));
			checkStepFilling();
        });
		$('#s5-coralls-spinbox').setSpinbox(decor,'coralls');
		$('#s5-form-step4 .s5-escape').click(
			function(){
				for(key in decor)decor[key]=0;
				$('#s5-panell-choise > div').each(
					function(){
						var $this=$(this);
						$this.attr(
							{
								class:'s5-selector-'+$this.attr('data-letter')
							}
						);
					}
				);
				$('#s5-aqua-panels').css({background:"url('"+imgpth+"s5-aqua-panels-sprite.png') 0px -480px no-repeat,url('"+imgpth+"s5-aqua-panels-sprite.png') 0px 0px no-repeat"});
				$('#s5-panell-facture-icon').css({background:"url('') 0px 0px no-repeat"});
				$('#s5-coralls-spinbox input').val(0);
				checkStepFilling();
				nextStep(1);
			}
		);
/*STEP 5*/
		$('#inp-fio').blur(function(){
			contacts.fio=$('#inp-fio').val();
			checkStepFilling();
		});
		$('#inp-tel').blur(function(){
			contacts.tel=$('#inp-tel').val();
			checkStepFilling();
		});
		$('#inp-email').blur(function(){
			contacts.email=$('#inp-email').val();
			checkStepFilling();
		});
		
	// preload images
    preload([imgpth+'s5-aqua-6-view.png']);
	function preload(images) {
		if (typeof document.body == "undefined") return;
		try {
			var div = document.createElement("div");
			var s = div.style;
			s.position = "absolute";
			s.top = s.left = 0;
			s.visibility = "hidden";
			document.body.appendChild(div);
			div.innerHTML = "<img src=\"" + images.join("\" /><img src=\"") + "\" />";
			var lastImg = div.lastChild;
			lastImg.onload = function() { document.body.removeChild(document.body.lastChild); };
		} catch(e) {}
	}
	
	// SCREEN 6
	INIT_HO_SLIDER('#hops-posts-and-ideas');
    
	// SCREEN 7
	
	// RUN IN SWIMMING
    $('#s7-fish_yb_small').ammo({speed: 19});
    $('#s7-fish_orange_01').ammo({speed: 25});
    $('#s7-fish_orange_02').ammo({speed: 30});
    $('#s7-fish_orange_03').ammo({speed: 28});
    $('#s7-fish_yb').ammo({speed: 27});
    $('#s7-fish_bw').ammo({speed: 23});
    $('#s7-fish_yellow_01').ammo({speed: 32, destination: 'toLeft'});
    $('#s7-fish_yellow_02').ammo({speed: 38, destination: 'toLeft'});
	
});