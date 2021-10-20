export const searchMovies = () => {
    return{
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
        pages : 10,
        currentPage: 1
    }
}