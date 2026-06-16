export const WEDDING_DATE = new Date("2026-07-22T14:00:00");
export const CELEBRATION_DATE = new Date("2026-07-22T15:00:00");

export const WEDDING_LOCATION = "м. Буча";
export const WEDDING_DATE_FORMATTED = new Intl.DateTimeFormat("uk-UA", {
  day: "numeric",
  month: "long",
  year: "numeric",
  // hour: "2-digit",
  // minute: "2-digit",
}).format(WEDDING_DATE);
export const CELEBRATION_DATE_FORMATTED = new Intl.DateTimeFormat("uk-UA", {
  day: "numeric",
  month: "long",
  year: "numeric",
  // hour: "2-digit",
  // minute: "2-digit",
}).format(CELEBRATION_DATE);
