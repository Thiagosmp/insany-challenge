import { useEffect, useState } from "react";
import { CarouselContainer, ImageTrack, Image, ContentNoticesCarousel, DotsContainer, Dot } from "./styles";
import { Author, FeaturedMedia, Post } from "@/types";
import { motion } from "framer-motion";

const images = [
  "/img/businessCarousel.png",
  "/img/businessCarousel.png",
  "/img/businessCarousel.png",
  "/img/businessCarousel.png",
  "/img/businessCarousel.png",
  "/img/businessCarousel.png",
];

type PostsCarousel = {
  posts: Post[];
  authors: Map<string, Author>;
  featuresMedia: Map<string, FeaturedMedia>;
};

const Carousel = ({ posts, authors, featuresMedia }: PostsCarousel) => {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

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

  const formatDate = (date: string | undefined) => {
    if (!date) {
      return 'Data não disponível';
    }

    return new Date(date)
      .toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })
      .replace(' de ', ' ')
      .replace(/^./, str => str.toUpperCase());
  };

  function removeHtmlTags(str = '') {
    return str.replace(/<[^>]*>/g, '');
  }

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
        {posts?.map((post, i) => (
          <div key={i}>
            {featuresMedia.has(post.id) && (
              <>
                <motion.img
                  src={featuresMedia.get(post.id)?.source_url}
                  alt="Features Media"
                  width={280}
                  height={340}
                  className="imgCarousel"
                  onMouseEnter={() => setZoomedImage(post.id)}
                  onMouseLeave={() => setZoomedImage(null)}
                  animate={{ scale: zoomedImage === post.id ? 1.5 : 1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                />
                <ContentNoticesCarousel>
                  <div className="notice">
                    <span className="bold">{featuresMedia.get(post.id)?.type}</span>
                    <span>{formatDate(post.date)}</span>
                  </div>

                  {authors.has(post.id) && (
                    <>
                      <span className="descriptionNotice">{removeHtmlTags(post.title?.rendered)}</span>
                      <div className="autorData">
                        <div className="avatar">
                          <Image
                            src={authors.get(post.id)?.avatar_urls?.[48]}
                            alt="Author Avatar"
                            width={48}
                            height={48}
                          />
                        </div>
                        
                        <div>
                          <span className="nameAutor">{authors.get(post.id)?.name}</span>
                          <span>{authors.get(post.id)?.slug}</span>
                        </div>
                      </div>
                    </>
                  )}
                </ContentNoticesCarousel>
              </>
            )}
          </div>
        ))}
      </ImageTrack>

      <DotsContainer>
        {images.map((_, i) => (
          <Dot key={i} $active={i === index} onClick={() => goToImage(i)} />
        ))}
      </DotsContainer>

    </CarouselContainer>
  );
}

export default Carousel;