//Create a Netflix TV Show class with a constructor 
//that makes Netflix TV Shows with 4 properties and
// 3 methods


class MakeNetflixTvShows {
    constructor(title, genre, rating, numOfEp) {
        this.title = title
        this.genre = genre
        this.rating = rating
        this.numOfEp = numOfEp
    }

    play() {
        console.log('Playing..')
    }
    stop() {
        console.log('Stopping..')
    }
    saveToList() {
        console.log('Saved to list..')
    }

}

const Naruto = new MakeNetflixTvShows('Naruto','Anime','R',1000);

console.log(Naruto.title)
console.log(Naruto.genre)
Naruto.saveToList()
