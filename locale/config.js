dayjs.locale({
  name: 'hu',
  weekdays: 'vasárnap_hétfőn_kedden_szerdán_csütörtökön_pénteken_szombaton'.split('_'),
  weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
  weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
  months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
  monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY.MM.DD',
    LL: 'YYYY. MMMM D.',
    LLL: 'YYYY. MMMM D. H:mm',
    LLLL: 'YYYY. MMMM D., dddd H:mm'
  },
  relativeTime: {
    future: '%s múlva',
    past: '%s',
	s : translate,
	ss : translate,
	m : translate,
	mm : translate,
	h : translate,
	hh : translate,
	d : translate,
	dd : translate,
	M : translate,
	MM : translate,
	y : translate,
	yy : translate
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal : '%d.',
}, null, false);

var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
function translate(number, withoutSuffix, key, isFuture) {
   var num = number;
   switch (key) {
       case 's':
           return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
       case 'ss':
           return num + (isFuture || withoutSuffix) ? ' másodperc' : ' másodperce';
       case 'm':
           return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
       case 'mm':
           return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
       case 'h':
           return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
       case 'hh':
           return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
       case 'd':
           return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
       case 'dd':
           return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
       case 'M':
           return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
       case 'MM':
           return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
       case 'y':
           return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
       case 'yy':
           return num + (isFuture || withoutSuffix ? ' év' : ' éve');
   }
   return '';
}
function week(isFuture) {
   return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
}
