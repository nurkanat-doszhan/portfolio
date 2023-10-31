import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import './Gallery.scss'

const Gallery = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 30,
    }
  })
  return (
    <div className="gallery">
        <h2>Gallery 🖼️</h2>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide"><img src="https://images.unsplash.com/photo-1698267703889-06c41f9acba5" alt="" /></div>
          <div className="keen-slider__slide"><img src="https://images.unsplash.com/photo-1595842427698-2183e9f769d7" alt="" /></div>
          <div className="keen-slider__slide"><img src="https://images.unsplash.com/photo-1650895327171-9145b2f173a0" alt="" /></div>
          <div className="keen-slider__slide"><img src="https://images.unsplash.com/photo-1696860740793-1bb7bf33cdc1" alt="" /></div>
          <div className="keen-slider__slide"><img src="https://images.unsplash.com/photo-1664511403128-f4a0d04c90e1" alt="" /></div>
          <div className="keen-slider__slide"><img src="https://images.unsplash.com/photo-1697464207511-950c9a753822" alt="" /></div>
        </div>
    </div>
  )
}

export default Gallery