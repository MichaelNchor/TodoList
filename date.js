//module.exports.getDate === exports.getDate
exports.getDate = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  let date = today.toLocaleDateString("en-US", options);
  return date;
};
