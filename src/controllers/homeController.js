const getHomePage = (req, res) => {
  return res.render("index.ejs");
}

export default getHomePage;

module.exports = {
  getHomePage
}
