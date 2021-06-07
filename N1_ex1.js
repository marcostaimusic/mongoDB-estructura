var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collectionUlleres = client.db("ulleres").collection("ulleres");
  var ullera1 = {
    ullera_id: 1,  
    price : 100,
    lensL : {
        color : "transparent",
        grade : 1 
    },
    lensR : {
        color : "transparent",
        grade : 1 
    },
    mounting : {
        brand : "rayban",
        type: "floating",
        color : "black"
    },
    customer : {
        fullName : "Gianni Rossi",
        address : { 
            street: "calle sardenya 123, 3-2",
            city: "Zaragoza",
            zip: 08012,
            contry: "Spain",
        },
        phone : "635214789",
        email : "gianni@gmail.com",
        dateRegistered : "2020-02-02",
        referredBy: "Marco Sandri"
    },
    seller : "Jose"
};

const collectionSuppliers = client.db('ulleres').collection('suppliers');

const supplier1 = {
    name : "Supplier1",
    address : { 
        street: "calle Muntaner 23, bajos",
        city: "Zaragoza",
        zip: 08012,
        contry: "Spain",
    },
    phone: "45678912",
    fax : "21345864",
    nif : "ES4567894",
    ulleres: [1]
};

   
  
  client.db('ulleres').dropDatabase(function(err, result){
    console.log("Error : "+err);
    if (err) throw err;
    console.log("Operation Success ? "+result);
  })   

  collectionUlleres.insertOne(ullera1, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  collectionSuppliers.insertOne(supplier1, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
  });
});




/*

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Ulleres");
  var myobj = {
    price : 100,
    lensL : {
        color : "transparent",
        grade : 1 
    },
    lensR : {
        color : "transparent",
        grade : 1 
    },
    mounting : {
        brand : "rayban",
        type: "floating",
        color : "black"
    },
    customer : {
        fullName : "Gianni Rossi",
        address : { 
            street: "calle sardenya 123, 3-2",
            city: "Zaragoza",
            zip: 08012,
            contry: "Spain",
        },
        phone : "635214789",
        email : "gianni@gmail.com",
        dateRegistered : "2020-02-02",
        referredBy: "Marco Sandri"
    },
    supplier : {
        name : "Tienda1",
        address : { 
            street: "calle Montaner 23, bajos",
            city: "Zaragoza",
            zip: 08012,
            contry: "Spain",
        },
        phone: "45678912",
        fax : "21345864",
        nif : "ES4567894"
    },
    seller : "Jose"
};
  dbo.collection("ulleres").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

*/