import { getPostBySlug, getAllSlugs } from 'lib/api'
import { extractText } from 'lib/extract-test'
import { prevNextPost } from 'lib/prev/next-post'
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/pust-header'
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import ConvertBody from 'components/converto-body'
import PostCategorise from 'components/post-categories'
import Pagination from 'components/pagination'
import Image from 'next/image'
import { eyecatchLocal } from 'lib/constants'

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
    <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
  description,
  prevPost,
  nextPost,
}) {
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish ={publish} />
        
         <figure>
          <Image
            key={eyecatch.url}
            src={eyecatch.url}
            alt=''
            layout='responsive'
            width={eyecatch.width}
            height={eyecatch.height}
          sizes='(min-width: 1152px) 1152px, 100vw'
          priority
          placeholder='blur'
          blurDateURL={eyecatch.blurDateURL}
          placeholder='blur'
          blurDataURL={eyecatch.blurDataURL}
        />
      </figure>
        
          <TwoColumn>
          <TwoColumnMain>
            <PostBody>
               <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      <div> {prevPost.title} {prevPost.slug}</div>
      <div> {nextPost.title} {nextPost.slug}</div>
         <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs() 
  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`), 
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug 

  const post = await getPostBySlug(slug)

  const description = extractText(post.content)
   
  const eyecatch = post.eyecatch ?? eyecatchLocal
  eyecatch.blurDateURL = base64

  const allSlugs = await getAllSlugs()
  const [prevPost, nextPost] = prevNextPost(alSlugs, slug)
   return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch ,
      eyecatch: eyecatch,
      categories: post.categories,
      
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  }
}
