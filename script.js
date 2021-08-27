
async function fetchmovies(moviesurl) {
    let url = moviesurl;
    let response = await fetch(url);
    let jsonresponse = await response.json(); // read response body and parse as JSON
    return jsonresponse;
}
async function fetchbestmoviespage1() {
    const heromovie = await fetchmovies("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes");
    return heromovie
}
async function fetchbestmoviespage2() {
    const heromoviepage2 = await fetchmovies("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&sort_by=-votes");
    return heromoviepage2
}
async function fetchworstmoviespage1() {
    const worstmovie = await fetchmovies("http://localhost:8000/api/v1/titles/?imdb_score_min=2&sort_by=imdb_score&sort_by=votes");
    return worstmovie
}
async function fetchworstmoviespage2() {
    const worstmoviepage2 = await fetchmovies("http://localhost:8000/api/v1/titles/?imdb_score_min=2&page=2&sort_by=imdb_score&sort_by=votes");
    return worstmoviepage2
}
async function fetch88moviespage1() {
    const n88movie = await fetchmovies("http://localhost:8000/api/v1/titles/?year=1988&sort_by=-imdb_score&sort_by=-votes");
    return n88movie
}
async function fetch88moviespage2() {
    const n88moviepage2 = await fetchmovies("http://localhost:8000/api/v1/titles/?year=1988&page=2&sort_by=-imdb_score&sort_by=-votes");
    return n88moviepage2
}
async function fetch00moviespage1() {
    const n00movie = await fetchmovies("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=comedy&min_year=2000&max_year=2010&sort_by=-votes");
    return n00movie
}
async function fetch00moviespage2() {
    const n00moviepage2 = await fetchmovies("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&genre=comedy&min_year=2000&max_year=2010&sort_by=-votes");
    return n00moviepage2
}
async function updateherosection() {
    const heromovie = await fetchbestmoviespage1();
    const heromoviepage2 = await fetchbestmoviespage2();
    document.querySelector("#heromovie").innerHTML = (heromovie.results[0].title);
    const idmovie = heromovie.results[0].id;
    const herodescription = await fetchmovies("http://localhost:8000/api/v1/titles/" + idmovie);
    document.querySelector("#heromoviedescription").innerHTML = (herodescription.description);
    document.getElementById("hero-image").src = (heromovie.results[0].image_url)

}

async function updatefirstcarousel() {
    const heromovie = await fetchbestmoviespage1();
    const heromoviepage2 = await fetchbestmoviespage2();
    document.getElementById("card1").src = (heromovie.results[0].image_url);
    document.getElementById("card2").src = (heromovie.results[1].image_url);
    document.getElementById("card3").src = (heromovie.results[2].image_url);
    document.getElementById("card4").src = (heromovie.results[3].image_url);
    document.getElementById("card5").src = (heromovie.results[4].image_url);
    document.getElementById("card6").src = (heromoviepage2.results[0].image_url);
    document.getElementById("card7").src = (heromoviepage2.results[1].image_url);
}

async function updatesecondcarousel() {
    const worstmovie = await fetchworstmoviespage1();
    const worstmoviepage2 = await fetchworstmoviespage2();
    document.getElementById("card8").src = (worstmovie.results[0].image_url);
    document.getElementById("card9").src = (worstmovie.results[1].image_url);
    document.getElementById("card10").src = (worstmovie.results[2].image_url);
    document.getElementById("card11").src = (worstmovie.results[3].image_url);
    document.getElementById("card12").src = (worstmovie.results[4].image_url);
    document.getElementById("card13").src = (worstmoviepage2.results[0].image_url);
    document.getElementById("card14").src = (worstmoviepage2.results[1].image_url);
}


async function updatethirdcarousel() {
    const n88movie = await fetch88moviespage1();
    const n88moviepage2 = await fetch88moviespage2();
    document.getElementById("card15").src = (n88movie.results[0].image_url);
    document.getElementById("card16").src = (n88movie.results[1].image_url);
    document.getElementById("card17").src = (n88movie.results[2].image_url);
    document.getElementById("card18").src = (n88movie.results[3].image_url);
    document.getElementById("card19").src = (n88movie.results[4].image_url);
    document.getElementById("card20").src = (n88moviepage2.results[0].image_url);
    document.getElementById("card21").src = (n88moviepage2.results[1].image_url);
}

async function updatefourthcarousel() {
    const n00movie = await fetch00moviespage1();
    const n00moviepage2 = await fetch00moviespage2();
    document.getElementById("card22").src = (n00movie.results[0].image_url);
    document.getElementById("card23").src = (n00movie.results[1].image_url);
    document.getElementById("card24").src = (n00movie.results[2].image_url);
    document.getElementById("card25").src = (n00movie.results[3].image_url);
    document.getElementById("card26").src = (n00movie.results[4].image_url);
    document.getElementById("card27").src = (n00moviepage2.results[0].image_url);
    document.getElementById("card28").src = (n00moviepage2.results[1].image_url);
}


async function addclicktocarts() {
    const heromovie = await fetchbestmoviespage1();
    const heromoviepage2 = await fetchbestmoviespage2();
    const button = document.getElementById("button-3");
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");
    const card4 = document.getElementById("card4");
    const card5 = document.getElementById("card5");
    const card6 = document.getElementById("card6");
    const card7 = document.getElementById("card7");
    button.addEventListener("click", function () { updatecurrentmovie(heromovie.results[0].id) });
    button.addEventListener("click", updatemodalcontent);
    card1.addEventListener("click", function () { updatecurrentmovie(heromovie.results[0].id) });
    card1.addEventListener("click", updatemodalcontent);
    card2.addEventListener("click", function () { updatecurrentmovie(heromovie.results[1].id) });
    card2.addEventListener("click", updatemodalcontent);
    card3.addEventListener("click", function () { updatecurrentmovie(heromovie.results[2].id) });
    card3.addEventListener("click", updatemodalcontent);
    card4.addEventListener("click", function () { updatecurrentmovie(heromovie.results[3].id) });
    card4.addEventListener("click", updatemodalcontent);
    card5.addEventListener("click", function () { updatecurrentmovie(heromovie.results[4].id) });
    card5.addEventListener("click", updatemodalcontent);
    card6.addEventListener("click", function () { updatecurrentmovie(heromoviepage2.results[0].id) });
    card6.addEventListener("click", updatemodalcontent);
    card7.addEventListener("click", function () { updatecurrentmovie(heromoviepage2.results[1].id) });
    card7.addEventListener("click", updatemodalcontent);
}
async function addclicktocarts2() {
    const worstmovie = await fetchworstmoviespage1();
    const worstmoviepage2 = await fetchworstmoviespage2();
    const card8 = document.getElementById("card8");
    const card9 = document.getElementById("card9");
    const card10 = document.getElementById("card10");
    const card11 = document.getElementById("card11");
    const card12 = document.getElementById("card12");
    const card13 = document.getElementById("card13");
    const card14 = document.getElementById("card14");
    card8.addEventListener("click", function () { updatecurrentmovie(worstmovie.results[0].id) });
    card8.addEventListener("click", updatemodalcontent);
    card9.addEventListener("click", function () { updatecurrentmovie(worstmovie.results[1].id) });
    card9.addEventListener("click", updatemodalcontent);
    card10.addEventListener("click", function () { updatecurrentmovie(worstmovie.results[2].id) });
    card10.addEventListener("click", updatemodalcontent);
    card11.addEventListener("click", function () { updatecurrentmovie(worstmovie.results[3].id) });
    card11.addEventListener("click", updatemodalcontent);
    card12.addEventListener("click", function () { updatecurrentmovie(worstmovie.results[4].id) });
    card12.addEventListener("click", updatemodalcontent);
    card13.addEventListener("click", function () { updatecurrentmovie(worstmoviepage2.results[0].id) });
    card13.addEventListener("click", updatemodalcontent);
    card14.addEventListener("click", function () { updatecurrentmovie(worstmoviepage2.results[1].id) });
    card14.addEventListener("click", updatemodalcontent);
}

async function addclicktocarts3() {
    const n88movie = await fetch88moviespage1();
    const n88moviepage2 = await fetch88moviespage2();
    const card15 = document.getElementById("card15");
    const card16 = document.getElementById("card16");
    const card17 = document.getElementById("card17");
    const card18 = document.getElementById("card18");
    const card19 = document.getElementById("card19");
    const card20 = document.getElementById("card20");
    const card21 = document.getElementById("card21");
    card15.addEventListener("click", function () { updatecurrentmovie(n88movie.results[0].id) });
    card15.addEventListener("click", updatemodalcontent);
    card16.addEventListener("click", function () { updatecurrentmovie(n88movie.results[1].id) });
    card16.addEventListener("click", updatemodalcontent);
    card17.addEventListener("click", function () { updatecurrentmovie(n88movie.results[2].id) });
    card17.addEventListener("click", updatemodalcontent);
    card18.addEventListener("click", function () { updatecurrentmovie(n88movie.results[3].id) });
    card18.addEventListener("click", updatemodalcontent);
    card19.addEventListener("click", function () { updatecurrentmovie(n88movie.results[4].id) });
    card19.addEventListener("click", updatemodalcontent);
    card20.addEventListener("click", function () { updatecurrentmovie(n88moviepage2.results[0].id) });
    card20.addEventListener("click", updatemodalcontent);
    card21.addEventListener("click", function () { updatecurrentmovie(n88moviepage2.results[1].id) });
    card21.addEventListener("click", updatemodalcontent);
}


async function addclicktocarts4() {
    const n00movie = await fetch00moviespage1();
    const n00moviepage2 = await fetch00moviespage2();
    const card22 = document.getElementById("card22");
    const card23 = document.getElementById("card23");
    const card24 = document.getElementById("card24");
    const card25 = document.getElementById("card25");
    const card26 = document.getElementById("card26");
    const card27 = document.getElementById("card27");
    const card28 = document.getElementById("card28");
    card22.addEventListener("click", function () { updatecurrentmovie(n00movie.results[0].id) });
    card22.addEventListener("click", updatemodalcontent);
    card23.addEventListener("click", function () { updatecurrentmovie(n00movie.results[1].id) });
    card23.addEventListener("click", updatemodalcontent);
    card24.addEventListener("click", function () { updatecurrentmovie(n00movie.results[2].id) });
    card24.addEventListener("click", updatemodalcontent);
    card25.addEventListener("click", function () { updatecurrentmovie(n00movie.results[3].id) });
    card25.addEventListener("click", updatemodalcontent);
    card26.addEventListener("click", function () { updatecurrentmovie(n00movie.results[4].id) });
    card26.addEventListener("click", updatemodalcontent);
    card27.addEventListener("click", function () { updatecurrentmovie(n00moviepage2.results[0].id) });
    card27.addEventListener("click", updatemodalcontent);
    card28.addEventListener("click", function () { updatecurrentmovie(n00moviepage2.results[1].id) });
    card28.addEventListener("click", updatemodalcontent);
}

async function updatecurrentmovie(id) {
    document.querySelector("#currentmovie").innerHTML = id;

}
async function updatemodalcontent() {
    id = await document.querySelector("#currentmovie").innerHTML
    const movie = await fetchmovies("http://localhost:8000/api/v1/titles/" + id);
    document.querySelector("#genre").innerHTML = movie.genres;
    document.querySelector("#sortie").innerHTML = movie.date_published;
    document.querySelector("#rated").innerHTML = movie.rated;
    document.querySelector("#scoreimdb").innerHTML = movie.imdb_score;
    document.querySelector("#realisateur").innerHTML = movie.directors;
    document.querySelector("#listedesacteurs").innerHTML = movie.actors;
    document.querySelector("#duree").innerHTML = movie.duration;
    document.querySelector("#pays").innerHTML = movie.countries;
    document.querySelector("#boxoffice").innerHTML = movie.worldwide_gross_income;
    document.querySelector("#nomdufilm").innerHTML = movie.title;
    document.querySelector("#resumedufilm").innerHTML = movie.description;
    document.getElementById("imagemodale").src = (movie.image_url);

}