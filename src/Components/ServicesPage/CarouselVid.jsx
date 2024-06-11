import { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function CarouselVid() {
  const [mainIndex, setMainIndex] = useState(0);

  const carousel = useRef();
  const videoRefs = useRef([]);

  const videos = [
    // "emma_jazz.mp4",
    "biggie.mp4",
    // "abby_solo.mp4",
    "lions.mp4",
    "RPReplay_Final.mov",
    "umoja.mp4",
  ];

  function slideNext(e) {
    carousel?.current?.slideNext(e);
    if (mainIndex < videos.length - 1) {
      setMainIndex(mainIndex + 1);
    }
  }

  function slidePrev(e) {
    carousel?.current?.slidePrev(e);
    if (mainIndex > 0) {
      setMainIndex(mainIndex - 1);
    }
  }

  function handleSlideChange(e) {
    if (videoRefs.current[mainIndex]) {
      videoRefs.current[mainIndex].pause();
    }
  }

  function handleSlideChanged(e) {
    if (videoRefs.current[mainIndex]) {
      videoRefs.current[mainIndex].play();
    }
  }

  return (
    <div className="carousel">
      <AliceCarousel
        activeIndex={mainIndex}
        disableDotsControls
        disableButtonsControls
        autoHeight={true}
        autoWidth={true}
        keyboardNavigation={true}
        onSlideChange={handleSlideChange}
        onSlideChanged={handleSlideChanged}
        ref={carousel}
        items={videos.map((vid, i) => (
          <div className="item" key={i}>
            <video
              className="media"
              controls
              ref={(el) => (videoRefs.current[i] = el)}
            >
              <source src={`./videos/${vid}`} />
            </video>
          </div>
        ))}
      />
      <p className="index">{`${mainIndex + 1}/${videos.length}`}</p>

      <div className="btn-prev" onClick={slidePrev}>
        &lang;
      </div>
      <div className="btn-next" onClick={slideNext}>
        &rang;
      </div>
    </div>
  );
}
