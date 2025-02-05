"use client";

import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation';
import { useContextFeatures } from '@/context/ContextFeatures';
import { ButtonBack, ContainerWrapper, HeaderBack } from './styles';
import Image from 'next/image';
import Link from "next/link";

const PostPage = () => {
  const { id } = useParams(); 
  const { posts, authors, featuresMedia } = useContextFeatures();
  const router = useRouter();

  const post = posts.find((p) => p.id.toString() === id); 

  if (!post) {
    return <p>Post não encontrado.</p>;
  }

  const formatDate = (date: string | undefined) => {
    if (!date) {
      return 'Data não disponível';
    }

    const dataObj = new Date(date);
    return `${dataObj.getDate()} de ${dataObj.toLocaleString('pt-BR', { month: 'short' })} ${dataObj.getFullYear()}`;
  };

  return (
    <>
      <HeaderBack/>
      <ContainerWrapper>  
        <div className='container'>
          <div className='content'>
            <ButtonBack onClick={() => router.back()}>
              <Image src="/icons/icon-arrow-back.svg" alt="back home" width={12} height={12} />
              Voltar
            </ButtonBack>
            <div className="navigation">
              <Link href="/">
                <Image src="/icons/home.svg" alt="home" width={14} height={14} />
              </Link>
              <span>/</span>
              <Link href="/post">post</Link>
              <span>/</span>
              <span className="titleElips">{post.title?.rendered}</span>
            </div>
          </div>

          <div className="title">
            <button className="btn">Desenvolvimento</button>
            <h1>{post.title?.rendered}</h1>
            <div className="author">
              {authors.get(post.id)?.avatar_urls?.[48] && (
                <Image
                  src={authors.get(post.id)?.avatar_urls?.[48] ?? ""}
                  alt="Author Avatar"
                  width={29}
                  height={29}
                />
              )}
              <span>
                Por <span className="name">{authors.get(post.id)?.name}</span>
                <span className="dot" />
                <span>{formatDate(post.date)}</span>
              </span>
            </div>
          </div>

          <div className="image">
            {featuresMedia.get(post.id)?.source_url && (
              <Image
                src={featuresMedia.get(post.id)!.source_url ?? ''}
                alt={post.title?.rendered || 'Imagem do post'}
                width={1008}
                height={434}
                priority
              />
            )}
          </div>

          <div className="description">
            <span dangerouslySetInnerHTML={{ __html:post.excerpt?.rendered ?? ""}}/>
            <div>
              <h3>{post.title?.rendered}</h3>
              <span className="question" dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered ?? "" }} />
            </div>
            <div>
              <h3>{post.title?.rendered}</h3>
              <span className="question" dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered ?? "" }} />
            </div>
            <div>
              <h3>{post.title?.rendered}</h3>
              <span className="question" dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered ?? "" }} />
              <span className="question" dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered ?? "" }} />
            </div>
            <div>
              <h3>{post.title?.rendered}</h3>
              <span className="question" dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered ?? "" }} />
            </div>
            <div className="image">
              {featuresMedia.get(post.id)?.source_url && (
                <Image
                  src={featuresMedia.get(post.id)!.source_url ?? ''}
                  alt={post.title?.rendered || 'Imagem do post'}
                  width={800}
                  height={284}
                />
              )}
            </div>
            <div>
              <h3>{post.title?.rendered}</h3>
              <span className="question" dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered ?? "" }} />
              <span className="question" dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered ?? "" }} />
            </div>
            <div>
              <h3>{post.title?.rendered}</h3>
              <span className="question" dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered ?? "" }} />
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default PostPage;
