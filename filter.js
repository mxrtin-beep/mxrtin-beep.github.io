(function () {
	var boxes = document.querySelectorAll('.filters input');
	var tiles = document.querySelectorAll('[data-cat]');
	function apply() {
		var on = [];
		boxes.forEach(function (b) { if (b.checked) on.push(b.value); });
		tiles.forEach(function (t) {
			t.style.display = (on.length === 0 || on.indexOf(t.getAttribute('data-cat')) !== -1) ? '' : 'none';
		});
	}
	boxes.forEach(function (b) { b.addEventListener('change', apply); });
})();
