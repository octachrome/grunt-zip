// Load in dependencies
var _ = require('underscore.string');
var expect = require('chai').expect;
var fsUtils = require('./utils/fs');
var gruntUtils = require('./utils/grunt');

// Begin our tests
describe('A grunt `unzip` task', function () {
  describe('unzipping a file', function () {
    gruntUtils.runTask('unzip:single');
    fsUtils.loadFiles('single_zip/file.zip');

    it('matches the expected output', function () {
      // Calculate how many bits are off and under our threshold
      var difference = _.levenshtein(this.expectedFile, this.actualFile);
      expect(difference).to.be.at.most(50);
    });
  });
});
exports.world = {
  'nestedUnzip': function (test) {
    test.expect(8);
    addMethods(test);

    // unzip:nested

    // Compare all nested unzip files
    test.equalFiles('nested_unzip/bootstrap/css/bootstrap-responsive.css');
    test.equalFiles('nested_unzip/bootstrap/css/bootstrap-responsive.min.css');
    test.equalFiles('nested_unzip/bootstrap/css/bootstrap.css');
    test.equalFiles('nested_unzip/bootstrap/css/bootstrap.min.css');
    test.equalFiles('nested_unzip/bootstrap/img/glyphicons-halflings-white.png');
    test.equalFiles('nested_unzip/bootstrap/img/glyphicons-halflings.png');
    test.equalFiles('nested_unzip/bootstrap/js/bootstrap.js');
    test.equalFiles('nested_unzip/bootstrap/js/bootstrap.min.js');

    test.done();
  }
};