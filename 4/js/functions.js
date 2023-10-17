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


