/*jshint esversion: 6 */
/*jslint node: true */
/*globals describe, it */

"use strict";

/** LinkedList Tests **/

var LinkedList = require('./LinkedList');
var expect = require("chai").expect; 

describe("Linked List",function(){
	describe("#init",function(){
		var data = "first node";
		var list = new LinkedList(data);

		it("should exist",function(){
			return expect(list).to.be.a('Object');
		});
		
		it("should have a node field with a data attribute",function(){
			return expect(list).to.have.property('head').to.have.property('data').to.equal(data);
		});
	});
});