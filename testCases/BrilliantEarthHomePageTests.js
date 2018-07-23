var logger = require("../utils/logger");
describe('Brilliant Earth HomePage Tests', function () {


    logger().info("In:Brilliant Earth HomePage Tests");

    it('Brilliant Earth title verifications', function () {
        logger().info("In: Brilliant Earth title verifications")
        browser.get('https://www.brilliantearth.com/');
        expect(browser.getTitle()).toEqual('Brilliant Earth: Engagement Rings & Beyond Conflict Free Diamonds™');
        logger().info("Out: Brilliant Earth title verifications");
    });

    logger().info("Out: Brilliant Earth HomePage Tests ");
});

