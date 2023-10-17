const percySnapshot = require("@percy/webdriverio");

describe("End-to-End Test", () => {
  it("Open Bstack Demo website and perform some actions", async () => {
    await browser.url("https://www.bstackdemo.com/");
    await expect(browser).toHaveTitle("StackDemo");
    await percySnapshot(browser, "Bstack Home Page");

    await browser.$('//span[@class="checkmark" and text()="Apple"]').click();
    await percySnapshot(browser, "Apply Filter");

    await browser.$('(//div[@class="shelf-item__buy-btn"])[1]').click();
    await percySnapshot(browser, "Add to Cart-1");
  });
});
