const root = document.querySelector("#root");

const getBorderTd = ({ content, isUpsideDown = false }) => {
  const td = document.createElement("td");
  td.classList = isUpsideDown ? "upsideDown tdBorder" : "tdBorder";

  td.innerText = content;

  return td;
};

const getChessTd = ({ col, row }) => {
  const td = document.createElement("td");
  td.id = `${colsNames[col]}${rowsNames[row]}`;
  td.classList.add((col + row) % 2 ? "tdWhite" : "tdBlack");

  return td;
};

const setFigurePosition = ({ position, char, title, prevPosition, id }) => {
  const posTd = document.getElementById(position);

  if (!posTd) {
    console.log(`!!!!! wrong position ${position} for ${title}`);
    return;
  }

  posTd.innerHTML = char;
  posTd.dataset.occupiedBy = id;

  if (prevPosition) {
    const prevPosTd = document.getElementById(prevPosition);
    if (prevPosTd) prevPosition.innerHTML = "";
  }
};

const chessDesk = document.createElement("table");
chessDesk.classList.add("chessTable");

async function initDesk() {
  for (let row = 0; row < ROWS_QUANTITY + 2; row++) {
    const tr = document.createElement("tr");
    chessDesk.append(tr);

    for (let col = 0; col < COLS_QUANTITY + 2; col++) {
      let td;
      if (row === 0 || row === ROWS_QUANTITY + 1) {
        td = getBorderTd({
          content:
            col === 0 || col === COLS_QUANTITY + 1 ? "" : colsNames[col - 1],
          isUpsideDown: col === COLS_QUANTITY + 1 || row === 0,
        });
      } else {
        if (col === 0 || col === COLS_QUANTITY + 1) {
          td = getBorderTd({
            content: rowsNames[row - 1],
            isUpsideDown: col === COLS_QUANTITY + 1 || row === 0,
          });
        } else {
          td = getChessTd({ col: col - 1, row: row - 1 });
        }
      }

      tr.append(td);
    }
  }
}

initDesk().then(() => {
  figures.forEach((figure) => {
    setFigurePosition(figure);
  });
});

root.append(chessDesk);
