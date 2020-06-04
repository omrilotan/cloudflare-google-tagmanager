(function load() {
	var body = document.body || document.querySelector('body');
	if (!body) {
		setTimeout(load, 100);
		return;
	}
	var script = document.createElement('script');

	script.src = 'https://www.googletagmanager.com/gtm.js?id=' + INSTALL_OPTIONS.container_id;
	script.async = 1;

	body.appendChild(script);
})();
