import { test } from '@playwright/test';

// ---------- Helper function ----------
async function translate(page, inputText) {
  const singlishBox = page.locator('textarea[placeholder*="Singlish"]');
  await singlishBox.waitFor({ state: 'visible' });
  await singlishBox.fill(inputText);
  await page.waitForTimeout(1000); // wait for real-time output
}

// ---------- TEST CASES ----------

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'ada kadeeta badu dhanda onee.');
});

test('Pos_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'api chandhe dhalaa,chandhe balanda nimalge gedhara yanda inne.');
});

test('Neg_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'eeye baluwe film eka hody.');
});

test('Pos_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'kattiyama match eka balanda avoth maath yanavaa.');
});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'aeyi oyaa dhuvannee?');
});

test('Pos_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'dhakunen Issara karalaa car 2 athara parallel park karanda.');
});

test('Pos_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'mama mee tharagaya dhinanvaa mata vishvaasayi');
});

test('Neg_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'mata kammali adha lect ynd.');
});

test('Pos_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'mee paara nam eyaata chandhen dhinanda bae.');
});

test('Pos_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'mokadha ithin vennee?');
});

// ---------- UI TEST ----------
test('Pos_UI_0011', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  const singlishBox = page.locator('textarea[placeholder*="Singlish"]');
  await singlishBox.type(
    'kShaNika kadeeta dhuvala gihin enda puluvandha?',
    { delay: 150 }
  );
  await page.waitForTimeout(1000);
});

// ---------- CONTINUE FUNCTIONAL TESTS ----------

test('Pos_Fun_0012', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'mata therenavaa!');
});

test('Pos_Fun_0013', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'mata podi udhavvak karanda puluvandha oyaata?');
});

test('Neg_Fun_0014', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'mekalakanniyek venda epaa.uba bloodyfool kenek wage ne hasirenne.');
});

test('Pos_Fun_0015', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'thamunta puluvan dheyak karapan.');
});

test('Pos_Fun_0016', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'kammaeli ban.');
});

test('Pos_Fun_0017', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'mama paadam karana gaman inne.');
});

test('Pos_Fun_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'pothaganda amathaka unaa.');
});

test('Neg_Fun_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'hanthanata payana hada thopitahakida dhakinna?');
});

test('Neg_Fun_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'ira hadatharupawathinathuruapi marenne na.');
});

test('Pos_Fun_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'hari hari mama Rs.500 dhennam heta.');
});

test('Neg_Fun_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'mata iiye meeting ekata enda bari unaa ne, 50 kata vadaa hitiye naeththam bozz kase eka dhaanava kivvaa ne.');
});

test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'anee mata therenne naee aeyi mn mee degree eka karanne kiyala.');
});

test('Pos_Fun_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'mama adha idhan December 15 venakan gym yanavaa.');
});

test('Pos_Fun_0025', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(
    page,
    'anee siiyee kathavak kiyandako?onna puthee ekomath eka rataka kollek thora gaththaa it degree ekak ee kollata kal yanda yanda hithichcha dhee thamayi mata meka athi velaa thiyenne.'
  );
});

test('Neg_Fun_0026', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'mn balanda\n yanavaa cartoon.');
});

test('Pos_Fun_0027', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'anee palayan ban yanda kunuharapa ahagannee naethuva!');
});

test('Pos_Fun_0028', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'adoo siraavata uBA harakekdha?');
});

test('Neg_Fun_0029', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'naalaa giri atha fight eka denda eddi cacophony ahuna. iwas very scared men.');
});

test('Neg_Fun_0030', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'hathawariyaharirsai!');
});

test('Neg_Fun_0031', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'man sil gannavaa');
});

test('Pos_Fun_0032', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'aadhareta siimaa naee.');
});

test('Pos_Fun_0033', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'kelinma gihin dhakuNata dhalaa kelin enda.');
});

test('Pos_Fun_0034', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  await translate(page, 'dhevi pihitayi!');
});
