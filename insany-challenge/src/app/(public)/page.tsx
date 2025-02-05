'use client'

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Advantages, AdvantagesBanner, AdvantagesExclusive, ContentContactButton, ContentHeroWrapper, ContentMainWrapper, Division, QuestionsFrequently, SectionWrapperContactButton, SectionWrapperQuestion } from "./styles";
import Image from "next/image";
import FormRegister from "@/components/FormRegister/FormRegister";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import Button from "@/components/Button/Button";
import { ContentFeatures, ContentNotices, Dot, DotsContainer } from "@/components/SectionWrapper/styles";
import Features from "@/components/Features/Features";
import { theme } from "@/styles/theme";
import Carousel from "@/components/Carousel/Carousel";
import QuestionFrequentExpand from "@/components/QuestionFrequentExpand/QuestionFrequentExpand";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useContextFeatures } from "@/context/ContextFeatures";

const images = [
  "/img/modelPoster.png",
  "/img/tes.png",
  "/img/modelPoster.png",
];

export default function Home() {
  const { posts, authors, featuresMedia } = useContextFeatures();
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Header />

      <ContentMainWrapper>
        <ContentHeroWrapper>
          <span className="star">
            <Image src="/icons/icon-star.svg" alt="star" width={16} height={16} />
            Tecnologia disruptiva
          </span>
          <h1>Conta digital que não é só uma conta digital.</h1>
          <span>Pellentesque rutrum turpis non est turpis pretium morbi urna.</span>
          <div className="alignDivision">
            <span className="division"></span>
          </div>
          <div className="bancDetails">
            <div>
              <h2>120</h2>
              <span>Projeto realizado 2021</span>
            </div>
            <div>
              <h2>12</h2>
              <span>Escritórios no Brasil</span>
            </div>
            <div>
              <h2>15mi</h2>
              <span>Faturamento 2021</span>
            </div>
          </div>
        </ContentHeroWrapper>
        <FormRegister />
      </ContentMainWrapper>

      <SectionWrapper>
        <div className="contentSolutionCustomized">
          <div className="title">
            <h2>Conheça nossas solução customizadas</h2>
            <span>
              Suscipit pellentesque praesent auctor molestie massa nunc vitae felis eget est ut gravida in maecenas. Tempus in in in congue proin.
            </span>
          </div>
          <div className="contentCheck">
            <div>
              <Image src="/icons/icon-check.svg" alt="check" width={24} height={24} />
              <span>Sagittis sed cursus sed malesuada ultrices </span>
            </div>
            <div>
              <Image src="/icons/icon-check.svg" alt="check" width={24} height={24} />
              <span>Sagittis sed cursus sed malesuada ultrices </span>
            </div>
            <div>
              <Image src="/icons/icon-check.svg" alt="check" width={24} height={24} />
              <span>Sagittis sed cursus sed malesuada ultrices </span>
            </div>
          </div>
          <div className="contentButton">
            <Button>Quero ser cliente</Button>
          </div>
          <div className="contentContact">
            <Image src="/icons/icon-contact.svg" alt="contact" width={13} height={20} />
            <span>Fale conosco</span>
          </div>
        </div>

        <div className="contentPriceCustomized">
          <div className="contentImage">
            <div className="dots">
              <DotsContainer>
                {images.map((_, i) => (
                  <Dot
                    key={i}
                    $active={i === currentIndex}
                    onClick={() => goToImage(i)}
                  />
                ))}
              </DotsContainer>
            </div>

            <div className="image">
              {images.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{
                    opacity: currentIndex === i ? 1 : 0, 
                    scale: currentIndex === i ? 1 : 0.9, 
                  }}
                  transition={{
                    duration: 0.6, 
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute", 
                    display: currentIndex === i ? "block" : "none", 
                  }}
                >
                  <motion.img
                    src={src}
                    alt={`Image ${i + 1}`}
                    width={434}
                    height={544}
                    whileHover={{
                      scale: 1.1, 
                    }}
                    transition={{ duration: 0.4 }} 
                  />
                </motion.div>
              ))}
              <Image src="/icons/icon-arrow-duplicate-top.svg" alt="arrow" width={50} height={150} className="arrow" />
            </div>
          </div>

          <div className="contentPrice">
            <div className="price">
              <div>
                <span className="bold">R$ 999,90</span>
                <span>Balançaço</span>
              </div>
              <Image src="/icons/icon-bar.svg" alt="bar" width={20} height={18} />
            </div>
            <div className="icons">
              <div className="icon01">
                <Image src="/img/avatar01.png" alt="iconFace" width={35} height={35} />
              </div>
              <div className="icon02">
                <Image src="/img/avatar02.png" alt="iconFace" width={35} height={35} />
              </div>
              <div className="icon03">
                <Image src="/img/avatar03.png" alt="iconFace" width={35} height={35} />
              </div>
              <div className="icon04">
                <Image src="/img/avatar04.png" alt="iconFace" width={35} height={35} />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <ContentFeatures>
          <Features icon="/icons/icon-complex.svg">
            <h3>Fim da complexidade</h3>
            <span>Amet, leo turpis facilisi nam fusce nunc molestie. Orci, nibh auctor lacus eleifend tincidunt sceleris</span>
          </Features>
          <Features icon="/icons/icon-eletric.svg">
            <h3>Sem burocracia</h3>
            <span>Eu arcu arcu vitae ipsum sed. Purus volutpat laoreet sed nisi, imperdiet sit aliquam viverra.</span>
          </Features>
          <Features icon="/icons/icon-click.svg">
            <h3>Tudo digital</h3>
            <span>Dictum mi risus auctor donec et amet duis tincidunt gravida. Tellus amet, porttitor quis mauris.</span>
          </Features>
          <Features icon="/icons/icon-evolution.svg">
            <h3>Evolução constante</h3>
            <span>Commodo egestas dolor, sapien nam posuere at. Ultrices dictum cras vel gravida gravida vehicula </span>
          </Features>
        </ContentFeatures>
      </SectionWrapper>

      <SectionWrapper background={theme.colors.neutralGray01}>
        <ContentNotices>
          <div className="title">
            <span >Nosso Blog</span>
            <h2>Notícias do mundo da tecnologia</h2>
          </div>
          <Carousel posts={posts} authors={authors} featuresMedia={featuresMedia}/>
        </ContentNotices>
      </SectionWrapper>

      <Advantages>
        <AdvantagesExclusive>
          <div>
            <h2>03 vantagens exclusivas da SmartMoney</h2>
            <div className="specificationAdvantages">
              <div className="contentProgress">
                <h3>Tecnologia de ponta</h3>
                <p>Nullam neque, rutrum et enim diam, ligula fringilla aliquet tincidunt ullamcorper elit</p>
                <div className="progressBar">
                  <span />
                </div>
              </div>
            </div>

            <div className="advantages">
              <div>
                <h3>Entrega eficiente</h3>
                <span>Posuere sollicitudin semper in posuere habitant. Quis luctus et egestas viverra pellentesque.</span>
              </div>

              <div>
                <h3>Suporte especializado</h3>
                <span>In massa, erat felis massa tincidunt. Aliquam, iaculis rutrum in mauris, integer.</span>
              </div>
            </div>
          </div>
        </AdvantagesExclusive>

        <AdvantagesBanner>
          <div className="contentBanner">
            <div className="contentButton">
              <Button>Quero ser cliente</Button>
            </div>
            <div className="alignImages">
              <div className="model">
                <motion.img
                  src="/img/modelExclusive.png"
                  alt="model advantages exclusive"
                  width={282}
                  height={402}
                  className="imgCarousel"
                  transition={{ duration: 0.8, ease: "backOut" }}
                  whileHover={{
                    scale: 1.25, 
                  }}
                />
                <div>
                  <Image src="/icons/icon-star.svg" alt="star" width={16} height={16}/>
                  <span>Tecnologia disruptiva</span>
                </div>  
                <Image src="/icons/icon-arrow-long.svg" alt="arrow" width={149} height={55} className="arrowUp" />  
              </div>
              <div className="graph">
                <Image src="/icons/icon-arrow-long.svg" alt="arrow" width={149} height={55} 
                className="arrowDown" />  
                <motion.img
                  src="/img/graphProcess.png"
                  alt="graph advantages exclusive"
                  width={281}
                  height={427}
                  className="imgCarousel"
                  transition={{ duration: 0.8, ease: "backOut" }}
                  whileHover={{
                    scale: 1.25,
                  }}
                />
              </div>
            </div>
          </div>
        </AdvantagesBanner>
      </Advantages>

      <SectionWrapperContactButton>
        <ContentContactButton>
          <div>
            <Image src="/icons/icon-dolar.svg" alt="icon dolar" width={64} height={64} />
            <h2>Faça parte do mercado digital financeiro!</h2>
            <span>Pellentesque urna commodo, elementum, est nullam.</span>
            <Button>Quero ser cliente</Button>
          </div>
          <span className="division"/>
          <div className="buttonWhite">
            <Image src="/icons/icon-msg.svg" alt="icon message" width={64} height={64} />
            <h2>Um time de suporte incrível para lhe atender</h2>
            <span>Pellentesque urna commodo, elementum, est nullam.</span>
            <Button>Fale conosco</Button>
          </div>
        </ContentContactButton>
      </SectionWrapperContactButton>

      <Division />
      
      <SectionWrapperQuestion>
        <QuestionsFrequently>
          <div className="contentQuestions">
            <div className="title">
              <p>Tire suas dúvidas</p>
              <h2>Pergunta mais frequentes</h2>
              <span>Separamos algumas perguntas e respostas que podem te ajudar na sua decisão</span>
            </div>
            <div className="alignQuestions">
              <div className="contactQuestions">
                <Image src="/icons/doubts.svg" alt="icon doubts" width={32} height={32} />
                <div>
                  <h3>Dúvidas?</h3>
                  <span>Envie uma mensagem para nosso time</span>
                </div>
              </div>
              <div className="contactQuestions">
                <Image src="/icons/be-part.svg" alt="icon be part" width={32} height={32} />
                <div>
                  <h3>Faça parte</h3>
                  <span>Cadastre-se para transformar sua empresa</span>
                </div>
              </div>
              <div className="contactQuestions">
                <Image src="/icons/whats.svg" alt="icon whatsapp" width={32} height={32} />
                <div>
                  <h3>Chama no zap</h3>
                  <span>Fale com conosso comercial</span>
                </div>
              </div>
            </div>
          </div>
        </QuestionsFrequently>
        <QuestionFrequentExpand/>
      </SectionWrapperQuestion>

      <Footer /> 
    </>
  );
}