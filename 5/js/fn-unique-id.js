function createIdGenerator() {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

export { createIdGenerator };
