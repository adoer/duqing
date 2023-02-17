import pStyle from "./ImgList.module.sass"
import Link from 'next/link'
import { Gallery } from "react-grid-gallery"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react"
const images: any[] = [
  {
    src: "./images/ai/ai2.jpeg",
    width: 500,
    height: 500,
    caption: "",
    tags: [
      { value: "Ai", title: "Ai" },
    ],
  },
  {
    src: "./images/ai/ai3.jpeg",
    width: 500,
    height: 500,
    tags: [
      { value: "Ai", title: "Ai" },
    ],
  },
  {
    src: "./images/ai/ai4.jpeg",
    width: 500,
    height: 500,
    tags: [
      { value: "Ai", title: "Ai" },
    ],
  },
  {
    src: "./images/ai/ai1.jpg",
    width: 500,
    height: 700,
    tags: [
      { value: "Ai", title: "Ai" },
    ],
  },
];
const ImgList = ({ data }) => {
  const [index, setIndex] = useState(-1)
  const handleClick = (index: number, item: String) => setIndex(index)
  return <>
    <Gallery
      images={images}
      onClick={handleClick}
      enableImageSelection={false}
    />
    <Lightbox
      slides={images}
      open={index >= 0}
      index={index}
      close={() => setIndex(-1)}
    />
  </>
}
export default ImgList;
