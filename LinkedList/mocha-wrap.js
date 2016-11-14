/*jshint esversion: 6 */
/*jslint node: true */

'use strict';

process.on('exit', (err) => {
	process.exit();
});

require('./node_modules/mocha/bin/mocha');