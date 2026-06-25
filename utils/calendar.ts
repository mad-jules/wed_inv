import { CELEBRATION_DATE, WEDDING_DATE } from "@/constants/wedding";

const formatICSDate = (date: Date) =>
  date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

export const addToCalendar = () => {
  const weddingEnd = new Date(WEDDING_DATE.getTime() + 60 * 60 * 1000); // 1 hour
  const celebrationEnd = new Date(
    CELEBRATION_DATE.getTime() + 6 * 60 * 60 * 1000,
  ); // 6 hours

  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding Invitation//UA
CALSCALE:GREGORIAN
METHOD:PUBLISH

BEGIN:VEVENT
UID:wedding-${Date.now()}@wedding
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(WEDDING_DATE)}
DTEND:${formatICSDate(weddingEnd)}
SUMMARY:Церемонія
LOCATION:Буча, вул. Енергетиків, 2
DESCRIPTION:Весільна церемонія
STATUS:CONFIRMED
END:VEVENT

BEGIN:VEVENT
UID:celebration-${Date.now()}@wedding
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(CELEBRATION_DATE)}
DTEND:${formatICSDate(celebrationEnd)}
SUMMARY:Святкування весілля
LOCATION:Ворзель, вул. Шевченка, 22, 24
DESCRIPTION:Святкова вечеря та святкування
STATUS:CONFIRMED
END:VEVENT

END:VCALENDAR`;

  const blob = new Blob([ics], {
    type: "text/calendar;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "wedding.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
};
