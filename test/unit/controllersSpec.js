'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

  it('should ....', inject(function($controller) {
    //spec body
    var jamesCtrl = $controller('JamesCtrl', { $scope: {} });
    expect(jamesCtrl).toBeDefined();
  }));

  it('should ....', inject(function($controller) {
    //spec body
    var benCtrl = $controller('BenCtrl', { $scope: {} });
    expect(benCtrl).toBeDefined();
  }));
});
