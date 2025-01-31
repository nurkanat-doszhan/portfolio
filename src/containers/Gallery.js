import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import "./Gallery.scss";

const Gallery = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1100px)": {
        slides: { perView: 4, spacing: 20 },
      },
      "(min-width: 1680px)": {
        slides: { perView: 5, spacing: 30 },
      },
    },
    loop: true,
    slides: {
      perView: 5,
      spacing: 30,
    }
  },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ])
  return (
    <div className="gallery">
      <h2>Gallery 🖼️</h2>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide"><img src="/gallery/Leonardo_Diffusion_Dramatic_Tonalism_Cinematic_young_man_and_y_3.jpg" alt="" /></div>
        <div className="keen-slider__slide"><img src="/gallery/Sketch_Graphic-Novel_EP-U1k-pRDOSA86dTT9zKQ_Post-98828206.png" alt="" /></div>
        <div className="keen-slider__slide"><img src="/gallery/Lo-Fi_Concept_Art_Landscape_V_r3ERLiiBDh1FZEm2g.png" alt="" /></div>
        <div className="keen-slider__slide"><img src="/gallery/Realistic-SciFi-Conceptt2img_2_1698828265.png" alt="" /></div>
        <div className="keen-slider__slide"><img src="/gallery/Leonardo_Diffusion_parting_rain_young_man_and_young_woman_man_3.jpg" alt="" /></div>
        <div className="keen-slider__slide"><img src="/gallery/3D-Render-Style v1_IS4uX6yATvWlXC9Atmb1Iw_8828235.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Gallery