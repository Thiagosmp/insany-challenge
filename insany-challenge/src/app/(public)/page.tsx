'use client'

import Footer from "@/components/Footer/Footer";
import { ContentHeroWrapper, ContentMainWrapper } from "./styles";
import Image from "next/image";
import FormRegister from "@/components/FormRegister/FormRegister";

export default function Home() {
  return (
    <>
      <ContentMainWrapper>
        <ContentHeroWrapper>
          <span className="star">
            <Image src="/icons/icon-star.svg" alt="star" width={16} height={16} />
            Tecnologia disruptiva
          </span>
          <h1>Conta digital que não é só uma conta digital.</h1>
          <span>Pellentesque rutrum turpis non est turpis pretium morbi urna.</span>
          <span className="division"></span>
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
      <Footer />
    </>
  );
}