/*jshint esversion: 6 */
/*jslint node: true */

"use strict";

/** Stack Implementation **/


var LinkedList = require('./LinkedList');

class Stack extends LinkedList {
	constructor(data) {
		super(data);
	}

	push(data) {
		return data !== undefined ? this.addNode(data) : false;
	}

	pop() {
		var lastNode = this.getLastNode();
		return this.deleteNode(lastNode) ? lastNode : false;
	}

	next() {
		var currentNode = this.head;


	}
}

module.exports = Stack;