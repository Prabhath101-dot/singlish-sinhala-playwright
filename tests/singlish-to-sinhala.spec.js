import { test } from '@playwright/test';

// ---------- Helper function ----------
async function translate(page, inputText) {
  const singlishBox = page.locator('textarea[placeholder*="Singlish"]');
  await singlishBox.waitFor({ state: 'visible' });
  await singlishBox.fill(inputText);
  await page.waitForTimeout(1000); // wait for real-time output
}const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    {
      tcId: 'Pos_Fun_0001',
      name: 'Verify that the system correctly translates a simple daily sentence into Sinhala.',
      input: 'adha kadeeta badu dhanda onee.',
      expected: 'අද කඩේට බඩු දන්ඩ ඔනේ.'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Verify that the system correctly translates a compound daily sentence into Sinhala.',
      input: 'api chandhe dhalaa,chandhe balanda nimalge gedhara yanda inne.',
      expected: 'අපි චන්දෙ දලා,චන්දෙ බලන්ඩ නිමල්ගෙ ගෙදර යන්ඩ ඉන්නේ.'
    },

    {
      tcId: 'Pos_Fun_0005',
      name: 'Verify that the system correctly translates a simple question into Sinhala.',
      input: 'aeyi oyaa dhuvannee?',
      expected: 'ඇයි ඔයා දුවන්නේ?'
    },

    {
      tcId: 'Pos_Fun_0006',
      name: 'Verify that the system correctly translates a daily sentence with mixed English terms into Sinhala.',
      input: 'dhakunen Issara karalaa car 2 athara parallel park karanda.',
      expected: 'දකුනෙන් ඉස්සර කරලා car 2 අතර parallel park කරන්ඩ.'
    },
    {
      tcId: 'Pos_Fun_0007',
      name: 'Verify that the system correctly translates an affirmation sentence into Sinhala.',
      input: 'mama mee tharagaya dhinanvaa mata vishvaasayi',
      expected: 'මම මේ තරගය දිනන්වා මට විශ්වාසයි'
    },

    {
      tcId: 'Pos_Fun_0009',
      name: 'Verify that the system correctly translates a negative statement into Sinhala.',
      input: 'mee paara nam eyaata chandhen dhinanda bae.',
      expected: 'මේ පාර නම් එයාට චන්දෙන් දිනන්ඩ බැ.'
    },

    {
      tcId: 'Pos_Fun_0010',
      name: 'Verify that the system correctly translates an interrogative sentence with "mokadha" into Sinhala.',
      input: 'mokadha ithin vennee?',
      expected: 'මොකද ඉතින් වෙන්නේ?'
    },

    {
      tcId: 'Pos_Fun_0012',
      name: 'Verify that the system correctly translates a short exclamation or feedback into Sinhala.',
      input: 'mata therenavaa!',
      expected: 'මට තෙරෙනවා!'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Verify that the system correctly translates a request for help into Sinhala.',
      input: 'mata podi udhavvak karanda puluvandha oyaata?',
      expected: 'මට පොඩි උදව්වක් කරන්ඩ පුලුවන්ද ඔයාට?'
    },


    {
      tcId: 'Pos_Fun_0015',
      name: 'Verify that the system correctly translates an imperative (command) sentence into Sinhala.',
      input: 'thamunta puluvan dheyak karapan.',
      expected: 'තමුන්ට පුලුවන් දෙයක් කරපන්.'
    },

    {
      tcId: 'Pos_Fun_0016',
      name: 'Verify that the system correctly translates a slang expression into Sinhala.',
      input: 'kammaeli ban.',
      expected: 'කම්මැලි බන්.'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Verify that the system correctly translates a sentence describing a current action into Sinhala.',
      input: 'mama paadam karana gaman inne.',
      expected: 'මම පාඩම් කරන ගමන් ඉන්නේ.'
    },

    {
      tcId: 'Pos_Fun_0018',
      name: 'Verify that the system correctly translates a sentence about forgetting into Sinhala.',
      input: 'potha ganda amathaka unaa.',
      expected: 'පොත ගන්ඩ අමතක උනා.'
    },


    {
      tcId: 'Pos_Fun_0021',
      name: 'Verify that the system correctly translates a sentence with currency and future tense into Sinhala.',
      input: 'hari hari mama Rs.500 dhennam heta.',
      expected: 'හරි හරි මම Rs.500 දෙන්නම් හෙට.'
    },



    {
      tcId: 'Pos_Fun_0023',
      name: 'Verify that the system correctly translates a complex emotional expression with mixed English words into Sinhala.',
      input: 'anee mata therenne naee aeyi mn mee degree eka karanne kiyala.',
      expected: 'අනේ මට තෙරෙන්නෙ නෑ ඇයි ම්න් මේ degree එක කරන්නේ කියල.'
    },

    {
      tcId: 'Pos_Fun_0024',
      name: 'Verify that the system correctly translates a sentence with a specific date and activity into Sinhala.',
      input: 'mama adha idhan December 15 venakan gym yanavaa.',
      expected: 'මම අද ඉදන් December 15 වෙනකන් gym යනවා.'
    },
    {
      tcId: 'Pos_Fun_0025',
      name: 'Verify that the system can handle and translate a very long paragraph of informal conversation correctly.',
      input: 'anee siiyee kathavak kiyandako?onna puthee ekomath eka rataka kollek thora gaththaa it degree ekak ee kollata kal yanda yanda hithichcha dhee thamayi mata meka athi velaa thiyenne.eka dhavasak ee campus eke thibba event ekkata oyaa yanavadha kiyala ekek e kollagen ahuvaa.e kolla kivvaa mata 2.00pm  lectures ivarayi, oka balanda yanavata vadaa hodhyi gedetta vela tiktok ekak balana eka kiyla.anith ekkena kivva budhu ammoo! kiyala.un dhennata theruna meke vena kisima dheeka athal ekak na kiyala eete passe dhenama gedara gihin Tiktok bala bala paan kavaa.yaluva aehuva ara kollagen ubata meke kellek  talk karanda hithenne nadhdha  kiyala e koala kivva meke inna kello hodhai kubuuree kakkoo elavanda thiyanda.eka paratama ara kola kivvaa ,  sliit ID eka dhaala aevith ne lecture hall eke kiyala. eeta passe dhennama giya eka genda aaya campus ekata.',
      expected: 'අනේ සීයේ කතවක් කියන්ඩකො?ඔන්න පුතේ එකොමත් එක රටක කොල්ලෙක් තොර ගත්තා it degree එකක් ඒ කොල්ලට කල් යන්ඩ යන්ඩ හිතිච්ච දේ තමයි මට මෙක අති වෙලා තියෙන්නෙ.එක දවසක් ඒ campus eke තිබ්බ event එක්කට ඔයා යනවද කියල එකෙක් එ කොල්ලගෙන් අහුවා.එ කොල්ල කිව්වා මට 2.00pm  lectures ඉවරයි, ඔක බලන්ඩ යනවට වඩා හොද්යි ගෙඩෙට්ට වෙල tiktok එකක් බලන එක කිය්ල.අනිත් එක්කෙන කිව්ව බුදු අම්මෝ! කියල.උන් දෙන්නට තෙරුන මෙකෙ වෙන කිසිම දේක අතල් එකක් න කියල ඒටෙ පස්සෙ දෙනම ගෙඩර ගිහින් Tiktok බල බල පාන් කවා.යලුව ඇහුව අර කොල්ලගෙන් උබට මෙකෙ කෙල්ලෙක්  talk කරන්ඩ හිතෙන්නෙ නද්ද  කියල එ koala කිව්ව මෙකෙ ඉන්න කෙල්ලො හොදෛ කුබූරේ කක්කෝ එලවන්ඩ තියන්ඩ.එක පරටම අර කොල කිව්වා ,  ස්ලීට් ID එක දාල ඇවිත් නේ lecture hall eke කියල. ඒට පස්සෙ දෙන්නම ගිය එක ගෙන්ඩ ආය campus එකට.'
    },
    {
      tcId: 'Pos_Fun_0026',
      name: 'Verify that the system translates a simple future action with an English term correctly.',
      input: 'mn balanda yanavaa cartoon.',
      expected: 'ම්න් බලන්ඩ යනවා cartoon.'
    },
    {
      tcId: 'Pos_Fun_0027',
      name: 'Verify that the system correctly translates an informal imperative sentence (slang) into Sinhala.',
      input: 'anee palayan ban yanda kunuharapa ahagannee naethuva!',
      expected: 'අනේ පලයන් බන් යන්ඩ කුනුහරප අහගන්නේ නැතුව!'
    },
    {
      tcId: 'Pos_Fun_0028',
      name: 'Verify that the system correctly translates an informal question/insult into Sinhala.',
      input: 'adoo shiraavata uBA harakekdha?',
      expected: 'අඩෝ ශිරාවට උඹ හරකෙක්ද? '
    },
    {
      tcId: 'Pos_Fun_0032',
      name: 'Verify that the system correctly translates a short romantic/poetic statement.',
      input: 'aadhareta siimaa naee.',
      expected: 'ආදරෙට සීමා නෑ.'
    },
    {
      tcId: 'Pos_Fun_0033',
      name: 'Verify that the system correctly translates direction-related instructions.',
      input: 'kelinma gihin dhakuNata dhalaa kelin enda.',
      expected: 'කෙලින්ම ගිහින් දකුණට දලා කෙලින් එන්ඩ.'
    },
    {
      tcId: 'Pos_Fun_0034',
      name: 'Verify that the system correctly translates a common blessing/wish.',
      input: 'dhevi pihitayi! ',
      expected: 'දෙවි පිහිටයි!'
    }
  ],

  negative: [
    {
      tcId: 'Neg_Fun_0022',
      name: 'Verify that the system correctly translates a long sentence with commas and mixed terms into Sinhala.',
      input: 'mata iiye meeting ekata enda bari unaa ne, 50 kata vadaa hitiye naeththam bozz kase eka dhaanava kivvaa ne.',
      expected: 'මට ඊයේ meeting එකට එන්න බැරි උනානේ ,50 කට වඩා හිටියේ නැත්නම් bozz කේස් එක දානවා කිව්ව නේ.'
    },
    {
      tcId: 'Neg_Fun_0020',
      name: 'Verify that the system correctly translates a Singlish sentence without spaces between words into Sinhala.',
      input: 'ira hadatharupawathinathuruapi marenne na.',
      expected: 'ඉර හඳ තරු පවතින තුරු අපි මැරෙන්නේ නෑ.'
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Verify that the system correctly translates a Singlish sentence with slight misspelling into Sinhala.',
      input: 'eeye baluwe film eka hody.',
      expected: 'ඊයේ බැලුව film එක හොඳයි.'
    },
    {
      tcId: 'Neg_Fun_0019',
      name: 'Verify that the system correctly translates a Singlish sentence where multiple words are joined into Sinhala.',
      input: 'hanthanata payana hada thopitahakida dhakinna?',
      expected: 'හන්තානට පායන හඬ තොපිට හැකිද දකින්න?'
    },
    {
      tcId: 'Neg_Fun_0014',
      name: 'Verify that the system correctly translates a sentence with slang words into Sinhala.',
      input: 'mekalakanniyek venda epaa.uba bloodyfool kenek wage ne hasirenne.',
      expected: 'මේ කාලකන්නියෙක් වෙන්ඩ එපා.උඹ bloody fool කෙනෙක් වගේනෙ හැසිරෙන්නේ.'
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'Verify that the system correctly translates a short Singlish sentence with abbreviations into Sinhala.',
      input: 'mata kammali adha lect ynd.',
      expected: 'මට කම්මැලි අද lect යන්ඩ.'
    },
    {
      tcId: 'Neg_Fun_0029',
      name: 'Verify that the system correctly translates a complex Singlish sentence with academic and informal terms.',
      input: 'naalaa giri atha fight eka denda eddi cacophony ahuna. iwas very scared men.',
      expected: 'නාලාගිරි ඇතා fight එක දෙන්ඩ එද්දි cacophony ඇහුණා.i was very scared men.'
    },
    {
      tcId: 'Neg_Fun_0031',
      name: 'Verify that the system correctly translates a very short sentence with a Sinhala religious term.',
      input: 'man sil gannavaa',
      expected: 'මන් සිල් ගන්නවා'
    },
    {
      tcId: 'Neg_Fun_0030',
      name: 'Verify that the system correctly translates a very short joined Singlish phrase.',
      input: 'hathawariyaharirsai!',
      expected: 'හාතාවාරිය හරි රසයි!'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'Verify that the system correctly translates a Singlish sentence where two words are joined into Sinhala.',
      input: 'kattiyamamatch eka balanda avoth maath yanavaa.',
      expected: 'කට්ටියම match එක බලන්ඩ අවොත් මාත් යනවා.'
    }

  ],

  ui: {
    tcId: 'Pos_UI_0011',
    name: 'Verify that the system correctly translates a polite request into Sinhala.',
    input: 'kShaNika kadeeta dhuvala gihin enda puluvandha?',
    partialInput: 'kShaNika',
    expectedFull: 'ක්ෂණික කඩේට දුවල ගිහින් එන්ඩ පුලුවන්ද?'
  }

};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();

      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });

      // Wait for partial output
      await page.waitForTimeout(1500);

      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);

      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });

      // Wait for full translation
      await translator.waitForOutput();

      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);

      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
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
