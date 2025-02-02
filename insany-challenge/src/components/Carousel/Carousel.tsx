import { useEffect, useState } from "react";
import { CarouselContainer, ImageTrack, Image, ContentNoticesCarousel, DotsContainer, Dot } from "./styles";

const images = [
  "/img/businessCarousel.png",
  "/img/businessCarousel.png",
  "/img/businessCarousel.png",
  "/img/businessCarousel.png",
  "/img/businessCarousel.png",
  "/img/businessCarousel.png",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const slideLeft = () => {
    setAutoPlay(false);
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const slideRight = () => {
    setAutoPlay(false);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goToImage = ( i: number ) => {
    setAutoPlay(false);
    setIndex(i);
  };

  return (
    <CarouselContainer>
      <div className="alignButtons">
        <button className="leftButton" onClick={slideLeft}>
          <Image src="/icons/arrow-left.svg" alt="arrow left" width={20} height={20} />
        </button>
        <button className="rightButton" onClick={slideRight}>
          <Image src="/icons/arrow-left.svg" alt="arrow left" width={20} height={20} />
        </button>
      </div>

      <ImageTrack
        animate={{ x: -index * 300 }}
        transition={{ duration: 1.5, ease: "backIn" }}
      >
        {images.map((src, i) => (
          <div key={i}>
            <Image src={src} width={280} height={340} alt="model" className="imgCarousel" />
            <ContentNoticesCarousel>
              <div className="notice">
                <span className="bold">Business</span>
                <span>Outubro 2021</span>
              </div>
              <span className="descriptionNotice">Sollicitudin a sagittis, risus nisl, fermentum, tincidunt dolor</span>
              <div className="autorData">
                <Image src="/img/avatar01.png" alt="icon perfil" width={48} height={48} />
                <div>
                  <span className="nameAutor">Savannah Nguyen</span>
                  <span>Autor</span>
                </div>
              </div>
            </ContentNoticesCarousel>
          </div>
        ))}
      </ImageTrack>

      <DotsContainer>
        {images.map((_, i) => (
          <Dot key={i} active={i === index} onClick={() => goToImage(i)} />
        ))}
      </DotsContainer>

    </CarouselContainer>
  );
}
