import ImageShow from "./ImageShow";

function ImageList({ imgs }) {
  console.log(imgs);
  return (
    <div>
      <ImageShow />
      <div>ImageList: {imgs.length}</div>
    </div>
  );
}
export default ImageList;
