// Range
//------------------------------------------------------------------------------

(function($) {
	$('.range').each(function() {
		const range = $(this);
		const rangeFromInput = range.attr('data-from-input-name');
		const rangeToInput = range.attr('data-to-input-name');

		range.ionRangeSlider({
			force_edges: true,
			onStart: function(data) {
				$('[name="' + rangeFromInput + '"]').val(data.from);
				$('[name="' + rangeToInput + '"]').val(data.to);
			},
			onChange: function(data) {
				$('[name="' + rangeFromInput + '"]').val(data.from);
				$('[name="' + rangeToInput + '"]').val(data.to);
			}
		});

		range.insertBefore(range.prev('.irs'));
	});
}(jQuery));
