describe(
	'Tag Manager script',
	() => {
		it(
			'should add script element with GTM source to the document',
			() => {
				const script = document.querySelector('script[src="https://www.googletagmanager.com/gtm.js?id=GTM-ABCDEFG"]');
				if (!script) {
					throw new Error('Expected GTM script to be available on page.');
				}

				if (!script.hasAttribute('async')) {
					throw new Error('Expected GTM script to have "async" attribute.');
				}
			}
		);
	}
);

describe(
	'dataLayer',
	() => {
		it(
			'should create a dataLayer array and fill it with initial object',
			() => {
				const { dataLayer } = window;

				if (!Array.isArray(dataLayer)) {
					throw new TypeError('Expected "dataLayer" to be a global variable which is an array.');
				}

				const [ first ] = dataLayer;

				if (first.event !== 'gtm.js') {
					throw new Error('Expected dataLayer to include an object with event attribute equal to "gtm.js"');
				}

				if (typeof first['gtm.start'] !== 'number') {
					throw new TypeError('Expected dataLayer to include an object with gtm.start which is a number');
				}

				if (!/\d{13}/.test(first['gtm.start'].toString())) {
					throw new TypeError('Expected dataLayer to include an object with gtm.start which is epoch time in milliseconds (13 digits)');
				}
			}
		)
	}
);
