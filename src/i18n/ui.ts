// Translation dictionary for the site (Hebrew default, English secondary).
// Components read the active locale via `Astro.currentLocale` and call t(key).

export const languages = {
  he: "עברית",
  en: "English",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "he";

export const ui = {
  he: {
    "site.title": "עמותת לנצח אחים",
    "site.description":
      'עמותת לנצח אחים — נולדה מתוך כאב עמוק במטרה להצמיח תקווה וחיים, מלווה אלמנות, יתומי צה"ל ולוחמים.',

    "hero.logoAlt": "עמותת לנצח אחים",
    "hero.heading": "הופכים כאב לשליחות",
    "hero.cta": "בואו להיות חלק",
    "hero.videoLabel": "עשייה למען חיילים ומשפחות",

    "about.heading": "עמותת לנצח אחים",
    "about.text":
      'נולדה מתוך כאב עמוק, במטרה להצמיח תקווה וחיים. העמותה, המלווה באהבה ובמסירות אלמנות, יתומי צה"ל ולוחמים, הוקמה על ידי יוסי ריבלין. לאחר שאיבד את שני אחיו שנרצחו בטבח בנובה, בחר יוסי להפוך את השכול האישי והאובדן הבלתי נתפס למסע אינסופי של חסד, נתינה ועשייה למען האחר.',
    "about.cta": "לסיפור המלא",
    "about.storyLabel": "הסיפור המלא",

    "activities.heading": "הפעילות שלנו",
    "stat.1.label": "חיילים נהנים מימי כיף וגיבוש",
    "stat.2.label": "חיילים בודדים מקבלים בית חם",
    "stat.3.label": "יתומים נהנו ממתנות",

    "card.food.title": "חלוקת אוכל",
    "card.food.desc": "חלוקת ארוחות שבועיות לחיילים בצמתים.",
    "card.tefillin.title": "תפילין",
    "card.tefillin.desc": "חלוקת תפילין מהודרות לחיילים.",
    "card.widows.title": "אלמנות ויתומים",
    "card.widows.desc": "ימי כיף לווי כספי מקיף, מתנות ופינוקים לילדים.",
    "card.lonely.title": "חיילים בודדים",
    "card.lonely.desc": "בית חם ומפנק לחיילים בודדים הכולל את כל צרכיהם ומעבר לכך.",
    "card.support.title": "תמיכה בחיילי צה״ל",
    "card.support.desc": "ימי גיבוש וערבי כיף ליחידות בצבא.",

    "projects.heading": "המיזמים שלנו",
    "projects.cta": "הצטרפו אלינו",
    "projects.playLabel": "נגן סרטון",
    "projects.closeLabel": "סגירת הסרטון",

    "quote.line1": "מתוך הכאב בחרנו",
    "quote.line2": "ליצור חיבור, תקווה",
    "quote.line3a": "ועשיה",
    "quote.line3b": " למען אחרים",
    "quote.signatureAlt": "חתימה של יוסי ריבלין",

    "cta.title": "בואו להיות חלק",
    "cta.subtitle1": "בכל תרומה שלך,",
    "cta.subtitle2": "אתה מדליק אור בלב של אחר.",
    "cta.button": "הצטרפו אלינו",

    "contact.heading": "דברו אתנו",
    "contact.name": "שם:",
    "contact.phone": "טלפון:",
    "contact.button": "בואו להיות חלק",

    "footer.text": "© 2026 לנצח אחים | כל הזכויות שמורות.",
  },
  en: {
    "site.title": "Lanetzach Achim Association",
    "site.description":
      "Lanetzach Achim — born out of deep pain with a mission to grow hope and life, supporting widows, IDF orphans and soldiers.",

    "hero.logoAlt": "Lanetzach Achim Association",
    "hero.heading": "Turning Pain Into Purpose",
    "hero.cta": "Be Part of It",
    "hero.videoLabel": "Action for soldiers and families",

    "about.heading": "Lanetzach Achim Association",
    "about.text":
      "Born out of deep pain, with a mission to grow hope and life. The association lovingly and devotedly supports widows, IDF orphans and soldiers. It was founded by Yossi Rivlin who, after losing his two brothers murdered in the Nova massacre, chose to turn his personal grief and unimaginable loss into an endless journey of kindness, giving and service to others.",
    "about.cta": "Watch the Full Story",
    "about.storyLabel": "The full story",

    "activities.heading": "Our Activities",
    "stat.1.label": "soldiers enjoyed fun and bonding days",
    "stat.2.label": "lone soldiers received a warm home",
    "stat.3.label": "orphans received gifts",

    "card.food.title": "Food Distribution",
    "card.food.desc": "Weekly meals distributed to soldiers at junctions.",
    "card.tefillin.title": "Tefillin",
    "card.tefillin.desc": "Handing out fine tefillin to soldiers.",
    "card.widows.title": "Widows & Orphans",
    "card.widows.desc": "Fun days, full financial support, gifts and treats for the children.",
    "card.lonely.title": "Lone Soldiers",
    "card.lonely.desc": "A warm, caring home for lone soldiers covering all their needs and beyond.",
    "card.support.title": "Supporting IDF Soldiers",
    "card.support.desc": "Bonding days and fun evenings for army units.",

    "projects.heading": "Our Projects",
    "projects.cta": "Join Us",
    "projects.playLabel": "Play video",
    "projects.closeLabel": "Close video",

    "quote.line1": "Out of the pain we chose",
    "quote.line2": "to create connection, hope",
    "quote.line3a": "and action",
    "quote.line3b": " for others",
    "quote.signatureAlt": "Yossi Rivlin's signature",

    "cta.title": "Be Part of It",
    "cta.subtitle1": "With every donation,",
    "cta.subtitle2": "you light up a light in someone's heart.",
    "cta.button": "Join Us",

    "contact.heading": "Contact Us",
    "contact.name": "Name:",
    "contact.phone": "Phone:",
    "contact.button": "Be Part of It",

    "footer.text": "© 2026 Lanetzach Achim | All rights reserved.",
  },
} as const;

export type UIKey = keyof (typeof ui)["he"];

export function getLang(locale: string | undefined): Lang {
  return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function useTranslations(locale: string | undefined) {
  const lang = getLang(locale);
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

// Path to the same page in the other language (used by the switcher).
export function altLangPath(currentLang: Lang): { lang: Lang; path: string; label: string } {
  if (currentLang === "he") return { lang: "en", path: "/en/", label: "English" };
  return { lang: "he", path: "/", label: "עברית" };
}
