var scripts = require('..');

describe('scripts', function() {
    
  it('should export resolve', function() {
    expect(scripts.resolve).to.be.a('function');
  });
  
});
