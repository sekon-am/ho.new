<!-- SLIDE 5 -->
<div id="slide-5" class="slide">
	<div id="s5-wrap">
		<div id="s5-carousel">
			<img src="<?php bloginfo('template_url'); ?>/images/slide-5/carousel-aqua-01.png" id="s5-item-1" data-aqua-num="1" />
			<img src="<?php bloginfo('template_url'); ?>/images/slide-5/carousel-aqua-02.png" id="s5-item-2" data-aqua-num="2" />
			<img src="<?php bloginfo('template_url'); ?>/images/slide-5/carousel-aqua-03.png" id="s5-item-3" data-aqua-num="3" />
			<img src="<?php bloginfo('template_url'); ?>/images/slide-5/carousel-aqua-04.png" id="s5-item-4" data-aqua-num="4" />
			<img src="<?php bloginfo('template_url'); ?>/images/slide-5/carousel-aqua-05.png" id="s5-item-5" data-aqua-num="5" />
			<img src="<?php bloginfo('template_url'); ?>/images/slide-5/carousel-aqua-06.png" id="s5-item-6" data-aqua-num="6" />
			<img src="<?php bloginfo('template_url'); ?>/images/slide-5/carousel-aqua-07.png" id="s5-item-7" data-aqua-num="7" />
		</div>
		<div id="s5-start-page">
			<div id="s5-sp-descr">
    	<p id="st1_title">Заказать<br/>аквариум</p>
    	<div id="s5-sp-hl"></div>
		<p id="st1_text1"><i>Воспользуйтесь<br/>нашим калькулятором</i></p>
		<p id="st1_text2">По данной заявке мы ваполним предварительный расчёт стоимости аквариума для интерьера Вашего дома или офиса, после чего отправим его на Ваш электронный адрес или по факсу. Для этого Вам необходимо заполнить форму на этой странице, чтобы результат предварительного расчета оказался, как можно ближе к реальной стоимости.Для начала выберите форму аквариума.</p>
			</div>
			<div id="s5-sp-pensil"></div>
			<div id="s5-sp-lastic"></div>
			<div id="s5-sp-robot"></div>
			<div id="s5-sp-label">Выберите форму<br/>аквариума</div>
			<div id="s5-sp-logo"></div>
		</div>
		<div id="s5-calc">
			<div id="s5-calc-form">
				<div id="s5-calc-tabs">
					<div class="s5-calc-tab" id="s5-calc-tab1" data-code="1"><p>Размеры</p></div>
					<div class="s5-calc-tab" id="s5-calc-tab2" data-code="2"><p>Тумба</p></div>
					<div class="s5-calc-tab" id="s5-calc-tab3" data-code="3"><p>Оборудование</p></div>
					<div class="s5-calc-tab" id="s5-calc-tab4" data-code="4"><p>Декорации</p></div>
					<div class="s5-calc-tab" id="s5-calc-tab5" data-code="5"><p>Контакты</p></div>
				</div>
				<div id="s5-calc-steps">
						<div id="s5-form-step1" class="s5-form-step">
							<div class="s5-label-black s5-form-title">Для начала введите желаемые размеры<br/>для Вашего аквариума</div>
							<div class="s5-separator-horizontal"></div>
							<div class="s5-form-row s5-row-a">
								<div class="s5-row-label">Длинна аквариума</div>
								<div class="s5-letter s5-letter-a"></div>
								<div id="s5-spinbox-a"></div>(см)
							</div>
							<div class="s5-form-row s5-row-b">
								<div class="s5-row-label">Ширина аквариума</div>
								<div class="s5-letter s5-letter-b"></div>
								<div id="s5-spinbox-b"></div>(см)
							</div>
							<div class="s5-form-row s5-row-c">
								<div class="s5-row-label">Длинна выступа</div>
								<div class="s5-letter s5-letter-c"></div>
								<div id="s5-spinbox-c"></div>(см)
							</div>
							<div class="s5-form-row s5-row-d">
								<div class="s5-row-label">Диаметр</div>
								<div class="s5-letter s5-letter-d"></div>
								<div id="s5-spinbox-d"></div>(см)
							</div>
							<div class="s5-form-row s5-row-h">
								<div class="s5-row-label">Высота аквариума</div>
								<div class="s5-letter s5-letter-h"></div>
								<div id="s5-spinbox-h"></div>(см)
							</div>
							<div class="s5-form-row s5-row-r">
								<div class="s5-row-label">Радиус</div>
								<div class="s5-letter s5-letter-r"></div>
								<div id="s5-spinbox-r"></div>(см)
							</div>
							<div class="s5-cp">
								<div class="s5-button s5-button-disabled s5-gonext">Далее</div>
							</div>
						</div>
						<div id="s5-form-step2" class="s5-form-step">
                            <div id="s5-step2-select">
                                <div class="s5-label-black s5-form-title">Отделка тумбы декоративными панелями</div>
    						    <div class="s5-separator-vertical">
								    <div class="s5-lfloat">
								        <div id="s5-thumb-panell" class="s5-thumb-panell"><div id="s5-thumb-texture-selected"></div></div>
								        <div id="s5-thumb-panell-btn" class="s5-bbl s5-thumb-panell-btn"><p>Подобрать</p></div>								        
								    </div>
								    <div class="s5-rfloat">
								        <div id="s5-thumb-carcas" class="s5-thumb-carcas"></div>
								        <div id="s5-thumb-carcas-checkbox" class="s5-bbl s5-checkbox"><div class="s5-sprite-img"></div><p>Только каркас</p></div>
								    </div>
						      </div>
                            </div>
                            <div id="s5-step2-gallery">
                                <div class="s5-label-black s5-form-title">Выберите текстуру для панелей тумбы</div>
								<?php for($i=0;$i<8;$i++) { ?>
                                <div class="s5-gallery-element" data-panel-texture="<?php echo $i+1; ?>"><div class="s5-img" style="background:url(<?php bloginfo('template_url'); ?>/images/slide-5/s5-texture-sprite.png) -<?php echo floor($i/4)*86;?>px -<?php echo $i%4*67;?>px no-repeat;"></div></div>
                                <?php } ?>
                            </div>
							<div class="s5-separator-horizontal"></div>
							<div class="s5-form-row">
								<div class="s5-row-label">Высота тумбы</div>
								<div class="s5-letter s5-letter-e"></div>
								<div id="s5-spinbox-e"></div>(см)
							</div>
							<div class="s5-cp">
								<div class="s5-button s5-button-disabled s5-gonext">Далее</div>
								<div class="s5-button s5-escape">Без отделки</div>
							</div>
						</div>
						<div id="s5-form-step3" class="s5-form-step">
							<div class="s5-label-black s5-form-title">Подбор системы жизнеобеспечения<br/>зависит от видов обитателей</div>
                            <div class="s5-separator-horizontal"></div>
                            <div class="s5-separator-vertical">
                                <div class="s5-lfloat">
                                    <div id="s5-equipment-sea" class="s5-equipment-sea"></div>
                                    <div id="s5-equipment-sea-checkbox" class="s5-bbl s5-checkbox"><div class="s5-sprite-img"></div><p>Морской</p></div>
                                </div>
                                <div class="s5-rfloat">
                                    <div id="s5-equipment-river" class="s5-equipment-river"></div>
                                    <div id="s5-equipment-river-checkbox" class="s5-bbl s5-checkbox"><div class="s5-sprite-img"></div><p>Пресноводный</p></div>
                                </div>
                            </div>
                        	<div class="s5-cp">
								<div class="s5-button s5-button-disabled s5-gonext">Далее</div>
								<div class="s5-button s5-escape">Без системы</div>
							</div>
						</div>
						<div id="s5-form-step4" class="s5-form-step">
                <div id="s5-step4-panells">
						    <div class="s5-lfloat">
                     <p class="s5-bbl">Выбор плоскости</p>
                                <div id="s5-panell-choise">
                                    <div id="s5-panell-f" class="s5-selector-f" data-letter="f"></div>
                                    <div id="s5-panell-w" class="s5-selector-w" data-letter="w"></div>
                                    <div id="s5-panell-g" class="s5-selector-g" data-letter="g"></div>
								</div>
						        <div id="s5-aqua-panels"></div>
						    </div>
						    <div class="s5-rfloat">
                                <p class="s5-bbl">Выбор фактуры</p>
                                <div id="s5-panell-facture"><div id="s5-panell-facture-icon"></div></div>
						    </div>
								<div class="s5-separator-vertical"></div>
								   </div>
							   <div id="s5-step4-facture">
                                <div class="s5-label-black s5-form-title">Выбор фактуры декораций</div>
								<?php for($i=0;$i<8;$i++) { ?>
                                <div class="s5-gallery-element" data-panel-texture="<?php echo $i+1; ?>"><div class="s5-img" style="background:url(<?php bloginfo('template_url'); ?>/images/slide-5/s5-texture-sprite.png) -<?php echo floor($i/4)*86;?>px -<?php echo $i%4*67;?>px no-repeat;"></div></div>
                                <?php } ?>
    					   </div>
 						    <div class="s5-separator-horizontal"></div>
                   <div id="s5-coralls">
                            <p>Колличество кораллов</p>
                            <div id="s5-coralls-spinbox"></div>
                            <span>(шт)</span>
                   </div>
							<div class="s5-cp">
								<div class="s5-button s5-button-disabled s5-gonext">Далее</div>
								<div class="s5-button s5-escape">Без декорации</div>
							</div>
						</div>
						<div id="s5-form-step5" class="s5-form-step">
							<div id="s5-contact-info">Оставте данные для связи с Вами или другим контактным лицом. Результат мы отправим на Ваш электронный адрес или по факсу.</div>
							<div class="s5-separator-horizontal"></div>
							<div class="s5-row"><div class="s5-contact-icon" id="s5-icon-fio"></div><div class="s5-contact-input"><input id="inp-fio" placeholder="Фамилия Имя Отчество"/></div></div>
							<div class="s5-row"><div class="s5-contact-icon" id="s5-icon-tel"></div><div class="s5-contact-input"><input id="inp-tel" placeholder="Телефон"/></div></div>
							<div class="s5-row"><div class="s5-contact-icon" id="s5-icon-mail"></div><div class="s5-contact-input"><input id="inp-email" placeholder="Email"/></div></div>
							<div class="s5-cp"><div class="s5-button s5-button-disabled s5-gonext">Отправить</div></div>
						</div>
				</div>
			</div>
            <div id="s5-aqua-view"></div>
		</div>
	</div>
	<div class="s5-dash"></div>
</div>