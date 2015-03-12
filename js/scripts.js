/* 
* @Author: Mehdi-H
* @Date:   2015-03-12 14:32:52
* @Last Modified by:   Mehdi-H
* @Last Modified time: 2015-03-12 15:50:40
*/

// 'use strict';

$(function(){

	// page active en responsive ou non
	var rel = $('body[rel]').attr('rel');
	$('#menu a:eq('+rel+'), #m_menu a:eq('+rel+')').addClass('active');

	// déploiement du menu responsive sur click
	$('#m_btn').on('click',function(){
		$('#m_menu').sidebar('toggle');
	});
});
