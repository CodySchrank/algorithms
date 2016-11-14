/*jshint esversion: 6 */
/*jslint node: true */
/*globals describe, it */

"use strict";

/** LinkedList Tests **/

var LinkedList = require('./LinkedList');
var expect = require("chai").expect; 

describe("Linked List",function(){
	describe("#init",function(){
		var list = new LinkedList("first node");
		it("should exist",function(){
			return expect(list).to.be.a('function')
		})
		it("should have a node field with a data attribute",function(){
			return expect(list).to.have.property('node')
		})
	});
});