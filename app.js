var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp") // Connect to our data base
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


//This is how we setup our schemas
var camgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", camgroundSchema);

// Campground.create({ -- Used for testing
//     name: "Salmon Creek",
//     image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"
// }, function (err, campground) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND")
//         console.log(campground)
//     }
// });

var campgrounds = [
    { name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg" },
    { name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg" },
    { name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg" },
    { name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg" },
    { name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg" },
    { name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg" },
    { name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg" },
    { name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg" },
    { name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg" }
];

app.get("/", function (req, res) {
    res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", function (req, res) {
    //Get all campgrounds from DB
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds", { campgrounds: allCampgrounds });
        }
    })
});

//CREATE - add new campground to database
app.post("/campgrounds", function (req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image }
    // Create a new campground and save to DB
    Campground.create(newCampground, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            //redirect back to Campgrounds page
            res.redirect("/campgrounds")
        }
    })
    //redirect back to campgrounds page
});

/*
    Notice the order of the below routes. If they were switched, then the
    "/campgrounds/new" would be seen as a "/campgrounds/:id" route, and you
    wouldn't see the new page. So becareful with order
*/

//NEW - show form to create new campground
app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});

app.get("/campgrounds/:id", function (req, res) {
    //left off right here
    res.send("THIS WILL BE THE SHOW PAGE ONE DAY");
})

app.listen(3456, "127.0.0.1", function () {
    console.log("The YelpCamp Server Has Started!");
});