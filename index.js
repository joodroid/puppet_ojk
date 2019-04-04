const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
  );

  await page.goto(
    "https://cfs.ojk.go.id/cfs/ReportViewerForm.aspx?BankCode=PT+BANK+NEGARA+INDONESIA+(PERSERO)%2c+Tbk+&Month=3&Year=2018&FinancialReportPeriodTypeCode=B&FinancialReportTypeCode=PGWS-908-00031"
  );

  await page.waitForSelector("#CFSReportViewer_ctl05_ctl04_ctl00_ButtonLink");
  let expandButton = await page.$(
    "#CFSReportViewer_ctl05_ctl04_ctl00_ButtonLink"
  );
  await expandButton.click();

  let optionDiv = await page.$("#CFSReportViewer_ctl05_ctl04_ctl00_Menu");

  // take only one "a" from options, first, which is excel
  let ExcelTag = await optionDiv.$("a");
  await ExcelTag.click();

  //   await browser.close();
})();
