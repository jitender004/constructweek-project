import React from "react";
import ReactDOM from "react-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import { useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";

const ImagesGallery = () => {
  const dataProducts = useSelector((store) => store.products.products);
  const imag = [];
  dataProducts.map((e)=>{
    let  i = e.img1
    imag.push(i)
  })
  console.log(imag,"imag");
  const [images, setImages] = React.useState(null);

  React.useEffect(() => {
    let shouldCancel = false;

    const call = () => {
      if (!imag && imag.data.length > 0) {
        setImages(
          imag.map((url) => ({
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`,
          }))
        );
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []);

  return images ? <ImageGallery items={images} /> : null;
};

export default ImagesGallery;
