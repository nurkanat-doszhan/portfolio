import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import './Gallery.scss'

const Gallery = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ]
  )
  return (
    <div className="Gallery">
        <h2>Gallery</h2>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">1</div>
          <div className="keen-slider__slide">2</div>
          <div className="keen-slider__slide">3</div>
        </div>
    </div>
  )
}

export default Gallery