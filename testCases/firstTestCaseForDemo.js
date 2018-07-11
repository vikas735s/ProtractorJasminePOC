describe('Proc Demo', function () {
      it('Udmy title verifications', function () {
            browser.get('https://www.udemy.com/');
            expect(browser.getTitle()).toEqual('Online Courses - Learn Anything, On Your Schedule | Udemy')
      });

      it('MMT title verifications', function () {
            browser.get('https://www.makemytrip.com/');
            expect(browser.getTitle()).toEqual('Flight Booking, Flight Tickets Booking at Lowest Airfare | MakeMyTrip')
      });
});

