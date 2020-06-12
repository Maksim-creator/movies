let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
geners: [],
privat: false
};

let answer1 = prompt('Один из просмотренных фильмов?', '');
let answer2 = prompt('На сколько оцените его?', '');
let answer3 = prompt('Один из просмотренных фильмов?', '');
let answer4 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[answer1] = answer2;
personalMovieDB.movies[answer3] = answer4;
    
console.log(personalMovieDB);
