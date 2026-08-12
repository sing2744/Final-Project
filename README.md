///Game Backlog Tracker///

**Project Description**

Game Backlog Tracker is a responsive web application that helps users organize their video game collection, track progress, rate games, and decide what to play next.


The application was built using HTML, CSS, and Vanilla JavaScript.

**Features**

Add a new game
Edit existing games
Delete games
Search games by title
Filter games by platform
Filter games by genre
Filter games by status
Track game progress from 0% to 100%
Automatically set progress to 100% when a game is marked Completed
Add a personal rating
Display game preview images
Random Game Picker for unfinished games
Excludes Completed and Dropped games from the random picker
Dashboard statistics
Statistics by status and platform
Local Storage support
Form validation
Responsive layout
Top navigation


**Technologies Used**

HTML5
CSS3
Vanilla JavaScript
Local Storage


**Project Files**

index.html - website structure
style.css - website design and responsive layout
script.js - all JavaScript functionality
prototype.pdf - low-fidelity prototype


**How to Run the Project**

Download or clone the repository.
Open the project folder in Visual Studio Code.
Open index.html using the Live Server extension.
Use the navigation at the top to move between the Dashboard, All Games, Add Game, Random Picker, and Statistics pages.


//Main JavaScript Functionality//

**Local Storage**

The website stores the game collection in Local Storage so the user's data remains available after refreshing the browser.

**Add and Edit Games**

The same form is used to create new games and update existing games.

**Completed Status**

When a game is changed to Completed, JavaScript automatically changes its progress to 100%.

**Search and Filters**

Users can search by title and filter the collection by platform, genre, and status.

**Random Game Picker**

The random picker first removes games marked Completed or Dropped, then randomly chooses one of the unfinished games.

**Statistics**

The dashboard and statistics page calculate information from the saved game collection, including:

Total games
Completed games
Currently playing games
Average rating
Status breakdown
Platform breakdown


**Client Requirements Implemented**

Common platform and genre options with support for custom values
Completed games automatically become 100% complete
Random picker excludes Completed and Dropped games
Simple modern website layout
Top navigation instead of a sidebar
Responsive design
Game preview images

**Low-Fidelity Prototype**

The project includes prototype.pdf containing the low-fidelity website prototype.

**Author**

Lovedeep Singh