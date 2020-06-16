let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
geners: [],
privat: false
};

for(let i = 0; i < 2; i++){
    answer1 = prompt('Один из просмотренных фильмов?', '');
    answer2 = prompt('На сколько оцените его?', '');
   
    if(answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50){
    personalMovieDB.movies[answer1] = answer2;
    }else{
        console.log('error');
        i--;
    }
}
    

switch(numberOfFilms){
    case (personalMovieDB.count <= 10): 
            alert('Просмотрено мало фильмов!');
            break;
    case (personalMovieDB.count > 10 && personalMovieDB.count <= 30 ):
            alert('Вы класический зритель');
            break;
    case (personalMovieDB.count > 30):
        alert('Вы киноман!');
        break;
   default: alert('Error');
    }
console.log(personalMovieDB);
