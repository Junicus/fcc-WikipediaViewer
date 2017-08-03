# [React Wikipedia Viewer](https://junicus.github.io/fcc-WikipediaViewer/)
## Synopsis

React Wikipedia Viewer is a project crated for [freeCodeCamp](https://www.freecodecamp.org).  The objective of the project is to create an app in JavaScript that can be used to search wikipedia articles using a topic as the search string.  The second objective is to have a button that can open a random wikipedia article.

The programmer can use any library they want to finish this project.  I decided to use [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/) to make my version of the app.

## Installation

```
git clone https://github.com/Junicus/fcc-WikipediaViewer.git
cd fcc-WikipediaViewer
npm install
```
Create a .env to use your own api proxy.  This app currently uses my own api proxy that can be found [here](https://github.com/Junicus/simple-api-proxy) (look in the proxy controller)

```
REACT_APP_AUTOCOMPLETE_API_URL="http://localhost:8080/proxy/wikipediaAutocomplete?topic="
REACT_APP_SEARCH_API_URL="http://localhost:8080/proxy/wikipediaSearch?topic="
```
