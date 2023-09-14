const useCountdown = (targetDate) => {
  const givenDateTime = targetDate.trim();

  const givenDateTimeObj = new Date(givenDateTime);
  const currentDateTime = new Date();

  const timeDifference = givenDateTimeObj - currentDateTime;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
}

export { useCountdown };
