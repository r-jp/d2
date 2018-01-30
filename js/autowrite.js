$(function(){
	var dataloop = 0;
	var getData = [];
	var k = 0;
	var d = 0;
	var n = 0;

	for(var d in data) {
		for(var n in data[d].list) {
			getData[k] =  data[d].list[n].name;
			k++;
		}
	}
	$('#search').autocomplete({
		source: getData,
		autoFocus: true,
		delay: 0,
		minLength: 1
	});
});