const axios = require("axios");
const cheerio = require("cheerio");

const getIGNNews = async () => {
  const url = "https://br.ign.com/se/?model=&q=Nintendo";
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const results = [];

  // Seleciona todos os artigos dentro da div.tbl
  $(".tbl article").each((i, el) => {
    const title = $(el).find(".m h3 a span.caption").text().trim();
    const description = $(el).find(".m .info").text().trim();
    const thumbnail = $(el).find(".t a.link img.thumb").attr("data-src");
    const link = $(el).find(".m h3 a").attr("href");


    if (title && link) {
      const fullLink = link.startsWith("http") ? link : `https://br.ign.com${link}`;
      results.push({ title, link: fullLink, thumbnail, description });
    }
  });

  return results;
};

module.exports = { getIGNNews };