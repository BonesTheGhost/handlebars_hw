# handlebars_hw
Homework week 14 VU Bootcamp

This assignment is currently at a "done is better than perfect" stopping point.

After spending several days attempting watching youtube videos, the trilogy material, AND various other sources, I had to bring my questions to our instructior Chas.

Somehow a new burger name could be added into the text box on the web page. This meant that the express server was able to run properly and serve my web page up. However, after the 'add burger' button was clicked, the catch function on my AJAX button submit would trigger prompting an alert that the new urger could not be added.

What was strange, was that upon refreshing the page the burger would show up in the container that pulls the data from the MySQL database.

As it turns out, there was a  single carrot '>' preventing the name from being grabbed as it was entered into the text box. The data was also correctly hitting the database (and as already established being retrieved properly upon page (re)load).

At this point, both Chas and Jennifer directed me to move to the next assignment as I had technically demonstrated that I could establish the correct data streams, server configuration, and web components that were part of this learning exercise.