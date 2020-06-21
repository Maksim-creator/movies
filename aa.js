let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
geners: [],
privat: false
};



function rememberMyFilms(){
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
}
 
rememberMyFilms();
 
function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмоов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count <=30){
        alert("Вы классический зритель!");
    }else if(personalMovieDB > 30){
        alert("Вы - киноман!");
    }else{
        alert("Произошла ошибка!");
    }
}

detectPersonalLevel();

function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGeners(){
    for(let i = 1; i <= 3; i++){
    let gener = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.geners[i - 1] = gener;
    }
}
writeYourGeners(); 