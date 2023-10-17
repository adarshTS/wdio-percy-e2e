describe("End-to-End Test", () => {
  it("Open Bstack Demo website and perform some actions", async () => {
    await browser.url("https://www.bstackdemo.com/");
    await expect(browser).toHaveTitle("StackDemo");

    await browser.$('//span[@class="checkmark" and text()="Apple"]').click();
    await browser.$('(//div[@class="shelf-item__buy-btn"])[1]').click();
  });
});
