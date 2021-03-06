/**
 * Generated by MonkeyTalk $GEN_TIME$ DO NOT EDIT
 * 
 * @fileOverview www.gorillalogic.com/monkeytalk
 */

// SampleProject.js

if (typeof MT == 'undefined') {
	load("libs/MonkeyTalkAPI.js");
}

/**
 * @namespace SampleProject
 */
var SampleProject = {};

//
// Scripts
//

/**
 * @class
 * @extends MT.Script
 * @param app The MT.Application containing this bar
 * @param monkeyId A monkeyId or ordinal
 */

SampleProject.bar = function(app) {
	MT.Script.call(this, app, "bar.mt");
};
SampleProject.bar.prototype = new MT.Script;
/**
 * Calls script.run with the supplied args
 * @param baz
 */
SampleProject.bar.prototype.call = function(baz) {
	print("Calling bar.mt");	
	MT.Script.prototype.run.call(this, baz);
};
/**
 * 
 * @returns {SampleProject.bar}
 */
MT.Application.prototype.bar = function() {
	return new SampleProject.bar(this);
};/**
 * @class
 * @extends MT.Script
 * @param app The MT.Application containing this foo
 * @param monkeyId A monkeyId or ordinal
 */

SampleProject.foo = function(app) {
	MT.Script.call(this, app, "foo.mt");
};
SampleProject.foo.prototype = new MT.Script;
/**
 * Calls script.run with the supplied args
 * @param 
 */
SampleProject.foo.prototype.call = function() {
	print("Calling foo.mt");	
	MT.Script.prototype.run.call(this);
};
/**
 * 
 * @returns {SampleProject.foo}
 */
MT.Application.prototype.foo = function() {
	return new SampleProject.foo(this);
};

//
// Commands
//

/**
 * comp
 * @extends MT.CustomType
 * @param app
 * @param monkeyId
 * @returns {SampleProject.comp}
 */
SampleProject.comp = function(app, monkeyId) {
	this.app = app;
	this.monkeyId = monkeyId;
};
SampleProject.comp.prototype = new MT.CustomType;
/**
 * 
 * @param monkeyId
 * @returns {SampleProject.comp}
 */
MT.Application.prototype.comp = function(monkeyId) {
	return new SampleProject.comp(this, monkeyId);
};

SampleProject.comp.prototype.action = function(first, last) {
	print("Calling comp.action.mt");		
	MT.CustomType.prototype.run.call(this, first, last);
};

SampleProject.comp.prototype.foobar = function(foo, bar) {
	print("Calling comp.foobar.mt");		
	MT.CustomType.prototype.run.call(this, foo, bar);
};