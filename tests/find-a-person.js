var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
  });
});

describe('Find by location', function() {
	it('Given a name, check if the map includes a location information for it (a place or geo. location)', function() {
		var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
		var posts = map.find_by_location("Or A.")
		expect(posts).to.be.eql(true);
	});
});

describe('Check inconsistencies map', function() {
	it('Check if there are map inconsistencies, e.g., the same name with different locations', function() {
		var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
		var posts = map.check_inconsistencies_map("Or A.")
		expect(posts).to.be.eql(true);
	});
}); 		

describe('Check if person visit location', function() {
	it('Given a person name and a location, Check if a person visited the location', function() {
		var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
		var posts = map.check_if_person_visit_location("Or A.", "Chabad house Bangkok")
		expect(posts).to.be.eql(true);
	});
}); 	 
