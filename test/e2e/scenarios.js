'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('math-thingy', function() {

  browser.get('index.html');

  it('should automatically redirect to /craig when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/craig");
  });


  describe('craig', function() {

    beforeEach(function() {
      browser.get('index.html#/craig');
    });


    it('should render craig when user navigates to /craig', function() {
      expect(element.all(by.css('[ng-view] div')).first().getText())
          .toMatch(/Question: \d+ \+ \d+ = /);
    });

  });

  describe('james', function() {

    beforeEach(function() {
      browser.get('index.html#/james');
    });


    it('should render james when user navigates to /james', function() {
      expect(element.all(by.css('[ng-view] div')).first().getText()).
        toMatch(/\d+ \+ \d+ =/);
    });
  });
});

