var MongoClient = require("mongodb").MongoClient;
var uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collectionUsers = client.db("youtube").collection("users");
  const collectionPlaylists = client.db("youtube").collection("playlists");
  const collectionVideos = client.db("youtube").collection("videos");
  const collectionChannels = client.db("youtube").collection("channels");
  const collectionComments = client.db("youtube").collection("comments");

  var user1 = {
    user_id: 1,
    name: "Gianni Rossi",
    email: "rossi@gmail.com",
    password: "asòldjepok",
    username: "gianni123",
    birthDate: "1984-01-01",
    gender: "m",
    country: "italy",
    zip: "20100",
    videos: [1],
  };

  var playlist1 = {
    playlist_id: 1,
    name: "playlist1",
    dateTime: "2014-11-19T00:00:00.000+00:00",
    createdBy: 1,
    state: "public",
  };

  var video1 = {
    video_id: 1,
    title: "Video1",
    description: "Es el video 1",
    sizeMb: 11,
    fileName: "Video1.mov",
    duration: "1:30",
    thumbnailURL: "./video1.jpg",
    views: 12,
    likes: [{ user_id: 1 }, { user_id: 2 }],
    dislikes: [{ user_id: 3 }, { user_id: 4 }],
    state: "published",
    tags: ["music", "jazz", "guitar"],
    publishedByUser: 1,
    dateTime: "2014-11-19T00:00:00.000+00:00",
    comments: [1],
  };

  var channel1 = {
    channel_id: 1,
    name: "channel1",
    description: "Es el channel 1",
    dateTime: "2014-11-19T00:00:00.000+00:00",
    createdByUser: 1,
    subsciptors: [2, 3, 4],
  };

  var comment1 = {
    comment_id: 1,
    text: "el texto del comentario 1",
    dateTime: "2014-11-19T00:00:00.000+00:00",
    createdByUser: 1,
    likes: [{ user_id: 1 }, { user_id: 2 }],
    dislikes: [{ user_id: 3 }, { user_id: 4 }],
  };

  client.db('youtube').dropDatabase(function(err, result){
    console.log("Error : "+err);
    if (err) throw err;
    console.log("Operation Success ? "+result);
  }) 



  collectionUsers.insertOne(user1, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  collectionPlaylists.insertOne(playlist1, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  collectionVideos.insertOne(video1, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  collectionChannels.insertOne(channel1, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  collectionComments.insertOne(comment1, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
  });

});
