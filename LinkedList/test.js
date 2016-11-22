/*jshint esversion: 6 */
/*jslint node: true */
/*globals describe, it, before, beforeEach */

"use strict";

/** LinkedList Tests **/

var expect = require("chai").expect; 
var Stack = require('./Stack');
var LinkedList = require('./LinkedList');

describe("Linked List",function(){
	var list;
	const data = "first node",nextData = "second node",thirdData = "third node";

	beforeEach(function(){
		list = new LinkedList(data);
		list.addNode(nextData);
	});

	describe("#init",function(){
		it("should exist",function(){
			return expect(list).to.be.a('Object');
		});

		it("should have a starting head with a data attribute",function(){
			return expect(list).to.have.property('head').to.have.property('data').to.equal(data);
		});
	});

	describe("#getHead",function(){
		it("should return head",function(){
			return expect(list.getHead().data).to.equal(data);
		});
	});

	describe('#getLastNode',function(){
		beforeEach(function(){
			list.addNode(thirdData);
		});

		it("should find a node",function(){
			return expect(list.getLastNode().constructor.name).to.equal('Node');
		});

		it('should return the last node',function(){
			return expect(list.getLastNode().data).to.equal(thirdData);
		});
	});

	describe("#getNode",function(){
		it("should return the right node",function(){
			return expect(list.getNode(nextData).data).to.equal(nextData);
		});

		it("should return false if the node does not exist",function(){
			return expect(list.getNode("LOLS")).to.equal(false);
		});
	});

	describe("#addNode",function(){
		beforeEach(function(){
			list.addNode(thirdData);
		});

		it("should add a node",function(){
			return expect(list.addNode(thirdData)).to.equal(true);
		});

		it('should append the node to the end of the list',function(){
			return expect(list.getLastNode().data).to.equal(thirdData);
		});
	});

	describe("#insertInFront",function(){
		it('should insert a node and return true',function(){
			return expect(list.insertInFront(thirdData)).to.equal(true);
		});

		it("should have a new head",function(){
			list.insertInFront(thirdData);
			return expect(list.getHead().data).to.equal(thirdData);
		});
	});

	describe("#deleteNode",function(){
		beforeEach(function(){
			list.addNode(thirdData);
		});

		it("should delete a node and return true",function(){
			return expect(list.deleteNode(data)).to.equal(true);
		});

		it("should delete the first node",function(){
			list.deleteNode(data);
			return expect(list.getHead().data).to.equal(nextData);
		});

		it("should delete a middle node",function(){
			list.deleteNode(nextData);
			return expect(list.getHead().next.data).to.equal(thirdData);
		});

		it("should delete the last node",function(){
			list.deleteNode(thirdData);
			return expect(list.getNode(nextData).next).to.equal(null);
		});

		it("should return false if it cant find the node",function(){
			return expect(list.deleteNode("LOLS")).to.equal(false);
		});
	});

});

describe("Stack",function(){
	var stack;
	const firstdata = "first data",secondData = "second data";

	beforeEach(function(){
		stack = new Stack();
	});

	describe("#init",function(){
		it("#should make a stack",function(){
			return expect(stack).to.be.an("Object");
		});

		it("#should be a stack without a node passed in",function(){
			return expect(stack.getHead()).to.equal(null);
		});

		it("#should be a stack with a node passed in",function(){
			stack = new Stack(firstdata);
			return expect(stack.getHead().data).to.equal(firstdata);
		});
	});

	describe("#push",function(){
		beforeEach(function(){
			stack.push(firstdata);
		});

		it("#should push onto the stack",function(){

		});
	});
});
















