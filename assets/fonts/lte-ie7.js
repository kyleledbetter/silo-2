/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-cloud' : '&#xe001;',
			'icon-star' : '&#xe002;',
			'icon-sound' : '&#xe003;',
			'icon-video' : '&#xe004;',
			'icon-trash' : '&#xe005;',
			'icon-user' : '&#xe006;',
			'icon-search' : '&#xe007;',
			'icon-settings' : '&#xe008;',
			'icon-camera' : '&#xe009;',
			'icon-tag' : '&#xe00a;',
			'icon-mail' : '&#xe00b;',
			'icon-phone' : '&#xe00c;',
			'icon-bubble' : '&#xe00d;',
			'icon-location' : '&#xe00e;',
			'icon-world' : '&#xe00f;',
			'icon-params' : '&#xe010;',
			'icon-music' : '&#xe011;',
			'icon-clip' : '&#xe012;',
			'icon-fire' : '&#xe013;',
			'icon-like' : '&#xe014;',
			'icon-lock' : '&#xe015;',
			'icon-key' : '&#xe016;',
			'icon-bulb' : '&#xe017;',
			'icon-display' : '&#xe018;',
			'icon-eye' : '&#xe019;',
			'icon-calendar' : '&#xe01a;',
			'icon-photo' : '&#xe01b;',
			'icon-data' : '&#xe01c;',
			'icon-megaphone' : '&#xe01d;',
			'icon-out' : '&#xe022;',
			'icon-in' : '&#xe023;',
			'icon-search-2' : '&#xe024;',
			'icon-add' : '&#xe025;',
			'icon-subtract' : '&#xe026;',
			'icon-exclamation' : '&#xe027;',
			'icon-question' : '&#xe028;',
			'icon-close' : '&#xe029;',
			'icon-forbid' : '&#xe02a;',
			'icon-twitter' : '&#xe000;',
			'icon-facebook' : '&#xe01e;',
			'icon-tumblr-sign' : '&#xf174;',
			'icon-instagram' : '&#xe01f;',
			'icon-google-plus' : '&#xf0d5;',
			'icon-youtube' : '&#xf167;',
			'icon-github' : '&#xf09b;',
			'icon-skype' : '&#xf17e;',
			'icon-dribbble' : '&#xf17d;',
			'icon-news' : '&#xe020;',
			'icon-t-shirt' : '&#xe021;',
			'icon-cup' : '&#xe02b;',
			'icon-stack' : '&#xe02c;',
			'icon-shop' : '&#xe02d;',
			'icon-alarm' : '&#xe02e;',
			'icon-play' : '&#xe02f;',
			'icon-stop' : '&#xe030;',
			'icon-pause' : '&#xe031;',
			'icon-forward' : '&#xe032;',
			'icon-rewind' : '&#xe033;',
			'icon-circle-arrow-down' : '&#xf0ab;',
			'icon-circle-arrow-up' : '&#xf0aa;',
			'icon-circle-arrow-right' : '&#xf0a9;',
			'icon-circle-arrow-left' : '&#xf0a8;',
			'icon-angle-left' : '&#xf104;',
			'icon-angle-right' : '&#xf105;',
			'icon-angle-up' : '&#xf106;',
			'icon-angle-down' : '&#xf107;',
			'icon-flag-alt' : '&#xf11d;',
			'icon-feed' : '&#xe034;',
			'icon-share' : '&#xe035;',
			'icon-reply' : '&#xe036;',
			'icon-ok' : '&#xf00c;',
			'icon-bell' : '&#xf0a2;',
			'icon-bullhorn' : '&#xf0a1;',
			'icon-credit' : '&#xf09d;',
			'icon-banknote' : '&#xe037;',
			'icon-reorder' : '&#xf0c9;',
			'icon-sort' : '&#xf0dc;',
			'icon-patrik-larsson-pakman' : '&#xe038;',
			'icon-aleks-dorohovich-triforce' : '&#xe039;',
			'icon-ilias-ismanalijev-batman' : '&#xe03a;',
			'icon-jeffrey-herrera-beer-mug' : '&#xe03b;',
			'icon-christina-pedersen-walkman' : '&#xe03c;',
			'icon-derek-mui-invader' : '&#xe03d;',
			'icon-matt-hakes-moustache' : '&#xe03e;',
			'icon-matt-hakes-spectacles' : '&#xe03f;',
			'icon-johana-barretto-kitty' : '&#xe040;',
			'icon-ian-yates-y-fronts' : '&#xe041;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};