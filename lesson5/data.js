const colsNames = "abcdefgh";
const rowsNames = "12345678";

const COLS_QUANTITY = 8;
const ROWS_QUANTITY = 8;

const figures = [
  // чёрные
  {
    id: "blackPawn1",
    position: "a7",
    title: "Чёрная пешка 1",
    char: "&#9823;",
  },
  {
    id: "blackPawn2",
    position: "b7",
    title: "Чёрная пешка 2",
    char: "&#9823;",
  },
  {
    id: "blackPawn3",
    position: "c7",
    title: "Чёрная пешка 3",
    char: "&#9823;",
  },
  {
    id: "blackPawn4",
    position: "d7",
    title: "Чёрная пешка 4",
    char: "&#9823;",
  },
  {
    id: "blackPawn5",
    position: "e7",
    title: "Чёрная пешка 5",
    char: "&#9823;",
  },
  {
    id: "blackPawn6",
    position: "f7",
    title: "Чёрная пешка 6",
    char: "&#9823;",
  },
  {
    id: "blackPawn7",
    position: "g7",
    title: "Чёрная пешка 7",
    char: "&#9823;",
  },
  {
    id: "blackPawn8",
    position: "h7",
    title: "Чёрная пешка 8",
    char: "&#9823;",
  },
  {
    id: "blackKing",
    position: "e8",
    title: "Чёрный король",
    char: "&#9818;",
  },
  {
    id: "blackQueen",
    position: "d8",
    title: "Чёрный ферзь",
    char: "&#9819;",
  },
  {
    id: "blackRook1",
    position: "a8",
    title: "Чёрная ладья 1",
    char: "&#9820;",
  },
  {
    id: "blackRook2",
    position: "h8",
    title: "Чёрная ладья 2",
    char: "&#9820;",
  },
  {
    id: "blackKnight1",
    position: "b8",
    title: "Чёрный конь 1",
    char: "&#9822;",
  },
  {
    id: "blackKnight2",
    position: "g8",
    title: "Чёрный конь 2",
    char: "&#9822;",
  },
  {
    id: "blackBishop1",
    position: "c8",
    title: "Чёрный слон 1",
    char: "&#9821;",
  },
  {
    id: "blackBishop2",
    position: "f8",
    title: "Чёрный слон 2",
    char: "&#9821;",
  },
  // -------------------- белые ---------------------
  {
    id: "whitePawn1",
    position: "a2",
    title: "Белая пешка 1",
    char: "&#9817;",
  },
  {
    id: "whitePawn2",
    position: "b2",
    title: "Белая пешка 2",
    char: "&#9817;",
  },
  {
    id: "whitePawn3",
    position: "c2",
    title: "Белая пешка 3",
    char: "&#9817;",
  },
  {
    id: "whitePawn4",
    position: "d2",
    title: "Белая пешка 4",
    char: "&#9817;",
  },
  {
    id: "whitePawn5",
    position: "e2",
    title: "Белая пешка 5",
    char: "&#9817;",
  },
  {
    id: "whitePawn6",
    position: "f2",
    title: "Белая пешка 6",
    char: "&#9817;",
  },
  {
    id: "whitePawn7",
    position: "g2",
    title: "Белая пешка 7",
    char: "&#9817;",
  },
  {
    id: "whitePawn8",
    position: "h2",
    title: "Белая пешка 8",
    char: "&#9817;",
  },
  {
    id: "whiteKing",
    position: "e1",
    title: "Белый король",
    char: "&#9812;",
  },
  {
    id: "whiteQueen",
    position: "d1",
    title: "Белый ферзь",
    char: "&#9813;",
  },
  {
    id: "whiteRook1",
    position: "a1",
    title: "Белая ладья 1",
    char: "&#9814;",
  },
  {
    id: "whiteRook2",
    position: "h1",
    title: "Белая ладья 2",
    char: "&#9814;",
  },
  {
    id: "whiteKnight1",
    position: "b1",
    title: "Белый конь 1",
    char: "&#9816;",
  },
  {
    id: "whiteKnight2",
    position: "g1",
    title: "Белый конь 2",
    char: "&#9816;",
  },
  {
    id: "whiteBishop1",
    position: "c1",
    title: "Белый слон 1",
    char: "&#9815;",
  },
  {
    id: "whiteBishop2",
    position: "f1",
    title: "Белый слон 2",
    char: "&#9815;",
  },
];
