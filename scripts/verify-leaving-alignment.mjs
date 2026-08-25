import { assertBanned, assertIncludes, sourceFor } from "./verify-utils.mjs";

const englishLeaving = sourceFor("en", "leaving-controlling-relationship");
const hebrewLeaving = sourceFor("he", "leaving-controlling-relationship");
const englishHome = sourceFor("en", "index");
const hebrewHome = sourceFor("he", "index");

assertIncludes(
  englishLeaving,
  "If you think he sees more than he should, do not rush to change everything.",
  "English Leaving headline",
);
assertIncludes(englishLeaving, "Access, visibility, and control", "English Leaving scope");
assertIncludes(englishLeaving, "Private Exposure Assessment", "English Leaving service framing");
assertIncludes(
  hebrewLeaving,
  "אם את חוששת שהוא רואה יותר ממה שהוא אמור לראות, אל תמהרי לשנות הכול.",
  "Hebrew Leaving headline",
);
assertIncludes(hebrewLeaving, "גישה, נראות ושליטה", "Hebrew Leaving scope");
assertIncludes(hebrewLeaving, "חשיפה דיגיטלית", "Hebrew Leaving service framing");
assertIncludes(
  englishHome,
  "If you think they see more than they should, do not rush to change everything.",
  "English home Leaving card",
);
assertIncludes(
  hebrewHome,
  "אם את חוששת שהוא רואה יותר ממה שהוא אמור לראות, אל תמהרי לשנות הכול.",
  "Hebrew home Leaving card",
);

const retiredEnglishScope = /(?:safety|safe|danger|hotline|domestic|abuse|police|advocate|housing|clean ground|emergency|shelter|crisis|violence)/i;
const retiredHebrewScope = /(?:בטיחות|בטוח|סכנה|קו חירום|שירות חירום|אלימות|התעללות|משטרה|מקלט|עו[״"]ס|118|100)/;

assertBanned(retiredEnglishScope, englishLeaving, "English Leaving scope");
assertBanned(retiredHebrewScope, hebrewLeaving, "Hebrew Leaving scope");

console.log("LEAVING ALIGNMENT VERIFIED");
