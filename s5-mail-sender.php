<?
$txt = file_get_contents('email.tpl');
$patterns=array('<%a%>',
'<%b%>',
'<%d%>',
'<%h%>',
'<%e%>',
'<%thumb%>',
'<%equipment%>',
'<%f%>',
'<%w%>',
'<%g%>',
'<%facture%>',
'<%coralls%>',
'<%fio%>',
'<%tel%>',
'<%email%>');
foreach($patterns as $pattern) {
	$var = substr($pattern,2,-2);
	$txt = str_replace($pattern,$_REQUEST[$var],$txt);
}
$headersManager = "Content-type: text/html; charset=utf-8 \r\nFrom: poolglass.ru <calculator@poolglass.ru> \r\n";
mail('sp@planetaneptuna.ru','Заказ с калькулятора аквариума',nl2br($txt),$headersManager);
//mail('ag@planetaneptuna.ru','Заказ с калькулятора аквариума',nl2br($txt),$headersManager);
echo '{code:"ok"}';
