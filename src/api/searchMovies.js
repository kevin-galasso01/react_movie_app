//se type non viene passato assume il falore film se viene passato un valore assume quel valore
export const searchMovies = (type = "film") => {

  if (type === "series") return {
    movies: [{
      codice: "a",
      title: "Titolo series 1",
      desciption: "Descrizione film 1",
      img: "n/a",
      novita: false
    },
    {
      codice: "b",
      title: "Titolo series 2",
      desciption: "Descrizione film 2",
      img: "n/a",
      novita: true
    },
    {
      codice: "c",
      title: "Titolo series 3",
      desciption: "Descrizione film 3",
      img: "n/a",
      novita: false
    }
    ],
    pages: 10,
    currentPage: 1
  }

  else return {
    movies: [{
      codice: "a",
      title: "Titolo movie 1",
      desciption: "Descrizione film 1",
      img: "n/a",
      novita: false
    },
    {
      codice: "b",
      title: "Titolo movie 2",
      desciption: "Descrizione film 2",
      img: "n/a",
      novita: true
    },
    {
      codice: "c",
      title: "Titolo movie 3",
      desciption: "Descrizione film 3",
      img: "n/a",
      novita: false
    }
    ],
    pages: 10,
    currentPage: 1
  }
}