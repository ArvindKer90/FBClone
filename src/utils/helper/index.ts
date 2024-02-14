export const calculateTimeDifference = (timestamp: {
  nanoseconds: number;
  seconds: number;
}) => {
  // Convert nanoseconds to milliseconds
  const milliseconds =
    timestamp.seconds * 1000 + Math.round(timestamp.nanoseconds / 1e6);

  // Create a new Date object with the calculated milliseconds
  const date = new Date(milliseconds);

  // Calculate the time difference
  const now = new Date();
  const differenceInMilliseconds = now.getTime() - date.getTime();
  const differenceInDays = Math.floor(
    differenceInMilliseconds / (24 * 60 * 60 * 1000),
  );

  if (differenceInDays > 6) {
    // If the difference exceeds 6 days, return the date in the format "7th Dec 2022"
    const day = date.getDate();
    const month = date.toLocaleString('default', {month: 'short'});
    const year = date.getFullYear();
    return `${day}${getOrdinalSuffix(day)} ${month}${
      year !== now.getFullYear() ? ` ${year}` : ''
    }`;
  } else if (differenceInDays > 0) {
    // If the difference is in days
    return `${differenceInDays} d`;
  } else {
    // If the difference is in hours
    const differenceInHours = Math.floor(
      differenceInMilliseconds / (60 * 60 * 1000),
    );
    return `${differenceInHours} h`;
  }
};
// Function to get the ordinal suffix for a day (e.g., 1st, 2nd, 3rd, ...)
const getOrdinalSuffix = (day: number): string => {
  if (day >= 11 && day <= 13) {
    return 'th';
  } else {
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
};
