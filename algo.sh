#!/bin/sh

if [ -z "$1" ]; then
	echo "Missing Algorithm Name"
	exit 1
else
	if [ -d "$1" ]; then
		echo "Algorithm Exists!"
		exit 1
	else
		mkdir "$1"
		cd "$1"
		echo "require('./$1');" >> "index.js"
		echo "/* jshint esversion: 6 */\n/* jslint node: true */\n\n\"use strict\";\n\n/** $1 Tests **/\n\nvar $1 = require('./$1');\nvar expect = require(\"chai\").expect;" >> "test.js"
		echo "/* jshint esversion: 6 */\n/* jslint node: true */\n\n\"use strict\";\n\nprocess.on('exit', () => {\n\tprocess.exit();\n});\n\nrequire('./node_modules/mocha/bin/mocha');" >> "mocha-wrap.js"
		echo "/* jshint esversion: 6 */\n/* jslint node: true */\n\n\"use strict\";\n\n/** $1 Implementation **/\n\nclass $1 {\n\n}\n\nmodule.exports = $1;" >> "$1.js"
		echo "{\n\t\"name\": \"$1\",\n\t\"author:\": \"Cody Schrank\",\n\t\"version\": \"1.0.0\",\n\t\"contributors\": [{\n\t\t\"name\": \"Cody Schrank\",\n\t\t\"email\": \"Cody.Schrank@gmail.com\"\n\t}],\n\t\"scripts\": {\n\t\t\"start\" : \"nodemon -q mocha-wrap.js\"\n\t}\n}" >> "package.json"
		npm link chai > /dev/null
		npm link mocha > /dev/null
		echo "Successfully made $1"
		exit 0
	fi
fi