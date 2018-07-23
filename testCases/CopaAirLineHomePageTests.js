var logger = require('../utils/logger.js')

describe('Copa AirLine Home Page Testcases', function () {
          
      it('Copa Airlines title verifications', function () {
           browser.get('https://www.copaair.com');
            expect(browser.getTitle()).toEqual('Brilliant Earth: Engagement Rings & Beyond Conflict Free Diamonds™')
      });
});

