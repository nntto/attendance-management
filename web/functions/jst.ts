const timeZoneAdjustment = (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000
export const jstDate = (date: Date) => {
  return new Date(new Date(date).getTime() + timeZoneAdjustment)
}
