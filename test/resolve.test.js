/* global describe, it, expect */

var resolve = require('..').resolve;

describe('resolve', function() {
    
  describe('with default extensions', function() {
    it('should resolve to .js', function() {
      expect(resolve(__dirname + '/data/js/hello')).to.equal(__dirname + '/data/js/hello.js');
    });
    
    it('should resolve to .js if .coffee is not supported', function() {
      expect(resolve(__dirname + '/data/coffee/hello')).to.equal(__dirname + '/data/coffee/hello.js');
    });
  });
  
  describe('with .coffee extension', function() {
    it('should resolve to .coffee', function() {
      expect(resolve(__dirname + '/data/coffee/hello', '.coffee')).to.equal(__dirname + '/data/coffee/hello.coffee');
    });
    
    it('should resolve to .coffee using extension without dot prefix', function() {
      expect(resolve(__dirname + '/data/coffee/hello', 'coffee')).to.equal(__dirname + '/data/coffee/hello.coffee');
    });
    
    it('should resolve to .js if .coffee file not available', function() {
      expect(resolve(__dirname + '/data/js/hello'), '.coffee').to.equal(__dirname + '/data/js/hello.js');
    });
  });
  
  describe('with .js preferred over .coffee extension', function() {
    it('should resolve to .js if available', function() {
      expect(resolve(__dirname + '/data/js/hello'), ['.js', '.coffee']).to.equal(__dirname + '/data/js/hello.js');
    });
    
    it('should resolve to .coffee if .js file not available', function() {
      expect(resolve(__dirname + '/data/coffee/hello', ['.js', '.coffee'])).to.equal(__dirname + '/data/coffee/hello.coffee');
    });
    
    it('should resolve to .js if both .js and .coffee are available', function() {
      expect(resolve(__dirname + '/data/js-coffee/hello', ['.js', '.coffee'])).to.equal(__dirname + '/data/js-coffee/hello.js');
    });
    
    it('should resolve to existing file if extension given', function() {
      expect(resolve(__dirname + '/data/js-coffee/hello.coffee', ['.js', '.coffee'])).to.equal(__dirname + '/data/js-coffee/hello.coffee');
    });
  });
  
  describe('with .coffee preferred over .js extension', function() {
    it('should resolve to .coffee if available', function() {
      expect(resolve(__dirname + '/data/coffee/hello', ['.coffee', '.js'])).to.equal(__dirname + '/data/coffee/hello.coffee');
    });
    
    it('should resolve to .js if .coffee file not available', function() {
      expect(resolve(__dirname + '/data/js/hello'), ['.coffee', '.js']).to.equal(__dirname + '/data/js/hello.js');
    });
    
    it('should resolve to .coffee if both .coffee and .js are available', function() {
      expect(resolve(__dirname + '/data/js-coffee/hello', ['.coffee', '.js'])).to.equal(__dirname + '/data/js-coffee/hello.coffee');
    });
    
    it('should resolve to existing file if extension given', function() {
      expect(resolve(__dirname + '/data/js-coffee/hello.js', ['.coffee', '.js'])).to.equal(__dirname + '/data/js-coffee/hello.js');
    });
  });
    
  it('should default to .js for non-existent file', function() {
    expect(resolve('foo')).to.equal('foo.js');
  });
  
});
