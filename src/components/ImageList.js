import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ imgs }) {
  // Create list of search results
  const renderedImages = imgs.map((imgObj) => {
    return <ImageShow key={imgObj.id} img={imgObj} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}
export default ImageList;
