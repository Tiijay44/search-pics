function ImageShow({ img }) {
  console.log(img);
  return (
    <div>
      <img src={img.urls.small} alt={img.alt_description} />
    </div>
  );
}
export default ImageShow;
