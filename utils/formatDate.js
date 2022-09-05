const dateTest = (date) => {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleString();
};

module.exports = dateTest;
