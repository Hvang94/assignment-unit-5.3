console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];
function addToCollection(collection, title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(album);
  return(album)
}

addToCollection(myCollection, 'Guardians of the Galaxy Awesome Mix: Vol.1', 'Hollywood Records', 2014);
console.log('Added', addToCollection(myCollection, 'Gueardians of the Galaxy Awesome Mix: Vol.1', 'Hollywood Records', 2014));
addToCollection(myCollection, 'Guardians of the Galaxy Awesome Mix: Vol.2', 'Hollywood Records', 2017);
console.log('Added', addToCollection(myCollection, 'Guardians of the Galaxy Awesome Mix: Vol.2', 'Hollywood Records', 2017));
addToCollection(myCollection, 'Guardians of the Galaxy Awesome Mix: Vol.3', 'Hollywood Records', 2023);
console.log('Added', addToCollection(myCollection, 'Guardians of the Galaxy Awesome Mix: Vol.3', 'Hollywood Records', 2023));
addToCollection(myCollection, 'American Teen', 'Khalid', 2017);
console.log('Added', addToCollection(myCollection, 'American Teen', 'Khalid', 2017));
addToCollection(myCollection, 'The 20/20 Experience', 'Justin Timberlake', 2013);
console.log('Added', addToCollection(myCollection, 'The 20/20 Experience', 'Justin Timberlake', 2013));
addToCollection(myCollection, 'Spider-Man: Into the Spider-Verse', 'Republic Records', 2018);
console.log('Added', addToCollection(myCollection, 'Spider-Man: Into the Spider-Verse', 'Republic Records', 2018));

console.log('My Collection', myCollection);

function showCollection(collection) {
  for(let album of collection) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}

console.log('Showing Collection');
showCollection(myCollection);

function findByArtist(collection, artist) {
  let matchingArtists =[];
  for (let album of collection){
    if (album.artist === artist) {
     matchingArtists.push(album)
    }
  }
  return matchingArtists;
}

console.log('Find by Artist Hollywood Recods', findByArtist(myCollection, 'Hollywood Records'));
console.log('Find by Artist Khalid', findByArtist(myCollection, 'Khalid'));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
