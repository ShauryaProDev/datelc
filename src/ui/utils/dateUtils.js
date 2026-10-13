export function calculateDateStats(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diff = Math.abs(end - start);

  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = Math.floor(totalDays / 30.44);
  const totalYears = Math.floor(totalDays / 365.25);
  const totalHours = Math.floor(diff / (1000 * 60 * 60));
  const totalMinutes = Math.floor(diff / (1000 * 60));

  return {
    totalDays,
    totalWeeks,
    totalMonths,
    totalYears,
    totalHours,
    totalMinutes,
  };
}