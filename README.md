## Hack Lassonde 2019
A web application using Google Cloud's Map api.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and/or testing purposes.

### Prerequisites
You will need to install Node.js. See below for the download link.

### Installing
1. Run ```$ git clone https://github.com/hack-lassonde-2019/heatmap.git``` on the cli, or download the source code to a local directory of your choice.
2. Run ```$ yarn``` within the root folder to install all the necessary libraries.
3. Create an ```.env``` file with the your own Google Map Api. Add ```REACT_APP_REACT_APP_MAP_KEY={INSERT YOUR KEY HERE}``` in the file

### Running
1. Run ```$ yarn start``` on the cli within the root of the project folder.
2. Open your browser and navigate to ```localhost:3000``` to see the app running.

Note: Due to rate limits on the API (for free tier), the endpoints may not work temporarily. Give it a few minutes before using the application again.

### Built With
* [ReactJS](https://reactjs.org/) - Frontend library
* [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
