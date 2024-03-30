import Image from "next/image";
import HeroCarousel from '../app/component/HeroCarousel'
 import ImageDisplay from './component/ImageDisplay'

export default function Home() {
  const images = [
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/2/1.jpg",
    "https://cdn.dummyjson.com/product-images/2/2.jpg",
    "https://cdn.dummyjson.com/product-images/2/3.jpg",
    "https://cdn.dummyjson.com/product-images/12/1.jpg",
    "https://cdn.dummyjson.com/product-images/12/2.jpg",
    "https://cdn.dummyjson.com/product-images/12/3.png",
    "https://cdn.dummyjson.com/product-images/12/4.jpg",    

    ]
  return (
 <> 
<HeroCarousel/>
<div className="container mx-auto">
      {/* <Header /> */}
      <div>
        <ImageDisplay images={images} />
      </div>
    </div>

 </>
  );
}
