// Функция для проверки длины строки.

const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength('проверяемая строка', 10); // false


// Функция для проверки, является ли строка палиндромом.

const checkPalindromicity = (string) => {
  const normalizeString = string.replaceAll(' ', '').toUpperCase();
  let invertedString = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    invertedString += normalizeString.at(i);
  }
  const result = (invertedString === normalizeString) ? 'Строка является палиндромом' : 'Строка не является палиндромом';
  return result;
};
checkPalindromicity('Лёша на полке клопа нашёл '); // true


// Функция, которая извлекает содержащиеся в ней цифры от 0 до 9

const extractNumber = (string) => {
  const str = string.toString();
  let result = '';
  for (let i = 0; i <= str.length; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      result += str[i];
    }
  }
  return parseInt(result, 10);
};
extractNumber('33 коровы');


// Функция: Делу - время
const makeTime = (startTime, endTime, timeMetting, durationMetting) => {
  const minutesPerHour = 60;
  const arrayStartTimes = startTime.split(':');
  const arrayEndTimes = endTime.split(':');
  const arrayTimeMettings = timeMetting.split(':');
  const times = arrayStartTimes.concat(arrayEndTimes).concat(arrayTimeMettings);
  const numTimes = [];
  times.forEach((time) => {
    numTimes.push(Number(time));
  });
  const numTimesMinutes = [];
  for (let i = 0; i < numTimes.length; i++) {
    numTimesMinutes[i] = numTimes[i];
    if (i % 2 === 0) {
      numTimesMinutes[i] = numTimes[i] * minutesPerHour;
    }
  }
  const arrayStartTimesMinutes = numTimesMinutes.slice(0, 2);
  const arrayEndTimesMinutes = numTimesMinutes.slice(2, 4);
  const arrayTimeMettingsMinutes = numTimesMinutes.slice(4, 6);

  const startTimesMinutes = arrayStartTimesMinutes.reduce((sum, current) => (sum + current), 0);
  const endTimesMinutes = arrayEndTimesMinutes.reduce((sum, current) => (sum + current), 0);
  const timeMettingsMinutes = arrayTimeMettingsMinutes.reduce((sum, current) => (sum + current), 0);

  const timeEndMettingsMinutes = timeMettingsMinutes + durationMetting;

  return (timeMettingsMinutes < endTimesMinutes && startTimesMinutes <= timeMettingsMinutes && timeEndMettingsMinutes <= endTimesMinutes);
};

makeTime('8:0', '10:0', '8:0', 120);


