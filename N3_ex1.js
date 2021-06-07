var MongoClient = require("mongodb").MongoClient;
var uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collectionUsers = client.db("spotify").collection("users");
  const collectionSubscriptions = client.db("spotify").collection("subscriptions");
  const collectionSongs = client.db("spotify").collection("songs");
  const collectionAlbums = client.db("spotify").collection("albums");
  const collectionPlaylists = client.db("spotify").collection("playlists");
  const collectionArtists = client.db("spotify").collection("artists");
  



  var user1 = {
    user_id: 1,
    email: "rossi@gmail.com",
    password: "asòldjepok",
    username: "gianni123",
    birthDate: "1984-01-01",
    gender: "m",
    country: "italy",
    zip: "20100",
    favArtists: [1,4,5],
    playlists: [2,3,4],
    favAlbums: [34,546,23],
    favSongs: [34,78,44]
  };

  var subscription1 = {
      id: 1,
      type: "premium",
      user_id: 1,
      startDate: "2020-01-01",
      dateRenew: "2020-02-01",
      payment: {
                  date: "2020-01-01",
                  id: 1,
                  total: 100,
                  creditCard: { 
                                number: "1549874563215874" ,
                                year: "2025",
                                code: "258"
                  }
                }
  };


  var subscription2 = {
    id: 2,
    type: "premium",
    user_id: 1,
    startDate: "2020-02-02",
    dateRenew: "2020-03-01",
    payment: {
                date: "2020-01-01",
                id: 2,
                total: 100,
                PayPal: "user@paypal.com"
              }
  };

  var song1 = {
    song_id:1,
    title: "Innuendo",
    duration: "3:20",
    reproductions: 200,
    album_id: 1,
    artist_id: 1
  }

  var album1 = {
      album_id: 1,
      artist_id: 1,
      title: "Innuendo",
      year: "1991",
      imgURL: "./Innuendo.jpg",
      songs : [1]
    }

  var playlist1 = {
    user_id: 1,
    playlist_id: 1,
    title: "playlist1",
    songsNumber: 23,
    dateTime: "2014-11-19T00:00:00.000+00:00",
    state: {
      id : "active",
      dateTime: "2014-11-19T00:00:00.000+00:00",
    },
    songs: [
            { user_id: 1, 
              song_id: 1, 
              dateTime: "2014-11-19T00:00:00.000+00:00",
            }
    ] 
  };

  var artist1 = {
    artist_id: 1,
    name: "Queen",
    imgURL: "./Queen.jpg",
    artistRelated: [4,6,77],
    album_id: [1],
    song_id: [1]
  }



  client.db('spotify').dropDatabase(function(err, result){
    console.log("Error : "+err);
    if (err) throw err;
    console.log("Operation Success ? "+result);
  })   

  collectionUsers.insertOne(user1, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  collectionSubscriptions.insertMany([subscription1, subscription2], function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
    });

  collectionSongs.insertOne(song1, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });  

  collectionAlbums.insertOne(album1, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  collectionPlaylists.insertOne(playlist1, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  collectionArtists.insertOne(artist1, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
  });

});