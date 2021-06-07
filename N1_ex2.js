var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collectionCustomers = client.db("pizzerias").collection("Customers");
    const customer1 = {
        name : "Gianni",
        surname: "Rossi",
        address : "Calle Ample 12, 3-2",
        zip: "08003",
        city: "Barcelona",
        province: "Barcelona",
        phone: "9363773",
        orders:[1]
    };

    const collectionOrders = client.db("pizzerias").collection("orders");
    const order1 = {
        order_id : 1, 
        dateTime : "2014-11-19T00:00:00.000+00:00",
        type: "delivery",
        totalPrice: 100,
        products : [
            {
                product_id : 1,
                quantity: 5,
                total: 50
            },
            {
                product_id : 2,
                quantity: 5,
                total: 50
            }
        ],
        shipping : {
            shipping_id: 1,
            dateTime : "2014-11-19T00:00:00.000+00:00",
            employee_id : 2,
            restaurant_id : 1
        }
    }

    const collectionRestaurants = client.db("pizzerias").collection("restaurants");
    const restaurant1 = {
        restaurant_id : 1,
        name : "Sports Bar",
        address : "calle diputacio 123, bajos",
        zip : "08002",
        city: "Barcelona",
        province : "Barcelona",
        employees : [
            {
                employee_id: 1,
                name: "Mike",
                surname : "Bianchi",
                type : "chef",
                nif : "7895654",
                phone : "9636547"
            },
            {
                employee_id: 2,
                name: "Pau",
                surname : "Villa",
                type : "delivery",
                nif : "432333",
                phone : "684259874"
            }
        ]
    }

    const collectionMenu = client.db("pizzerias").collection("menu");
    
    const pizza1 = {
        product_id : 1,
        category : "pizza bianca",
        name : "4 quesos",
        description : "pizza con 4 quesos",
        img : "image url",
        price : 10
    }

    const pizza2 = {
        product_id : 2,
        category : "pizza pomodoro",
        name : "quattro stagioni",
        description : "pizza con alcachofas, setas, parmesano, jamo york",
        img : "image url",
        price : 10
    }
    
    const hamburger1 = {
        product_id : 3,
        name : "cheeseburger",
        description : "hamburger con queso",
        img : "image url",
        price : 6
    }

    const bebida1 = {
        product_id : 4,
        name : "coca cola",
        description : "coca cola normal, lata 33cl",
        img : "image url",
        price : 5
    }



client.db('pizzerias').dropDatabase(function(err, result){
    console.log("Error : "+err);
    if (err) throw err;
    console.log("Operation Success ? "+result);
    })     

collectionCustomers.insertOne(customer1, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    });

collectionOrders.insertOne(order1, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    });

collectionRestaurants.insertOne(restaurant1, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    });
    
collectionMenu.insertMany([pizza1, pizza2, hamburger1, bebida1], function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
    });

// try {
//     db.products.insertMany( [
//         { _id: 10, item: "large box", qty: 20 },
//         { _id: 11, item: "small box", qty: 55 },
//         { _id: 12, item: "medium box", qty: 30 }
//     ] );
//     } catch (e) {
//     print (e);
//     }


});


