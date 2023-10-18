//Функция-генератор для получения уникальных идентификаторов
function createIdGenerator() {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}
const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();
const generatePhotoUrl = createIdGenerator();

export {generatePhotoId};
export {generateCommentId};
export {generatePhotoUrl};
