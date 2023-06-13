let genres = {
  pop: {
    name: "Pop",
    mainImage:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2023-05/taylor-swift-speak-now-purple-today-sk-230505-c46151.jpg",
    artists: `<ul><li>Taylor Swift</li><li>Ariana Grande</li><li>Selena Gomez</li><li>Lady GaGa</li><li>BTS</li><li>BlackPink</li></ul>`,
    lowerImg:
      "https://variety.com/wp-content/uploads/2020/10/blackpink.jpg?w=1000",
    playlist: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EQncLwOalG3K7?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
  broadway: {
    name: "Broadway",
    mainImage:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F07%2Fmeangirls2389r2r-2000.jpg&q=60",
    artists: `<ul><li>Hamilton</li><li>Six</li><li>Mean Girls</li><li>Wicked</li><li>The Lion King</li><li>Heathers</li></ul>`,
    lowerImg:
      "https://www.visittheusa.com/sites/default/files/styles/16_9_1280x720/public/images/hero_media_image/2016-11/Travel%20to%20Broadway_HERO.jpg?itok=fDOYEMLH",
    playlist: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0DSIuLff9yuaW7Bo6sOhuY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
  rock: {
    name: "Rock",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvv4oW2MkaHSlU2jWltjObLAKQ_mSX4WIfw&usqp=CAU",
    artists: `<ul><li>My Chemical Romance</li><li>Paramore</li><li>Fallout Boy</li><li>Linkin Park</li><li>Taking Back Sunday</li><li>Thirty Seconds to Mars</li></ul>`,
    lowerImg:
      "https://m.media-amazon.com/images/M/MV5BODU1MjZmMGItM2YyYy00NzlkLTkyZmUtNDUxNjE0NTBiOTdlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg",
    playlist: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9wa6XirBPv8?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
};

// Target all of the changeable ele
let title = document.querySelector(".genre");
// change innerHTML
let music = document.querySelector(".music");
// change SRC
let artists = document.querySelector(".textbox");
// change innerHTML

let lowerImg = document.querySelector(".smContainer");
// add Recipe txt
let playlist = document.querySelector(".description");
// add image

const changeGenres = (genre) => {
  // Determine what flavor
  if (genre === "pop") {
    let body = document.querySelector("body");
    body.style.backgroundColor = "lemonchiffon";
    addText(title, genres.pop.name);
    addImage(music, genres.pop.mainImage);
    addText(artists, genres.pop.artists);
    uploadImage(lowerImg, genres.pop.lowerImg);
    addText(playlist, genres.pop.playlist);
    // ------------------------------
  } else if (genre === "broadway") {
    let body = document.querySelector("body");
    body.style.backgroundColor = "blueViolet";
    body.style.color = "white";
    addText(title, genres.broadway.name);
    addImage(music, genres.broadway.mainImage);
    addText(artists, genres.broadway.artists);
    uploadImage(lowerImg, genres.broadway.lowerImg);
    addText(playlist, genres.broadway.playlist);
  } else if (genre === "rock") {
    let body = document.querySelector("body");
    body.style.backgroundColor = "blueViolet";
    body.style.color = "white";
    addText(title, genres.rock.name);
    addImage(music, genres.rock.mainImage);
    addText(artists, genres.rock.artists);
    uploadImage(lowerImg, genres.rock.lowerImg);
    addText(playlist, genres.rock.playlist);
  } else {
    addText(title, "Music");
  }
};

const addText = (target, text) => {
  target.innerHTML = text;
};

const addImage = (target, url) => {
  target.setAttribute("src", url);
};
const uploadImage = (target, genre) => {
  let newImage = document.createElement("img");
  newImage.setAttribute("src", genre);
  newImage.setAttribute("class", "lowerImage");
  target.append(newImage);
};
