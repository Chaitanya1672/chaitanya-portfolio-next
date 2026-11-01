export function getYearsOfExperience(
  startDate: string,
  currentDate = new Date(),
) {
  const dateParts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(startDate)

  if (!dateParts) {
    throw new Error(`Invalid experience start date: ${startDate}`)
  }

  const [, year, month, day] = dateParts.map(Number)
  const start = new Date(Date.UTC(year, month - 1, day))

  if (
    start.getUTCFullYear() !== year ||
    start.getUTCMonth() !== month - 1 ||
    start.getUTCDate() !== day
  ) {
    throw new Error(`Invalid experience start date: ${startDate}`)
  }

  const yearDifference = currentDate.getUTCFullYear() - year
  const hasReachedAnniversary =
    currentDate.getUTCMonth() + 1 > month ||
    (currentDate.getUTCMonth() + 1 === month && currentDate.getUTCDate() >= day)

  return Math.max(0, yearDifference - (hasReachedAnniversary ? 0 : 1))
}
