const flatAPI = "http://localhost:3000";
const poster = document.getElementById('poster')
const movieTitle = document.getElementById('title')
const movieDescription = document.getElementById('film-info')
const movieRuntime = document.getElementById('runtime')
const movieShowtime = document.getElementById('showtime')
const buyButton = document.getElementById('buy-ticket')
const ticketsRemaining = document.getElementById('ticket-num')
const movieList = document.getElementsByClassName('film item')

fetch(flatAPI)
    .then(res => res.json())
    .then(renderMovieInfo);

function renderMovieInfo(data){
    if(data.id === 1){
    poster.src = data.poster
    movieTitle.textContent = data.title;
    movieDescription.textContent = data.description;
    movieRuntime.textContent = data.runtime;
    movieShowtime.textContent = data.showtime;
    ticketsRemaining.textContent = data.capacity - data.tickets_sold

    movieList.innerHTML = '';
        const li = document.createElement('li')
        li.textContent = data.title 
        movieList.append(li)
    
    
    }
    else{
        movieList.innerHTML = '';
        const li = document.createElement('li')
        li.textContent = data.title 
        movieList.append(li)
    }
    
    buyButton.addEventListener("click", () => {
        if(data.capacity - data.tickets_sold > 0){
            data.tickets_sold +=1;
        }
        else{   
        }
    })
}

