import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'

export default function Blog () {
  return (
    <Container>
      <Meta pageTitle='blog' />
    <Hero
      title='blog'
      subtitle='recent Posts'
    />
    <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)

  return {
    props: {
      posts: posts,
    },
  }
}
