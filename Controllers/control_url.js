const ShortUniqueId = require('short-unique-id');
const URL = require("../Models/model_url");

async function handelGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });
  const shortId = new ShortUniqueId();
  const newId = shortId.rnd();
  //   const shortId = ShortUniqueId.rnd();
  await URL.create({
    shortId: newId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: newId});
}

module.exports = {
  handelGenerateNewShortURL,
};
