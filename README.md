A simple single page application that acts as an index/catalog of Potions from the Harry Potter API (https://docs.potterdb.com/apis/rest)
•	This application contains an index page that shows all the Potions with search and pagination (the API contains around 156 potions)
o	The list contains some basic details of the Potions such as name, effect, difficulty, characteristic and an image
o	The list is searchable by name

o	It also implements an option to filter the potions by difficulty and characteristics
•	When you click on a particular potion, it show the details of the selected potion (this is in the form of a pop-up modal)
o	The details includes: name, difficulty, effect, characteristic, inventor, ingredients, side effects, time to make, and a link to the wiki

- Frontend framework/library: React.
- Design system: Bootstrap.

The base url for the API is:
https://api.potterdb.com/v1/potions
