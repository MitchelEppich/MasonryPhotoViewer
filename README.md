# Masonry Photo Viewer

Masonry Photo Viewer is a single page React application, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)

Local web server will use the standard React port 3000.
- http://localhost:3000

## General Functionality

- The page will load a responsive grid of images of various sizes.
- On browser resize - the grid will reorganize itself
- When scrolling to the bottom of the page, more images will be loaded
- On click - the image will load into a modal above the rest of the content
- Makes an API call to retrieve images from [Unsplash](https://unsplash.com/)
- Progressively load the images into view when ready

## Future Improvements

- Redesign masonry layout to allow for each column to be approx. the same height
- Add transistions into the modal pop-up
- Directly call the Pinterest API
- Allow for keyword image filtering using the Pinterest API
