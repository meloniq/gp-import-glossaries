document.addEventListener('DOMContentLoaded', function () {
	// Select/Deselect all checkboxes for import_locales
	document.getElementById('import_locales_all').addEventListener('change', function () {
		const checkboxes = document.querySelectorAll('input[name="import_locales[]"]');
		checkboxes.forEach(checkbox => checkbox.checked = this.checked);
	});
});
