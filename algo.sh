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
		echo "require('./tests')" >> index.js
		echo "var $1 = require('./$1')" >> tests.js
		echo "module.exports = function(input) {\n\treturn input\n}" >> "$1.js"
	fi
fi