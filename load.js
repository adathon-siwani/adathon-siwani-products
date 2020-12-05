function uniqueArrayOfObject(array, keyToBeUnique) {
  return array.filter(
    (x, xi) =>
      !array.slice(xi + 1).some((y) => y[keyToBeUnique] === x[keyToBeUnique])
  );
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./en.fundacionniwok.org.har"));
const lists = data.log.entries
  .map((e) => e.response)
  .filter(
    (r) =>
      r.content.mimeType === "application/json" &&
      r.content.text.includes("productsWithMetaData")
  )
  .map(
    (r) =>
      JSON.parse(r.content.text).data.catalog.category.productsWithMetaData.list
  )
  .reduce((prev, curr) => {
    return [...prev, ...curr];
  }, []);

const products = uniqueArrayOfObject(lists, "id");

fs.writeFileSync("products.json", JSON.stringify(products, null, 4));

fs.writeFileSync(
  "products.csv",
  `id,name,price,photo\n` +
    products
      .map(
        (p) =>
          `${p.id},${p.name},${p.price},${p.media.length ? p.media[0].url : ""}`
      )
      .join("\n")
);

const img = lists
  .map((p) => (p.media.length ? p.media[0].url : null))
  .filter((i) => i !== null)
  .map((i) => `https://static.wixstatic.com/media/${i}`)
  .filter(onlyUnique);

fs.writeFileSync("imgs.csv", img.join("\n"));
