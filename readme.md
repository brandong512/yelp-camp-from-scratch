# YelpCamp

## __Version 1__

### Initial Setup
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
   * Name
   * Image

### Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

### Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

### Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

### Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

### Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

---

## __Version 2__

### Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES
| name   | url       | verb    | version    | desc. |
| ------- | ---------- | -------- | ----------- | ----- |
| INDEX  | /dogs     | GET     | 1          | Display a list of all dogs |
| NEW    | /dogs/new | GET     | 1          | Displays form to make a new dog |
| CREATE | /dogs     | POST    | 1          | Add new dog to DB |
| SHOW   | /dogs/:id | GET     | 2          | Shows info about one dog (one in particular) |