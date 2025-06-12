import { useEffect } from "react";
function Gallery() {
  useEffect(() => {
    document.title = "Hala Elkomy - Gallery";
  }, []);
  return (
    <>
    <div className="gallery">
      <h2>Gallery</h2>
      <p>Explore our collection of images.</p>
      
    </div>
    </>
  );
}
export default Gallery;