// Функция для проверки длины строки.

const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength('проверяемая строка', 10); // false


// Функция для проверки, является ли строка палиндромом.

const checkPalindromicity = function (string) {
  const normalizeString = string.replaceAll(' ', '').toUpperCase();
  let invertedString = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    invertedString += normalizeString.at(i);
  }
  return (invertedString === normalizeString) ? 'Строка является палиндромом' : 'Строка не является палиндромом';
};
checkPalindromicity('Лёша на полке клопа нашёл '); // true
