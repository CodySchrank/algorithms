/*jshint esversion: 6 */
/*jslint node: true */

"use strict";

/** LinkedList Implementation **/

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(data) {
		if(data) {
			var node = new Node(data);
			this.head = node;
		} else {
			this.head = null;
		}
	}

	addNode(data) {
		if(this.head !== null) {
			var lastNode = this.getLastNode();
			var node = new Node(data);
			lastNode.next = node;
		} else {
			var headNode = new Node(data);
			this.head = headNode;
		}
		return true;
	}

	getNode(data) {
		var currentNode = this.head;

		while(currentNode !== null) {
			if(currentNode.data == data) {
				return currentNode;
			} else {
				currentNode = currentNode.next;
			}
		}

		return false;
	}

	getHead() {
		return this.head;
	}

	insertInFront(data) {
		var oldHead = this.head;
		var node = new Node(data);
		this.head = node;
		node.next = oldHead;

		return true;
	}

	deleteNode(data) {
		var currentNode = this.head;

		if(currentNode.data == data) {
			this.head = currentNode.next;
			return true;
		} else {
			while(currentNode !== null) {
				if(currentNode.next === null && currentNode.data == data) {
					currentNode = null;
				} else if(currentNode.next !== null && currentNode.next.data == data) {
					currentNode.next = currentNode.next.next;
					return true;
				} else {
					currentNode = currentNode.next;
				}
			}

			return false;
		}
	}

	deleteList() {
		this.head = null;
		return true;
	}

	getLastNode() {
		var currentNode = this.head;

		while(currentNode.next !== null) {
			currentNode = currentNode.next;
		}

		return currentNode;
	}
}

module.exports = LinkedList;