import React, { useState, useEffect } from "react";
import "./App.css";

import Layout from "./components/section/Layout";
import Image from "./components/section/Image";
import Header from "./components/partial/Header";

function App() {
  const [images, setImages] = useState([]);
  const [columns, setColumns] = useState(getColumns());

  let updating = false;

  useEffect(() => {
    if (images.length === 0) getImages(setImages);
  }, [images.length]);

  window.addEventListener("resize", () => {
    setColumns(getColumns());
  });

  window.addEventListener("scroll", () => {
    if (images.length === 0 || updating) return;

    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - window.innerHeight
    ) {
      updating = true;
      getImages(setImages, images);
    }
  });

  let imageBody = images.map((object, index) => {
    return <Image key={`image${index}`} object={object} />;
  });

  return (
    <div className="app">
      <Header title="Photo Viewer" />
      <div className="app__body">
        <div id="modal" />
        <Layout columns={columns} gap={25}>
          {imageBody}
        </Layout>
      </div>
    </div>
  );
}

function getColumns() {
  return Math.max(Math.floor((window.innerWidth - 300) / 200) - 1, 1);
}

async function getImages(callback, images = []) {
  let count = 50;
  /*
    There are multiple access keys provided for the api
    that is being called, this api only allows for 50 daily
    calls so this application has a maximum of 300 daily calls
  */
  let accessKey =
    "1701e1597cf2f799b0a215f2f83bc0fd34d937bb459e564ae729bdba20781b7f";
  // let accessKey =
  //   "3fe2f49ab2d925159d530caaffcec31a313651df6d28c1cc3f9e10f6d7e4e2d3";
  // let accessKey =
  //   "f1e13e4039bf8233e2f80b4e6dd2ef65092d37773cc573757aa055543f13c51b";
  // let accessKey =
  //   "37d8dfe65b12d6fba376bc82a230de6bff09d6594c8080c7f1a8eb985f84e2e8";
  // let accessKey =
  //   "737e606f01fe0c7ea36d617c061eb0a39449f57491a492ddc5c6bd40a1f8d5b1";
  // let accessKey =
  //   "a8a22cd8d2f23e8979d49e6309b40506c786d17e3920b5500043f25f4c5d3a59";
  let url = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}`;

  fetch(url).then(response => {
    if (response.status !== 200) {
      console.log(
        "Your API access key has been maxed out, please change to a new access key located in the App.js file..."
      );
      callback([...images]);
      return;
    }
    try {
      return response.json().then(data => {
        callback([...images, ...data]);
      });
    } catch (e) {
      console.log("Failed to fetch images");
      callback([]);
    }
  });
}

export default App;
