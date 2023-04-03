
  

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((elem) => {
        return elem.director;
      })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let filtered = moviesArray.filter((elem) => {
     return (elem.director === 'Steven Spielberg' && elem.genre.includes('Drama') )
    })
    return filtered.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const n = moviesArray.reduce(function (avg, elem, _, { length }) {
        return avg + parseFloat(elem.score) / length;
    }, 0);
    return parseFloat(n.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let filtered = moviesArray.filter((elem) => {
        return elem.genre.includes('Drama')
    })
    return scoresAverage(filtered);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copied = JSON.parse(JSON.stringify(moviesArray));
    return copied.sort((a,b) => {
        if(a.year === b.year){
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
      })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titles = moviesArray.map((elem) => elem.title);
  console.log(titles)
    titles.sort((a,b) => {
        return a.localeCompare(b);
      })
    return titles.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let copied = JSON.parse(JSON.stringify(moviesArray));
    copied.forEach((elem) => {
      let totalMinutes = 0;
      let split = elem.duration.split(" ");
      let hours = (parseInt(split[0]) * 60);
      let minutes = parseInt(split[1]);
      if(!isNaN(hours)){
        totalMinutes += hours;
      }      
      if(!isNaN(minutes)){
        totalMinutes += minutes;
      }
      elem.duration = totalMinutes;
    })
    return copied
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(!moviesArray.length){
        return null;
    }
    let map = {}
    let bestYear = '';
    let highestScore = 0;
    moviesArray.forEach((elem) => {
      if(map[elem.year]){
         map[elem.year].push(elem.score) 
      } else{
        map[elem.year] = [elem.score]
      }
    })
  
    for (let key in map) {
      let len = map[key].length;
      let score = (map[key].reduce((partialSum, a) => partialSum + a, 0)) / len;
      if(score > highestScore){
        bestYear = key;
        highestScore = score;
      }
    }
    return `The best year was ${bestYear} with an average score of ${highestScore}`
}




