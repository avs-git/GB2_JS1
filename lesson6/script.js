const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]; //4 не существует

const thumbnailPath = "./small/";
const fullImagePath = "./big/";

const errImgFileName = "error.jpg";

const thumbnailWrapper = document.querySelector("#thumbnailWrapper");
const fullImage = document.querySelector("#fullImage");

images.forEach((src) => {
  const img = document.createElement("img");
  img.src = `${thumbnailPath}${src}`;
  img.alt = src;
  img.onerror = () => {
    img.src = `${thumbnailPath}${errImgFileName}`;
  };

  thumbnailWrapper.append(img);
});

const handleThumbnailClick = ({ target }) => {
  if (target.tagName !== "IMG") return;
  const imgFileName = target.src.split("/").slice(-1)[0];
  fullImage.src = `${fullImagePath}${imgFileName}`;
};

const handleError = () => {
  fullImage.src = `${fullImagePath}${errImgFileName}`;
};

thumbnailWrapper.addEventListener("click", handleThumbnailClick);
fullImage.addEventListener("error", handleError);

// ___________________________ 2 задание ___________________________
const goods = [
  {
    id: 1,
    title: "рубашка",
    price: 100,
  },
  {
    id: 2,
    title: "брюки",
    price: 300,
  },
  {
    id: 3,
    title: "пиджак",
    price: 400,
  },
  {
    id: 4,
    title: "туфли",
    price: 500,
  },
];

const basket = {};
const currencySign = "₽";

const goodsWrapper = document.querySelector("#goodsWrapper");
const basketView = document.querySelector("#basketView");

const getEl = (el, text) => {
  const element = document.createElement(el);
  if (text) element.innerText = text;

  return element;
};

const addToCart = (good) => {
  const { id } = good;

  if (!basket[id]) basket[id] = { ...good };

  const pcs = basket[id]?.pcs;
  basket[id].pcs = pcs ? pcs + 1 : 1;

  updateBasket();
};

const updateBasket = () => {
  basketView.innerHTML = "";

  const basketTable = getEl("table");
  basketTable.classList.add("basketTable");

  const tHead = getEl("tr");
  const td1 = getEl("td", "Название");
  const td2 = getEl("td", "кол-во");
  const td3 = getEl("td", "цена");
  const td4 = getEl("td", "сумма");

  tHead.append(td1, td2, td3, td4);

  basketTable.append(tHead);

  basketView.append(basketTable);

  let basketSum = 0;

  Object.values(basket).forEach((good) => {
    const { title, price, pcs } = good;

    const row = getEl("tr");
    const tdName = getEl("td", title);
    const tdPcs = getEl("td", pcs);
    const tdPrice = getEl("td", `${price}${currencySign}`);
    const tdSum = getEl("td", `${price * pcs}${currencySign}`);

    row.append(tdName, tdPcs, tdPrice, tdSum);
    basketTable.append(row);
    basketSum += price * pcs;
  });

  const basketSumDiv = getEl("div", `Итого: ${basketSum}${currencySign}`);
  basketView.append(basketSumDiv);
};

goods.forEach((good) => {
  const { title, price } = good;

  const goodItem = getEl("div");
  goodItem.classList.add("goodItem");
  const goodTitle = getEl("h4", title);
  const goodPrice = getEl("div", `${price}${currencySign}`);

  const addToCartButton = getEl("div", "В корзину");
  addToCartButton.classList.add("addToCartButton");

  addToCartButton.addEventListener("click", () => addToCart(good), false);

  goodItem.append(goodTitle, goodPrice, addToCartButton);

  goodsWrapper.append(goodItem);
});
