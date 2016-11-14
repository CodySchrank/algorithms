/*jshint esversion: 6 */
/*jslint node: true */

"use strict";

/** LinkedList Implementation **/

class LinkedList {
	constructor(data) {
		var node = new Node(data);
		this.head = node;
	}
}

class Node {
	constructor(data,head) {
		this.data = data;
	}
}

module.exports = LinkedList;